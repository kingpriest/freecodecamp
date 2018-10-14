<template>
  <div>
    <div class="content" id="content">
      <div class="title">
        <h4>来自各个社区的小伙伴</h4>
      </div>
      <div class="slider" id="slider">
        <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab" :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

          <b-carousel-slide v-for="(img, index) in carousel" :key="index" :img-src="img.imgsrc" :img-alt="img.alt" :caption="img.title">
            <p>{{img.desc}}</p>
          </b-carousel-slide>

        </b-carousel>
      </div>
    </div>
    <div class="content" id="content" v-for="(item, index) in aboutus" :key="index">
      <div class="title">
        <h4>{{item.title}}</h4>
      </div>
      <div class="text">
        {{item.content}}
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
      aboutus: [],
      carousel: []
    }
  },
  mounted() {
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
@media (max-width: 1000px) {
  #slider p {
    font-size: 6px;
  }
  #content {
    margin-left: 0;
    padding: 0 5px;
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
.title {
  margin-top: 20px;
  text-align: left;
}
.slider {
  margin-top: 20px;
}
.content {
  margin-left: 20px;
  text-align: justify;
}
.text {
  text-indent: 2em;
  margin-left: 20px;
  margin-top: 20px;
  letter-spacing: 3px;
}
/* @media (max-width: 767.98px) {
  * {
    font-size: 1em;
  }
  .content {
    margin-left: 10px;
  }
} */
</style>
