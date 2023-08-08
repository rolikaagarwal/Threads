import { fetchAllThreads, AllThreads } from '@/data/AllThreads';
import ThreadCard from '@/components/ThreadCard';
import { NextPage } from 'next';
interface Props {
  params: {
    id: string;
  };
}

const Thread: NextPage<Props> = async({ params }) => {
  const threads: AllThreads[] = await fetchAllThreads();
  const thread = threads.find((thread) => thread.id === params.id);

  if(thread)
  return (
    <>
      <ThreadCard
        id={thread.id}
        caption={thread.caption}
        userName={thread.userName}
      />
    </>
  );
};

export default Thread;
