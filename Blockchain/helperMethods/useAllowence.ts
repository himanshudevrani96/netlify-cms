// useAllowence.ts
import { useState } from "react";

export const useAllowence = (): [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] => {
  const [allowenceValue, setAllowence] = useState<number>();

  return [allowenceValue, setAllowence];
};
