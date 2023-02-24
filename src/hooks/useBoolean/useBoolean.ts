import { useState } from 'react';

export const useBoolean = (initial = false) => {
  const [val, setVal] = useState<boolean>(initial);

  return { val, setVal };
};
