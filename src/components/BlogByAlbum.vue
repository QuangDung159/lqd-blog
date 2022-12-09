<template>
    <div id="blog-entries">
        <div class="page-heading">
            <div class="container">
                <div class="heading-content">
                    <h1>{{ album.album_name }}</h1>
                    <div class="blog-post">
                        <div class="text-content">
                            <div class="simple-btn">
                                <router-link to="/blogs">Back to blog entries</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="blog-entries">
            <div class="container">
                <div class="col-md-9">
                    <div class="blog-posts">
                        <div class="row">
                            <div class="col-md-12" v-for="(post, key) in listPost" :key="key">
                                <div class="blog-post">
                                    <img :src="post.post_panel_image" alt="">
                                    <div class="text-content">
                                        <span>
                                            <a>{{ post.post_created_by | getAuthor }}</a> /
                                            <a>{{ post.post_created_at | convertToDate }}</a> / <a
                                                style="cursor: pointer">
                                                {{ post.album | getAlbumName }}
                                            </a>
                                        </span>
                                        <h2>{{ post.post_title }}</h2>
                                        <p>{{ post.post_summary }}</p>
                                        <div class="simple-btn">
                                            <router-link :to="('/blog/' + post._id)">continue reading</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--                            <div class="col-md-12">-->
                            <!--                                <ul class="page-number">-->
                            <!--                                    <li class="active"><a href="#">1</a></li>-->
                            <!--                                    <li><a href="#">2</a></li>-->
                            <!--                                    <li><a href="#">3</a></li>-->
                            <!--                                    <li><a href="#">></a></li>-->
                            <!--                                </ul>-->
                            <!--                            </div>-->
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="side-bar">
                        <div class="categories">
                            <div class="sidebar-heading">
                                <h2>Categories</h2>
                            </div>
                            <ul>
                                <li v-for="(album, key) in listAlbum" :key="key">
                                    <router-link :to="('/blogs/album/' + album._id)">> {{ album.album_name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';
import moment from 'moment';

export default {
    name: "BlogByAlbum",
    data() {
        return {
            listPost: [],
            listAdmin: [],
            album: {},
            listAlbum: [],
        }
    },
    mounted() {
        $('#video-container').addClass('hide');
        this.$emit('onChangeShowLoading', true);
        let albumId = this.$route.params.albumId;
        this.getListPostByAlbum(albumId);

        axios.get(this.appConfig.API_URL + '/album')
            .then(res => {
                let data = res.data;
                if (data.status === 'success') {
                    this.listAlbum = data.data.albums
                } else {
                    console.log('fail');
                }
            })
            .catch(err => {
                console.log(err);
            });

        fetch('https://api.ipify.org?format=json')
            .then(x => x.json())
            .then(({ ip }) => {
                let data = {
                    ip: ip,
                    url: window.location.href
                };
                axios.post(this.appConfig.API_URL + '/accession', data)
                    .then()
                    .catch(err => {
                        console.log(err);
                    });
            });
    },
    methods: {
        getAdmin(adminId) {
            return this.listAdmin.find(admin => {
                return admin.admin_id == adminId
            });
        },

        getListPostByAlbum(albumId) {
            axios.get(this.appConfig.API_URL + '/post/album/' + albumId)
                .then(res => {
                    let data = res.data;
                    console.log('data :>> ', data);
                    if (data.status === 'success') {
                        this.listPost = data.data.posts;
                        this.listAdmin = data.listAdmin;
                        this.album = data.data.album;
                    } else {
                        console.log('fail');
                    }
                    this.$emit('onChangeShowLoading', false);
                }
                )
                .catch(err => {
                    console.log(err);
                }
                );

        },
    },
    filters: {
        /**
         * convert timestamp to date
         * @param value
         * @returns {string|*}
         * https://momentjs.com/docs/#/displaying/
         */
        convertToDate(value) {
            if (value == 'N/a') {
                return value;
            }
            if (value) {
                return moment(value).format('MMMM Do YYYY');
            }
        },
        getAuthor(value) {
            const author = value?.user_name || 'N/a';
            return author;
        },
        getAlbumName(value) {
            const albumName = value?.album_name || 'N/a';
            return albumName;
        },
    },
    props: {
        appConfig: {
            type: Object,
            default: () => {
                return {
                    API_URL: 'http://localhost:5001/api/v1'
                }
            }
        }
    },
    watch: {
        $route(to) {
            this.$emit('onChangeShowLoading', true);
            let albumId = to.params.albumId;
            this.getListPostByAlbum(albumId);
        }
    }
}
</script>

<style scoped>

</style>