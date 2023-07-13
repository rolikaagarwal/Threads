import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Header/Sidebar";
import ThreadCard from "@/components/Header/ThreadCard";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <RightSidebar />
      <ThreadCard />
    </main>
  );
}

