<template>
    <div class="wrapper">
        <div class="page-heading">
            <div class="container">
                <div class="heading-content">
                    <h1>{{ post.album.album_name }}</h1>
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
                            <div class="col-md-12">
                                <div class="single-blog-post">
                                    <img :src="post.post_panel_image" alt="">
                                    <div class="text-content">
                                        <h2>{{ post.post_title }}</h2>
                                        <span><a>{{ post.post_created_by | getAuthor }}</a> - <a>{{
                                                post.createdAt
                                                | convertToDate
                                        }}</a> -
                                            <router-link :to="('/blogs/Album/' + post.album._id)">{{ post.album.album_name
                                            }}</router-link></span>
                                        <p v-html="post.post_content"></p>
                                        <br>
                                        <router-link to="/blogs">Back to blog entries</router-link>
                                        |
                                        <router-link :to="('/blogs/Album/' + post.album._id)">Back to {{ post.album.album_name }}
                                        </router-link>
                                        <div class="tags-share"></div>
                                    </div>
                                </div>
                            </div>
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
import $ from "jquery";
import axios from 'axios'
import moment from "moment";

export default {
    name: "BlogComp",
    data() {
        return {
            postIdFromUrl: this.$route.params.postId,
            listAdmin: [],
            post: {},
            listAlbum: [],
        }
    },
    mounted() {
        $('#video-container').addClass('hide');
        this.backToTop();
        this.$emit('onChangeShowLoading', true);
        this.getPostData(this.postIdFromUrl);

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
            let result = this.listAdmin.find(admin => {
                return admin.admin_id == adminId
            });

            if (result) {
                return result.admin_name;
            }
        },

        getPostData(postId) {
            axios.get(this.appConfig.API_URL + '/post/' + postId)
                .then(res => {
                    let data = res.data;
                    if (data.status === 'success') {
                        this.listAdmin = data.listAdmin;
                        this.post = data.data.post;
                    } else {
                        console.log('fail');
                    }
                    this.$emit('onChangeShowLoading', false);
                })
                .catch(err => {
                    console.log(err);
                });
        },

        backToTop: function () {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 'slow', 'swing');
        }
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
        }
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
            let postId = to.params.postId;
            $('html,body').stop().animate({
                scrollTop: 0
            }, 'slow', 'swing');
            this.getPostData(postId);
        }
    }
}
</script>

<style scoped>

</style>