<template>
  <div class="hello">

    <div class="bb">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">สินค้า</th>
              <th scope="col">ราคา</th>
              <th scope="col">จำนวน</th>
              <th scope="col">รวม</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(mi, index) in ShowSelect" :key="index">
              <td>{{ mi.name }}</td>
              <td>{{ mi.price }}</td>
              <td>{{ mi.value }}</td>
              <td>{{ mi.Total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-11"></div>
          <div class="col align-self-end">{{ T }}บาท</div>
        </div>
      </div>

      <b-card bg-variant="light">
        <b-form-group
           label-cols-lg="2"
        label="กรุณากรอกข้อมูลของลูกค้า"
        label-size="lg"
        label-class="font-weight-bold"
        class="mb-0"
      >
        <b-form-group
          label="ชื่อผู้ติดต่อ"
          label-for="nested-city"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="nested-city"></b-form-input>
        </b-form-group>

        <b-form-group
          label="ที่อยู่"
          label-for="nested-state"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="nested-state"></b-form-input>
        </b-form-group>

        <b-form-group
          label="E-mail"
          label-for="nested-street"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="nested-street"></b-form-input>
        </b-form-group>

        <b-form-group
          label="เบอร์โทรศัพท์"
          label-for="nested-state"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input id="nested-state"></b-form-input>
        </b-form-group>
        <b-form-group
          label="หมายเหตุ"
          label-for="nested-state"
          label-cols-sm="3"
          label-align-sm="right"
          >
            <b-form-input id="nested-state"></b-form-input>
          </b-form-group>
          
        </b-form-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(["ShowSelect","T"]),
  },
};
</script>