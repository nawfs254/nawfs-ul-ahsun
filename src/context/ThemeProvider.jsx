
export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ThemeProvider;