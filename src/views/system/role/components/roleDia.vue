<template>
  <div>
    <el-dialog
    width="750px"
    append-to-body
    :visible.sync="showDia"
    :before-close="beforeClose"
    :close-on-click-modal="false"
    :title="isAdd ? '新增角色' : '编辑角色'">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form :model="form" ref="form" size="small" label-width="auto" :rules="rules">
            <el-form-item label="角色名称" prop="name">
              <el-input v-model="form.name" placeholder="请输入角色名称"></el-input>
            </el-form-item>
            <el-form-item label="角色类型" prop="type">
              <el-select v-model="form.type" placeholder="请选择角色类型">
                <el-option label="超管" :value="0"></el-option>
                <el-option label="游客" :value="1"></el-option>
                <el-option label="自定义" :value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="角色等级" prop="level">
              <el-input-number v-model="form.level" controls-position="right" :min="1"></el-input-number>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="14">
          <myCard title="角色权限" titleHeight="30">
            <template #content>
              <div v-if="form.type === 0" style="height: 50px; text-align: center; line-height: 50px">超管默认给予所有权限</div>
              <div v-if="form.type === 1" style="height: 50px; text-align: center; line-height: 50px">游客默认给予所有查看权限</div>
              <div v-if="form.type === 2" class="tree">
                <el-tree
                ref="tree"
                node-key="id"
                show-checkbox
                :data="tree"
                :props="treeProp"
                :check-strictly="true"
                ></el-tree>
              </div>
            </template>
          </myCard>
        </el-col>
      </el-row>
      <span slot="footer">
        <el-button size="small" @click="resetForm">取消</el-button>
        <el-button size="small" type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import myCard from '@/components/myCard/index'
export default {
  name: 'roleDia',
  components: {
    myCard
  },
  data() {
    return {
      isAdd: true,
      showDia: false,
      form: {
        id: '',
        name: '',
        type: 0,
        level: 1,
        menus: []
      },
      tree: [],
      treeProp: {
        label: 'title'
      },
      rules: {
        name: { required: true, message: '请输入角色名称', trigger: 'blur' },
        type: { required: true, message: '请选择类型', trigger: 'change' },
        level: { required: true, message: '', trigger: 'blur' }
      }
    }
  },
  methods: {
    beforeClose(done) {
      this.resetForm()
      done()
    },
    resetForm() {
      this.showDia = false
      this.$refs.form.resetFields()
      this.form.id = ''
      this.form.menus = []
    },
    setTree(arr) {
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(arr)
      })
    },
    confirm() {
      this.$refs.form.validate(bool => {
        if(bool) {
          if(this.form.type === 2) {
            this.form.menus = this.$refs.tree.getCheckedKeys()
          }
          if(this.isAdd) {
            this.$emit('add', this.form)
          }else {
            this.$emit('update', this.form)
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.tree {
  padding: 10px 8px;
  box-sizing: border-box;
}
</style>
