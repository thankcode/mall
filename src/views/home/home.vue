<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
            
      <div>
        <home-swiper :banners="banners"/>
        <home-recommend-view :recommend="recommend"/>
        <feature-view/>
        <tab-control :titles="['流行','新款','精选']"
                     class="tab-control"
                     @tabClick="tabClick"/>
        <good-list :goods="showGoods"/>
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "./childComps/FeatureView";

  import TabBarItem from "components/common/tabbar/TabBarItem";
  import TabControl from "components/common/tabControl/TabControl";
  import GoodList from "components/content/goods/GoodList";
  import scroll from "components/common/scroll/scroll";
  import BackTop from "components/content/backTop/BackTop";

  import {getHomeMultiData, getHomeGoods} from "network/home";

  export default {
    name: "home",
    components: {
      TabControl,
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabBarItem,
      GoodList,
      scroll,
      BackTop

    },
    data(){
      return {
        banners: [],
        dKeyword: [],   //关键字
        keywords: [],
        recommend: [],  // 推荐
        goods: {
          'pop': {'page':0, list: []},
          'new': {'page':0, list: []},
          'sell': {'page':0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    created() {
      // 请求多个数据
      this.getHomeMultiData();
       // 请求商品数据
      this.getHomeGoods('pop', 1);
      this.getHomeGoods('new', 1);
      this.getHomeGoods('sell', 1);
    },
    computed: {
      showGoods() {
       return this.goods[this.currentType].list
      }
    }
    ,
    methods: {
      /*
      * 事件监听
      * */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      backClick(){
        this.$refs.scroll.scrollTop(0, 0, 500)
      },
      contentScroll(position){
        this.isShowBackTop = -position.y > 1000
      },
      loadMore(){
        this.getHomeGoods(this.currentType)

        this.$refs.scroll.scroll.refresh();
      },
      /*
      * 网咯请求
      * */
      getHomeMultiData() {
        getHomeMultiData()
          .then(res => {
            this.banners = res.data.banner.list;
            this.dKeyword = res.data.dKeyword.list;
            this.keywords = res.data.keywords.list;
            this.recommend = res.data.recommend.list;
          })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page)
          .then(res => {
           this.goods[type].list.push(...res.data.list)
           this.goods[type].page += 1

            this.$refs.scroll.finishPullUp();
          })
      },
    }
  };
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
    touch-action: none;
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1000;
  }
  .tab-control{
    position: sticky;
    top: 44px;

  }
  .content{

    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>
