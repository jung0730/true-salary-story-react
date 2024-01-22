import clsx from 'clsx';
import BaseFieldLabel from './BaseFieldLabel';
import BaseFieldValue from './BaseFieldValue';
import { AiOutlineDollar } from 'react-icons/ai';
import { AiOutlineSmile } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { AiOutlineFrown } from 'react-icons/ai';

const getIcon = (iconType: string, iconClass?: string) => {
  const defaultClasses = 'w-[36px] h-[36px] mr-2';
  switch (iconType) {
    case 'dollar':
      return <AiOutlineDollar className={clsx(iconClass, defaultClasses)} />;
    case 'smile':
      return <AiOutlineSmile className={clsx(iconClass, defaultClasses)} />;
    case 'frown':
      return <AiOutlineFrown className={clsx(iconClass, defaultClasses)} />;
    case 'time':
      return <AiOutlineFieldTime className={clsx(iconClass, defaultClasses)} />;
  }
};

const BaseField = (props) => {
  const { label, value, className, icon, iconClasses } = props;
  return (
    <>
      {icon && getIcon(icon, iconClasses)}
      <div className={clsx('flex flex-col', className)}>
        <BaseFieldLabel label={label}></BaseFieldLabel>
        <BaseFieldValue value={value}></BaseFieldValue>
      </div>
    </>
  );
};

export default BaseField;
