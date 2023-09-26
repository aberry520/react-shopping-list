import { useState } from 'react'

export function Form() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addItem = ()=>{
    if (value !== "") {
      setList([...list, value]);
      setValue("");
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const clearList = ()=> {
    setList([]);
  }

  return (
    <>
      <h1>Shopping List</h1>
      <form>
        <input type='text' placeholder='add item' value={value} onChange={(event) => { handleChange(event) }} />
        <button type='button' onClick={addItem}>Add Item</button>
        <button type='button' onClick={clearList}>Clear</button>
      </form>
      <ul>
        {list.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </>
  )
}
