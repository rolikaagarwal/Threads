import { AiOutlineHome,AiOutlineSearch,AiOutlineWallet,AiOutlineHeart,AiOutlineUser } from "react-icons/ai";
import { Card, CardContent } from "../ui/card";

const MobileNavigation:React.FC = ()=>{
  return (
    <>
      <Card className="fixed bottom-0 w-full h-14 z-10 sm:hidden">
        <div className="px-8 h-full flex justify-between items-center">
          <AiOutlineHome size='24px'/>
          <AiOutlineSearch size='24px'/>
          <AiOutlineWallet size='24px'/>
          <AiOutlineHeart size='24px'/>
          <AiOutlineUser size='24px'/>
        </div>
      </Card>
    </>
  )
}

export default MobileNavigation;