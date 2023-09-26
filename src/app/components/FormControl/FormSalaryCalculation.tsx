import { useState } from 'react';
import FormNumberInput from './FormNumberInput'
import NumberInput from './NumberInput';
import FormRadioButtonStyle from './FormRadioButtonStyle';
import Select from './Select';
import {
  salaryTypesOpions,
  monthOptions,
  workingHoursOptions
} from '../../utils/options';

const FormSalaryCalculation = ({ register, errors, getValues, setValue, resetField }) => {
  const [select, setSelect] = useState('monthly');
  let yearEndBonus;
  let holidayBonus;
  let profitSharingBonus;
  let otherBonus;
  let monthlySalary;
  let dailySalary;
  let hourlySalary;
  let avgWorkingDaysPerMonth;
  let avgHoursPerDay;
  const calculateTotal = () => {
    yearEndBonus = getValues('yearEndBonus')
    holidayBonus = getValues('holidayBonus');
    profitSharingBonus = getValues('profitSharingBonus');
    otherBonus = getValues('otherBonus');
    monthlySalary = getValues('monthlySalary');
    avgWorkingDaysPerMonth = getValues('avgWorkingDaysPerMonth');
    hourlySalary = getValues('hourlySalary');
    avgHoursPerDay = getValues('avgHoursPerDay');
    dailySalary = getValues('dailySalary');
    let total;
    let salary;
    const bonus = Number(yearEndBonus) + Number(holidayBonus) + Number(profitSharingBonus) + Number(otherBonus);
    if (select === 'monthly') {
      salary = Number(monthlySalary) * 12;
      total = salary + bonus;
    }
    if (select === 'hourly') {
      salary = Number(hourlySalary) * Number(avgHoursPerDay) * Number(avgWorkingDaysPerMonth);
      total = salary + bonus;
    }
    if (select === 'daily') {
      salary = Number(dailySalary) * Number(avgWorkingDaysPerMonth);
      total = salary + bonus;
    }
    setValue('total', total)
  }
  const handleSalaryTypeChange = (e) => {
    setSelect(e.target.value);
    setValue('total', 0)
    resetField('otherBonus')
    resetField('profitSharingBonus')
    resetField('yearEndBonus')
    resetField('avgHoursPerDay')
    resetField('holidayBonus')
    resetField('avgWorkingDaysPerMonth')
    resetField('dailySalary')
    resetField('hourlySalary')
    resetField('monthlySalary')
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
            <NumberInput placeholder={'月薪 EX:35000'} error={errors?.monthlySalary?.message} {...register('monthlySalary', { pattern: {
                                                                                      value: /^(0|[1-9]\d*)(\.\d+)?$/
                                                                                    },
                                                                                    required: "This is required.",
                                                                                    onBlur: () => {calculateTotal()}})}/>
            <span className="absolute top-2 right-4 flex items-center pt-2 text-black-6 text-sm">x12月</span>
          </>
          }
          {
            select === 'daily' && <NumberInput placeholder={'日薪 EX:1000'} error={errors?.dailySalary?.message} {...register('dailySalary', {
              pattern:{
                value: /^(0|[1-9]\d*)(\.\d+)?$/
              }, 
              required: "This is required.",
              onBlur: () => {calculateTotal()}})}/>
          }
          {
            select === 'hourly' && <NumberInput placeholder={'時薪 EX:176'} error={errors?.hourlySalary?.message} {...register('hourlySalary', {
              pattern:{
                value: /^(0|[1-9]\d*)(\.\d+)?$/
              },
              required: "This is required.",
              onBlur: () => {calculateTotal()}})}/>
          }
        </div>
        { select === 'hourly' && 
        <div className="md:shrink grow md:w-full flex">
          <div className="w-full">
            <Select options={workingHoursOptions} error={errors?.avgHoursPerDay?.message} {...register('avgHoursPerDay', {required: "This is required.", onChange: () => {calculateTotal()}})} />
          </div>
        </div>
        }
        { select !== 'monthly' && 
        <div className="md:shrink grow md:w-full flex">
          <div className="w-full">
            <Select options={monthOptions} error={errors?.avgWorkingDaysPerMonth?.message} {...register('avgWorkingDaysPerMonth', {required: "This is required.", onChange: () => {calculateTotal()}})} />
          </div>
        </div>
        }
      </div>
    </div>
    <FormNumberInput placeholder={'年終 EX:12000'} {...register('yearEndBonus', { pattern:{
                                                                                  value: /^(0|[1-9]\d*)(\.\d+)?$/
                                                                                }, onBlur: () => {calculateTotal()}})} />
    <FormNumberInput placeholder={'三節'} {...register('holidayBonus', { pattern:{
                                                                        value: /^(0|[1-9]\d*)(\.\d+)?$/
                                                                      }, onBlur: () => {calculateTotal()}})}/>
    <FormNumberInput placeholder={'獎金'} {...register('profitSharingBonus',{ pattern:{
                                                                              value: /^(0|[1-9]\d*)(\.\d+)?$/
                                                                            }, onBlur: () => {calculateTotal()}})}/>
    <FormNumberInput placeholder={'其他'} {...register('otherBonus', { pattern:{
                                                                       value: /^(0|[1-9]\d*)(\.\d+)?$/
                                                                     }, onBlur: () => {calculateTotal()}})}/>
    <FormNumberInput defaultValue="0" readOnly="readonly" {...register('total')}/>
    <span className="text-sm text-black-6">若結果數字跟實際有落差，可以點擊數字編輯，但不能低於前項的總和。</span>
  </div>
  </>
  )
}

export default FormSalaryCalculation;