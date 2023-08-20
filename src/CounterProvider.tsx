import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type ContextProps = {
  n: number;
  increment: () => void;
};

const CounterContext = createContext<null | ContextProps>(null);

type Props = PropsWithChildren<{
  start?: number;
}>;

export const CounterProvider = ({ start = 0, children }: Props) => {
  const [n, setN] = useState(start);
  const increment = useCallback(() => setN((n) => n + 1), []);
  return (
    <CounterContext.Provider value={{ n, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const value = useContext(CounterContext);
  if (value === null) {
    throw new Error("CounterProvider is missing");
  }
  return value;
};
