import { useCallback, useState } from 'react';
import { usePhrases } from '../context/PhraseContext';
import { v4 as uuidv4 } from 'uuid';

const InputBar = () => {
  const { dispatch } = usePhrases();
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const handleAdd = useCallback(() => {
    if (!text.trim()) {
      setError('La frase no puede estar vacía.');
      return;
    }

    dispatch({ type: 'ADD_PHRASE', payload: { id: uuidv4(), text } });
    setText('');
    setError('');
  }, [text, dispatch]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    dispatch({ type: 'SET_FILTER', payload: value });
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Nueva frase"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (error) setError('');
        }}
      />
      <button onClick={handleAdd}>Agregar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={handleSearch}
        style={{ marginTop: '1rem', display: 'block' }}
      />
    </div>
  );
};

export default InputBar;
