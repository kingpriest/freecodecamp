<template>
  <div id="app">
    <b-navbar ref="navbar" toggleable="md" type="dark" variant="secondary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">FCC Tianjin</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item  @click="toAboutUs">About Us</b-nav-item>
          <b-nav-item  @click="toContributors">Contributors</b-nav-item>
          <b-nav-item  @click="toAchievements">Achievements</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> 
    <div class="container d-flex flex-row justify-content-center">
      <div class="left">
        <img width="100%" src="static/img/timg.gif" alt="logo">
        <div class="title">
          <h4>FCC Tianjin</h4>
        </div>
        <b-list-group class="b-group">
          <b-list-group-item href="#" @click="toAboutUs" >About Us</b-list-group-item>
          <b-list-group-item href="#" @click="toContributors" >Contributors</b-list-group-item>
          <b-list-group-item href="#" @click="toAchievements" >Achievements</b-list-group-item>
        </b-list-group>
      </div>
      <div class="right">
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
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: table;
  /* border-left: 1px solid rgb(243, 237, 237);
  border-right: 1px solid rgb(243, 237, 237);
  border-bottom: 1px solid rgb(243, 237, 237); */
}
.container .left,
.container .right {
  display: table-cell;
}
.left {
  padding: 0 10px;
  width: 25%;
  background-color: rgb(251, 244, 244);
  text-align: center;
  border-right:1px solid rgb(230, 226, 226);
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
@media (max-width: 667px) {
  .left {
    display: none;
  }
}
</style>
