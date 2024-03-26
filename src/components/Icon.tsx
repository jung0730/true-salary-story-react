import clsx from 'clsx';
import { AiOutlineDollar } from 'react-icons/ai';
import { AiOutlineSmile } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { AiOutlineFrown } from 'react-icons/ai';
import { AiOutlineFire } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

type IconProps = {
  icon: string;
  iconClasses?: string;
  size?: number;
};

const getIcon = (iconType: string, iconClass?: string, size: number = 9) => {
  const defaultClasses = `w-${size} h-${size}`;
  switch (iconType) {
    case 'dollar':
      return <AiOutlineDollar className={clsx(iconClass, defaultClasses)} />;
    case 'smile':
      return <AiOutlineSmile className={clsx(iconClass, defaultClasses)} />;
    case 'frown':
      return <AiOutlineFrown className={clsx(iconClass, defaultClasses)} />;
    case 'time':
      return <AiOutlineFieldTime className={clsx(iconClass, defaultClasses)} />;
    case 'fire':
      return <AiOutlineFire className={clsx(iconClass, defaultClasses)} />;
    case 'star':
      return <AiOutlineStar className={clsx(iconClass, defaultClasses)} />;
  }
};

const BaseField = (props: IconProps) => {
  const { icon, iconClasses, size } = props;
  return <>{getIcon(icon, iconClasses, size)}</>;
};

export default BaseField;
