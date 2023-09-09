import { useState } from 'react';
import FormNumberInput from './FormNumberInput'
import NumberInput from './NumberInput';
import FormRadioButtonStyle from './FormRadioButtonStyle';
import Select from './Select';
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

const FormSalaryCalculation = ({ register, errors }) => {
  const [select, setSelect] = useState('');
  const handleChange = (e) => {
    setSelect(e.target.value)
  }
  return (
    <>
    <FormRadioButtonStyle options={salaryTypesOpions} title="薪資狀況(新台幣)" error={errors?.salaryTypes?.message} {...register('salaryTypes', { required: "This is required." })} onChange={handleChange} />
    <div className="mt-4">
    <div className="">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full">
          { select === 'monthly' &&
          <>
            <NumberInput placeholder={'月薪 EX:35000'} {...register('monthlySalary')} />
            <span className="absolute top-2 right-4 flex items-center pt-2 text-black-6 text-sm">x12月</span>
          </>
          }
          {
            select === 'daily' && <NumberInput placeholder={'日薪 EX:1000'} {...register('dailySalary')} />
          }
          {
            select === 'hourly' && <NumberInput placeholder={'時薪 EX:176'} {...register('hourlySalary')} />
          }
        </div>
        { select !== 'monthly' && 
        <div className="md:shrink grow md:w-full flex">
          <div className="w-full">
            <Select options={monthOptions} {...register('totalYearsOfService', { required: "This is required." })} />
          </div>
        </div>
        }
      </div>
    </div>
    <FormNumberInput placeholder={'年終 EX:12000'} {...register('yearEndBonus')} />
    <FormNumberInput placeholder={'三節'} {...register('holidayBonus')}/>
    <FormNumberInput placeholder={'獎金'} {...register('profitSharingBonus')}/>
    <FormNumberInput placeholder={'其他'} {...register('otherBonus')}/>
    <FormNumberInput {...register('total')}/>
    <span className="text-sm text-black-6">若結果數字跟實際有落差，可以點擊數字編輯，但不能低於前項的總和。</span>
  </div>
  </>
  )
}

export default FormSalaryCalculation;