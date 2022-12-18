<template>
    <div class="wrapper" style="background-color: #313131">
        <div class="full-screen-portfolio" id="portfolio">
            <div class="container-fluid">
                <div v-if="isMaintain">
                    <p class="message">Sorry for this inconvenience!</p>
                    <p class="message">My website is in maintenance mode, please try again for a few hours. Thanks for
                        your patience.</p>
                </div>
                <div class="col-md-4 col-sm-6" v-for="(photo, key) in listPhoto" :key="key">
                    <div class="portfolio-item">
                        <a :href="photo.photo_url" data-lightbox="image-1">
                            <div class="thumb">
                                <div class="hover-effect">
                                    <div class="hover-content">
                                        <h1 style="line-height: 140%">{{ photo.photo_name }}</h1>
                                        <p>{{ photo.photo_desc }}</p>
                                    </div>
                                </div>
                                <div class="image">
                                    <img class="cropped1" :src="photo.photo_url">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {
    name: "HomeComp",
    data() {
        return {
            listPhoto: [],
            isMaintain: false
        }
    },
    mounted() {
        $('.overlay-menu').removeClass('open');
        $('.menu-icon').removeClass('active');
        $('#video-container').removeClass('hide');

        this.$emit('onChangeShowLoading', true);
        axios.get(this.appConfig.API_URL + '/photo')
            .then(res => {
                let data = res.data;
                if (data.status == 'success') {
                    this.listPhoto = data.data.photos;
                    this.isMaintain = false;
                } else {
                    this.isMaintain = true;
                }
                this.$emit('onChangeShowLoading', false);
            })
            .catch(err => {
                console.log(err);
                this.isMaintain = true;
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
    props: {
        appConfig: {
            type: Object,
            default: () => {
                return {
                    API_URL: 'https://lqd-blog-be-nodejs.onrender.com/api/v1'
                }
            }
        }
    }
}
</script>

<style scoped>
.cropped1 {
    /*width: 477.33px;*/
    width: 100%;
    height: 300px;
    object-fit: cover;
}
.message {
    color: white;
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
}
</style>