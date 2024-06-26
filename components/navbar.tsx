"use client";
import { Search, Bell, MessageSquareMore, Plus, Route } from "lucide-react";
import { Input } from "./ui/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/ui/popover";
import Link from "next/link";
import { notification } from "@/app/(head)/activity/page";
import Activity from "./activity";
import { ProfilePopover } from "./ui/ui/Profile_popover";


const notifications_list:notification[] = [
  {
    title: "Parambrata Ghosh followed you",
    description: "5 min ago",
  },
  {
    title: "Hiranmay Pore leave interest on your idea.",
    description: "5 min ago",
  },
];


export default  function Navbar() {

  
  
  return (
    <div className="flex-1 flex items-center justify-center h-[50px] w-full gap-6 z-[999]">
      <div className="flex-grow ">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 " />
            <Input
              type="search"
              placeholder="Search for all the inspiration you need..."
              className=" w-full appearance-none bg-background pl-8 shadow-none "
              />
          </div>
        </form>
      </div>
      <div className=" flex items-center justify-end gap-6 flex-shrink ">
        <Popover>
          <PopoverTrigger>
            <Bell className="h-6 w-6 md:block hidden " />
          </PopoverTrigger>
          <PopoverContent>
            <Activity notifications={notifications_list}/>
          </PopoverContent>
        </Popover>
        <div className="md:block hidden">

        <Link href="/chat">
          <MessageSquareMore className="h-6 w-6" />
        </Link>
        </div>
        <Link href="/upload" className="md:block hidden">
          <span className="flex justify-center items-center border border-1 border-[#DF5173] w-[210px] h-8 rounded-3xl text-[#DF5173]">
            <Plus />
            <p className="">Share your idea</p>
          </span>
        </Link>
        {/* <Avatar>
          <AvatarImage src="my_image.jpg" />
          <AvatarFallback>PG</AvatarFallback>
        </Avatar> */}
        <div className="flex-grow w-10 flex justify-center items-center">
          <ProfilePopover/>
        </div>
      </div>
    </div>
        // </div>
  );
}
