<template>
  <div id="app" class="h-full min-h-full font-serif leading-normal overflow-y-auto overflow-hidden antialiased text-grey-darkest">
    <transition name="top-nav" mode="out-in">
      <top-nav class="top-nav"></top-nav>
    </transition>
    <transition name="page" mode="out-in">
      <router-view class="min-h-screen"></router-view>
    </transition>
    <main-footer></main-footer>
  </div>
</template>

<script>
import TopNav from '@/components/partials/TopNav'
import MainFooter from '@/components/partials/MainFooter'
export default {
  name: 'app',
  components: {TopNav, MainFooter},
  data: function () {
    return {}
  },
  mounted: function () {
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/style.scss';
  html, body {
    height: 100%;
  }
</style>