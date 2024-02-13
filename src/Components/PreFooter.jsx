import React from "react";

export default function PreFooter() {
  return (
    <div className="">
      <div class="w-full md:p-32 p-8 text-center  bg-purple-600  shadow dark:bg-purple-600  ">
        <h5 class="mb-2 md:text-3xl text-xl  font-bold text-purple-700 dark:text-white ">
          Our Future Online Community And Impressive Website Traffic
        </h5>
        <p class="mb-5 md:text-base text-xs text-gray-500 sm:text-lg dark:text-white opacity-75">
          Join a network of like-minded individuals, unlock new possibilities,
          and experience growth on your journey to success.
        </p>
        <div className="grid grid-cols-3 pt-4">
          <div class="flex flex-col items-center justify-center ">
            <dt class="mb-2 md:text-3xl text-xl font-extrabold text-white">
              160K+
            </dt>
            <dd class="text-gray-500 dark:text-white opacity-75 md:text-base text-xs">
              LinkedIn community
            </dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2  md:text-3xl text-xl font-extrabold text-white">
              100K+
            </dt>
            <dd class="text-gray-500 dark:text-white opacity-75">
              Certifactions
            </dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2  md:text-3xl text-xl font-extrabold text-white">
              2M+
            </dt>
            <dd class="text-gray-500 dark:text-white opacity-75">
              Website Traffic
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
}
