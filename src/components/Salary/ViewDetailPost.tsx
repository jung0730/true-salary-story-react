'use client';
import Button from '../Button';

const ViewDetailPost = () => {
  return (
    <div className="flex bg-blue-light p-4 sm:flex-col sm:justify-center md:flex-row md:justify-between">
      <div className="text-blue sm:pb-3">
        <span>想了解只有員工才知道的職場心聲？</span>
        <br />
        <span>兌換後馬上就能向前輩發問！</span>
      </div>
      <Button onClick={() => {}}>查看完整內容及薪水</Button>
    </div>
  );
};

export default ViewDetailPost;