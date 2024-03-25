type PostCardProps = {
  item: {
    [id: string]: string;
  };
};

const PostCard = (props: PostCardProps) => {
  const { item } = props;
  return <div>{item.companyName}</div>;
};

export default PostCard;
