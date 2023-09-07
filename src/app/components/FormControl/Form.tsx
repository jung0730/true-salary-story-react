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
    setValue,
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
      <FormRadioButtonStyle options={employmentTypesOptions} title="職務類別"  error={errors?.employmentType?.message} {...register('employmentType',  { required: "This is required." })}/>
      <FormRadioButtonStyle options={isInServiceOptions} title="在職狀況" error={errors?.isInService?.message} {...register('isInService', { required: "This is required." })} />
      <FormRadioButtonStyle options={salaryTypesOpions} title="薪資狀況(新台幣)" error={errors?.salaryTypes?.message} {...register('salaryTypes', { required: "This is required." })} />
      <div className="mt-4">
        <div className="md:pl-12">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full">
              <input />
              <span className="text-black-6 text-sm">單位為元</span>
            </div>
            <div className="md:shrink grow md:w-full flex">
              <div className="w-full">
                <select />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-full">
            <input type="number" className="w-full border border-black-1 rounded py-2 pl-4 pr-9"></input>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-full">
            <input type="number" className="w-full border border-black-1 rounded py-2 pl-4 pr-9"></input>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-full">
            <input type="number" className="w-full border border-black-1 rounded py-2 pl-4 pr-9"></input>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-full">
            <input type="number" className="w-full border border-black-1 rounded py-2 pl-4 pr-9"></input>
          </div>
        </div>
        <div className="mt-3">
          <div className="w-full">
            <input type="number" className="w-full border border-black-1 rounded py-2 pl-4 pr-9"></input>
          </div>
        </div>
        <span className="text-sm text-black-6">若結果數字跟實際有落差，可以點擊數字編輯，但不能低於前項的總和。</span>
      </div>
      <FormRadio options={overtimeOptions} title="上班頻率" error={errors?.overtime?.message} {...register('overtime', { required: "This is required." })} />
      <FormRadio options={feelingOptions} title="上班狀況" error={errors?.feeling?.message} {...register('feeling', { required: "This is required." })} />
      <button type="submit" className="w-full">
        儲存
      </button>
    </form>
  )
}

export default Form;