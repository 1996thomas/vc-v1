import Bounded from "@/app/components/Bounded";
import { List } from "@/app/components/List";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useRef } from "react";

export type TestProps = SliceComponentProps<Content.TestSlice>;

const Test = ({ slice }: TestProps): JSX.Element => {
  return (
    <Bounded
      className="h-[50vh] relative flex"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex gap-[10rem]">
        <div className="flex-2 flex items-center justify-center">
          <PrismicNextImage field={slice.primary.logo} className="w-50 " />
        </div>
        <ul className="flex-1 className='first:border-t-1 text-[64px] uppercase font-thin">
          {slice.primary.item_list.map((item, index) => (
            <li
              className="border-t-2 last:border-b-2 border-slate-900 py-5"
              key={index}
            >
              {item.item}
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default Test;
