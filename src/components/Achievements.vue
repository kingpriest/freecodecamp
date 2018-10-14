<template>
  <div class="cont col-xl-12">
    <b-card v-for="(item, index) in achievementData" :key="index" :title="item.title" :img-src="item.img" img-alt="Image" img-top class="card" id="card">
      <ul class="list">
        <li v-for="(val, index) in item.list" :key="index">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="text">{{val}}</div>
        </li>
      </ul>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievementData: []
    }
  },
  mounted() {
    this.achievementData = this.$datajson.achievementData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
<style lang="stylus" scoped rel="stylesheet/stylus">
@media (max-width: 1000px)
  #card
    width: 300px;
    margin-left: 0;

.right
  .cont
    text-align: center;
    display: table;

    .card
      width: 350px;
      vertical-align: top;
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

