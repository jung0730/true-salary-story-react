import './globals.css';
import Provider from './provider';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '真薪話',
  description: '薪資查詢分享平台',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
