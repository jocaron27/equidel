import React from 'react';
import { useData } from '../hooks';
import { DataContext } from './';

function AppContext({children}) {
    const data = useData();
    
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default AppContext;