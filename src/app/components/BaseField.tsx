import clsx from 'clsx';
import BaseFieldLabel from './BaseFieldLabel';
import BaseFieldValue from './BaseFieldValue';
const BaseField = (props) => {
  const { label, value, className } = props;
  return (
    <div className={clsx('flex flex-col', className)}>
      <BaseFieldLabel label={label}></BaseFieldLabel>
      <BaseFieldValue value={value}></BaseFieldValue>
    </div>
  );
};

export default BaseField;
