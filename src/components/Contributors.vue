<template>
  <!-- <div class="container d-flex flex-row justify-content-center">
    <div style="height:1200px" class="left w-25 p-2">
      <img width="100%" src="static/img/timg.gif" alt="logo">
      <div class="title">
        <h4>FCC Tianjin</h4>
      </div>
    </div>
    <div class="right w-75 p-2">
      <div ref="rightContainer" class="rightContainer">
        <div class="con-title">
          Contributors
        </div>
        <hr>
        <div class="col-xl-12 text-center">
          <div class="content-box" v-for="(item, index) in contributors" :key="index">
            <div class="card-body">
              <div class="avatar">
                <img :src="item.avatar" width="100" height="100" alt="avatar" >
              </div>
              <div class="name">
                {{item.name}}
              </div>
              <b-button variant="outline-success" v-for="(val, index) in item.tags" :key="index" style="margin-top:10px;margin-left:6px;width:50px;">
                {{val}}
              </b-button>
            </div>
          </div>
        </div>
        <div class="con-title">
          如何成为一位贡献者
        </div>
        <hr>
        <div class="text">
          FCC天津社区绝不将社区志愿者的贡献做量化, 上述排列仅为参与先后顺序
        </div>
        <div class="text">
          成为一位项目贡献者非常简单, 这里有一个<a href="#">链接</a>, 相信你能在里面找到你想要的答案。
        </div>
      </div>
    </div>
  </div> -->
  <div ref="rightContainer" class="rightContainer">
    <div class="con-title">
      Contributors
    </div>
    <hr>
    <div class="col-xl-12 text-center">
      <div class="content-box" v-for="(item, index) in contributors" :key="index">
        <div class="card-body">
          <div class="avatar">
            <img :src="item.avatar" width="100" height="100" alt="avatar" >
          </div>
          <div class="name">
            {{item.name}}
          </div>
          <b-button variant="outline-success" v-for="(val, index) in item.tags" :key="index" style="margin-top:10px;margin-left:6px;width:50px;">
            {{val}}
          </b-button>
        </div>
      </div>
    </div>
    <div class="con-title">
      如何成为一位贡献者
    </div>
    <hr>
    <div class="text">
      FCC天津社区绝不将社区志愿者的贡献做量化, 上述排列仅为参与先后顺序
    </div>
    <div class="text">
      成为一位项目贡献者非常简单, 这里有一个<a href="#">链接</a>, 相信你能在里面找到你想要的答案。
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contributors: [],
      right: 0
    }
  },
  mounted() {
    this.contributors = this.$datajson.contributors
    console.log(this.$refs.rightContainer)
    console.log(this.$refs.rightContainer.clientWidth)
    console.log(this.$refs.rightContainer.clientHeight)
    this.right = this.$refs.rightContainer.clientHeight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes animate {
  0 {
  }
  100% {
    background-position: 100px 0;
  }
}

* {
  margin: 0;
  padding: 0;
  /* font-size: 1em; */
}
.container {
  height: 1100px;
  margin: 0 auto;
}
.left {
  height: 100%;
  background-color: rgb(251, 244, 244);
  border-right-color: rgba(0, 0, 0, 0.03);
}
.title {
  margin-top: 20px;
}
.right {
  height: 100%;
  text-align: left;
}
.con-title {
  font-size: 2em;
}
.rightContainer {
  margin-left: 20px;
}
.content-box {
  background-size: 100px 100px;
  background-image: linear-gradient(
    135deg,
    rgb(46, 148, 63),
    rgb(46, 148, 63) 25%,
    white 25%,
    white 50%,
    rgb(46, 148, 63) 50%,
    rgb(46, 148, 63) 75%,
    white 75%,
    white 100%
  );
}
.content-box:hover {
  transition: all 0.5s linear;
  animation: animate 0.5s linear infinite;
}
</style>

<style lang="stylus" scoped rel="stylesheet/stylus">
.rightContainer
  .con-title
    padding: 20px 0;

  .text
    padding: 10px 0;

  .text-center
    padding-bottom: 20px;

    .content-box
      position: relative;
      width: 250px;
      height: 310px;
      margin-left: 10px;
      margin-top: 20px;
      overflow: hidden;
      display: inline-block;
      border: 1px solid #e8e8e8;
      box-shadow: 1px 2px 2px;
      border-radius: 10px;
      cursor: pointer;

      .card-body
        margin-top: 100px;
        z-index: 1;
        height: 300px;
        background: white;

      .avatar
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;

        img
          border-radius: 100%;
          box-shadow: 1px 1px 1px;

      .name
        padding-top: 70px;
</style>
