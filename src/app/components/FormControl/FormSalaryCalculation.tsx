import { useState } from 'react';
import FormNumberInput from './FormNumberInput'
import NumberInput from './NumberInput';
import FormRadioButtonStyle from './FormRadioButtonStyle';
import Select from './Select';
import {
  salaryTypesOpions,
  monthOptions,
} from '../../utils/options';

const FormSalaryCalculation = ({ register, errors, getValues, setValue, reset }) => {
  const [select, setSelect] = useState('monthly');
  let yearEndBonus;
  let holidayBonus;
  let profitSharingBonus;
  let otherBonus;
  let monthlySalary;
  let dailySalary;
  let hourlySalary;
  let avgWorkingDaysPerMonth;
  const calculateTotal = () => {
    yearEndBonus = getValues('yearEndBonus')
    holidayBonus = getValues('holidayBonus');
    profitSharingBonus = getValues('profitSharingBonus');
    otherBonus = getValues('otherBonus');
    monthlySalary = getValues('monthlySalary');
    avgWorkingDaysPerMonth = getValues('avgWorkingDaysPerMonth');
    hourlySalary = getValues('hourlySalary');
    let total;
    const bonus = Number(yearEndBonus) + Number(holidayBonus) + Number(profitSharingBonus) + Number(otherBonus);
    if (select === 'monthly') {
      monthlySalary = Number(getValues('monthlySalary')) * 12;
      total = monthlySalary + bonus;
    }
    if (select === 'hourly') {
      hourlySalary = Number(getValues('hourlySalary')) * Number(avgWorkingDaysPerMonth);
      total = hourlySalary + bonus;
    }
    if (select === 'daily') {
      dailySalary = Number(getValues('dailySalary')) * Number(avgWorkingDaysPerMonth);
      total = dailySalary + bonus;
    }
    setValue('total', total)
  }
  const handleSalaryTypeChange = (e) => {
    setSelect(e.target.value);
    reset({
      monthlySalary: '',
      dailySalary: '',
      hourlySalary: '',
      avgWorkingDaysPerMonth: '',
      holidayBonus: '',
      otherBonus: '',
      profitSharingBonus: '',
      yearEndBonus: '',
      total: 0
    })
  }
  return (
    <>
    <FormRadioButtonStyle defaultValue="monthly" options={salaryTypesOpions} title="薪資狀況(新台幣)" error={errors?.salaryTypes?.message} {...register('salaryTypes', { required: "This is required.", onChange: (e) => {handleSalaryTypeChange(e)} })} />
    <div className="mt-4">
    <div className="">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full">
          { select === 'monthly' &&
          <>
            <NumberInput placeholder={'月薪 EX:35000'} {...register('monthlySalary', {onBlur: () => {calculateTotal()}})}/>
            <span className="absolute top-2 right-4 flex items-center pt-2 text-black-6 text-sm">x12月</span>
          </>
          }
          {
            select === 'daily' && <NumberInput placeholder={'日薪 EX:1000'} {...register('dailySalary', {onBlur: () => {calculateTotal()}})}/>
          }
          {
            select === 'hourly' && <NumberInput placeholder={'時薪 EX:176'} {...register('hourlySalary', {onBlur: () => {calculateTotal()}})}/>
          }
        </div>
        { select !== 'monthly' && 
        <div className="md:shrink grow md:w-full flex">
          <div className="w-full">
            <Select options={monthOptions} {...register('avgWorkingDaysPerMonth', {onChange: (e) => {calculateTotal()}})} />
          </div>
        </div>
        }
      </div>
    </div>
    <FormNumberInput placeholder={'年終 EX:12000'} {...register('yearEndBonus', {onBlur: () => {calculateTotal()}})} />
    <FormNumberInput placeholder={'三節'} {...register('holidayBonus', {onBlur: () => {calculateTotal()}})}/>
    <FormNumberInput placeholder={'獎金'} {...register('profitSharingBonus', {onBlur: () => {calculateTotal()}})}/>
    <FormNumberInput placeholder={'其他'} {...register('otherBonus', {onBlur: () => {calculateTotal()}})}/>
    <FormNumberInput defaultValue="0" readOnly="readonly" {...register('total')}/>
    <span className="text-sm text-black-6">若結果數字跟實際有落差，可以點擊數字編輯，但不能低於前項的總和。</span>
  </div>
  </>
  )
}

export default FormSalaryCalculation;