<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const movieFormRef = ref<FormInstance>();

const checkYear = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input movie's year"));
  } else if (!Number.isInteger(value)) {
    return callback(new Error("Movie's year must be as digits"));
  } else {
    callback();
  }
};

const validateText = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    callback();
  }
};

const movieForm = reactive({
  title: "",
  director: "",
  poster: "",
  year: null as number | null,
});

const rules = reactive<FormRules<typeof movieForm>>({
  title: [{ required: true, validator: validateText, trigger: "blur" }],
  director: [{ required: true, validator: validateText, trigger: "blur" }],
  year: [{ required: true, validator: checkYear, trigger: "blur" }],
  poster: [{ required: true, message: "Please upload the movie poster" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <h2 class="text-xl text-center">Add a movie</h2>
    <el-form
      ref="movieFormRef"
      :model="movieForm"
      :rules="rules"
      size="large"
      label-width="5rem"
      status-icon
      class="max-w-1/2 w-full mx-auto"
    >
      <el-form-item label="Title" prop="title">
        <el-input v-model="movieForm.title" type="text" />
      </el-form-item>
      <el-form-item label="Director" prop="director">
        <el-input v-model="movieForm.director" type="text" />
      </el-form-item>
      <el-form-item label="Year" prop="year">
        <el-input v-model.number="movieForm.year" />
      </el-form-item>
      <FormUpload label="Poster" propName="poster" />
      <el-form-item>
        <el-button type="primary" @click="submitForm(movieFormRef)"
          >Add movie</el-button
        >
        <el-button @click="resetForm(movieFormRef)">Reset fields</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
