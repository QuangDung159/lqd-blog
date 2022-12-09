<template>
    <div class="wrapper">
        <!-- Modal button -->
        <div class="popup-icon">
            <button id="modBtn" class="modal-btn"><img src="img/contact-icon.png" alt=""></button>
        </div>

        <!-- Modal -->
        <div id="modal" class="modal">
            <!-- Modal Content -->
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h3 class="header-title"><p v-html="modalHeader"></p></h3>
                    <div class="close-btn"><img src="img/close_contact.png" alt=""></div>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                    <div class="col-md-6 col-md-offset-3">
                        <form id="contact">
                            <div class="row">
                                <div class="col-md-12">
                                    <fieldset>
                                        <input name="name" type="text" class="form-control" id="name"
                                               placeholder="Your name..." v-model="form.name"
                                               required="">
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <fieldset>
                                        <input name="email" type="email" class="form-control" id="email"
                                               placeholder="Your email..." required="" v-model="form.email">
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <fieldset>
                                <textarea name="message" rows="6" class="form-control" id="message"
                                          placeholder="Your message..." required="" v-model="form.message"></textarea>
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <fieldset>
                                        <button type="button" id="form-submit" class="btn" v-on:click="onSendMessage">
                                            Send Message Now
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ModalComp",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    message: ''
                },
                isSuccess: false,
                modalHeader: 'Say hello to <em>Lu Quang Dung</em>'
            }
        },
        methods: {
            onSendMessage() {
                let isValid = true;
                isValid = !!(this.checkFieldRequire() && this.validateEmail());
                if (isValid) {
                    this.modalHeader = 'Thanks you!';
                    axios.post(this.appConfig.API_URL + '/send-message', this.form)
                        .then()
                        .catch(err => {
                            console.log(err);
                        });
                }
            },

            validateEmail() {
                if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
                    this.modalHeader = '<em>Invalid email</em>';
                    return false
                } else {
                    return true;
                }
            },

            checkFieldRequire() {
                if (this.form.name == '' ||
                    this.form.email == '' ||
                    this.form.message == '') {
                    this.modalHeader = '<em>Please make sure all fields are filled</em>';
                    return false;
                } else {
                    return true;
                }
            }
        },
        watch: {
            'form.name': function () {
                this.modalHeader = 'Say hello to <em>Lu Quang Dung</em>'
            },
            'form.email': function () {
                this.modalHeader = 'Say hello to <em>Lu Quang Dung</em>'
            },
            'form.message': function () {
                this.modalHeader = 'Say hello to <em>Lu Quang Dung</em>'
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
        }
    }
</script>

<style scoped>

</style>