ACLARACIONES - Challenge Frontend React

1. ESTADO GLOBAL
Se utilizó React Context + useReducer para manejar el estado global de frases y el texto de búsqueda.
Esta solución permite escalar la app sin necesidad de Redux.

2. VALIDACIONES
Se implementó una validación para evitar agregar frases vacías.
Al intentar hacerlo, se muestra un mensaje de error que desaparece al volver a escribir.

3. RENDER PROP
Para demostrar el uso de React avanzado, se aplicó el patrón Render Prop mediante el componente FilteredPhrases.
Este componente maneja la lógica de filtrado y le pasa el resultado al grid como función `children`.

4. TESTING
Se realizaron pruebas con Jest + React Testing Library.
Se testean los siguientes casos:
- Agregado de una frase y visualización en el grid.
- Validación de ingreso vacío con mensaje de error.
- Eliminación de una frase del grid.
- Carga inicial de frases desde localStorage.

5. OPTIMIZACIONES
- `React.memo` en PhraseCard para evitar renders innecesarios.
- `useMemo` para filtrar las frases.
- `useCallback` en funciones del InputBar para evitar recreaciones innecesarias.

6. PERSISTENCIA CON LOCALSTORAGE
- Al iniciar la app, se cargan frases guardadas previamente desde localStorage.
- Cada vez que se agregan o eliminan frases, se actualiza localStorage automáticamente.

7. SUPUESTOS
- No se incluyó debounce en la búsqueda para simplificar la lógica.
- No se usó Redux ya que Context + Reducer era suficiente.
- No se utilizaron estilos avanzados (CSS o librerías) para mantener el foco en la lógica.
- La app es 100% frontend, sin conexión a backend.

8. TECNOLOGÍAS UTILIZADAS
- React 19 + Vite
- TypeScript
- Context API + Hooks avanzados
- Jest + React Testing Library
- localStorage

