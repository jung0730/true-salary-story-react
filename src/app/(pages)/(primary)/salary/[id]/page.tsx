import BaseSection from '@/app/components/BaseSection';
import BaseFieldContainer from '@/app/components/BaseFieldContainer';
import BaseField from '@/app/components/BaseField';
import BaseRow from '@/app/components/BaseRow';
import BaseRowSection from '@/app/components/BaseRowSection';

export default function Page() {
  return (
    <BaseSection>
      <div className="flex flex-col bg-white">
        <div className="sm:p-3 md:p-6 flex flex-col">
          <div className="flex mb-5">
            <div className="w-[48px] h-[48px] flex justify-center items-center rounded bg-blue-light mr-[18px]">
              <span className="icon-sparkle-checked text-3xl text-blue-dark"></span>
            </div>
            <div className="flex flex-col justify-between">
              <h5></h5>
              <div className="flex">
                <div className="caption text-black-6"></div>
                <span className="caption text-black-6 px-3">|</span>
                <div className="caption text-black-6"></div>
                <span className="caption text-black-6 px-3">|</span>
                <div className="caption text-black-6">' 分享'</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-5 border-b border-b-black-1 mb-5">
            <BaseRow className="mb-5">
              <BaseRowSection>
                <BaseFieldContainer>
                  <BaseField label="月薪" value="" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="年薪" value="" />
                </BaseFieldContainer>
              </BaseRowSection>
              <BaseRowSection>
                <BaseFieldContainer>
                  <BaseField label="年終" value="" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="三節" value="" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="分紅" value="" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="其他" value="" />
                </BaseFieldContainer>
              </BaseRowSection>
            </BaseRow>
            <BaseRow>
              <BaseRowSection>
                <BaseFieldContainer>
                  <BaseField label="上班心情" value="" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="加班頻率" value="" />
                </BaseFieldContainer>
              </BaseRowSection>
              <BaseRowSection>
                <BaseFieldContainer>
                  <BaseField label="在職年資" value="" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="個人總年資" value="" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="日均工時" value="" />
                </BaseFieldContainer>
                <BaseFieldContainer>
                  <BaseField label="在職狀況" value="" />
                </BaseFieldContainer>
              </BaseRowSection>
            </BaseRow>
          </div>
          <BaseField label="工作內容" value="" className="mb-5" />
          <BaseField label="其他建議" value="" className="mb-5" />
          <div className="flex sm:flex-col sm:justify-center md:flex-row md:justify-between p-4 bg-blue-light">
            <div className="text-blue sm:pb-3">
              <span>想了解只有員工才知道的職場心聲？</span>
              <br />
              <span>兌換後馬上就能向前輩發問！</span>
            </div>
            {/* <BaseButton v-if="post.isLocked" content="查看完整內容及薪水" @click="emit('view', post.postId)" />
            <BaseButton v-if="!post.isLocked && !isMySalary" content="我要請教" @click="handleCreateConsult">
              <span v-show="loading">...</span>
            </BaseButton> */}
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
