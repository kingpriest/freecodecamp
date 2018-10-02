<template>
  <div class="container d-flex flex-row justify-content-center">
    <div style="height:1300px" class="left w-25 p-2">
      <img width="100%" src="static/img/timg.gif" alt="logo">
      <div class="title">
        <h4>FCC Tianjin</h4>
      </div>
    </div>
    <div class="right w-70 p-2">
        <div ref="right" class="cont col-xl-12">
          <b-card v-for="(item, index) in achievementData" :key="index"
                  :title="item.title"
                  :img-src="item.img"
                  img-alt="Image"
                  img-top
                  class="card"
                  id="card">
            <ul class="list">
              <li v-for="(val, index) in item.list" :key="index">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="text">{{val}}</div>
              </li>
            </ul>
          </b-card>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievementData: [
        {
          img: 'static/img/fcc-meetup1.jpeg',
          title: '2017/04 FCC上海前端技术群线下Meetup #1',
          list: ['开场；', '1、造轮子-简单的 MVVM 框架核心 - 于航；', '2、SSO 核心原理 - Kenneth Choi；', '3、RESTful API 架构设计 - 🐔；', '4、Bigpipe 技术的前端应用 - 糖爸；', '自由交流；']
        },
        {
          img: 'static/img/fcc-meetup2.jpeg',
          title: '2017/04 FCC上海前端技术群线下Meetup #1',
          list: ['开场；', '1、造轮子-简单的 MVVM 框架核心 - 于航；', '2、SSO 核心原理 - Kenneth Choi；', '3、RESTful API 架构设计 - 🐔；', '4、Bigpipe 技术的前端应用 - 糖爸；', '自由交流；']
        },
        {
          img: 'static/img/fcc-meetup3.jpeg',
          title: '2017/04 FCC上海前端技术群线下Meetup #1',
          list: ['开场；', '1、造轮子-简单的 MVVM 框架核心 - 于航；', '2、SSO 核心原理 - Kenneth Choi；', '3、RESTful API 架构设计 - 🐔；', '4、Bigpipe 技术的前端应用 - 糖爸；', '自由交流；']
        },
        {
          img: 'static/img/fcc-meetup4.jpg',
          title: '2017/04 FCC上海前端技术群线下Meetup #1',
          list: ['开场；', '1、造轮子-简单的 MVVM 框架核心 - 于航；', '2、SSO 核心原理 - Kenneth Choi；', '3、RESTful API 架构设计 - 🐔；', '4、Bigpipe 技术的前端应用 - 糖爸；', '自由交流；']
        }
      ],
      right: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.right = this.$refs.right.clientHeight
      console.log(this.right)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
<style lang="stylus" scoped rel="stylesheet/stylus">
@media (max-width: 667px)
  #card
    width: 300px;

.right
  .cont
    text-align: center;

    .card
      width: 450px;
      display: inline-block;
      margin-left: 15px;
      margin-top: 20px;
      overflow: hidden;
      text-align: left;

      .list
        list-style: none;
        width: 80%;
        margin: 15px auto;

        li
          margin-top: 8px;
          width: 100%;
          position: relative;
          display: block;

          div
            display: inline-block;

          .circle
            position: absolute;
            width: 8px;
            height: 8px;
            left: -20px;
            top: 8px;
            border-radius: 100%;
            background: white;
            z-index: 1;
            border: 1px solid blue;

          .line
            position: absolute;
            width: 1px;
            height: 200px;
            left: -17px;
            border: 1px solid blue;

          .text
            width: 100%;
            font-size: 1rem;

        :last-child
          .line
            position: absolute;
            width: 1px;
            height: 30px;
            left: -17px;
            border: 1px solid blue;
</style>

