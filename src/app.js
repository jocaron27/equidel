import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { getRouteByPathname } from './routes/routesUtils';

function App() {
    const { fetchData } = useContext(DataContext);
    const { pathname } = useLocation();
    const route = getRouteByPathname(pathname);
    const footerlessRoutes = ['Contact'];

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box>
            <Header />
            <MainRoutes />
            {!footerlessRoutes.includes(route.name) && <Footer />}
        </Box>
    );
};

export default App;