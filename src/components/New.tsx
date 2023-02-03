import Link from "next/link";
import { FunctionComponent } from "react";
import { timestampToTime } from "@/utils/timestampToTime";

interface Props {
  title: string;
  description: string;
  timestamp: number;
  link: string;
  index: number;
}

export const New: FunctionComponent<Props> = ({
  title,
  description,
  timestamp,
  link,
  index,
}) => {
  return (
    <Link
      data-index={index}
      href={link}
      className="pointer flex flex-col bg-white text-black transition duration-150 ease-in hover:bg-gray-100 active:bg-gray-200"
    >
      <div className="flex p-5 items-center justify-between">
        <p className="text-fuchsia-500 font-semibold">{title}</p>
        <p className="text-violet-700 text-sm">{timestampToTime(timestamp)}</p>
      </div>
      <div className="text-sm p-5 flex flex-col gap-2">{description}</div>
    </Link>
  );
};
