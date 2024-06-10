import React, { useReducer } from 'react';

function useLocalStorage(itemName: any, initialValue: any) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const {
    sincronizedItem,
    error,
    loading,
    item,
  } = state;

  const onError = (error: any) => dispatch({
    type: actionTypes.error,
    payload: error
  });

  const onSuccess = (item: any) => dispatch({
    type: actionTypes.success,
    payload: item
  });

  const onSave = (item: any) => dispatch({
    type: actionTypes.save,
    payload: item
  });

  const onSincronize = () => dispatch({
    type: actionTypes.sincronize,
  });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem: any) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);

      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  // No se elimina la funcion sincronizeItem porque en otros componentes se esta usando debido a que lo estamos retornando
  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue }: any) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state: any, payload: any) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  }
});

const reducer = (state: any, action: any) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
