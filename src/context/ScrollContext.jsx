import { createContext, useContext } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export default ScrollContext;
