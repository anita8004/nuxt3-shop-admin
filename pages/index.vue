<script lang="ts" setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

definePageMeta({
  layout: 'un-login',
  title: 'Login'
})

const router = useRouter()

const schema = toTypedSchema(
  yup.object({
    account: yup.string().required(),
    password: yup.string().required()
  })
)

const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    account: 'test001',
    password: '12341234'
  },
});

const elPlusConfig = (state) => ({
  props: {
    validateEvent: false,
    error: state.errors[0],
    required: state.required,
  },
});

const [account, accountProps] = defineField('account', elPlusConfig);
const [password, passwordProps] = defineField('password', elPlusConfig);

const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values);
  router.push({ path: '/dashboard' })
});

</script>

<template>
  <div class="card">
    <header class="card__header mb-6 text-center">
      <Icon class="text-5xl mb-2" name="fluent:building-shop-20-regular" />
      <h1 class="text-base">Shop Admin</h1>
    </header>
    <el-form label-position="top" @submit="onSubmit">
      <el-form-item v-bind="accountProps" label="Account">
        <el-input v-model="account" />
      </el-form-item>
      <el-form-item v-bind="passwordProps" label="Password">
        <el-input v-model="password" />
      </el-form-item>
      <div>
        <el-button class="w-full" type="primary" native-type="submit" size="large">Submit</el-button>
      </div>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 500px;
  max-width: 90%;
  margin: auto;
  padding: 5% 2%;
}
</style>
