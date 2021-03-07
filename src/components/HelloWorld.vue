<template>
   <div>
    <br /><br />
    <div class="container">
      <b-card class="mb-2 my-3 text-center" >
        <b-img :src="img" style="width: 200px; height: 15rem"></b-img>
        <h6 class="text-left" style="color:navy">{{ name }}</h6>
        <b-card-text class="text-left" style="color:orangered "> ราคา {{ price }} THB. </b-card-text>

        <div>
          <b-form-spinbutton
            id="sb-inline"
            v-model="value"
            inline
          ></b-form-spinbutton>
          <br /><br/>
        </div>
        <button type="button" class="btn btn-outline-dark" @click="Order(value,index)">
          <b-icon icon="minecart-loaded"></b-icon> เพิ่มไปยังตะกร้า
        </button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    img:String,
    name:String,
    price:Number,
    index:Number
  },
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapGetters(["Order"]),
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color:  brown;
}
</style>
