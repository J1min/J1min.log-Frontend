import React from "react";

const useDidMountEffect = (func: any, deps: any) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, [func, deps]);
};

export default useDidMountEffect;
