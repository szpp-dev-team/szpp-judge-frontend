<template>
  <el-upload
    ref="fileUploadRef"
    action=""
    :auto-upload="false"
    list-type="text"
    accept="file"
    :limit="1"
    v-model:file-list="uploadFiles"
    :on-change="onFileInputChange"
    :disabled="readyToSubmit"
  >
    <el-button type="primary">
      <el-icon class="el-icon--left"><i-ep-upload /></el-icon>
      ファイルを選択
    </el-button>
    <template #tip>
      <div class="el-upload__tip text-red">
        アップロードできるファイルは1度につき1つまでです。2つ選択しようとすると古いほうが置き換えられますのでご注意ください。
      </div>
    </template>
  </el-upload>
  <el-button type="success" @click="submit" :disabled="!readyToSubmit">
    {{ readyToSubmit ? '提出' : 'ファイルが選択されていません' }}
  </el-button>
</template>

<script setup lang="ts">
import type {
  UploadFile,
  UploadFiles,
  UploadInstance,
  UploadUserFile
} from 'element-plus'
import { reactive, ref } from 'vue'
import { SubmitPayload } from '~/model/submits'
import { Sb3ToCppConverter } from '~/utils/scratch2cpp'

const { taskId, contestId } = defineProps<{
  taskId: number
  contestId: number
}>()

const submitPayload = reactive<SubmitPayload>({
  taskId,
  contestId,
  languageId: '',
  sourceCode: ''
})

const uploadFiles = ref<UploadUserFile[]>([])
const fileUploadRef = ref<UploadInstance>()

const readyToSubmit = ref(false)

async function onFileInputChange(uploadFile: UploadFile, _: UploadFiles) {
  if (!uploadFile.raw) return

  const fileRaw = uploadFile.raw
  if (uploadFile.name.endsWith('.sb3')) {
    const converter = new Sb3ToCppConverter()
    try {
      submitPayload.sourceCode = await converter.convertFromZip(fileRaw)
      updateReadyState()
    } catch (err) {
      alert(`Scratch3 プロジェクトを変換中にエラーが発生しました\n${err}`)
    }
  } else {
    uploadFiles.value = []
    alert('拡張子が .sb3 で終わるファイルのみ受け付けます')
  }
}

function updateReadyState() {
  if (uploadFiles.value.length !== 1) readyToSubmit.value = false
  else if (!uploadFiles.value[0].name.endsWith('.sb3'))
    readyToSubmit.value = false
  else readyToSubmit.value = true
}

function submit() {
  fileUploadRef.value!.submit()
}
</script>
