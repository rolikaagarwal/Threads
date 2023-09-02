import MobileNavigation from '@/components/Header/MobileNavigation';
import Sidebar from '@/components/Header/Sidebar';
import Protected from '@/components/Providers/Protected';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
