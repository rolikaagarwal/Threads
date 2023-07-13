import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineWallet,
} from "react-icons/ai";
const Sidebar: React.FC = () => {
  return (
    <>
      <div className="flex mt-10 ">
        <ul className="flex items-center flex-col w-40  py-10 shadow-md shadow-black-light">
          <li className="flex rounded-lg py-4 px-6 font-bold align-middle cursor-pointer hover:text-gray-500 hover:bg-slate-100 ">
            <AiOutlineHome className="mr-4 w-6 h-6" />
            Home
          </li>
          <li className="flex rounded-lg py-4 px-6 font-bold align-middle cursor-pointer hover:text-gray-500 hover:bg-slate-100 ">
            <AiOutlineSearch className="mr-4 w-6 h-6" />
            Search
          </li>
          <li className="flex rounded-lg py-4 px-6 font-bold align-middle cursor-pointer hover:text-gray-500 hover:bg-slate-100 ">
            <AiOutlineWallet className="mr-4 w-6 h-6" />
            Create
          </li>
          <li className="flex rounded-lg py-4 px-6 font-bold align-middle cursor-pointer hover:text-gray-500 hover:bg-slate-100 ">
            <AiOutlineHeart className="mr-4 w-6 h-6" />
            Activity
          </li>
          <li className="flex rounded-lg py-4 px-6 font-bold align-middle cursor-pointer hover:text-gray-500 hover:bg-slate-100 ">
            <AiOutlineUser className="mr-4 w-6 h-6" />
            Profile
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
