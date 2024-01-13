import { createContext, useCallback, useContext, useState } from "react";
import { useThemeFonts, fonts } from "./fonts";
import { themeColors } from "./colors";
type ThemeContextData = {
    colors: typeof themeColors
    fonts: typeof fonts
};

export type ThemeContextState = ThemeContextData & {
};

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

export function ThemeProvider({ children }: React.PropsWithChildren) {
    useThemeFonts()

    const themeContextValue: ThemeContextState = {
        colors: themeColors,
        fonts,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used within a ThemeContext provider"
        );
    }
    return context;
};
