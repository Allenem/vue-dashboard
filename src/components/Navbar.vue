<template>
  <div>

    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Allenem购物网</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin/products"
              :class="{'active': this.$route.path === `/admin/products`}"
            >产品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/admin/orders"
              :class="{'active': this.$route.path === `/admin/orders`}"
            >订单列表</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/coupons"
              class="nav-link"
              :class="{'active': this.$route.path === `/admin/coupons`}"
            >优惠券</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/customer_order"
              class="nav-link"
              :class="{'active': this.$route.path == `/customer_order`}"
            >模拟订单</router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" id="key" placeholder="搜索（功能未实现）" aria-label="Search">
        </form>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >搜索</button>
        <a class="btn btn-outline-danger my-2 my-sm-0" href="#" @click="signout">登出</a>
        
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
    }
  },

  methods: {
    signout() {
      const api = `${process.env.APIPATH}/logout`; //登出API
      const vm = this;
      this.$http.post(api).then(response => {
        console.log("登出API", response.data);
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>