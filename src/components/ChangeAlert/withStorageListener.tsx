import { useState } from 'react';

const withStorageListener = (WrappedComponent: any) => {
  return function WrapperComponentWithStorageListener(props: any) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log("Hubocambios en TODOSV1");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  }
};

export { withStorageListener };
