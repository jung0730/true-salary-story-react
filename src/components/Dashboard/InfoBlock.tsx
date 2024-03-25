'use client';

import Lottie from 'lottie-react';
import infoBlockChart from '@/lotties/infoBlockChart.json';
import infoBlockCheers from '@/lotties/infoBlockCheers.json';
import infoBlockData from '@/lotties/infoBlockData.json';
import infoBlockTalk from '@/lotties/infoBlockTalk.json';

const InfoBlock = () => {
  return (
    <section className="bg-gray max-[1920px]:overflow-x-hidden sm:py-10 md:py-10 lg:py-20">
      <div className="container mx-auto flex flex-col items-center justify-center sm:max-w-[350px] md:max-w-[600px] lg:max-w-7xl">
        <h2 className="mb-15 sm:hidden md:block lg:block">透過資訊交換 找到更滿意的待遇</h2>

        <div className="flex max-w-[1076px] rounded border-2 border-black-10 bg-white sm:mb-5 sm:flex-col sm:py-5 md:mb-10 md:py-10 lg:mb-10 lg:flex-row lg:flex-wrap lg:py-10">
          <div className="mx-auto flex w-full items-start justify-center sm:mb-8 sm:w-[220px] md:mb-8 md:w-[520px] lg:mb-0 lg:w-2/5">
            <Lottie animationData={infoBlockChart} />
          </div>
          <div className="flex w-full flex-col items-start justify-center sm:px-6 lg:w-3/5 lg:px-15">
            <h5 className="mb-3 md:hidden lg:hidden">不接地氣的「平均薪資」</h5>
            <h4 className="mb-5 sm:hidden md:block lg:block">不接地氣的「平均薪資」</h4>
            <p className="caption text-black-6">
              2021 台灣平均經常性薪資為 45,454 新台幣，然而全台灣約有 70%
              的受僱者未達到此標準。因此,若只觀察平均數，難以反應真實職場薪資分布。
            </p>
          </div>
        </div>

        <div className="flex max-w-[1076px] rounded border-2 border-black-10 bg-white sm:mb-5 sm:flex-col sm:py-5 md:mb-10 md:py-10 lg:mb-10 lg:flex-row lg:flex-wrap lg:py-8">
          <div className="flex w-full flex-col items-start justify-center sm:order-last sm:px-6 lg:order-first lg:w-3/5 lg:px-15">
            <h5 className="mb-3 md:hidden lg:hidden">不看官方數字，只看「真實經驗」</h5>
            <h4 className="mb-5 sm:hidden md:block lg:block">不看官方數字，只看「真實經驗」</h4>
            <p className="caption text-black-6">
              在台灣，就業市場對於薪資資訊相對封閉，員工更習慣作為個人隱私，在資訊受限的狀況下，爭取個人薪酬福利有如夜路中摸索，難以掌握全局。在真薪話能找到真實經驗分享，除了薪資數字，更有個人工作情形、工作評價等第一手資訊。
            </p>
          </div>
          <div className="mx-auto flex w-full items-start justify-center sm:mb-8 sm:w-[220px] md:mb-8 md:w-[520px] lg:mb-0 lg:w-2/5">
            <Lottie animationData={infoBlockTalk}></Lottie>
          </div>
        </div>

        <div className="flex max-w-[1076px] rounded border-2 border-black-10 bg-white sm:mb-5 sm:flex-col sm:py-5 md:mb-10 md:py-10 lg:mb-10 lg:flex-row lg:flex-wrap lg:py-7">
          <div className="mx-auto flex w-full items-start justify-center sm:mb-8 sm:w-[220px] md:mb-8 md:w-[520px] lg:mb-0 lg:w-2/5">
            <Lottie animationData={infoBlockData}></Lottie>
          </div>
          <div className="flex w-full flex-col items-start justify-center sm:px-6 lg:w-3/5 lg:px-15">
            <h5 className="mb-3 md:hidden lg:hidden">為什麼薪資透明會是一件好事？</h5>
            <h4 className="mb-5 sm:hidden md:block lg:block">為什麼薪資透明會是一件好事？</h4>
            <p className="caption text-black-6">
              我們想創造公正透明的職場文化。實證指出：薪資策略公開環境下的員工，對工作滿意度、積極性及未來展望都明顯提升，更能明確定位生涯目標。從分享開始改變文化，你可以在真薪話安全暢談你的工作待遇。透過分享，與全台灣
              800 萬名工作者一同逐步翻轉現有職場生態。
            </p>
          </div>
        </div>

        <div className="flex max-w-[1076px] rounded border-2 border-black-10 bg-white sm:mb-5 sm:flex-col sm:py-5 md:mb-10 md:py-10 lg:mb-10 lg:flex-row lg:flex-wrap lg:py-5">
          <div className="flex w-full flex-col items-start justify-center sm:order-last sm:px-6 lg:order-first lg:w-3/5 lg:px-15">
            <h5 className="mb-3 md:hidden lg:hidden">結伴同行的力量</h5>
            <h4 className="mb-5 sm:hidden md:block lg:block">結伴同行的力量</h4>
            <p className="caption text-black-6">
              眾志成城，最珍貴的是人與人之間的連結。在真薪話，可以直接和產業前輩進行對話，取得最有價值的建議。每個人都有機會成為那盞照亮別人的燈。
            </p>
          </div>
          <div className="mx-auto flex w-full items-start justify-center sm:mb-8 sm:w-[220px] md:mb-8 md:w-[520px] lg:mb-0 lg:w-2/5">
            <Lottie animationData={infoBlockCheers}></Lottie>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
