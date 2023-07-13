import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineWallet,
} from "react-icons/ai";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "../ui/card";
const Sidebar: React.FC = () => {
  return (
    <>
      <Card className="flex mt-8 w-48 ">
        <ul className="flex items-center flex-col w-40 py-10">
          <li className="flex mb-6">
            <Button variant="ghost">
              <div className="flex items-center">
                <AiOutlineHome className="w-6 h-6 mr-2.5" />
                <span >Home</span>
              </div>
            </Button>
          </li>
          <li className="flex mb-6">
            <Button variant="ghost">
              <div className="flex items-center">
                <AiOutlineSearch className="w-6 h-6 mr-2.5" />
                <span >Search</span>
              </div>
            </Button>
          </li>
          <li className="flex mb-6">
            <Button variant="ghost">
              <div className="flex items-center">
                <AiOutlineWallet className="w-6 h-6 mr-2.5" />
                <span>Create</span>
              </div>
            </Button>
          </li>
          <li className="flex mb-6">
            <Button variant="ghost">
              <div className="flex items-center">
                <AiOutlineHeart className="w-6 h-6 ml-2 mr-2" />
                <span >Activity</span>
              </div>
            </Button>
          </li>
          <li className="flex mb-6">
            <Button variant="ghost">
              <div className="flex items-center ">
                <AiOutlineUser className="w-6 h-6 mr-2.5" />
                <span>Profile</span>
              </div>
            </Button>
          </li>
        </ul>
      </Card>
    </>
  );
};
export default Sidebar;
