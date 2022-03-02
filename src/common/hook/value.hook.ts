import { useState, useEffect } from "react";

/**
 * React Hook to facilitate maintaining an internal state and update on prop change.
 * @param value initial value
 * @returns value and mutator
 */
export function useValue<T>(value: T): [T, (value: T) => void] {
  const [internal, setInternal] = useState<T>(value);

  useEffect(() => {
    if (value !== internal) {
      setInternal(value);
    }
  }, [value]);

  return [internal, setInternal];
}
