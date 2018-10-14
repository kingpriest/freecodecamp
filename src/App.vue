<template>
  <div id="app">
    <b-navbar ref="navbar" toggleable="md" type="dark" variant="secondary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">FCC Tianjin</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item @click="toAboutUs">About Us</b-nav-item>
          <b-nav-item @click="toContributors">Contributors</b-nav-item>
          <b-nav-item @click="toAchievements">Achievements</b-nav-item>
          <b-nav-item @click="toCooperatives">Co-operatives</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container d-flex flex-row justify-content-center">
      <div class="left" id="left">
        <img width="100%" src="static/img/timg.gif" alt="logo">
        <div class="title">
          <h4>FCC Tianjin</h4>
        </div>
        <b-list-group class="b-group">
          <b-list-group-item href="#" @click="toAboutUs">About Us</b-list-group-item>
          <b-list-group-item href="#" @click="toContributors">Contributors</b-list-group-item>
          <b-list-group-item href="#" @click="toAchievements">Achievements</b-list-group-item>
          <b-list-group-item href="#" @click="toCooperatives">Co-operatives</b-list-group-item>
        </b-list-group>
        <div class="sha-social">
          <h3 class="sha-social-legend">Join Us</h3>
          <p class="sha-social-icons">
            <a :href="joinUs.git" target="_blank" rel="noopener noreferrer">
              <img v-lazy="joinUs.gitPic" width="30" height="30" alt="" class="sha-social-icon">
            </a>
            <a :href="joinUs.qq" target="_blank" rel="noopener noreferrer">
              <img v-lazy="joinUs.qqPic" alt="qqPic" width="30" height="30" class="sha-social-icon">
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <img v-lazy="joinUs.wechatPic" alt="WeChat" width="30" height="30" class="sha-social-icon" id="wechat">
              <b-popover class="popover" target="wechat" title='扫描二维码, 添加机器人为好友, 发送对应城市名: "天津", 即可进群' triggers="hover focus">
                <img :src="joinUs.wechat" alt="wechat" width="200">
              </b-popover>
            </a>
          </p>
        </div>
      </div>
      <div class="right" id="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    toAboutUs() {
      this.$router.push("/aboutUs");
    },
    toContributors() {
      this.$router.push("/contributors");
    },
    toAchievements() {
      this.$router.push("/achievements");
    },
    toCooperatives() {
      this.$router.push("/cooperatives");
    }
  },
  data() {
    return {
      joinUs: {}
    }
  },
  mounted() {
    this.joinUs = this.$datajson.joinUs
  }
};
</script>

<style>
@media (max-width: 1000px) {
  #left {
    display: none;
  }
  #right {
    width: 100%;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: table;
  padding: 0 5px;
  /* border-left: 1px solid rgb(243, 237, 237);
  border-right: 1px solid rgb(243, 237, 237);
  border-bottom: 1px solid rgb(243, 237, 237); */
}
.container .left,
.container .right {
  display: table-cell;
}
.left {
  position: relative;
  padding: 0 10px;
  width: 25%;
  background-color: rgb(251, 244, 244);
  text-align: center;
  border-right: 1px solid rgb(230, 226, 226);
}
.sha-social {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.sha-social-legend {
  font-size: 14px;
}
.sha-social-icons {
  display: flex;
  padding: 0 20px;
}
.sha-social-icons a {
  flex: 1;
  display: inline-block;
}
.popover {
  width: 220px;
}
.right {
  width: 75%;
  border-left: 1px solid rgb(243, 237, 237);
  min-height: 1000px;
}
.b-group {
  padding-top: 100px;
  margin: 0 auto;
  width: 90%;
}
</style>
