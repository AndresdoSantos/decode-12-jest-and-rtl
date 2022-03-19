import { useState } from 'react';

function App() {
  const [list, setList] = useState(['Diego', 'Rodz', 'Mayk']);

  const addToList = () => {
    setList((state) => [...state, 'Novo']);
  };

  return (
    <>
      <button onClick={addToList}>Add</button>

      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
