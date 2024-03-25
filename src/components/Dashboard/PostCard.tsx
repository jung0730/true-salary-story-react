import Icon from '@/components/Icon';

type PostCardProps = {
  item: {
    postId: string;
    title: string;
    companyName: string;
    overtime: string;
    feeling: string;
  };
  cate: string;
};

const PostCard = (props: PostCardProps) => {
  const { item, cate } = props;
  const { title, companyName, overtime, feeling } = item;
  const getClassName = (value: string) => {
    switch (value) {
      case '準時上下班':
      case '很少加班':
      case '非常開心':
      case '還算愉快':
        return 'green';
      case '偶爾加班':
      case '平常心':
        return 'yellow';
      case '常常加班':
      case '賣肝拼經濟':
      case '有苦說不出':
      case '想換工作了':
        return 'red';
      default:
        return '';
    }
  };

  const overtimeClass = getClassName(overtime);
  const feelingClass = getClassName(feeling);
  const getFeelingIcon = () => {
    switch (feeling) {
      case '有苦說不出':
      case '想換工作了':
        return 'frown';
      default:
        return 'smile';
    }
  };

  return (
    <div className="flex min-w-[257px] cursor-pointer border border-black-1 transition duration-150 ease-in-out hover:shadow-card sm:w-[318px] sm:flex-col md:w-[572px] md:flex-row lg:w-[408px] lg:max-w-[416px]">
      <div
        className={`flex fill-white px-3 text-white sm:flex-row sm:justify-start sm:py-2 md:flex-col md:items-center md:justify-center md:py-5 ${cate === 'top' ? 'bg-blue' : 'bg-black-10'}`}
      >
        {/* TODO: 加入Icon */}
        <span
          className={`icon-${cate === 'top' ? 'star-circle-fill' : 'fire'} mr-1.5 mt-0.5 text-sm md:m-0 md:mb-1`}
        ></span>
        <div className="flex text-center text-sm font-light leading-4 tracking-wide sm:flex-row md:flex-col">
          <span>{cate === 'top' ? '精' : '最'}</span>
          <span>{cate === 'top' ? '選' : '新'}</span>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center truncate sm:p-3 md:p-5">
        <h6 className="mb-1 truncate">{title}</h6>
        <div className="caption mb-3 truncate text-black-6">{companyName}</div>

        <div className="flex items-center justify-start">
          <div
            className={`caption border border-${overtimeClass} text-${overtimeClass} flex items-center justify-center rounded-full px-3 py-1 sm:me-1 md:me-2`}
          >
            <span className="ms-1">{overtime}</span>
          </div>

          <div
            className={`caption border border-${feelingClass} text-${feelingClass} flex items-center justify-center rounded-full px-3 py-1 sm:me-1 md:me-2`}
          >
            {getFeelingIcon() && <Icon icon={getFeelingIcon()} iconClasses={`text-${feelingClass}`} size={4} />}
            <span className="ms-1">{feeling}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
