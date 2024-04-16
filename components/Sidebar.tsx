"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const labelToKR = (label: string) => {
  switch (label) {
    case "Home":
      return "대시보드";
    case "Upcoming":
      return "다가올 회의";
    case "Previous":
      return "이전 회의";
    case "Recordings":
      return "녹화된 영상";
    case "Personal Room":
      return "내 정보";
  }
};

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map(({ imgUrl, label, route }) => {
          const isActive =
            pathName === route || pathName.startsWith(`/${route}/`);
          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                isActive && "bg-blue-1"
              )}
            >
              <Image src={imgUrl} alt={label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">
                {labelToKR(label)}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
