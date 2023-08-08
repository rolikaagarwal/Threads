import Navbar from '@/components/Header/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Header/Sidebar';
import MobileNavigation from '@/components/Header/MobileNavigation';
import { ThemeProvider } from '@/components/ui/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <MobileNavigation />
          <div className="flex">
            <Sidebar />
            <div>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}