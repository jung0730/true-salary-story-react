import { useForm } from 'react-hook-form';
import useFormStore from '@/stores/form';
import FormTextarea from './FormTextarea';
import { usePostSalary } from '@/services/mutation';
import { SubmitPostForStep2 } from '@/types/salary';
import { useRouter } from 'next/navigation';

const FormStep2 = () => {
  const { setFormData, formData, setResult } = useFormStore();
  const { mutate } = usePostSalary();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitPostForStep2>({
    mode: 'onBlur',
    defaultValues: {
      jobDescription: '',
      suggestion: '',
    },
  });
  const onSubmit = async (data: SubmitPostForStep2) => {
    const mergedData = { ...formData, ...data };
    setFormData(mergedData);
    mutate(mergedData, {
      onSuccess: (data) => {
        setResult(data);
        router.push('/submitted');
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormTextarea
        label="工作內容分享・100 積分"
        sublabel="還記得工作時的情形嗎?不論是工作項目、工作環境、福利條件、花費時間等,都可以在這裡盡情分享。"
        placeholder="輸入工作內容...."
        error={errors?.jobDescription?.message}
        {...register('jobDescription', { required: '工作內容分享為必填欄位' })}
      />
      <FormTextarea
        label="建議與資訊・100 積分"
        sublabel="還有什麼想跟職場後輩說的嗎?給予建議或資訊來幫助後輩們更了解這間公司。"
        placeholder="輸入建議資訊...."
        error={errors?.suggestion?.message}
        {...register('suggestion', { required: '建議與資訊為必填欄位' })}
      />
      <button
        type="submit"
        className="mx-auto flex rounded bg-blue fill-white px-5 py-3 text-white transition duration-300 ease-in-out hover:bg-black-10"
      >
        儲存
      </button>
    </form>
  );
};

export default FormStep2;
