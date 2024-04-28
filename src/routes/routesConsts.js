import { Portfolio } from '../components/main/portfolio';
import { About } from '../components/main/about';
import { Contact } from '../components/main/contact';
import { NotFound } from '../components/main/notFound';

//Maintain ID's
const menuRoutes = [
    {
        id: 1,
        name: 'Gallery',
        path: '/',
        Element: Portfolio
    },
    {
        id: 2,
        name: 'About',
        path: '/about',
        Element: About
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact',
        Element: Contact
    },
];

const notFoundRoute = {
  id: 0,
  name: 'Not Found',
  path: '*',
  Element: NotFound
};

const generalRoutes = [
  notFoundRoute,
];

const protectedRoutes = [
];

const initialDocumentTitle = `Equidel Art`;

export {
    menuRoutes,
    notFoundRoute,
    generalRoutes,
    protectedRoutes,
    initialDocumentTitle,
};