import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchSuggestion } from "@/data/suggestion";
import { Button } from "@/components/ui/button";

const fetch = async () => {
  try {
    const data = await fetchSuggestion();
    return data;
  } catch (error) {
    throw error;
  }
};

const RightSidebar: React.FC = async () => {
  const data = await fetch();
  return (
    <>
      <Card className="absolute border-b border-l top-0 right-0 h-{500px} w-72 hidden lg:block">
        <div className="flex flex-col m-4 gap-2">
          <div className="flex items-center gap-4 ">
            <Avatar className="w-14 h-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="leading-5">
              <h1 className="font-bold text-lg">Kartikay Asija</h1>
              <p>Kartikay</p>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-semibold">Who to Follow</h1>
          </div>
          {data.map((profile) => (
            <>
              <div className="flex items-center gap-4 mt-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={profile.picUrl} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex w-full">
                  <div className="leading-3 w-1/2">
                    <h1 className="font-bold text-sm">{profile.ID}</h1>
                    <p className="text-xs">{profile.name}</p>
                  </div>
                  <div className="w-1/2 text-right">
                    <Button variant="outline" className="h-6 w-16">
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="">
            <Button className="m-0 p-0 text-blue-500" variant="link">Show More</Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default RightSidebar;
