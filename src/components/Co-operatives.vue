<template>
    <div class="rightContainer" id="rightContainer">
        <div class="con-title">
            Co-operatives
        </div>
        <hr>
        <div class="col-xl-12 text-center coopContainer">
            <a :href="item.url" target="_blank" v-for="(item, index) in cooperatives" :key="index" class="coop">
                <img :src="item.img" alt="logo" width="200">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cooperatives: this.$datajson.cooperatives
        }
    }
}
</script>
<style scoped>
@media (max-width: 1000px) {
  #rightContainer {
    margin-left: 5px;
  }
}
.rightContainer {
  margin-left: 20px;
}
.coopContainer {
  display: flex;
  flex-wrap: wrap;
}
.coop {
  flex: 1;
  display: inline-block;
  border: 1px solid #ccc;
  margin-right: 5px;
  margin-top: 5px;
}
.con-title {
  padding: 20px 0;
  text-align: left;
  font-size: 2em;
}
</style>
