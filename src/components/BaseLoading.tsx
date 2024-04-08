import styles from './BaseLoading.module.css';
import clsx from 'clsx';

const BaseLoading = () => {
  return <span className={clsx('w-3 h-3 rounded-full block mx-auto my-4 relative text-white', styles.loader)}></span>;
};

export default BaseLoading;
