<template>
  <div class="page-container">
    <myCard title="用户列表" @reset="getList">
      <template #header>
        <div class="padding-bar">
          <el-button type="primary" size="small" @click="addBtn" v-checkbtn="'user:add'">新增</el-button>
        </div>
      </template>
      <template #content>
        <div class="padding-bar">
          <el-table :data="list" size="small" v-loading="loading">
            <el-table-column label="用户昵称" prop="nickName"></el-table-column>
            <el-table-column label="用户邮箱" prop="email"></el-table-column>
            <el-table-column label="用户角色" prop="roleName"></el-table-column>
            <el-table-column label="创建时间" prop="createTime">
              <template v-slot="{row}">
                <span>{{$moment(row.createTime).format('YYYY-MM-DD HH:mm:ss')}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template v-slot="{row}">
                <el-button type="warning" size="mini" @click="editBtn(row)" v-checkbtn="'user:edit'">编辑</el-button>
                <el-button type="danger" size="mini" @click="delBtn(row)" v-checkbtn="'user:delete'">删除</el-button>
              </template> 
            </el-table-column>
          </el-table>
        </div>
      </template>
      <template #footer>
        <div class="padding-bar">
          <pagination :total="total" :pageSize="page.pageSize" :pageNum="page.pageNum" @pagination="handlePagination"></pagination>
        </div>
      </template>
    </myCard>
    <diaForm ref="dia" @add="handleAdd" @update="handleUpdate"></diaForm>
  </div>
</template>

<script>
import myCard from '@/components/myCard/index'
import pagination from '@/components/pagination/index'
import diaForm from './components/diaForm'
import user from '@/api/system/user'
import { objAValueToBValue } from '@/utils/common.js'
export default {
  name: 'user',
  components: {
    myCard,
    diaForm,
    pagination
  },
  data() {
    return {
      list: [],
      total: 0,
      loading: false,
      page: {
        pageSize: 10,
        pageNum: 1
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.loading = true
      try {
        const result = await user.getUser(this.page)
        this.list = result.data
        this.total = result.count
      } catch (error) {}
      this.loading = false
    },
    async addBtn() {
      const result = await user.getRole()
      this.$refs.dia.isAdd = true
      this.$refs.dia.roleOptions = result.data
      this.$refs.dia.showDia = true
    },
    async handleAdd(params) {
      const result = await user.addUser(params)
      if(result.code === 0) {
        this.$notify.success({title: result.message})
        this.$refs.dia.resetForm()
        this.getList()
      }
    },
    async handleUpdate(params) {
      const result = await user.updateUser(params)
      if(result.code === 0) {
        this.$notify.success({title: result.message})
        this.$refs.dia.resetForm()
        this.getList()
      }
    },
    async editBtn(row) {
      const result = await user.getRole()
      this.$refs.dia.isAdd = false
      this.$refs.dia.roleOptions = result.data
      this.$refs.dia.form = objAValueToBValue(row, this.$refs.dia.form)
      this.$refs.dia.showDia = true
    },
    async delBtn(row) {
      const result = await user.delUser({id: row.id})
      if(result.code === 0) {
        this.$notify.success({title: result.message})
        this.getList()
      }
    },
    handlePagination(obj) {
      this.page = obj
      this.getList()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
