import { useEffect } from "react";

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      callback();
    }

    // on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
