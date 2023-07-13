import ThreadCard from "./ThreadCard"

const ThreadFeed:React.FC=()=>{
  return(
    <div className="lg:w-[calc(100%-18rem)] w-full">
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
    </div>
  )
}

export default ThreadFeed;