import PhraseCard from './PhraseCard';
import FilteredPhrases from './FilteredPhrases';

const PhraseGrid = () => {
  return (
    <FilteredPhrases>
      {(phrases) =>
        phrases.length === 0 ? (
          <p>No hay frases para mostrar.</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              marginTop: '2rem',
            }}
          >
            {phrases.map((phrase) => (
              <PhraseCard key={phrase.id} id={phrase.id} text={phrase.text} />
            ))}
          </div>
        )
      }
    </FilteredPhrases>
  );
};

export default PhraseGrid;
