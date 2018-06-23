<template>
  <div id="app" @click="$store.commit('hideDropdownList')">
        <div class="navigation">
            <div class="leftGroup">
                <div class="logo">
                    <h1>Shoptime</h1>
                </div>
                <div class="router">
                    <router-link :to="route.path" v-for="(route,i) in $router.options.routes" :key="i">{{ route.name }}</router-link>
                </div>
            </div>
            <div class="admin">
                <p>admin</p>
            </div>
        </div>
        <div class="mainView">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <transition name="loadingFade">
            <div class="loadingMask" :class="{ loading : $store.state.loading }" v-if="$store.state.loading">
                <div class="loadingIcon">
                    <i class="fas fa-spinner"></i>
                </div>
            </div>
        </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted() {
      this.directToHome();
  },
  components: {
  },
  methods: {
      directToHome() {
          if(this.$route.path == '/') this.$router.push('/Home');
      },
  }
}
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }
    a{
        &:visited{
            color: inherit;
        }
        text-decoration: none;
    }
    .navigation{
        background-color: #000;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        .leftGroup{
            display: flex;
            align-items: center;
            .logo{
                padding: 0 40px 0 0 ;
            }
            .router{
                a{
                    display: inline-block;
                    padding: 20px 20px;
                    color: #9B9B9B;
                    &.router-link-active{
                        color: #fff;
                        border-bottom: 3px solid #fff; 
                    }
                }
            }
        }
    }
    .mainView{
        background-color: #F2F2F2;
        min-height: 120vh;
        padding: 20px;  
    }
</style>
