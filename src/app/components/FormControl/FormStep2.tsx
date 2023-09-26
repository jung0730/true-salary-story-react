import { useForm } from "react-hook-form";
import useFormStore from "@/app/stores/form";
import FormTextarea from "./Textarea";

// label, required, error...
const Form = () => {
  const { setStep, setFormData, formData } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ [x: string]: string }>({});
  const onSubmit = (data) => {
    setStep(3);
    setFormData({...formData, ...data});
  }
  return (
    <form className="px-3 py-6 md:p-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
      <FormTextarea label="工作內容分享・100 積分" sublabel="還記得工作時的情形嗎?不論是工作項目、工作環境、福利條件、花費時間等,都可以在這裡盡情分享。" placeholder="輸入工作內容...." error={errors?.jobDescription?.message} {...register('jobDescription', { required: "This is required." })} />
      <FormTextarea label="建議與資訊・100 積分" sublabel="還有什麼想跟職場後輩說的嗎?給予建議或資訊來幫助後輩們更了解這間公司。" placeholder="輸入建議資訊...." error={errors?.suggestion?.message} {...register('suggestion', { required: "This is required." })} />
      <button type="submit" className="w-full">
        儲存
      </button>
    </form>
  )
}

export default Form;