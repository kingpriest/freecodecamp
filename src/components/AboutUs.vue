<template>
  <div class="container d-flex flex-row justify-content-center">
    <div class="left w-25 p-2">
      <img width="100%" src="static/img/timg.gif" alt="logo">
      <div class="title">
        <h4>FCC Tianjin</h4>
      </div>
    </div>
    <div class="right w-75 p-2">
      <div class="content">
        <div class="title">
          <h4>来自各个社区的小伙伴</h4>
        </div>
        <div class="slider">
          <b-carousel id="carousel1"
            style="text-shadow: 1px 1px 2px #333;"
            controls
            indicators
            background="#ababab"
            :interval="4000"
            img-width="1024"
            img-height="480"
            v-model="slide"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">

            <!-- Text slides with image -->
            <b-carousel-slide
              img-src="https://picsum.photos/1024/480/?image=52">
            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide 
              img-src="https://picsum.photos/1024/480/?image=54">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide 
              img-src="https://picsum.photos/1024/480/?image=58">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide
              img-src="https://picsum.photos/1024/480/?image=55">
              <!-- <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                  src="https://picsum.photos/1024/480/?image=55" alt="image slot"> -->
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                ut lacus vel interdum.
              </p>
            </b-carousel-slide> -->

          </b-carousel>

          <!-- <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
          </p> -->
        </div>
      </div>
      <div class="content">
        <div class="title">
          <h4>关于我们</h4>
        </div>
        <div class="text">
          FCC天津社区是一个传承了FCC全球社区倡导人人皆可编程的主旨思想, 面向天津所有有意愿学习的编程, 热爱编程, 还有那些想要通过编程找到一份满意工作的学生以及社会群众。是一个可以帮助天津公益组织贡献 代码, 帮助大学生积累经验, 帮助企业培养人才为目的的公益性开发者社区。截止目前为止, 社区的人数已经有 300余人。是社员们作为日常交流, 学习的平台。
        </div>
      </div>
      <div class="content">
        <div class="title">
          <h4>为什么加入我们?</h4>
        </div>
        <div class="text">
          FreeCodeCamp 是由 Quincy Larson 创办的开源社区，它致力于帮助人们利用零散时间学习编程，内容以 前端和JS全栈为主。目前已经发展成为一个30万开发者的社区，通过游戏化的项目实战，来吸引大家学习编 程，并在社区内给予实时的帮助。同时，为 NPO、NGO 组织给予技术支持。通过学习4个部分课程，你将获 得 FCC 颁布的4个证书，分别是“前端开发证书”、“数据可视化证书”、“后端开发证书”、“全栈开发证书”。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
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
.slider {
  margin-top: 20px;
}
.content {
  margin-left: 20px;
}
.text {
  text-indent: 2em;
  margin-left: 20px;
  margin-top: 20px;
  letter-spacing: 3px;
}
@media (max-width: 767.98px) {
  * {
    font-size: 1em;
  }
  .content {
    margin-left: 10px;
  }
}
</style>
