import React, { createContext, useContext, useState, useMemo, FC } from 'react';

// =======================================================
// 1. CONTEXTO
// =======================================================
// Definimos el tipo del valor del contexto (para TypeScript)
interface AppContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Creamos el Contexto, inicializado a null
const AppContext = createContext<AppContextType | null>(null);

/**
 * Hook personalizado para acceder al contexto de la aplicación.
 * Lanza un error si se llama fuera de un AppProvider.
 */
const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === null) {
    // Este es el punto de error que ya ha sido corregido en la estructura de App
    throw new Error('useAppContext debe usarse dentro de un AppProvider');
  }
  return context;
};

// =======================================================
// 2. PROVEEDOR DE CONTEXTO
// =======================================================
/**
 * Componente que envuelve la aplicación y proporciona el estado.
 */
const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  const contextValue = useMemo(() => ({
    count,
    increment,
    decrement,
    reset,
  }), [count]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// =======================================================
// 3. COMPONENTE DE CONTENIDO (CONSUMIDOR)
// =======================================================
/**
 * Este componente consume el contexto, por lo que DEBE ser hijo de AppProvider.
 */
const MainContent: FC = () => {
  // Ahora podemos usar el hook con seguridad
  const { count, increment, decrement, reset } = useAppContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl space-y-6 border border-indigo-200">
        
        <h1 className="text-3xl font-bold text-center text-indigo-700">
          Contador Global Mc Banda
        </h1>
        <p className="text-center text-gray-500">
          El estado se comparte usando React Context.
        </p>

        {/* Display del Contador */}
        <div className="text-center p-6 bg-indigo-50 rounded-xl border-4 border-indigo-200">
          <p className="text-6xl font-extrabold text-indigo-800 tabular-numeric">
            {count}
          </p>
        </div>

        {/* Controles */}
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-3">
            <button
              onClick={increment}
              className="flex-1 p-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Aumentar
            </button>
            <button
              onClick={decrement}
              className="flex-1 p-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition transform hover:scale-105"
            >
              Disminuir
            </button>
          </div>
          
          <button
            onClick={reset}
            className="w-full p-3 bg-gray-300 text-gray-800 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-400 transition"
          >
            Reiniciar a Cero
          </button>
        </div>
      </div>
    </div>
  );
};

// =======================================================
// 4. COMPONENTE RAÍZ (EXPORTADO)
// =======================================================
/**
 * Componente principal exportado. 
 * Su única responsabilidad es inicializar Tailwind y envolver el contenido.
 */
export default function App() {
  return (
    // La clave es que AppProvider envuelve a MainContent.
    <>
      <AppProvider>
        <MainContent />
      </AppProvider>
    </>
  );
}
