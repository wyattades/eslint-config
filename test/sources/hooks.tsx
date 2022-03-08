import { useEffect, useState } from "react";

export const Comp: React.FC<{ initFoo: number }> = ({ initFoo }) => {
  const [foo, _setFoo] = useState(initFoo);

  useEffect(() => {
    console.log(foo);
  }, [foo]);

  return <>{foo}</>;
};
