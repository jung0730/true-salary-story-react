import Button from '../Button';

const Message = () => {
  return (
    <div className="relative">
      <Button color="gray-text" icon="message" disabled={true} onClick={() => {}}>
        訊息
      </Button>
      {/* TODO: Message Modal  */}
    </div>
  );
};

export default Message;
