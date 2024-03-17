import { useEffect, useState } from "react";

export default function useDebounce({ delay, value }) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [forceFetch, setForceFetch] = useState(() => {});

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    setForceFetch(() => {
      return () => {
        clearTimeout(timer);
        setDebouncedValue(value);
      };
    });

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [debouncedValue, forceFetch];
}
