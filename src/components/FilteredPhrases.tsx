import { ReactNode, useMemo } from 'react';
import { usePhrases } from '../context/PhraseContext';
import { Phrase } from '../context/PhraseContext';

interface FilteredPhrasesProps {
  children: (phrases: Phrase[]) => ReactNode;
}

const FilteredPhrases = ({ children }: FilteredPhrasesProps) => {
  const { state } = usePhrases();
  const { phrases, filter } = state;

  const filtered = useMemo(() => {
    return phrases.filter((p) =>
      p.text.toLowerCase().includes(filter.toLowerCase())
    );
  }, [phrases, filter]);

  return <>{children(filtered)}</>;
};

export default FilteredPhrases;
