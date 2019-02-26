<template>
    <div>
        <p>标题</p>
        <input type="text" v-model="title"/>
        <p>内容</p>
        <input type="text" v-model="content"/>
        <br><br>
        <button type="button" @click="addItem()">提交</button>
    </div>
</template>

<script>
  import store from '@/store'
    export default {
        name: "Add",
        store,
        data () {
          return {
            title: '',
            content: ''
          }
        },

        methods: {
          addItem () {
            // 标题和内容为空时，不可以添加数据
            if (this.title === '' && this.content === '') {return}
            // 添加数据到lists数组中
            store.commit('addItem', {
              title: this.title,
              content: this.content
            });
            // 添加完数据之后，清空输入框
            this.title = '';
            this.content = '';
            // 跳转到首页下的list组件
            this.$router.push('./home/list');
          }
        }
    }
</script>

<style scoped>

</style>
