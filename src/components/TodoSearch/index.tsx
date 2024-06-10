import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue, loading }: any) => {
  const onSearchValueChange = (event: any) => {
    console.log(event.target.value)
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Busca un POYO Todo"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
