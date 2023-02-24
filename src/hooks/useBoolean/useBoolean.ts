import { useCallback, useState } from 'react';

export const useBoolean = (initial = false) => {
  const [bool, setBool] = useState<boolean>(initial);

  const handleTrue = useCallback(() => {
    setBool(true);
  }, []);

  const handleFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggleBool = useCallback(() => {
    setBool((val) => !val);
  }, []);

  return { bool, setBool, handleTrue, handleFalse, toggleBool };
};
