<template>
  <div id="app">
      <NavComp></NavComp>
      <router-view :appConfig="appConfig" v-on:onChangeShowLoading="changeLoading"></router-view>
      <FooterComp></FooterComp>
      <ModalComp></ModalComp>
      <MenuComp></MenuComp>
      <LoadingComp :isShowLoading="isShowLoading"></LoadingComp>
  </div>
</template>

<script>
  import NavComp from "./components/NavComp";
  import FooterComp from "./components/FooterComp";
  import ModalComp from "./components/ModalComp";
  import MenuComp from "./components/MenuComp";
  import LoadingComp from "./components/LoadingComp";
  import config from '../config';

  export default {
      name: 'App',
      components: {
          NavComp,
          FooterComp,
          ModalComp,
          MenuComp,
          LoadingComp,
      },
      data() {
          return {
              appConfig: config,
              isShowLoading: false
          }
      },
      methods: {
          changeLoading(isShow) {
              this.isShowLoading = isShow;
          }
      }
  }
</script>

<style>
</style>
