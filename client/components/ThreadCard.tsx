import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { LiaShareSolid } from "react-icons/lia";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type props = {
  id:string;
  userName:string;
  caption:string;
}
const ThreadCard: React.FC<props> = ({id, userName, caption}) => {
  return (
    <>
      <div className="border-y" id={id}>
        <div className="px-4 relative">
          <div className="border absolute left-8 top-20 bottom-16"></div>
          <div className="flex justify-between">
            <div className="flex">
              <Avatar className="mt-5 mr-5">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h6 className="mt-5">{userName}</h6>
            </div>
            <div className="flex">
              <h5 className="mt-5">14h</h5>
              <span className="mt-5 ml-5 mr-5 cursor-pointer">...</span>
            </div>
          </div>
          <p className="ml-10 sm:ml-14 text-sm">{caption}</p>
          <div className="flex  ml-16 h-10 mt-5">
            <AiOutlineHeart className="pr-2 mr-2 text-3xl cursor-pointer" />
            <FaRegComment className="pr-2 mr-2 text-3xl cursor-pointer" />
            <BiRepost className="pr-2 mr-2 text-3xl cursor-pointer" />
            <LiaShareSolid className="pr-2 text-3xl cursor-pointer" />
          </div>
          <div className="mt-5">
            <div className="text-gray-500 ml-1 flex">
              <Image
                src="/UserProfile1.jpg"
                alt="user"
                height={0}
                width={0}
                className="h-4 w-4 rounded-full"
              ></Image>
              <Image
                src="/UserProfile1.jpg"
                alt="user"
                height={0}
                width={0}
                className="h-7 w-7 mr-3 ml-1 rounded-full"
              ></Image>
              <span className="text-sm"> 21 replies</span>
              <span className="ml-2 mr-2"> . </span>
              <span className="text-sm">159 likes</span>
            </div>
            <div className="">
              <Image
                src="/UserProfile1.jpg"
                alt="user"
                height={0}
                width={0}
                className="ml-5 mb-5 h-3 w-3 rounded-full"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreadCard;
