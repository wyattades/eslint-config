// eslint-warn: react-hooks/exhaustive-deps

import { useEffect, useState } from "react";

export const Comp = () => {
  const [foo, _setFoo] = useState(0);

  useEffect(() => {
    console.log(foo);
  }, []);
};
