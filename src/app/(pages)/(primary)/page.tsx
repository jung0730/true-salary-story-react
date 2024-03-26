import Header from '@/components/Dashboard/Header';
import InfoBlock from '@/components/Dashboard/InfoBlock';
import PopularPostBlock from '@/components/Dashboard/PopularPostBlock';
import BaseFooter from '@/components/BaseFooter';

export default function Home() {
  return (
    <>
      <Header />
      <InfoBlock />
      <PopularPostBlock />
      <BaseFooter />
    </>
  );
}
