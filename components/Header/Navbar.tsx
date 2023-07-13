import Image from "next/image";
import { Card } from "../ui/card"

const Navbar:React.FC = ()=>{
  return(
    <Card className="h-20 flex justify-center items-center">
      <Image src='/Threads-Logo.png' alt="Threads Logo" width={100} height={100} />
    </Card>
  )
}

export default Navbar;