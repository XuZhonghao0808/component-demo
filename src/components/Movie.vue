<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="120">
    </el-table-column>
    <el-table-column
      prop="img"
      label="图片"
      width="120">
      <template slot-scope="scope">
        <img :src="scope.row.img" alt="" style="width: 100px;height: 100px;">
      </template> 
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios';
export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data : function() {
      return {
        tableData: [{
          id: '1',
          name: '王小虎',
          phone: '123456789',
          email: ''
      }]
      }
    },
    mounted:function(){
        axios.get('/user/getall').then(res => {
          console.log(res);
          this.tableData = res.data.list;
        })
    },
    created:function(){
        // this.$axios.get('/user/getall')
        // .then(res => {
        //   console.log(res.data);
        //     this.tableData = res.data;
        // },function(){
        //     console.log('请求失败处理');
        // });
    }
  }
</script>
