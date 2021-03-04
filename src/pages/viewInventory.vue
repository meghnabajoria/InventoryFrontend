<template>
  <div>
    <div class="cont3">
      <h1>Medicine Inventory</h1>
    </div>
    <div class="medicineCard">
        <div class="card" v-for="medicine in getMedicineList" :key="medicine.id">
          <h3>Medicine Id: {{medicine.medicineId}}</h3>
          <p>Name: {{medicine.medicineName}} </p>
          <h4>Category Id: {{medicine.categoryId}}</h4>
          <p>Category: {{medicine.categoryName}}<p>
          <p>Formula: {{medicine.formula}}</p>
          <p>Dosage: {{medicine.dosage}}</p>
          <p>Cost: Rs. {{medicine.costPerUnit}}</p>
          <p>MFD Date: {{medicine.mfdDate.substring(0,10)}}</p>
          <p>EXP Date: {{medicine.expiryDate.substring(0,10)}}</p>
          <p>Quantity: {{medicine.quantity}}</p>
          <p>Unit: {{medicine.unit}}</p>
          <p>Total Quantity: {{medicine.totalQuantity}}</p>
          <p>Manufacturer: {{medicine.manufacturer}}</p>
          <p>IsInStock: {{medicine.isInStock}}</p>
        </div>
    </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getMedicineList'])
  },
  created () {
  }
}
</script>

<style>
.cont3 {
  height: 70px;
  background-color: #c2d4dd;
  display: flex;
  padding: 10px 10px;
  justify-content: center;
}
.medicineCard{
  justify-content: center;
  display: flex;
  flex-direction: row;
}
.card{
    height: 80vh;
    width: 250px;
    border: 1px solid grey;
    margin-top: 5px;
    margin-left: 20px;
    padding: 10px 20px;
    background-color: #ccf2f4 !important;
    border-radius: 30px;
}
</style>
