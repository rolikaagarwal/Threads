import MobileNavigation from '@/components/Header/MobileNavigation';
import Navbar from '@/components/Header/Navbar';
import Sidebar from '@/components/Header/Sidebar';
import Protected from '@/components/Providers/Protected';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <MobileNavigation />
      <div className="flex">
        <Protected>
          <Sidebar />
          <div className="flex grow">{children}</div>
        </Protected>
      </div>
    </>
  );
}