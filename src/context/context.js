import React from 'react';
import { useData } from '../hooks';
import { DataContext } from './';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';
import { buildCustomTheme } from './contextUtils';

function AppContext({children}) {
    const data = useData();
    // Define props accessible to styled-components
    const customTheme = buildCustomTheme(theme);
    
    return (
        <ThemeProvider theme={customTheme}>
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>
        </ThemeProvider>
    );
};

export default AppContext;