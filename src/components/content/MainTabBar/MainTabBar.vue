<template>
    <tab-bar>
      <tab-bar-item link="/index">
        <img src="~assets/img/tabbar/home.svg" alt=""  slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div>首页</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img src="~assets/img/tabbar/home.svg" alt=""  slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div>分类</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img src="~assets/img/tabbar/home.svg" alt=""  slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div>购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img src="~assets/img/tabbar/home.svg" alt=""  slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div>我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
  }
</script>

<style >

</style>
