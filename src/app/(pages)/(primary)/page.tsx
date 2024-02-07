import Header from '@/components/Dashboard/Header';

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
// 在fetch 設定{next: {revalidate: 3600}} 沒清除快取
export const revalidate = 3600;
