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
            <b-carousel-slide v-for="(img, index) in carousel" :key="index"
              :img-src="img.imgsrc" :img-alt="img.alt" :caption="img.title">
              <p>{{img.desc}}</p>
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
      <div class="content" v-for="item in aboutus">
        <div class="title">
          <h4>{{item.title}}</h4>
        </div>
        <div class="text">
          {{item.content}}
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
      sliding: null,
      aboutus:[],
      carousel:[]
    }
  },
  mounted(){
    this.aboutus = this.$datajson.aboutus
    this.carousel = this.$datajson.carousel

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
