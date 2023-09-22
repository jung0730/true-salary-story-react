'use client'

import { useForm } from "react-hook-form";
import {
  cityOptions,
  yearsOfServiceOptions,
  workingHoursOptions,
  isInServiceOptions,
  employmentTypesOptions,
  salaryTypesOpions,
  monthOptions,
  overtimeOptions,
  feelingOptions,
  tagsOptions,
} from '../../utils/options';
import FormInput from "./FormInput";
import FormRadio from './FormRadio';
import FormSelect from "./FormSelect";
import FormRadioButtonStyle from './FormRadioButtonStyle';
import FormSalaryCalculation from "./FormSalaryCalculation";

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
      <FormInput label="公司名稱" placeholder="請輸入公司名稱" error={errors?.companyName?.message} {...register('companyName', { required: "This is required." })}/>
      <FormInput label="應徵職務" placeholder="請輸入應徵職務" error={errors?.title?.message} {...register('title', { required: "This is required." })}/>
      <FormSelect options={cityOptions} title="工作城市" error={errors?.city?.message} {...register('city', { required: "This is required." })} />
      <FormSelect options={yearsOfServiceOptions} title="在職年資" error={errors?.yearsOfService?.message} {...register('yearsOfService', { required: "This is required." })} />
      <FormSelect options={yearsOfServiceOptions} title="總年資" error={errors?.totalYearsOfService?.message} {...register('totalYearsOfService', { required: "This is required." })} />
      <FormRadioButtonStyle defaultValue="全職" options={employmentTypesOptions} title="職務類別"  error={errors?.employmentType?.message} {...register('employmentType',  { required: "This is required." })}/>
      <FormRadioButtonStyle defaultValue="Y" options={isInServiceOptions} title="在職狀況" error={errors?.isInService?.message} {...register('isInService', { required: "This is required." })} />
      <FormSalaryCalculation register={register} errors={errors}/>
      <FormRadio options={overtimeOptions} title="上班頻率" error={errors?.overtime?.message} {...register('overtime', { required: "This is required." })} />
      <FormRadio options={feelingOptions} title="上班狀況" error={errors?.feeling?.message} {...register('feeling', { required: "This is required." })} />
      <button type="submit" className="w-full">
        儲存
      </button>
    </form>
  )
}

export default Form;