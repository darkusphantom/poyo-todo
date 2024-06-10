import './CreateTodoButton.css';

function CreateTodoButton(props: any) {
  const onClickButton = () => {
    props.setOpenModal((prevState: any) => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
    </button>
  );
}

export { CreateTodoButton };
