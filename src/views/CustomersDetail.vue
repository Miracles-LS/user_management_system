<template>
    <div class="customersDetail container">
        <router-link to="/" class="btn btn-default">返回</router-link>
      <h1 class="page-header">{{customer.name}}
        <span class="pull-right">
            <router-link :to="'/edit/'+customer.id" class="btn btn-primary">编辑</router-link>
            <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
        </span>
      </h1>
      <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-phone"></span>{{customer.phone}}</li>
          <li class="list-group-item"><span class="glyphicon glyphicon-envelope"></span>{{customer.email}}</li>
      </ul>
      <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-education"></span>{{customer.education}}</li>
          <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.graduationschool}}</li>
          <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.profession}}</li>
          <li class="list-group-item"><span class="glyphicon glyphicon-asterisk"></span>{{customer.profile}}</li>
      </ul>
    </div>
  </template>
  
  <script>

  
  export default {
    name: 'customersDetail',
    data() {
        return {
            customer:{}
        }
    },
    methods: {
      fetchCustomers(id){
        this.$axios.get('/users/'+id)
          .then((res) => {
              console.log(res)
            this.customer = res.data
          })
      },
      deleteCustomer(id){
          this.$axios.delete('/users/'+id)
          .then((res)=>{
              console.log(id)
              this.$router.push({name:'customers',params:{ alert:'用户信息删除成功！' }})
          })
      }
    },
    created() {
        this.fetchCustomers(this.$route.params.id);
    },
  }
  </script>
  <style scoped>
  .glyphicon{
    margin-right: 10px;
  }
  button{
      margin-left: 10px;
  }
  </style>
  