import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="xl">
      {children}
    </Heading>
  ),
};

export type SectionHeadingProps =
  SliceComponentProps<Content.SectionHeadingSlice>;

const SectionHeading = ({ slice }: SectionHeadingProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.content} components={components} />
    </Bounded>
  );
};

export default SectionHeading;
