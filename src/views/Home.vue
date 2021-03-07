<template>
  <div class="home">
   
<div class="container">
    <div class="row">
      <HelloWorld
        class="col-3"
        v-for="(item, index) in Menu"
        :key="index"
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :index="index"
        @Order="menuorder"
      />
    </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },
    ...mapGetters(["Menu", "ShowSelect"]),
  },
};
</script>
