import React from "react";

export default function Features() {
  return (
    <div className="py-24 bg-gray-50  ">
      <div className="title flex justify-center  ">
        <h1 className="font-semibold md:text-5xl text-2xl">Our Features</h1>{" "}
      </div>
      <div className="disc flex justify-center">
        <p className="max-w-xl  p-5 md:text-md text-sm md:pb-10 text-center">
          These are just some of the our features. By providing these features,
          We can make a valuable resource for students looking for internships.
        </p>
      </div>

      <div className="con grid md:grid-cols-2 md:pl-12 gap-2 p-5 justify-items-center">
        <div class=" md:max-w-xl p-6 md:grid grid-cols-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 translate duration-500 hover:shadow-2xl shadow-purple-700 ease-in-out delay-100">
          <img
            width="100"
            height="100"
            className="md:col-span-1 p-1 md:pt-4"
            src="https://img.icons8.com/bubbles/100/apple-mail.png"
            alt="apple-mail"
          />
          <div className="text md:col-span-4">
            <h1 className="font-semibold text-lg pb-5 text-gray-500 dark:text-gray-400   hover:text-purple-700">
              Email Notifications
            </h1>

            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 ">
              The email notifications about important events, such as upcoming
              deadlines, new assignments, and changes to your schedule.
            </p>
          </div>
        </div>
        <div class=" md:max-w-xl p-6 md:grid grid-cols-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 translate duration-500 hover:shadow-2xl shadow-purple-700 ease-in-out delay-100">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/bubbles/100/design.png"
            alt="design"
          />
          <div className="text md:col-span-4">
            <h1 className="font-semibold text-lg pb-5 text-gray-500 dark:text-gray-400   hover:text-purple-700">
              Simple Interface
            </h1>

            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 ">
              The simplicity of the interface makes it easy to use and navigate.
              The information is presented in a clear and concise way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
