<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in filterBy(customers,filterInput)" :key="index">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link :to="'/customer/'+ customer.id" class="btn btn-default">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert.vue'
  export default {
    name: 'customers',
    data() {
      return {
        customers: [],
        alert:'',
        filterInput:''
      }
    },
    methods: {
      fetchCustomers() {
        this.$axios.get('/users')
          .then((res) => {
            this.customers = res.data
          })
      },
      filterBy(customers,value){
        return customers.filter((customer)=>{
          return customer.name.match(value)||customer.email.match(value)||customer.phone.match(value);
        })

      }
    },
    components:{
      Alert
    },
    created() {
      this.fetchCustomers();
      console.log(this.$route.params)
      if(this.$route.params.alert){
        this.alert = this.$route.params.alert
      }
    },
    updated() {
      this.fetchCustomers();      
    },
  }
</script>