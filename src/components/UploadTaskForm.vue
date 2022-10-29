<template>
  <el-upload
    ref="fileUploadRef"
    action=""
    :auto-upload="false"
    list-type="text"
    accept="file"
    v-model:file-list="fileList"
    :limit="1"
    :on-change="onFileInputChange"
    :on-exceed="onExceed"
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
import {
  genFileId,
  UploadFile,
  UploadFiles,
  UploadInstance,
  UploadProps,
  UploadRawFile,
  UploadUserFile
} from 'element-plus'
import { reactive, ref } from 'vue'
import { submitTask } from '~/api/submits'
import { SubmitPayload } from '~/model/submits'
import { Sb3ToCppConverter } from '~/utils/scratch2cpp'

const { taskId, contestId } = defineProps<{
  taskId: number
  contestId: number
}>()

const submitPayload = reactive<SubmitPayload>({
  taskId,
  contestId,
  languageId: 'cpp', // cpp 固定
  sourceCode: ''
})

const fileList = ref<UploadUserFile[]>([])
const fileUploadRef = ref<UploadInstance>()

const readyToSubmit = ref(false)

async function onFileInputChange(uploadFile: UploadFile, _: UploadFiles) {
  if (!uploadFile.raw) return

  const fileRaw = uploadFile.raw
  if (uploadFile.name.endsWith('.sb3')) {
    const converter = new Sb3ToCppConverter()
    try {
      submitPayload.sourceCode = await converter.convertFromZip(fileRaw)
    } catch (err) {
      alert(`Scratch3 プロジェクトを変換中にエラーが発生しました\n${err}`)
    } finally {
      updateReadyState()
    }
  } else {
    fileUploadRef.value && fileUploadRef.value.clearFiles()
    alert('拡張子が .sb3 で終わるファイルのみ受け付けます')
    updateReadyState()
  }
}

const onExceed: UploadProps['onExceed'] = (files) => {
  if (fileUploadRef.value) {
    fileUploadRef.value.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    fileUploadRef.value.handleStart(file)
    updateReadyState()
  }
}

function updateReadyState() {
  if (!fileList.value || fileList.value.length !== 1) {
    readyToSubmit.value = false
  } else if (!fileList.value[0].name.endsWith('.sb3')) {
    readyToSubmit.value = false
  } else {
    readyToSubmit.value = true
  }
}

async function submit() {
  try {
    if (submitPayload.sourceCode.length > 0) {
      await submitTask(submitPayload)
    }
  } catch (err: unknown) {
    alert(`提出に失敗 ${(err as Error).message}`)
  } finally {
    updateReadyState()
  }
  console.debug('submit() was called')
  console.debug('submitPayload', submitPayload)
}
</script>
