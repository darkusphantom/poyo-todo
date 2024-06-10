import React from 'react';

const TodoHeader = ({ children, loading }: any) => {

  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(
            child as any,
            { loading }
          ))
      }
    </header>
  )
}

export { TodoHeader };
