<template>

  <div id="tab-bar">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "TabBat"

  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
