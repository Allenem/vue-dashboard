<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="signin">
      <img class="mb-4" src="../../../build/logo.png" alt width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">请登录</h1>
      <label for="inputEmail" class="sr-only">Email Address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email Address"
        v-model="user.username"
        required
        autofocus
      >
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      >
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
        user: {
            username: '1820988819@qq.com',
            password: 'xys0806'
        }
    };
  },
  methods: {
      signin() {
        const api = `${process.env.APIPATH}/admin/signin` // 登录API
        const vm = this
        this.$http.post(api,vm.user).then((response) => {
            console.log('登录API',response.data)
            if(response.data.success){
                vm.$router.push('/admin/products')
            }
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

/*自适应*/
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}
</style>
