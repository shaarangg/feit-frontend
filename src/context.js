import React, { useContext, useRef, useState } from "react";
const ContextAPI = React.createContext();
export function AppProvider({ children }) {
    return <ContextAPI.Provider>{children}</ContextAPI.Provider>;
}
export function GlobalContext() {
    return useContext(ContextAPI);
}
