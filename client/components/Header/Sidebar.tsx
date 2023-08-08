import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineWallet,
} from "react-icons/ai";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "../ui/card";
import Link from "next/link";
const Sidebar: React.FC = () => {
  return (
    <>
      <Card className="sticky h-96 top-28 mt-8 w-48 hidden sm:block">
        <ul className="flex flex-col gap-6 w-full py-10 ml-4">
          <li>
            <Button variant="ghost" className="w-40 justify-start">
              <div className="flex items-center gap-4">
                <AiOutlineHome size="24px" />
                <span>Home</span>
              </div>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-40 justify-start">
              <div className="flex items-center gap-4">
                <AiOutlineSearch size="24px" />
                <span>Search</span>
              </div>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-40 justify-start">
              <div className="flex items-center gap-4">
                <AiOutlineWallet size="24px" />
                <span>
                  <Link href="/CreateThread">Create</Link>
                </span>
              </div>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-40 justify-start">
              <div className="flex items-center gap-4">
                <AiOutlineHeart size="24px" />
                <span>Activity</span>
              </div>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-40 justify-start">
              <div className="flex items-center gap-4">
                <AiOutlineUser size="24px" />
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
