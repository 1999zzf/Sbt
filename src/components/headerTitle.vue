<template>
  <div class="mytitle">
    <div class="left">
      <div><img :src="logo" /></div>
      <div>易丰智能科技有限公司</div>
    </div>
    <div class="middle">上包台管理</div>
    <div class="right">
      <span class="sq" title="收起" @click="getMinSize">
        <i style="color: #fff" class="el-icon-minus"></i>
      </span>
      <span class="sf" title="缩放" @click="getMaxSize">
        <i style="color: #fff" class="el-icon-full-screen"></i>
      </span>
      <span class="gb" title="关闭" @click="getClose">
        <i style="color: #fff" class="el-icon-close"></i>
      </span>
    </div>
  </div>
</template>

<script>
if (window.require) {
  var ipc = window.require("electron").ipcRenderer;
}
export default {
  data() {
    return {
      logo: require("../assets/yflogo.png"),
    };
  },
  methods: {
    getMinSize() {
      if (window.require) {
        ipc.send("min");
      }
    },
    getMaxSize() {
      if (window.require) {
        ipc.send("max");
      }
    },
    getClose() {
      localStorage.removeItem('哈哈')
      this.$post("jdSorting/stopSorting", {}).then(function (data) {
        if (data.code == "0000") {
          console.log("退出成功");
        }
      });
      if (window.require) {
        ipc.send("close");
        
      }
    },
  },
};
</script>

<style lang="scss">
.mytitle {
  width: 100%;
  height: 40px;
  z-index: 999;
  position: fixed;
  -webkit-app-region: drag;
  background: transparent;
  margin: auto auto;
  background: #2c3e50;
  display: flex;
  box-sizing: border-box;
  .left {
    flex: 1;
    padding-left: 10px;
    display: flex;
    img {
      width: 35px;
      height: 35px;
      margin-top: 3px;
    }
    div {
      line-height: 39px;
      color: #fff;
      font-size: 14px;
      font-style: initial;
    }
  }
  .middle {
    flex: 1;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
  .right {
    flex: 1;
    text-align: right;
    padding-right: 10px;
    line-height: 40px;
  }
  span {
    margin: 0px 10px;
    cursor: pointer;
    -webkit-app-region: no-drag;
    padding: 0px 5px;
  }
  .sq:hover{
    background: rgba(204, 201, 201, 0.199);
    width: 20px;
  }
  .sf:hover{
    background: rgba(204, 201, 201, 0.199);
    width: 20px;
  }
  .gb:hover{
    background: rgba(214, 23, 23, 0.719);
    width: 20px;
  }
  img {
    width: 20px;
    -webkit-app-region: no-drag;
  }
}
</style>