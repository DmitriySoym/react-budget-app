import { useState } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [isSaved, setIsSaved] = useState<boolean>(initialValue);

  const toggle = () => {
    setIsSaved((isSaved) => !isSaved);
  };

  return [isSaved, toggle];
};
