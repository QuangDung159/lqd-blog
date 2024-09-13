import HomeComp from "./components/HomeComp.vue";
import BlogEntriesComp from "./components/BlogEntriesComp.vue";
import AboutComp from "./components/AboutComp.vue";
import BlogComp from "./components/BlogComp.vue";
import BlogByAlbum from "./components/BlogByAlbum.vue";
import WellKnow from "./components/WellKnow.vue";

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
    {
        path: '/.well-known/assetlinks.json',
        component: WellKnow
    }
];

export default routes;