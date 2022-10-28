<template>
  <no-login-layout>
    <el-row justify="center">
      <el-col :xs="24" :sm="12">
        <h1>ログイン</h1>
        <el-form
          ref="formRef"
          :model="form"
          :rules="rules"
          label-width="auto"
          label-position="top"
        >
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              autofocus
              placeholder="ユーザー名"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="パスワード"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loading"
              @click="submitForm(formRef)"
              >ログイン</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </no-login-layout>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import router from '~/router'
import useAuthStore from '~/stores/authStore'
import { login } from '~/api/auth'

const formRef = ref<FormInstance>()
const form = reactive({
  username: '',
  password: ''
})
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      type: 'string',
      message: 'ユーザー名を入力してください',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      type: 'string',
      message: 'パスワードを入力してください',
      trigger: 'blur'
    }
  ]
})
// TODO: useFetch などのフックを使ってここで loading のフラグ管理などをするのをやめる
const loading = ref(false)

const auth = useAuthStore()

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async (valid, _) => {
    if (valid) {
      loading.value = true
      await auth.saveAuth(
        {
          username: 'hoge',
          displayName: 'hoge'
        },
        'xxxxxxxxxxxx'
      )
      //await login(form.username, form.password)
      router.push({ path: '/' })
    }
  })
}
</script>
