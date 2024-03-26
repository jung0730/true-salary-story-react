import clsx from 'clsx';
import { IconType } from 'react-icons';
import {
  AiOutlineDollar,
  AiOutlineCheckCircle,
  AiOutlineSmile,
  AiOutlineFieldTime,
  AiOutlineFrown,
  AiOutlineFire,
  AiOutlineStar,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineShopping,
} from 'react-icons/ai';

type IconProps = {
  icon: string;
  iconClasses?: string;
  size?: number;
};

const iconComponents: {
  [key: string]: IconType;
} = {
  dollar: AiOutlineDollar,
  smile: AiOutlineSmile,
  frown: AiOutlineFrown,
  time: AiOutlineFieldTime,
  fire: AiOutlineFire,
  star: AiOutlineStar,
  search: AiOutlineSearch,
  message: AiOutlineMessage,
  shop: AiOutlineShopping,
  check: AiOutlineCheckCircle,
};

const getIcon = (iconType: string, iconClasses: string = '', size: number = 24) => {
  const IconComponent = iconComponents[iconType];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent size={size} className={clsx(iconClasses)} />;
};

const BaseField = (props: IconProps) => {
  const { icon, iconClasses, size } = props;
  return <>{getIcon(icon, iconClasses, size)}</>;
};

export default BaseField;
