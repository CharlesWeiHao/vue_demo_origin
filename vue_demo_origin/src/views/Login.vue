<template>
    <div>
      <form v-if="!isRegist">
        账号：
        <input type="text" v-model="account"/>
        <br/>
        密码：
        <input type="password" v-model="password"/>
        <br/>
        <button type="button" @click="login()"> 登录 </button>
        <button type="button" @click="regist()"> 注册 </button>
      </form>
      <form v-else>
        账号：
        <input type="text" v-model="account"/>
        <br/>
        密码：
        <input type="password" v-model="password"/>
        <br/>
        确认密码：
        <input type="password" v-model="repeat"/>
        <br/>
        <button type="button" @click="addUser()"> 确认 </button>
        <button type="button" @click="cancel()"> 取消 </button>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Login",

        data () {
          return {
            isRegist: false,
            account : '',
            password: '',
            repeat: ''
          }
        },

        methods: {
          // 登录
          login() {

            debugger
            if (localStorage.getItem('account') === this.account && localStorage.getItem('password') == this.password){
              // 跳转到首页
              this.$router.push('./home/list');
              // 清空数据
              this.account = '';
              this.password = '';
            } else {
              alert('账号或密码不正确，请重新输入');
            }
          },
          // 注册
          regist() {
            this.isRegist = true;
          },

          // 添加用户
          addUser() {
            if (this.password !== this.repeat) {
              alert('两次输入的密码不一致，请重新输入！');
              return;
            }

            // 本地保存一下数据
            localStorage.setItem('account', this.account);
            localStorage.setItem('password', this.password);

            // 清空输入框，返回登录界面
            this.account = '';
            this.password = '';
            this.repeat = '';
            this.isRegist = false;
          },

          // 取消
          cancel() {
            this.isRegist = false;
          }
        }
    }
</script>

<style scoped>

</style>
