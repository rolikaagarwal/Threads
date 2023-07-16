import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const CreateThread = () => {
  return (
    <>
      <Card className="border-y ml-[12rem]">
        <div className="px-4 relative ">
          <div className="border absolute left-8 top-20 bottom-16"></div>
          <div className="flex justify-between ">
            <div className="flex ">
              <Avatar className="mt-5 mr-5">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h6 className="mt-5">rolika_agarwal</h6>
            </div>
          </div>

          <div className="overflow-x-hidden">
            <Input
              className="border-none bg-transparent no-focus-outline focus:border-transparent mx-16"
              type="text"
              placeholder="Start a thread..."
            />
          <Button variant="outline" className=" absolute right-10 bottom-2">
            Post
          </Button>
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
            </div>
            <div className="flex justify-between">
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
      </Card>
    </>
  );
};
export default CreateThread;
