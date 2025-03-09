import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContentContainerProps extends PropsWithChildren {
  className?: string;
}

export const ContentContainer = ({
  children,
  className,
}: ContentContainerProps) => {
  return (
    <div
      className={cn(
        "bg-[#e7e0e0] h-[90vh] justify-center flex items-center overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
