import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/Fa";
import { BiRepost } from "react-icons/Bi";
import { LiaShareSolid } from "react-icons/Lia";

const ThreadCard: React.FC = () => {
  return (
    <div className="flex m-auto w-1/2 align-center justify-center">
      <div className=" px-5 shadow-lg shadow-black-light ">
        <div className="flex justify-between">
          <div className="flex">
            <Image
              src="/UserProfile1.jpg"
              alt="user profile"
              width={50}
              height={50}
              className="rounded-full mr-3 mt-5"
            />
            <h6 className="mt-5">rolika_agarwal</h6>
          </div>
          <div className="flex">
            <h5 className="mt-5">14h</h5>
            <span className="mt-5 ml-5 mr-5 cursor-pointer">...</span>
          </div>
        </div>
        <p className=" ml-16 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam
          qui earum laboriosam commodi officia quidem quasi voluptatum officiis
          dicta! Expedita at exercitationem, nulla temporibus autem soluta
          laboriosam molestias doloremque, minus cupiditate quo omnis iusto
          inventore architecto est reiciendis distinctio vero quasi rerum velit.
          Fugiat officiis cum doloribus a, tempore veritatis quasi magni
        </p>
        <div className="flex  ml-16 h-10 mt-5 ">
          <AiOutlineHeart className="pr-2 mr-2 text-3xl cursor-pointer" />
          <FaRegComment className="pr-2 mr-2 text-3xl cursor-pointer" />
          <BiRepost className="pr-2 mr-2 text-3xl cursor-pointer" />
          <LiaShareSolid className="pr-2 text-3xl cursor-pointer" />
        </div>
        <div className="mt-5">
          <div className="text-gray-500 ml-1  flex">
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
  );
};
export default ThreadCard;
