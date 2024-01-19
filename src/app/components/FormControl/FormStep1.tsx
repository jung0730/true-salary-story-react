import { useForm } from 'react-hook-form';
import useFormStore from '@/app/stores/form';
import {
  cityOptions,
  yearsOfServiceOptions,
  isInServiceOptions,
  employmentTypesOptions,
  overtimeOptions,
  feelingOptions,
} from '../../utils/options';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormRadioButtonStyle from './FormRadioButtonStyle';
import FormSalaryCalculation from './FormSalaryCalculation';
import { useUniformNumbers } from '@/app/services/query';
import { useState } from 'react';

// label, required, error...
const Form = () => {
  const { setStep, setFormData } = useFormStore();
  const [ taxId, setTaxId ] = useState('');
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    resetField,
    getFieldState,
    formState: { errors },
  } = useForm<{ [x: string]: string }>({
    mode: 'onBlur',
    defaultValues: {
      overtime: '3',
      feeling: '3',
      employmentType: '全職',
      isInService: 'N',
      taxId: '123456',
      companyName: 'test',
      title: 'title',
      city: '台北',
      yearsOfService: '10',
      totalYearsOfService: '15',
      salaryTypes: 'monthly',
      otherBonus: '',
      profitSharingBonus: '',
      yearEndBonus: '',
      avgHoursPerDay: '',
      holidayBonus: '',
      avgWorkingDaysPerMonth: '',
      dailySalary: '',
      monthlySalary: '',
      hourlySalary: '',
    },
  });
  const uniformNumbersRegex = /^[0-9]{8}$/;
  const fieldState = getFieldState('taxId');
  let uniformNumbersValue;
  // const { data } = useUniformNumbers(taxId);
  const onSubmit = (data) => {
    setStep(2);
    setFormData(data);
  };
  const searchUniformNumbers = () => {
    const { invalid } = fieldState;
    if (!invalid) {
      uniformNumbersValue = Number(getValues('taxId'));
      // TODO: call api
    };
  };
  const validateTaxId = (taxId: string) => {
    const matchResult = taxId.match(uniformNumbersRegex);
  
    if (matchResult) {
      const idArray = matchResult[0].split('').map(Number);
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
    }
  };
  return (
    <form className="px-3 py-6 md:p-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="公司統一編號" placeholder="請輸入公司統一編號" error={errors?.taxId?.message} {...register('taxId', {
        required: 'This is required.',
        pattern: {
          value: uniformNumbersRegex,
          message: '統一編號需為8碼',
        },
        validate: v => validateTaxId(v) || '統一編號格式不符',
        onBlur: () => { searchUniformNumbers();},
      })} />
      <FormInput label="公司名稱" placeholder="請輸入公司名稱" error={errors?.companyName?.message} {...register('companyName', { required: 'This is required.' })}/>
      <FormInput label="應徵職務" placeholder="請輸入應徵職務" error={errors?.title?.message} {...register('title', { required: 'This is required.' })}/>
      <FormSelect options={cityOptions} title="工作城市" error={errors?.city?.message} {...register('city', { required: 'This is required.' })} />
      <FormSelect options={yearsOfServiceOptions} title="在職年資" error={errors?.yearsOfService?.message} {...register('yearsOfService', { required: 'This is required.' })} />
      <FormSelect options={yearsOfServiceOptions} title="總年資" error={errors?.totalYearsOfService?.message} {...register('totalYearsOfService', { required: 'This is required.' })} />
      <FormRadioButtonStyle defaultValue={getValues('employmentType')} options={employmentTypesOptions} title="職務類別"  error={errors?.employmentType?.message} {...register('employmentType',  { required: 'This is required.' })}/>
      <FormRadioButtonStyle defaultValue={getValues('isInService')} options={isInServiceOptions} title="在職狀況" error={errors?.isInService?.message} {...register('isInService', { required: 'This is required.' })} />
      <FormSalaryCalculation resetField={resetField} setValue={setValue} register={register} errors={errors} getValues={getValues} />
      <FormRadio options={overtimeOptions} title="上班頻率" error={errors?.overtime?.message} {...register('overtime', { required: 'This is required.' })} />
      <FormRadio options={feelingOptions} title="上班狀況" error={errors?.feeling?.message} {...register('feeling', { required: 'This is required.' })} />
      <button type="submit" className="w-full">
        儲存
      </button>
    </form>
  );
};

export default Form;
