<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         class="tab-control-item" :class="{active: index === currentIndex}" @click="isActive(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      isActive(index){
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
    z-index: 1000;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
  }
  .active span{
    color: var(--color-high-text);
    padding: 5px 10px;
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
