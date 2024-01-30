'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import BaseSection from '@/components/Salary/BaseSection';
import BaseFieldContainer from '@/components/Salary/BaseFieldContainer';
import BaseField from '@/components/Salary/BaseField';
import BaseRow from '@/components/Salary/BaseRow';
import BaseRowSection from '@/components/Salary/BaseRowSection';
import { useSalaryInfo } from '@/services/query';
import useSalaryStore from '@/stores/salary';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { notFound } from 'next/navigation';
import Button from '@/components/Button';

export default function Page() {
  const params = useParams();
  const { post, setPost } = useSalaryStore();
  const { id } = params;
  const { data } = useSalaryInfo(id);
  useEffect(() => {
    if (data) {
      if (data?.postId) {
        setPost(data);
      } else {
        notFound();
      }
    }
  }, [data, setPost]);
  const getSalaryTitle = () => {
    if (post.type === 'monthly') {
      return '月薪';
    }
    if (post.type === 'daily') {
      return '日薪';
    }
    return '時薪';
  };
  const getSalary = () => {
    if (post.type === 'monthly') {
      return post.monthlySalary;
    }
    if (post.type === 'daily') {
      return post.dailySalary;
    }
    return post.hourlySalary;
  };
  const getFeelingIcon = () => {
    switch (post.feeling) {
      case '有苦說不出':
      case '想換工作了':
        return 'frown';
      default:
        return 'smile';
    }
  };
  const convertNumberRange = (value: number) => {
    const number = Number(value);
    let text = '-';
    let range = 0;
    if (number >= 100000) {
      // 若為六位數，範圍間距為 10k
      range = 10000;
    } else if (number >= 1000 && number < 100000) {
      // 若為四、五位數，範圍間距為 1k
      range = 1000;
    }

    let max = Math.ceil(number / range); // ceil 回傳大於等於所給數字的最大整數
    const min = Math.floor(number / range); // floor 回傳小於等於所給數字的最大整數
    max = min === max ? (max += 1) : max; // 若為整數 (例 40000) 依上述寫法會變成 40-40k， 則將上限加 1k 變為 40-41k

    if (number >= 100000) {
      text = `${min * 10} - ${max * 10}k`;
    } else if (number >= 1000 && number < 100000) {
      text = `${min} - ${max}k`;
    } else if (number > 0 && number < 1000) {
      text = '低於 1k';
    }
    return text;
  };
  return (
    <BaseSection>
      <div className="flex flex-col bg-white">
        <div className="sm:p-3 md:p-6 flex flex-col">
          <div className="flex mb-5">
            <div className="w-[48px] h-[48px] flex justify-center items-center rounded bg-blue-light mr-[18px]">
              <AiOutlineCheckCircle className="w-[40px] h-[40px] text-blue-dark" />
            </div>
            <div className="flex flex-col justify-between">
              <h5>
                {post.companyName} | {post.title}
              </h5>
              <div className="flex">
                <div className="caption text-black-6">{post.employmentType}</div>
                <span className="caption text-black-6 px-3">|</span>
                <div className="caption text-black-6">{post.city}</div>
                <span className="caption text-black-6 px-3">|</span>
                <div className="caption text-black-6">{post.createDate + ' 分享'}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-5 border-b border-b-black-1 mb-5">
            <BaseRow className="mb-5">
              <BaseRowSection>
                <BaseFieldContainer>
                  <BaseField
                    label={getSalaryTitle()}
                    value={post.isLocked ? '兌換後顯示' : convertNumberRange(getSalary())}
                    icon="dollar"
                    iconClasses="text-blue"
                  />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField
                    label="年薪"
                    value={post.isLocked ? '兌換後顯示' : convertNumberRange(post.yearlySalary)}
                    icon="dollar"
                    iconClasses="text-blue"
                  />
                </BaseFieldContainer>
              </BaseRowSection>
              <BaseRowSection>
                <BaseFieldContainer>
                  <BaseField label="年終" value={post.isLocked ? '??' : convertNumberRange(post.yearEndBonus)} />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="三節" value={post.isLocked ? '??' : convertNumberRange(post.holidayBonus)} />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="分紅" value={post.isLocked ? '??' : convertNumberRange(post.profitSharingBonus)} />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="其他" value={post.isLocked ? '??' : convertNumberRange(post.otherBonus)} />
                </BaseFieldContainer>
              </BaseRowSection>
            </BaseRow>
            <BaseRow>
              <BaseRowSection>
                <BaseFieldContainer>
                  <BaseField label="上班心情" value={post.feeling} icon={getFeelingIcon()} iconClasses="text-green" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="加班頻率" value={post.overtime} icon="time" iconClasses="text-green" />
                </BaseFieldContainer>
              </BaseRowSection>
              <BaseRowSection>
                <BaseFieldContainer>
                  <BaseField label="在職年資" value={post.workYears > 0 ? `${post.workYears}年` : '未滿1年'} />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField
                    label="個人總年資"
                    value={post.totalWorkYears > 0 ? `${post.totalWorkYears}年` : '未滿1年'}
                  />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="日均工時" value={post.avgHoursPerDay + '小時'} />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="在職狀況" value={post.inService ? '仍在職' : '已離職'} />
                </BaseFieldContainer>
              </BaseRowSection>
            </BaseRow>
          </div>
          <BaseField label="工作內容" value={post.jobDescription} className="mb-5" />
          <BaseField label="其他建議" value={post.suggestion} className="mb-5" />
          <div className="flex sm:flex-col sm:justify-center md:flex-row md:justify-between p-4 bg-blue-light">
            <div className="text-blue sm:pb-3">
              <span>想了解只有員工才知道的職場心聲？</span>
              <br />
              <span>兌換後馬上就能向前輩發問！</span>
            </div>
            <Button onClick={() => {}}>查看完整內容及薪水</Button>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
