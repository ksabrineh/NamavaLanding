"use client";
import { useEffect, useState } from "react";

const useInputValidation = (initialValue, regexPattern) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(regexPattern.test(initialValue));
  }, [initialValue]);

  return { isValid };
};

export default useInputValidation;
