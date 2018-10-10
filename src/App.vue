<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="secondary">
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
      <div class="left w-25 p-2">
        <img width="100%" src="static/img/timg.gif" alt="logo">
        <div class="title">
          <h4>FCC Tianjin</h4>
        </div>
        <b-list-group class="b-group">
          <b-list-group-item href="#" @click="toAboutUs" variant="primary">About Us</b-list-group-item>
          <b-list-group-item href="#" @click="toContributors" variant="secondary">Contributors</b-list-group-item>
          <b-list-group-item href="#" @click="toAchievements" variant="success">Achievements</b-list-group-item>
        </b-list-group>
      </div>
      <div class="right w-75 p-2">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // console.log("data",this.$datajson);
  },
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
.b-group {
  margin-top: 20px;
}
@media (min-width: 992px) {
}
</style>
