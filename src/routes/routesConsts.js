import { Portfolio } from '../components/main/portfolio';
import { PitchDeck } from '../components/main/pitchDeck';
import { Donate } from '../components/main/donate';
import { Biography } from '../components/main/biography';
import { NotFound } from '../components/main/notFound';

//Maintain ID's
const menuRoutes = [
    {
        id: 1,
        name: 'Works',
        path: '/',
        icon: 'slideshow',
        Element: Portfolio
    },
    {
        id: 2,
        name: 'Pitch',
        path: '/pitch-deck',
        icon: 'queue_play_next',
        Element: PitchDeck
    },
    {
        id: 3,
        name: 'Donate',
        path: '/donate',
        icon: 'assist_walker',
        Element: Donate
    },
    {
        id: 4,
        name: 'About',
        path: '/biography',
        icon: 'person',
        Element: Biography
    },
];

const generalRoutes = [
    {
        id: 5,
        name: 'Not Found',
        path: '*',
        Element: NotFound
    }
];

const protectedRoutes = [
];

const initialDocumentTitle = `App Boilerplate`;

export {
    menuRoutes,
    generalRoutes,
    protectedRoutes,
    initialDocumentTitle
};