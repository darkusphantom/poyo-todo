import './TodosLoading.css'
import loader from '../../img/gif/rolling-cat-cat-rolling.gif'; // url: https://c.tenor.com/_G85yMqj3zQAAAAi/rolling-cat-cat-rolling.gif"

const TodosLoading = () => {
  return(
    <div className="loadingTodo-container">
      <img
        src={loader}
        alt="rolling-cat"
        width="100px"
        height="100px"
        loading="lazy"
      />
      <p className="loadingTodo-text">Cargando TODOs... (POYO...)</p>
    </div>
  );
};

export { TodosLoading };
