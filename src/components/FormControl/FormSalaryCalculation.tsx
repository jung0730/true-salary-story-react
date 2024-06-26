import FormNumberInput from './FormNumberInput';
import NumberInput from '../NumberInput';
import FormRadioButtonStyle from './FormRadioButtonStyle';
import Select from './Select';
import { salaryTypesOpions, monthOptions, workingHoursOptions } from '@/utils/options';

const FormSalaryCalculation = (props: any) => {
  const { register, errors, getValues, setValue, resetField } = props;
  let yearEndBonus;
  let holidayBonus;
  let profitSharingBonus;
  let otherBonus;
  let monthlySalary;
  let dailySalary;
  let hourlySalary;
  let avgWorkingDaysPerMonth;
  let avgHoursPerDay;
  const salaryTypes = getValues('salaryTypes');
  const calculateTotal = () => {
    yearEndBonus = getValues('yearEndBonus');
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
    if (salaryTypes === 'monthly') {
      salary = Number(monthlySalary) * 12;
      total = salary + bonus;
    }
    if (salaryTypes === 'hourly') {
      salary = Number(hourlySalary) * Number(avgHoursPerDay) * Number(avgWorkingDaysPerMonth) * 12;
      total = salary + bonus;
    }
    if (salaryTypes === 'daily') {
      salary = Number(dailySalary) * Number(avgWorkingDaysPerMonth) * 12;
      total = salary + bonus;
    }
    setValue('yearlySalary', total);
  };
  const handleSalaryTypeChange = () => {
    setValue('yearlySalary', 0);
    resetField('otherBonus');
    resetField('profitSharingBonus');
    resetField('yearEndBonus');
    resetField('avgHoursPerDay');
    resetField('holidayBonus');
    resetField('avgWorkingDaysPerMonth');
    resetField('dailySalary');
    resetField('hourlySalary');
    resetField('monthlySalary');
  };
  return (
    <>
      <FormRadioButtonStyle
        defaultValue={salaryTypes}
        options={salaryTypesOpions}
        title="薪資狀況(新台幣)"
        error={errors?.salaryTypes?.message}
        {...register('salaryTypes', {
          required: '薪資狀況(新台幣)為必填欄位',
          onChange: () => {
            handleSalaryTypeChange();
          },
        })}
      />
      <div className="mt-4">
        <div>
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full">
              {salaryTypes === 'monthly' && (
                <>
                  <NumberInput
                    placeholder={'月薪 EX:35000'}
                    error={errors?.monthlySalary?.message}
                    {...register('monthlySalary', {
                      required: '月薪為必填欄位',
                      onBlur: () => {
                        calculateTotal();
                      },
                    })}
                  />
                  <span className="absolute right-4 top-2 flex items-center pt-2 text-sm text-black-6">x12月</span>
                </>
              )}
              {salaryTypes === 'daily' && (
                <NumberInput
                  placeholder={'日薪 EX:1000'}
                  error={errors?.dailySalary?.message}
                  {...register('dailySalary', {
                    required: '日薪為必填欄位',
                    onBlur: () => {
                      calculateTotal();
                    },
                  })}
                />
              )}
              {salaryTypes === 'hourly' && (
                <NumberInput
                  placeholder={'時薪 EX:176'}
                  error={errors?.hourlySalary?.message}
                  {...register('hourlySalary', {
                    required: '時薪為必填欄位',
                    onBlur: () => {
                      calculateTotal();
                    },
                  })}
                />
              )}
            </div>
            {salaryTypes === 'hourly' && (
              <div className="flex grow md:w-full md:shrink">
                <div className="w-full">
                  <Select
                    options={workingHoursOptions}
                    error={errors?.avgHoursPerDay?.message}
                    {...register('avgHoursPerDay', {
                      required: '每日平均工時為必填欄位',
                      onChange: () => {
                        calculateTotal();
                      },
                    })}
                  />
                </div>
              </div>
            )}
            {salaryTypes !== 'monthly' && (
              <div className="flex grow md:w-full md:shrink">
                <div className="w-full">
                  <Select
                    options={monthOptions}
                    error={errors?.avgWorkingDaysPerMonth?.message}
                    {...register('avgWorkingDaysPerMonth', {
                      required: '每月平均工時為必填欄位',
                      onChange: () => {
                        calculateTotal();
                      },
                    })}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <FormNumberInput
          placeholder={'年終 EX:12000'}
          {...register('yearEndBonus', {
            onBlur: () => {
              calculateTotal();
            },
          })}
        />
        <FormNumberInput
          placeholder={'三節'}
          {...register('holidayBonus', {
            onBlur: () => {
              calculateTotal();
            },
          })}
        />
        <FormNumberInput
          placeholder={'獎金'}
          {...register('profitSharingBonus', {
            onBlur: () => {
              calculateTotal();
            },
          })}
        />
        <FormNumberInput
          placeholder={'其他'}
          {...register('otherBonus', {
            onBlur: () => {
              calculateTotal();
            },
          })}
        />
        <FormNumberInput defaultValue="0" readOnly="readonly" {...register('yearlySalary')} />
        <span className="text-sm text-black-6">若結果數字跟實際有落差，可以點擊數字編輯，但不能低於前項的總和。</span>
      </div>
    </>
  );
};

export default FormSalaryCalculation;
