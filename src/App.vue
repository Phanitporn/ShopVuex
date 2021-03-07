<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" class="bgn">


        
          <b-navbar-brand  style="color:white" >
            <router-link class="col-5" style="color:white" to="/">
            CASE QUEEN SHOP</router-link>
            </b-navbar-brand>
        

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="col-5" style="color:white" to="/about"
              >Order</router-link
            >
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form> </b-nav-form>
            <router-link to="/about" class="col-7">
              <b-button squared variant="primary" @click="Submit()">
                Confirm
              </b-button></router-link
            >
            <b-button squared variant="danger" @click="Clear()">
              Cancel
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view @Order="Sorder" :data="data" :Total="Total" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #856868;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: rgb(83, 30, 30);
}
.bgn{
  background-color: rgb(107, 66, 145);
}
</style>

<script>
import { mapMutations } from "vuex";
import Vue from "vue";
export default Vue.extend({
  computed: {
    ...mapMutations(["Clear", "Submit"]),
  },
});
</script>
