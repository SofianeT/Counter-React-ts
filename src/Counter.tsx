import {
  ComponentType,
  PropsWithChildren,
  ReactNode,
  forwardRef,
  useState,
} from "react";
import { useCounter } from "./CounterProvider";

type Props = PropsWithChildren<{
  start?: number;
  title?: ReactNode;
  titleTag?: keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren>;
}>;

export const Counter = forwardRef<HTMLButtonElement, Props>(
  (
    { start = 0, children, title = "compteur", titleTag: Title = "h1" },
    ref
  ) => {
    const { n, increment } = useCounter();
    return (
      <div>
        <Title>{title}</Title>
        {children}
        <p>Numéro : {n}</p>
        <button ref={ref} onClick={increment}>
          +
        </button>
      </div>
    );
  }
);

Counter.displayName = "Counter";
