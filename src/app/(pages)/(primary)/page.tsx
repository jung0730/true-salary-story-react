import Header from '../../components/Dashboard/Header';

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Header />
    </>
  );
}
