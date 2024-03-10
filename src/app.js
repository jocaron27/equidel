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
import './theme/theme.css';

function App() {
    const { fetchData } = useContext(DataContext);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="app">
            <div className="inner-wrapper">
                <Header />
                
                <div className="main-wrapper">
                    <MainRoutes />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;