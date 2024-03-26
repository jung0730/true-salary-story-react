import clsx from 'clsx';
import BaseFieldLabel from './BaseFieldLabel';
import BaseFieldValue from './BaseFieldValue';
import Icon from '@/components/Icon';

type BaseFieldProps = {
  label: string;
  value: string | number;
  className?: string;
  icon?: string;
  iconClasses?: string;
};

const BaseField = (props: BaseFieldProps) => {
  const { label, value, className, icon, iconClasses } = props;
  return (
    <>
      {icon && <Icon icon={icon} iconClasses={iconClasses} />}
      <div className={clsx('flex flex-col', className)}>
        <BaseFieldLabel label={label}></BaseFieldLabel>
        <BaseFieldValue value={value}></BaseFieldValue>
      </div>
    </>
  );
};

export default BaseField;
