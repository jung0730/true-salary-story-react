import { getStatistics } from '@/services/server';
import Image from 'next/image';

const Header = async () => {
  const { registeredUsers, publishedPosts } = await getStatistics();
  return (
    <header className="h-auto bg-gray max-[1920px]:overflow-x-hidden">
      <div className="h-full w-full bg-white sm:rounded-b-[60px] lg:rounded-b-[200px]">
        <div className="container mx-auto flex h-full flex-col items-center justify-center sm:max-w-[350px] md:max-w-[600px] lg:max-w-7xl lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-center sm:mt-16 sm:items-center md:mt-32 lg:mb-[277px] lg:mt-64 lg:items-start">
              <div className="sm:hidden md:flex md:flex-col md:items-center lg:block">
                <h2 className="mb-5 text-black-5">有比較才有進步</h2>
                <h1 className="text-blue">最真實的薪水行情</h1>
                <h1 className="mb-10 text-black-10">前輩親自告訴你</h1>
              </div>
              <div className="sm:h-full sm:w-[300px] md:h-full md:w-[500px] lg:h-full lg:w-[416px]">
                <div className="flex-row justify-between sm:hidden md:hidden lg:flex">
                  <div className="flex flex-col items-start justify-center sm:mb-10">
                    <div className="bg-black-10 px-4 py-2 text-white">
                      <h6>薪水情報</h6>
                    </div>
                    <div className="flex justify-end border-2 border-black-10 px-4 py-2">
                      <h3>
                        <span className="text-blue">{publishedPosts}</span> 則
                      </h3>
                    </div>
                  </div>
                  <div className="mb-10 flex flex-col items-start justify-center">
                    <div className="bg-black-10 px-4 py-2 text-white">
                      <h6>可請教的前輩</h6>
                    </div>
                    <div className="flex justify-end border-2 border-black-10 px-4 py-2">
                      <h3>
                        <span className="text-blue">{registeredUsers}</span> 位
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src="/banner.svg" alt="" width={500} height={500}></Image>
        </div>
      </div>
    </header>
  );
};

export default Header;
