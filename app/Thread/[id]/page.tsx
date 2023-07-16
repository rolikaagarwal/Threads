import { fetchAllThreads, AllThreads } from "@/data/AllThreads";
import ThreadCard from "@/components/ThreadCard";

interface Props {
  params: {
    id: string;
  };
}

const Thread: React.FC<Props> = ({ params }) => {
  const fetchThread = async () => {
    const threads: AllThreads[] = await fetchAllThreads();
    const thread = threads.find((thread) => thread.id === params.id);

    if (thread) {
      return (
        <div className="ml-0 sm:ml-[12rem]">
          <ThreadCard
            id={thread.id}
            caption={thread.caption}
            userName={thread.userName}
          />
        </div>
      );
    }

    return <p>Thread not found.</p>;
  };

  return fetchThread();
};

export default Thread;
