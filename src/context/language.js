import React, { createContext, useState } from "react";

// Kontekstni yaratish
export const TogglerLang = createContext();

// Kontekstni ta'minlash komponentasi
export const UserProvider = ({ children }) => {
    const [isLang, setIsLang] = useState("uz");

    return (
        <TogglerLang.Provider value={{ isLang, setIsLang }}>
            {children}
        </TogglerLang.Provider>
    );
};