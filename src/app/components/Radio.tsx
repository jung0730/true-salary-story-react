import clsx from 'clsx';

type RadioProps = {
  onChange: (value: string) => void;
  className?: string;
  value?: string;
};

const Radio = (props: RadioProps) => {
  const { className, onChange, value
  } = props;
  return (
    <input type="radio"
           value={value}
           onChange={(e) => onChange(e.target.value)}
           className={clsx(
            'appearance-none w-[20px] h-[20px] relative after:content-[''] after:absolute after:top-1/2 after:translate-y-[-50%] after:right-0 after:w-[15px] after:h-[15px] after:border after:border-black-6 after:border-solid after:rounded-full checked:after:border-[6px] checked:after:border-blue',
           className,
          )} />
  )
}

export default Radio;