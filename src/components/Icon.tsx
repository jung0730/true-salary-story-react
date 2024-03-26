import clsx from 'clsx';
import { AiOutlineDollar } from 'react-icons/ai';
import { AiOutlineSmile } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { AiOutlineFrown } from 'react-icons/ai';
import { AiOutlineFire } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';

type IconProps = {
  icon: string;
  iconClasses?: string;
  size?: number;
};

const getIcon = (iconType: string, iconClass?: string, size: number = 24) => {
  switch (iconType) {
    case 'dollar':
      return <AiOutlineDollar size={size} className={clsx(iconClass)} />;
    case 'smile':
      return <AiOutlineSmile size={size} className={clsx(iconClass)} />;
    case 'frown':
      return <AiOutlineFrown size={size} className={clsx(iconClass)} />;
    case 'time':
      return <AiOutlineFieldTime size={size} className={clsx(iconClass)} />;
    case 'fire':
      return <AiOutlineFire size={size} className={clsx(iconClass)} />;
    case 'star':
      return <AiOutlineStar size={size} className={clsx(iconClass)} />;
    case 'search':
      return <AiOutlineSearch size={size} className={clsx(iconClass)} />;
    case 'message':
      return <AiOutlineMessage size={size} className={clsx(iconClass)} />;
  }
};

const BaseField = (props: IconProps) => {
  const { icon, iconClasses, size } = props;
  return <>{getIcon(icon, iconClasses, size)}</>;
};

export default BaseField;
