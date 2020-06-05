<template>

  <div class="tab-bar-item " @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot> </div>
    <div v-else ><slot name="item-icon-active"></slot> </div>
    <div :style="activeStyle"><slot></slot> </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path === this.link
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      },
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align:center;
    height:49px;
    width: 49px;
    font-size: 14px;

  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    /*去除img默认bottom默认3px*/
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>

