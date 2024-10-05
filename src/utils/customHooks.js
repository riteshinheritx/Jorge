import React from 'react'

export function customHooks() {
  return (
    <div>customHooks</div>
  )
}
 

export const useOnWindowResize = (callback) => {
  const listener = React.useRef(null);
  React.useEffect(() => {
    if (listener.current)
      window.removeEventListener("resize", listener.current);
    listener.current = window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", listener.current);
    };
  }, [callback]);
};