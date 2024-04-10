"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map(({ imgUrl, label, route }) => {
          const isActive = pathName === route || pathName.startsWith(route);

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                isActive && "bg-blue-100"
              )}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
