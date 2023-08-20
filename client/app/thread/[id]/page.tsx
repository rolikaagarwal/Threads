import { fetchAllThreads, AllThreads } from '@/data/AllThreads';
import ThreadCard from '@/components/ThreadCard';
import { NextPage } from 'next';
import store from '@/Redux/store';
interface Props {
  params: {
    id: string;
  };
}

const Thread: NextPage<Props> = async({ params }) => {
  // const threads: AllThreads[] = await fetchAllThreads();
  const threads = store.getState().threads.threads
  const thread = threads.find((thread) => thread.id === params.id);
  console.log(threads,thread)

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
