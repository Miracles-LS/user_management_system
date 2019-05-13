<template>
    <div class="add container">
        <h1 class="page-header">添加用户</h1>
        <Alert v-if="alert" :message="alert"></Alert>
        <form v-on:submit.prevent="addCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label>毕业学校</label>
                    <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
                    <textarea rows="10" class="form-control" v-model="customer.profile"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
    import Alert from './Alert'
    export default {
        name: 'add',
        data() {
            return {
                alert:'',
                customer:{
                    name:'',
                    phone:'',
                    email:'',
                    education:'',
                    graduationschool:'',
                    profession:'',
                    profile:''
                }
            }
        },
        methods: {
            addCustomer(){
                if(!this.customer.name || !this.customer.phone || !this.customer.email){
                    // console.log('请输入相应的内容')
                    this.alert='请输入对应的信息！';
                }else{
                    this.$axios.post('/users',this.customer)
                    .then((res)=>{
                        console.log(res)
                        this.$router.push({name:'customers',params:{ alert:'用户信息添加成功！' }});
                    })
                }
            }
        },
        components:{
            Alert
        }
    }
</script>