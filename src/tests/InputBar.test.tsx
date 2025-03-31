import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PhraseProvider } from '../context/PhraseContext';
import InputBar from '../components/InputBar';
import PhraseGrid from '../components/PhraseGrid';

describe('Gestor de Frases', () => {
  it('agrega una frase y la muestra en el grid', () => {
    render(
      <PhraseProvider>
        <InputBar />
        <PhraseGrid />
      </PhraseProvider>
    );

    const input = screen.getByPlaceholderText('Nueva frase');
    const addButton = screen.getByText('Agregar');

    fireEvent.change(input, { target: { value: 'Hola mundo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Hola mundo')).toBeInTheDocument();
  });

  it('muestra un mensaje de error si la frase está vacía', () => {
    render(
      <PhraseProvider>
        <InputBar />
      </PhraseProvider>
    );

    const addButton = screen.getByText('Agregar');
    fireEvent.click(addButton);

    expect(screen.getByText('La frase no puede estar vacía.')).toBeInTheDocument();
  });

  it('elimina una frase del grid', () => {
    render(
      <PhraseProvider>
        <InputBar />
        <PhraseGrid />
      </PhraseProvider>
    );
  
    const input = screen.getByPlaceholderText('Nueva frase');
    const addButton = screen.getByText('Agregar');
  
    fireEvent.change(input, { target: { value: 'Frase a eliminar' } });
    fireEvent.click(addButton);
  
    expect(screen.getByText('Frase a eliminar')).toBeInTheDocument();
  
    const deleteButtons = screen.getAllByText('Eliminar');
    fireEvent.click(deleteButtons[deleteButtons.length - 1]);
 
    expect(screen.queryByText('Frase a eliminar')).not.toBeInTheDocument();
  });

  it('carga frases desde localStorage al iniciar', () => {

    localStorage.clear();
  
    const fraseMock = [{ id: '1', text: 'Frase persistida' }];
    localStorage.setItem('phrases', JSON.stringify(fraseMock));
  
    render(
      <PhraseProvider>
        <PhraseGrid />
      </PhraseProvider>
    );
  
    expect(screen.getByText('Frase persistida')).toBeInTheDocument();
  });
});
