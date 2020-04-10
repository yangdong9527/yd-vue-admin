<template>
  <div class="menu-container">
    <div class="page-container">
      <my-card title="菜单表格" @reset="getList">
        <template v-slot:header>
          <div class="menu-header">
            <el-button type="primary" size="small" @click="addBtn">新增</el-button>
          </div>
        </template>
        <template v-slot:content>
          <div class="menu-table">
            <el-table :data="list" row-key="id" size="small" :tree-props="{children: 'children'}" v-loading="loading">
              <el-table-column label="菜单名称" prop="title" width="200px"></el-table-column>
              <el-table-column label="类型" prop="type">
                <template v-slot="{row}">
                  <el-tag v-if="row.type === 0" size="small" type="success" effect="dark">目录</el-tag>
                  <el-tag v-if="row.type === 1" size="small" type="warning" effect="dark">菜单</el-tag>
                  <el-tag v-if="row.type === 2" size="small" type="info" effect="dark">按钮</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="图标" prop="icon"></el-table-column>
              <el-table-column label="地址" prop="path"></el-table-column>
              <el-table-column label="权限标识" prop="permission"></el-table-column>
              <el-table-column label="组件地址" prop="component"></el-table-column>
              <el-table-column label="排序" prop="sort"></el-table-column>
              <el-table-column label="是否可见" prop="hidden"></el-table-column>
              <el-table-column label="是否保留目录" prop="alwaysShow"></el-table-column>
              <el-table-column label="创建时间" width="180px" prop="createTime">
                <template v-slot="{row}">{{$moment(row.createTime).format('YYYY-MM-DD HH:mm:ss')}}</template>
              </el-table-column>
              <el-table-column label="操作" fixed="right" width="200px">
                <template v-slot="{row}">
                  <el-button type="warning" size="mini" @click="editBtn(row)">编辑</el-button>
                  <el-button type="danger" size="mini" @click="delBtn(row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </template>
      </my-card>
    </div>

    <dia-form ref="dia" @add="handleAdd" @update="handleUpdate"></dia-form>
  </div>
</template>

<script>
import myCard from "@/components/myCard/index.vue";
import { getMenu, getTree, addMenu, updateMenu,delMenu } from "@/api/system/menu.js";
import {clearEmptyChild, objAValueToBValue} from '@/utils/common.js'
import diaForm from './components/diaForm'
export default {
  name: "sysMenu",
  components: {
    myCard,
    diaForm
  },
  data() {
    return {
      list: [],
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
        const result = await getMenu();
        this.list = result.data;
      } catch (error) {}
      this.loading = false
    },
    async addBtn() {
      await this.getMenuOptions()
      this.$refs.dia.isAdd = true
      this.$refs.dia.showDia = true
    },
    async handleAdd(params) {
      try {
        let result = await addMenu(params)
        if(result.code === 0) {
          this.$notify.success({
            title: result.message
          })
          this.$refs.dia.resetForm()
          this.getList()
        }
      } catch (error) {}
    },
    async editBtn(row) {
      await this.getMenuOptions()
      this.$refs.dia.form = objAValueToBValue(row, this.$refs.dia.form)
      this.$refs.dia.isAdd = false
      this.$refs.dia.showDia = true
    },
    async getMenuOptions() {
      let treeArr = [{id: 0, title: '顶级目录', children: []}]
      try {
        let result = await getTree({type: 1})
        treeArr[0].children = result.data
      } catch (error) {}
      this.$refs.dia.treeArr = clearEmptyChild(treeArr)
    },
    async handleUpdate(params) {
      try {
        let result = await updateMenu(params)
        if(result.code === 0){
          this.$notify.success({title: result.message})
          this.$refs.dia.resetForm()
          this.getList()
        }
      } catch (error) {
        
      }
    },
    delBtn(row) {
      delMenu({id: row.id}).then(res => {
        if(res.code === 0) {
          this.$notify.success({title: res.message})
          this.getList()
        }
      })
    }
  }
};
</script>

<style scoped lang="scss">
.menu-table {
  box-sizing: border-box;
  padding: 15px;
}
</style>
