/* eslint-disable i18next/no-literal-string */
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlcie";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">count: {counterValue}</h1>
      <Button
        data-testid="increment-btn"
        onClick={increment}
        theme={ButtonTheme.OUTLINE}
      >
        increment
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrement}
        theme={ButtonTheme.OUTLINE}
      >
        decrement
      </Button>
    </div>
  );
};
