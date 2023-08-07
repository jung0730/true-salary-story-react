'use client'

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

// label, required, error...
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ [x: string]: string }>();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form className="px-3 py-6 md:p-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="公司統一編號" placeholder="請輸入公司統一編號" error={errors?.taxId?.message} {...register('taxId', { required: "This is required." })}/>
      <button type="submit" className="w-full">
        儲存
      </button>
    </form>
  )
}

export default Form;