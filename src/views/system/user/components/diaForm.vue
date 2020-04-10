<template>
  <div>
    <el-dialog :visible.sync="showDia" :title="isAdd? '新增用户' : '编辑用户'" width="600px" :close-on-click-modal="false" :before-close="beforeClose" append-to-body>
      <el-form :model="form" ref="form" size="small" :inline="true">
        <el-form-item label="用户昵称" prop="nickName" style="width: 260px">
          <el-input v-model="form.nickName" placeholder="请输入用户名称" style="width: 180px"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="email" style="width: 260px">
          <el-input v-model="form.email" placeholder="请输入用户邮箱" style="width: 180px"></el-input>
        </el-form-item>
        <el-form-item label="分配角色" prop="roleId">
          <el-select v-model="form.roleId" style="width: 180px">
            <el-option v-for="item in roleOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button size="small" @click="resetForm">取消</el-button>
        <el-button size="small" type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'userDia',
  data() {
    return {
      isAdd: true,
      showDia: false,
      roleOptions: [],
      form: {
        id: '',
        nickName: '',
        email: '',
        roleId: null
      }
    }
  },
  methods: {
    beforeClose(done) {
      done()
      this.resetForm()
    },
    resetForm() {
      this.showDia = false
      this.$refs.form.resetFields()
      this.form.id = ''
    },
    confirm() {
      if(this.isAdd) {
        this.$emit('add', this.form)
      }else {
        this.$emit('update', this.form)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
