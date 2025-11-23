import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; 
// Importar solo los estilos de Tailwind base para que el CSS funcione
import './index.css'; 

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No se pudo encontrar el elemento raíz para montar la aplicación.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* Solo monta el componente App */}
    <App /> 
  </React.StrictMode>
);
