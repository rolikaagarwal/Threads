import RightSidebar from '@/components/Header/RightSidebar';
import ThreadFeed from '@/components/ThreadFeed';

export default function Home() {
  return (
    <>
      <main className="relative">
        <ThreadFeed />
        <RightSidebar />
      </main>
    </>
  );
}
