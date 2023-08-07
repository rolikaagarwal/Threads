import ThreadCard from "./ThreadCard";
import { fetchAllThreads } from "@/data/AllThreads";
import Link from "next/link";
const fetch = async () => {
  try {
    const data = await fetchAllThreads();
    return data;
  } catch (error) {
    throw error;
  }
};

const ThreadFeed: React.FC = async () => {
  const data = await fetch();
  return (
    <div className="lg:w-[calc(100%-18rem)] w-full">
      {data?.map((thread) => (
        <Link href={`/thread/${thread.id}`} key={thread.id}>
          <ThreadCard id={thread.id} userName={thread.userName} caption= {thread.caption} />
        </Link>
      ))}
     
    </div>
  );
};

export default ThreadFeed;
