import { useEffect, useState } from "react";

export function useTest() {
  const [testState, setTestStae] = useState(false);

  console.log("i am at useTest func");

  useEffect(function () {
    console.log("i am in useEffect");
  }, []);

  return [testState];
}
