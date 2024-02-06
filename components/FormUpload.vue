<template>
  <el-form-item :label="label" :prop="propName">
    <el-upload
      class="poster-upload w-full"
      drag
      auto-upload
      :before-upload="beforePosterUpload"
      :on-success="handleAvatarSuccess"
      action="api/add_movie"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip italic">
          jpg/png files with a size less than 1Mb
        </div>
      </template>
    </el-upload>
  </el-form-item>
</template>

<script setup lang="ts">
import { UploadFilled } from "@element-plus/icons-vue";

import type { UploadProps } from "element-plus";

defineProps<{
  label: string;
  propName: string;
}>();

const imageUrl = ref("");

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforePosterUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (
    rawFile.type !== "image/jpeg" &&
    rawFile.type !== "image/jpg" &&
    rawFile.type !== "image/png"
  ) {
    ElMessage.error("Poster picture must be JPG or PNG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 1) {
    ElMessage.error("Poster picture size can not exceed 1MB!");
    return false;
  }
  return true;
};
</script>

<style>
.el-upload {
  --el-upload-dragger-padding-horizontal: 16px;
}
</style>
