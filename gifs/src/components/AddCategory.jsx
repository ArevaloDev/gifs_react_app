import { useState } from "react";

export const AddCategory = ({onAddcategory}) => {
    const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const input = inputValue.trim();
    if(input.length <= 1) return;
    onAddcategory(input);
    setInputValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input 
      type="text"
      placeholder="Buscar Gif"
      value={inputValue}
      onChange={onInputChange} />
    </form>
  );
};
