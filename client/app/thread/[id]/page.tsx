import { fetchAllThreads } from '@/data/AllThreads';
import ThreadCard from '@/components/ThreadCard';
import { NextPage } from 'next';
import store from '@/Redux/store';
interface Props {
  params: {
    id: string;
  };
}

const Thread: NextPage<Props> = async({ params }) => {
  const threadFeed = store.getState().thread.threadsFeed;
  const threads = threadFeed.length>0 ? threadFeed : await fetchAllThreads()
  const thread = threads.find((thread) => thread.id === params.id)

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
