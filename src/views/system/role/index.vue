<template>
  <div class="page-container">
    <my-card title="角色列表" @reset="getList">
      <template #header>
        <div class="padding-bar">
          <el-button size="small" type="primary" @click="addBtn">新增</el-button>
        </div>
      </template>
      <template v-slot:content>
        <div class="padding-bar">
          <el-table :data="list" size="small" v-loading="loading">
            <el-table-column label="角色名称" prop="name"></el-table-column>
            <el-table-column label="角色类型" prop="type">
              <template v-slot="{row}">
                <span v-if="row.type === 0">超管</span>
                <span v-if="row.type === 1">游客</span>
                <span v-if="row.type === 2">自定义</span>
              </template>
            </el-table-column>
            <el-table-column label="角色等级" prop="level"></el-table-column>
            <el-table-column label="创建时间" prop="createTime" width="200px">
              <template v-slot="{row}">
                <span>{{$moment(row.createTime).format('YYYY-MM-DD HH:mm:ss')}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="180px" fixed="right">
              <template v-slot="{row}">
                <el-button type="warning" size="mini" @click="editBtn(row)">编辑</el-button>
                <el-button type="danger" size="mini" @click="delBtn(row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
      <template v-slot:footer>
        <div class="padding-bar">
          <pagination :total="total" :pageNum="page.pageNum" :pageSize="page.pageSize" @pagination="handlePagination"></pagination>
        </div>
      </template>
    </my-card>

    <roleDia ref="dia" @add="handleAdd" @update="handleUpdate"></roleDia>
  </div>
</template>

<script>
import myCard from "@/components/myCard/index";
import pagination from '@/components/pagination/index'
import roleApi from "@/api/system/role.js";
import roleDia from "./components/roleDia.vue";
import { objAValueToBValue } from '@/utils/common.js'
export default {
  name: "role",
  components: {
    myCard,
    roleDia,
    pagination
  },
  data() {
    return {
      list: [],
      total: 0,
      page: {
        pageNum: 1,
        pageSize: 10
      },
      loading: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.loading = true
      try {
        let params = this.page
        const result = await roleApi.getRole(params);
        this.list = result.data;
        this.total = result.count;
      } catch (error) {}
      this.loading = false
    },
    async addBtn() {
      try {
        let result = await roleApi.getTree({ type: 2 });
        this.$refs.dia.tree = result.data;
      } catch (error) {}
      this.$refs.dia.isAdd = true;
      this.$refs.dia.showDia = true;
    },
    async handleAdd(params) {
      let result = await roleApi.addRole(params);
      if (result.code === 0) {
        this.$notify.success({ title: result.message });
        this.$refs.dia.resetForm();
        this.getList();
      }
    },
    async editBtn(row) {
      try {
        let result = await roleApi.getTree({ type: 2 });
        this.$refs.dia.tree = result.data;
      } catch (error) {}
      this.$refs.dia.isAdd = false
      this.$refs.dia.form = objAValueToBValue(row, this.$refs.dia.form)
      if(row.type === 2) this.$refs.dia.setTree(row.menus)
      this.$refs.dia.showDia = true
    },
    async handleUpdate(params) {
      let result= await roleApi.update(params)
      if(result.code === 0) {
        this.$notify.success({title: result.message})
        this.$refs.dia.resetForm()
        this.getList()
      }
    },
    async delBtn(row) {
      const result = await roleApi.delRole({id: row.id})
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
};
</script>

<style scoped lang="scss">
.role-table {
  padding: 10px 15px;
  box-sizing: border-box;
}
.role-header {
  padding: 10px 15px;
  box-sizing: border-box;
}
.role-footer {
  padding: 10px 15px;
  box-sizing: border-box;
}
</style>
