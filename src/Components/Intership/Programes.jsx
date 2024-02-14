import React, { useState } from "react";

export default function Programes() {
  const [State, SetState] = useState(false);
  return (
    <div>
      <div className="card px-5 py-5">
        <span
          href="#"
          class="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
          <h5
            onClick={() => SetState(!State)}
            class="mb-2 text-2xl justify-center flex font-bold tracking-tight cursor-pointer text-gray-900 dark:text-white p-5 ">
            MERN Development Intership
          </h5>
          {State && (
            <div className="form bg-purple-700 rounded-lg p-5">
              <p class="font-normal text-white dark:text-white">
                This is a single-project Intership, meaning that we spend almost
                13 hours building an eCommerce shop using the MERN stack along
                with Redux Toolkit. We start from absolute scratch with an empty
                folder. You will learn everything from setting up a server,
                modeling data, creating a MongoDB database, seeding data,
                creating the UI, managing state with Redux, authentication with
                JWT and much much more.
              </p>

              <div className="pt-2">
                <label
                  for="Full Name"
                  class="block mb-2 text-md font-medium  text-white">
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Full Name"
                  class="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div className="pt-5 pb-5">
                <label
                  for="email"
                  class="block mb-2 text-md font-medium text-white  dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-purple-700 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <button
                type="button"
                class="focus:outline-none text-black bg-white hover:bg-green-700 hover:text-white   font-medium rounded-lg text-sm px-5 py-2.5 mb-2   ">
                Submit
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}
