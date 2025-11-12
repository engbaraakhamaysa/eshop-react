import { createContext, useEffect, useState } from "react";

export const WindowSize = createContext(null);

export default function WindowContext({ children }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function setWindowWidht() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", setWindowWidht);
    //CleanUp Function
    return () => {
      window.removeEventListener("resize", setWindowWidht);
    };
  }, []);

  return (
    <WindowSize.Provider value={{ windowSize, setWindowSize }}>
      {children}
    </WindowSize.Provider>
  );
}
