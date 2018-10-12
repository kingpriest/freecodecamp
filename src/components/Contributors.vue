<template>
  <div ref="rightContainer" class="rightContainer">
    <div class="con-title">
      Contributors
    </div>
    <hr>
    <div class="col-xl-12 text-center">
      <div class="content-box" v-for="(item, index) in contributors" :key="index">
        <div class="card-body">
          <a class="avatar" :href="item.avatar" target="_blank">
            <img v-lazy="item.pic" width="100" height="100" alt="avatar" >
          </a>
          <div class="name">
            {{item.name}}
          </div>
          <a :href="item.avatar" target="_blank">
            <b-button variant="outline-success" v-for="(val, index) in item.tags" :key="index" style="margin-top:10px;margin-left:6px;">
              <div class="btn-cont">{{val}}</div>
            </b-button>
          </a>
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
      contributors: []
    };
  },
  mounted() {
    this.contributors = this.$datajson.contributors;
  }
};
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
}

a:link {
  color: black;
}
a:hover {
  color: black;
}
.container {
  height: 1100px;
  margin: 0 auto;
}
.btn-cont {
  padding: 0 4px;
}
.title {
  margin-top: 20px;
}
</style>

<style lang="stylus" scoped rel="stylesheet/stylus">
.rightContainer {
  margin-left: 20px;

  .con-title {
    padding: 20px 0;
    text-align: left;
    font-size: 2em;
  }

  .text {
    padding: 10px 0;
    text-align: left;
  }

  .text a:link {
    color: blue;
  }

  .text a:hover {
    color: blue;
  }

  .text-center {
    padding-bottom: 20px;

    .content-box {
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

      .card-body {
        margin-top: 100px;
        z-index: 1;
        height: 300px;
        background: white;
      }

      .avatar {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        display: inline-block;
        text-decoration: none;

        img {
          border-radius: 100%;
          box-shadow: 1px 1px 1px;
        }
      }

      .name {
        padding-top: 50px;
      }
    }

    .content-box:hover {
      transition: all 0.5s linear;
      animation: animate 0.5s linear infinite;
    }
  }
}
</style>
