import { useForm } from 'react-hook-form';
import useFormStore from '@/stores/form';
import {
  cityOptions,
  yearsOfServiceOptions,
  isInServiceOptions,
  employmentTypesOptions,
  overtimeOptions,
  feelingOptions,
} from '@/utils/options';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormRadioButtonStyle from './FormRadioButtonStyle';
import FormSalaryCalculation from './FormSalaryCalculation';
import { useUniformNumbers } from '@/services/query';
import { useState } from 'react';
import type { SubmitPostForStep1 } from '@/types/salary';

const FormStep1 = () => {
  const { setStep, setFormData } = useFormStore();
  const [taxId, setTaxId] = useState(0);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    resetField,
    getFieldState,
    formState: { errors },
  } = useForm<SubmitPostForStep1>({
    mode: 'onBlur',
    defaultValues: {
      overtime: '3',
      feeling: '3',
      employmentType: '全職',
      inService: 'Y',
      taxId: '',
      companyName: '',
      title: '資深工程師',
      city: '台北',
      workYears: '2',
      totalWorkYears: '4',
      otherBonus: '',
      profitSharingBonus: '',
      yearEndBonus: '',
      avgHoursPerDay: '',
      holidayBonus: '',
      avgWorkingDaysPerMonth: '',
      dailySalary: '',
      monthlySalary: '',
      hourlySalary: '',
      salaryTypes: 'monthly',
    },
  });
  const uniformNumbersRegex = /^[0-9]{8}$/;
  const fieldState = getFieldState('taxId');
  let uniformNumbersValue;
  const { data } = useUniformNumbers(taxId);
  if (data?.isExist) {
    setValue('companyName', data.companyName);
  }
  const onSubmit = (data: SubmitPostForStep1) => {
    const convertData = {
      overtime: Number(data.overtime),
      feeling: Number(data.feeling),
      employmentType: data.employmentType,
      inService: data.inService === 'Y',
      taxId: data.taxId,
      companyName: data.companyName,
      title: data.title,
      city: data.city,
      workYears: Number(data.workYears),
      totalWorkYears: Number(data.totalWorkYears),
      otherBonus: (data.otherBonus && Number(data.otherBonus)) || null,
      profitSharingBonus: (data.profitSharingBonus && Number(data.profitSharingBonus)) || null,
      yearEndBonus: (data.yearEndBonus && Number(data.yearEndBonus)) || null,
      avgHoursPerDay: (data.avgHoursPerDay && Number(data.avgHoursPerDay)) || null,
      holidayBonus: (data.holidayBonus && Number(data.holidayBonus)) || null,
      avgWorkingDaysPerMonth: (data.avgWorkingDaysPerMonth && Number(data.avgWorkingDaysPerMonth)) || null,
      dailySalary: (data.dailySalary && Number(data.dailySalary)) || null,
      monthlySalary: (data.monthlySalary && Number(data.monthlySalary)) || null,
      hourlySalary: (data.hourlySalary && Number(data.hourlySalary)) || null,
    };
    setStep(2);
    setFormData(convertData);
  };
  const searchUniformNumbers = () => {
    const { invalid } = fieldState;
    if (!invalid) {
      uniformNumbersValue = Number(getValues('taxId'));
      setTaxId(uniformNumbersValue);
    }
  };
  const validateTaxId = (taxId: string) => {
    const idArray = taxId.split('').map(Number);
    const weight = [1, 2, 1, 2, 1, 2, 4, 1];
    let sum = 0;

    for (let i = 0; i < idArray.length; i++) {
      const p = idArray[i] * weight[i];
      const s = Math.floor(p / 10) + (p % 10);
      sum += s;
    }

    const checkNumber = 5;
    const isLegal = sum % checkNumber === 0 || ((sum + 1) % checkNumber === 0 && idArray[6] === 7);
    return isLegal;
  };
  return (
    <form className="px-3 py-6 md:p-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="公司統一編號8碼(ex: 12228473)"
        placeholder="請輸入公司統一編號"
        error={errors?.taxId?.message}
        {...register('taxId', {
          required: '統一編號為必填欄位',
          pattern: {
            value: uniformNumbersRegex,
            message: '統一編號需為8碼',
          },
          validate: (v) => validateTaxId(v) || '統一編號格式不符',
          onBlur: () => {
            searchUniformNumbers();
          },
        })}
      />
      <FormInput
        label="公司名稱"
        disabled
        placeholder="請輸入公司名稱"
        error={errors?.companyName?.message}
        {...register('companyName', { required: '公司名稱為為必填欄位' })}
      />
      <FormInput
        label="應徵職務"
        placeholder="請輸入應徵職務"
        error={errors?.title?.message}
        {...register('title', { required: '應徵職務為必填欄位' })}
      />
      <FormSelect
        options={cityOptions}
        title="工作城市"
        error={errors?.city?.message}
        {...register('city', { required: '工作城市為必填欄位' })}
      />
      <FormSelect
        options={yearsOfServiceOptions}
        title="在職年資"
        error={errors?.workYears?.message}
        {...register('workYears', { required: '在職年資為必填欄位' })}
      />
      <FormSelect
        options={yearsOfServiceOptions}
        title="總年資"
        error={errors?.totalWorkYears?.message}
        {...register('totalWorkYears', { required: '總年資為必填欄位' })}
      />
      <FormRadioButtonStyle
        defaultValue={getValues('employmentType')}
        options={employmentTypesOptions}
        title="職務類別"
        error={errors?.employmentType?.message}
        {...register('employmentType', { required: '職務類別為必填欄位' })}
      />
      <FormRadioButtonStyle
        defaultValue={getValues('inService')}
        options={isInServiceOptions}
        title="在職狀況"
        error={errors?.inService?.message}
        {...register('inService', { required: '在職狀況為必填欄位' })}
      />
      <FormSalaryCalculation
        resetField={resetField}
        setValue={setValue}
        register={register}
        errors={errors}
        getValues={getValues}
      />
      <FormRadio
        options={overtimeOptions}
        title="上班頻率"
        error={errors?.overtime?.message}
        {...register('overtime', { required: '上班頻率為必填欄位' })}
      />
      <FormRadio
        options={feelingOptions}
        title="上班狀況"
        error={errors?.feeling?.message}
        {...register('feeling', { required: '上班狀況為必填欄位' })}
      />
      <button type="submit" className="w-full">
        儲存
      </button>
    </form>
  );
};

export default FormStep1;
