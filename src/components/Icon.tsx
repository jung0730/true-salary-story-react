import clsx from 'clsx';
import { AiOutlineDollar } from 'react-icons/ai';
import { AiOutlineSmile } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { AiOutlineFrown } from 'react-icons/ai';
import { AiOutlineFire } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';

type IconProps = {
  icon: string;
  iconClasses?: string;
  size?: number;
};

// interface IconComponents {
//   [key: string]: React.ComponentType<{ size: number; className?: string }>;
// }

// const iconComponents: IconComponents = {
//   dollar: AiOutlineDollar,
//   smile: AiOutlineSmile,
//   frown: AiOutlineFrown,
//   time: AiOutlineFieldTime,
//   fire: AiOutlineFire,
//   star: AiOutlineStar,
//   search: AiOutlineSearch,
//   message: AiOutlineMessage,
//   shop: AiOutlineShopping
// };

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
