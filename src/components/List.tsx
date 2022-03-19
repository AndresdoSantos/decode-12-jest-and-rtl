import { useState } from 'react';

interface ListProps {
  initialItems: string[];
}

export function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems);

  const addToList = () => {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 1000);
  };

  const removeFromList = (value: string) => {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== value));
    }, 1000);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        placeholder="Novo item"
      />

      <button onClick={addToList}>Add</button>

      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
