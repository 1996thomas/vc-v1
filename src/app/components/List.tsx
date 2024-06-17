import clsx from "clsx";

type List = {
  as?: "ul";
  items: React.ReactNode[];
  className?: string;
};

export function List({ items, className, as: Comp = "ul" }: List) {
  return (
    <Comp className={clsx("[:nth-child(0)]:text-bold", className)}>
      {items}
    </Comp>
  );
}
