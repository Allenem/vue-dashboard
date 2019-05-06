<template>
  <div>
    <Navbar/>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Alert from "./AlertMessage";
export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
    Alert,
  },
};
</script>

<style lang="scss" scoped>
[role='main']{
  padding-top: 5rem;
}

</style>