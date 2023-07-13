import Image from "next/image";
import { Card } from "../ui/card"

const Navbar:React.FC = ()=>{
  return(
    <Card className="sticky top-0 h-20 flex justify-center items-center z-10 bg-white bg-opacity-80 backdrop-blur-sm">
      <Image src='/Threads-Logo.png' alt="Threads Logo" width={100} height={100} />
    </Card>
  )
}

export default Navbar;