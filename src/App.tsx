import { PropsWithChildren } from "react";
import { Counter } from "./Counter";
import { CounterProvider } from "./CounterProvider";

function Title({ children }: PropsWithChildren) {
  return <h1>{children}</h1>;
}

function App() {
  return (
    <div>
      <CounterProvider>
        <Counter title={<em>Bonjour</em>} titleTag="h1">
          <p>Compteur</p>
        </Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
