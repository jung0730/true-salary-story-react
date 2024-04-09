'use client';

import clsx from 'clsx';
import Lottie from 'lottie-react';
import infoBlockChart from '@/lotties/infoBlockChart.json';
import infoBlockCheers from '@/lotties/infoBlockCheers.json';
import infoBlockData from '@/lotties/infoBlockData.json';
import infoBlockTalk from '@/lotties/infoBlockTalk.json';

const InfoBlock = () => {
  const infoBlocks = [
    {
      animationData: infoBlockChart,
      title: '不接地氣的「平均薪資」',
      caption:
        '2021 台灣平均經常性薪資為 45,454 新台幣，然而全台灣約有 70% 的受僱者未達到此標準。因此,若只觀察平均數，難以反應真實職場薪資分布。',
      imagePosition: 'left',
    },
    {
      animationData: infoBlockTalk,
      title: '不看官方數字，只看「真實經驗」',
      caption:
        '在台灣，就業市場對於薪資資訊相對封閉，員工更習慣作為個人隱私，在資訊受限的狀況下，爭取個人薪酬福利有如夜路中摸索，難以掌握全局。在真薪話能找到真實經驗分享，除了薪資數字，更有個人工作情形、工作評價等第一手資訊。',
      imagePosition: 'right',
    },
    {
      animationData: infoBlockData,
      title: '為什麼薪資透明會是一件好事？',
      caption:
        '我們想創造公正透明的職場文化。實證指出：薪資策略公開環境下的員工，對工作滿意度、積極性及未來展望都明顯提升，更能明確定位生涯目標。從分享開始改變文化，你可以在真薪話安全暢談你的工作待遇。透過分享，與全台灣 800 萬名工作者一同逐步翻轉現有職場生態。',
      imagePosition: 'left',
    },
    {
      animationData: infoBlockCheers,
      title: '結伴同行的力量',
      caption:
        '眾志成城，最珍貴的是人與人之間的連結。在真薪話，可以直接和產業前輩進行對話，取得最有價值的建議。每個人都有機會成為那盞照亮別人的燈。',
      imagePosition: 'right',
    },
  ];
  return (
    <section className="bg-gray max-[1920px]:overflow-x-hidden sm:py-10 md:py-10 lg:py-20">
      <div className="mx-auto flex flex-col items-center justify-center sm:max-w-[350px] md:max-w-[650px] lg:max-w-[950px]">
        <h2 className="mb-15 sm:hidden md:block lg:block">透過資訊交換 找到更滿意的待遇</h2>

        {infoBlocks.map((block, index) => (
          <div
            key={index}
            className={clsx(
              'flex max-w-[1076px] rounded border-2 border-black-10 bg-white sm:mb-5 sm:flex-col sm:py-5 md:mb-10 md:py-10 lg:mb-10 lg:flex-wrap lg:py-8',
              { 'lg:flex-row-reverse': block.imagePosition === 'left' },
              { 'lg:flex-row': block.imagePosition === 'right' }
            )}
          >
            <div className="mx-auto flex w-full items-start justify-center sm:order-last sm:w-[220px] md:mb-8 md:w-[520px] lg:mb-0 lg:w-2/5">
              <Lottie animationData={block.animationData} />
            </div>
            <div className="flex w-full flex-col items-start justify-center sm:px-6 lg:order-first lg:w-3/5 lg:px-15">
              <h5 className="mb-3 md:hidden lg:hidden">{block.title}</h5>
              <h4 className="mb-5 sm:hidden md:block lg:block">{block.title}</h4>
              <p className="caption text-black-6">{block.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoBlock;
