import RightSidebar from '@/components/RightSidebar';
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
