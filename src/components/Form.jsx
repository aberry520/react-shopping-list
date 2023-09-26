import { useState } from 'react'

export function Form() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  function addItem() {
    if (value !== "") {
      setList([...list, value]);
      setValue("");
    }
  };
  function handleChange(event) {
    setValue(event.target.value);
  };
  console.log(list);
  return (
    <>
      <form>
        <input type='text' placeholder='add item' value={value} onChange={(event) => { handleChange(event) }} />
        <button type='button' onClick={addItem}>Add Item</button>
      </form>
      <ul>
        {list.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </>
  )
}
