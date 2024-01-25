import { getStatistics } from '@/services/query/api/salary';
import Image from 'next/image';

const Header = async () => {
  const { registeredUsers, publishedPosts } = await getStatistics();
  return (
    <header className="bg-gray h-auto max-[1920px]:overflow-x-hidden">
      <div className="w-full h-full bg-white sm:rounded-b-[60px] lg:rounded-b-[200px]">
        <div className="container h-full mx-auto sm:max-w-[350px] md:max-w-[600px] lg:max-w-7xl flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/2 md:w-1/1">
            <div className="flex flex-col justify-center sm:items-center lg:items-start sm:mt-16 md:mt-32 lg:mt-64 lg:mb-[277px]">
              <div className="banner-info sm:hidden md:flex md:flex-col md:items-center lg:block">
                <h2 className="title text-black-5 mb-5">有比較才有進步</h2>
                <h1 className="title text-blue">最真實的薪水行情</h1>
                <h1 className="title text-black-10 mb-10">前輩親自告訴你</h1>
              </div>
              <div className="search-input sm:w-[300px] sm:h-full md:w-[500px] md:h-full lg:w-[416px] lg:h-full">
                <div className="count-number flex-row justify-between sm:hidden md:hidden lg:flex">
                  <div className="flex flex-col justify-center items-start sm:mb-10">
                    <div className="bg-black-10 text-white py-2 px-4">
                      <h6>薪水情報</h6>
                    </div>
                    <div className="border-2 border-black-10 py-2 px-4 flex justify-end">
                      <h3>
                        <span className="text-blue">{publishedPosts}</span> 則
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start mb-10">
                    <div className="bg-black-10 text-white py-2 px-4">
                      <h6>可請教的前輩</h6>
                    </div>
                    <div className="border-2 border-black-10 py-2 px-4 flex justify-end">
                      <h3>
                        <span className="text-blue">{registeredUsers}</span> 位
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full lg:w-1/2">
            <div className="banner">
              <Image src="/banner.svg" alt="" width={500} height={500}></Image>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
