<template>
    <div class="wrapper-popup" v-bind:class="{'open-popup': isShowLoading}">
        <div class="loader rule"></div>
    </div>
</template>

<script>
    export default {
        name: "LoadingComp",
        props: {
            isShowLoading: {
                type: Boolean,
                default: true
            },
        },
        methods: {}
    }
</script>

<style scoped>
    .wrapper-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper-popup.open-popup {
        opacity: 1;
        visibility: visible;
    }

    .rule {
        transition: all 0.3s ease;
    }

    .open-popup .rule {
        transform: translate(-50%, -50%) scale(1);
    }

    .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid rgba(0, 0, 0, 0.7); /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>