import { Gallery } from '../components/main/gallery';
import { Contact } from '../components/main/contact';
import { About } from '../components/main/about';
import { NotFound } from '../components/main/notFound';

//Maintain ID's
const menuRoutes = [
    {
        id: 1,
        name: 'Gallery',
        path: '/',
        icon: 'view_quilt',
        Element: Gallery
    },
    {
        id: 2,
        name: 'Contact',
        path: '/contact',
        icon: 'call',
        Element: Contact
    },
    {
        id: 3,
        name: 'About',
        path: '/about',
        icon: 'person',
        Element: About
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

const initialDocumentTitle = `Equidel Art`;

export {
    menuRoutes,
    generalRoutes,
    protectedRoutes,
    initialDocumentTitle
};