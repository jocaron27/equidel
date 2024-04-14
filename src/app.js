import React, { useContext, useEffect } from 'react';
import { MainRoutes } from './routes';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { DataContext } from './context';
import "@fontsource/crimson-text";
import "@fontsource/abel";
import "@fontsource/playfair-display-sc";
import "@fontsource/cormorant-garamond";
import "@fontsource/abel";
import 'material-icons/iconfont/material-icons.css';
import { Box } from './components/styled';

function App() {
    const { fetchData } = useContext(DataContext);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box>
            <Header />
            <MainRoutes />
            <Footer />
        </Box>
    );
};

export default App;