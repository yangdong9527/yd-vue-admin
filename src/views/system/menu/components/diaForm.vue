<template>
  <div>
    <el-dialog
      width="640px"
      append-to-body
      :visible.sync="showDia"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :title="isAdd ? '新增菜单' : '修改菜单'"
    >
      <el-form ref="form" :rules="rules" :model="form" size="small" label-width="80px" :inline="true">
        <el-form-item label="菜单类型" style="width: 100%" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio-button
              v-for="item in typeOptions"
              :key="item.type"
              :label="item.type"
            >{{item.label}}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="父级是谁" prop="pid">
          <treeselect
            v-model="form.pid"
            style="width: 400px"
            placeholder="请选择父级"
            :options="treeArr"
            :normalizer="normalizer"
          ></treeselect>
        </el-form-item>
        <el-form-item label="菜单名称" prop="title">
          <el-input v-model="form.title" placeholder="菜单名称"></el-input>
        </el-form-item>
        <el-form-item label="菜单图标" v-if="form.type !== 2" prop="icon">
          <el-input v-model="form.icon" placeholder="图标"></el-input>
        </el-form-item>
        <template v-if="form.type !== 2">
          <el-form-item label="路由名称" prop="name">
            <el-input v-model="form.name" placeholder="路由名称"></el-input>
          </el-form-item>
          <el-form-item label="路由地址" prop="path">
            <el-input v-model="form.path" placeholder="路由地址 例如: user"></el-input>
          </el-form-item>
        </template>
        <template v-if="form.type === 1">
          <el-form-item label="组件地址" prop="component">
            <el-input v-model="form.component" placeholder="组件在项目中地址 例如: system/menu/index"></el-input>
          </el-form-item>
        </template>
        <template v-if="form.type !== 0">
          <el-form-item label="权限标识" prop="permission">
            <el-input v-model="form.permission" placeholder="权限的标识"></el-input>
          </el-form-item>
        </template>
        <el-form-item label="菜单排序" style="width: 160px" prop="sort">
          <el-input-number v-model="form.sort" controls-position="right" :min="1" style="width: 80px"></el-input-number>
        </el-form-item>
        <template v-if="form.type !== 2">
          <el-form-item label="是否隐藏" style="width: 170px" prop="hidden">
            <el-radio-group v-model="form.hidden">
              <el-radio-button :label="1">是</el-radio-button>
              <el-radio-button :label="0">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否一直显示" label-width="100px" style="width: 190px" prop="alwaysShow">
            <el-radio-group v-model="form.alwaysShow">
              <el-radio-button :label="1">是</el-radio-button>
              <el-radio-button :label="0">否</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </template>
      </el-form>
      <span slot="footer">
        <el-button size="small" @click="handleClose">取消</el-button>
        <el-button size="small" type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "diaForm",
  components: {
    Treeselect
  },
  data() {
    return {
      showDia: false,
      treeArr: [],
      form: {
        id: "",
        title: "",
        icon: "",
        sort: 1,
        path: "",
        component: "",
        hidden: false,
        permission: "",
        alwaysShow: true,
        pid: null,
        type: 0
      },
      typeOptions: [
        { type: 0, label: "目录" },
        { type: 1, label: "菜单" },
        { type: 2, label: "按钮" }
      ],
      isAdd: true,
      rules: {
        pid: [{ required: true, message: '请选择父级', trigger: 'change'}],
        title: [{ required: true, message: '请输入菜单名称', trigger: 'blur'}],
        name : [{ required: true, message: '请输入路由名称', trigger: 'blur'}],
        path :[{ required: true, message: '请输入路由地址', trigger: 'blur'}],
        component :[{ required: true, message: '请输入组件路径', trigger: 'blur'}]
      }
    };
  },
  methods: {
    handleClose(done) {
      this.resetForm()
    },
    resetForm(){
      this.showDia = false
      this.$refs['form'].resetFields()
      this.form.id= ''
      this.form.icon = ''
      this.form.name = ''
      this.form.path = ''
      this.form.component = ''
      this.form.permission = ''
      this.form.hidden = false
      this.form.alwaysShow = true
    },
    normalizer(node) {
      return {
        id: node.id,
        label: node.title,
        children: node.children
      };
    },
    confirm() {
      this.$refs.form.validate(bool => {
        if(bool) {
          if(this.isAdd) {
            this.$emit('add', this.form)
          }else {
            this.$emit('update', this.form)
          }
        }
      })
    }
  }
};
</script>

<style scoped lang="scss">
</style>
