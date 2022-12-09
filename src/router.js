import HomeComp from "./components/HomeComp";
import BlogEntriesComp from "./components/BlogEntriesComp";
import AboutComp from "./components/AboutComp";
import BlogComp from "./components/BlogComp";
import BlogByAlbum from "./components/BlogByAlbum";

const routes = [
    {
        path: '/',
        component: HomeComp
    },
    {
        path: '/blogs',
        component: BlogEntriesComp
    },
    {
        path: '/about-me',
        component: AboutComp
    },
    {
        path: '/blog/:postId',
        component: BlogComp
    },
    {
        path: '/blogs/Album/:albumId',
        component: BlogByAlbum
    }
];

export default routes;