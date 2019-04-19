<template>
  <div class="home">
    HELLO WORD!
  </div>
</template>

<script>
// 获取配置信息，设置cookie
import { getConfig, setCookie, getCookie } from "@/utils/guidance.url.js";

export default {
  name: "home",
  methods: {
    // _getConfig() {
    //   getConfig(
    //     {
    //       configId: "area"
    //     },
    //     "post"
    //   ).then(res => {
    //     setCookie("areaSeq", res.data.configVal);
    //   });
    // },
    _getConfig() {
      getConfig({
          configId: "area"
        },
        "get",(res)=>{
          setCookie("areaSeq", res.data.configVal);
        })
    }
  },
  created() {
    this._getConfig()
  }
};
</script>
<style lang="scss" scope>
.home {
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 36px;
  line-height: 100px;
  background: url("~@/assets/img/guidance/home/guide.png");
}
</style>