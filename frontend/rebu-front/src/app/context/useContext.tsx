import {
  createContext,
  ReactNode,
  //   useContext,
  useState,
} from "react";

type GeneralContextData = {
  isLoading: boolean;
  setIsLoading: unknown;
};

type AuthProviderProps = {
  children: ReactNode;
};

const GeneralContext = createContext<Partial<GeneralContextData>>({});

function GeneralProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <GeneralContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export { GeneralProvider };

// export function useUser() {
//   const context = useContext(GeneralContext);
//   return context;
// }
