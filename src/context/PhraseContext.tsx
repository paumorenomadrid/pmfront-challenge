// src/context/PhraseContext.tsx
import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';

// Tipos
export interface Phrase {
  id: string;
  text: string;
}

type State = {
  phrases: Phrase[];
  filter: string;
};

type Action =
  | { type: 'ADD_PHRASE'; payload: Phrase }
  | { type: 'REMOVE_PHRASE'; payload: string }
  | { type: 'SET_FILTER'; payload: string };

  const initialState: State = {
    phrases: JSON.parse(localStorage.getItem('phrases') || '[]'),
    filter: '',
  };

// Reducer
function phraseReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_PHRASE':
      return { ...state, phrases: [...state.phrases, action.payload] };
    case 'REMOVE_PHRASE':
      return {
        ...state,
        phrases: state.phrases.filter(p => p.id !== action.payload),
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

// Context
const PhraseContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Provider
export const PhraseProvider = ({ children }: { children: ReactNode }) => {
  const initializer = (): State => {
    return {
      phrases: JSON.parse(localStorage.getItem('phrases') || '[]'),
      filter: '',
    };
  };
  const [state, dispatch] = useReducer(phraseReducer, undefined, initializer);

  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(state.phrases));
  }, [state.phrases]);
  
  return (
    <PhraseContext.Provider value={{ state, dispatch }}>
      {children}
    </PhraseContext.Provider>
  );
};

// Hook personalizado
export const usePhrases = () => {
  const context = useContext(PhraseContext);
  if (!context) throw new Error('usePhrases debe usarse dentro de PhraseProvider');
  return context;
};
