<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  // created() {
  //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
  //   console.log("APIPATH", process.env.APIPATH, "CUSTOMPATH", process.env.CUSTOMPATH);
  //   this.$http.get(api).then(response => {
  //     console.log("products", response.data);
  //   });
  // }
};
</script>

<style lang='scss'>
@import "./assets/all";
</style>
