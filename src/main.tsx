import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { PhraseProvider } from './context/PhraseContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhraseProvider>
      <App />
    </PhraseProvider>
  </StrictMode>,
)
