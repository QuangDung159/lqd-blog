<template>
    <div class="wrapper">
        <div class="page-heading">
            <div class="container">
                <div class="heading-content">
                    <h1>About <em>Me</em></h1>
                    <div class="blog-post">
                        <div class="text-content">
                            <div class="simple-btn">
                                <router-link to="/">Back to home page</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="more-about-us">
            <div class="container">
                <div class="col-md-5 col-md-offset-7">
                    <div class="content">
                        <h2>Lu Quang Dung</h2>
                        <span>Motovloger | Travelvloger | Videomaker | Photographer</span>
                        <p>
                            Một thằng cô đơn, thích chụp, thích quay, thích đi lang thang trên con xe hai bánh của mình.
                        </p>
                        <p>
                            Tôi, một thằng luôn muốn kể cho người khác những chuyến đi đầy thú vị qua những bức
                            ảnh, thước phim.
                        </p>
                        <p>
                            Tôi, một thằng làm vlog.
                            <br>
                            Tôi, một thằng chụp ảnh nghiệp dư.
                            <br>
                            Tôi, một thằng làm phim nghiệp dư.
                        </p>
                        <p>
                            Tôi là Lư Quảng Dũng
                        </p>
                        <hr>
                        <div class="row">
                            <div class="col-lg-1">
                                <i class="fab fa-youtube"></i>
                            </div>
                            <div class="col-lg-9">
                                <a href="https://www.youtube.com/channel/UCZhiXSiz4ZYafLml3uDU6uA/featured?view_as=subscriber"
                                   target="_blank">Youtube/luquangdung</a>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-lg-1">
                                <i class="fab fa-facebook-f"></i>
                            </div>
                            <div class="col-lg-9">
                                <a href="https://www.facebook.com/dung.luquang" target="_blank">Facebook/luquangdung</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    import axios from "axios";
    import config from "../../config";

    export default {
        name: "AboutComp",
        data() {
            return {}
        },
        mounted() {
            $('.overlay-menu').removeClass('open');
            $('.menu-icon').removeClass('active');
            $('#video-container').addClass('hide');

            fetch('https://api.ipify.org?format=json')
                .then(x => x.json())
                .then(({ip}) => {
                    let data = {
                        ip: ip,
                        url: window.location.href
                    };
                    axios.post(config.API_URL + '/accession', data)
                        .then()
                        .catch(err => {
                            console.log(err);
                        });
                });
        }
    }
</script>

<style scoped>

</style>