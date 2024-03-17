import React from "react";

export default function BookCardSkeleton() {
  return Array.from({ length: 5 }, (v, i) => i).map((i) => {
    return (
      <div
        key={`Skeleton-${i}`}
        className="[&>*]:rounded-lg grid grid-cols-2 grid-rows-2 pt-8 pb-8 mb-8 border-2 border-gray-400 animate-pulse md:grid-rows-1 hover:border-opacity-100 hover:border-cyan-400 dark:text-white border-opacity-70"
      >
        <div className="[&>*]:rounded-lg bg-gray-600 justify-self-center w-[128px] h-[128px] md:w-[240px] md:h-[240px] ">
          <div className="flex flex-col w-[128px] h-[128px] md:w-[240px] md:h-[240px] text-center justify-center"></div>
        </div>
        <div className="[&>*]:rounded-lg flex flex-col justify-between md:h-[240px] overflow-hidden ">
          <div className="[&>*]:rounded-lg flex flex-col justify-around pb-4 md:flex-row">
            <div className="w-[180px] h-[1.75rem] text-lg font-bold skeletonColor md:text-2xl "></div>
            <div className="skeletonColor w-[120px] h-[1.25rem] mt-2 md:mt-0"></div>
          </div>
          <div className="hidden row-start-2 pr-4 md:block skeletonColor w-[400px] h-[120px]"></div>
          <div className="skeletonColor h-[1.25rem] w-[90px]"></div>
        </div>
        <div className="row-start-2 mx-4 mt-2 skeletonColor w-[280px] h-[120px] md:hidden"></div>
      </div>
    );
  });
}
