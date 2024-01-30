import clsx from 'clsx';
import { colors } from '@/components/Button/constants';
import Link from 'next/link';

type LinkProps = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colors;
  href: string;
};

const BaseLink = (props: LinkProps) => {
  const { children, className, color, href, ...rest } = props;
  const classes = colors[color ?? 'primary'];
  return (
    <Link href={href} className={clsx('duration-300 ease-in-out transition', className, classes)} {...rest}>
      {children}
    </Link>
  );
};

export default BaseLink;
