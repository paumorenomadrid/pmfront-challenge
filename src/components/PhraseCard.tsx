import { usePhrases } from '../context/PhraseContext';
import { memo } from 'react';

interface PhraseCardProps {
  id: string;
  text: string;
}

const PhraseCard = ({ id, text }: PhraseCardProps) => {
  const { dispatch } = usePhrases();

  const handleDelete = () => {
    dispatch({ type: 'REMOVE_PHRASE', payload: id });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#f9f9f9' }}>
      <p>{text}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default memo(PhraseCard);
