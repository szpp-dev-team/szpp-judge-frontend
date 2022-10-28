<template>
  <no-login-layout>
    <el-row justify="center">
      <el-col :xs="24" :sm="12">
        <h1>ユーザー登録</h1>
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
          <el-form-item prop="displayName">
            <el-input
              v-model="form.displayName"
              placeholder="表示名 (オプション)"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="パスワード (英数小文字8文字以上)"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loading"
              @click="submitForm(formRef)"
              >ユーザー登録</el-button
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

const formRef = ref<FormInstance>()
const form = reactive({
  username: '',
  displayName: '',
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
  displayName: [
    {
      required: false,
      type: 'string',
      message: '表示名の形式が不正です', // ルールがゆるいので多分この message 出ない
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
      // await auth.login(form.username, form.password)
      router.push({ path: '/' })
    }
  })
}
</script>
