import type { ReactNode } from "react";

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-gray-700 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl font-semibold">
      <div className="text-gray-100">{props.title}</div>
      <div className="text-gray-400">{props.subtitle}</div>
    </div>

    <div className="text-gray-100 font-bold  text- whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
