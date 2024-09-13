import HomeComp from "./components/HomeComp.vue";
import BlogEntriesComp from "./components/BlogEntriesComp.vue";
import AboutComp from "./components/AboutComp.vue";
import BlogComp from "./components/BlogComp.vue";
import BlogByAlbum from "./components/BlogByAlbum.vue";

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
    },
];

export default routes;