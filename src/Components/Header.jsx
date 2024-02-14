import React from "react";
import img from "../assets/computer.gif";

export default function Header() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center py-16">
          <div className="flex justify-center p-5 items-center">
            <div className="title sm:justify-center ">
              <h1 className=" flex lg:text-4xl md:text-6xl sm:text-4xl lg:justify-center lg:p-5 text-xl  font-semibold">
                Learn New Be Innovative With
              </h1>
              <h1 className="lg:text-6xl md:text-5xl sm:text-3xl sm:justify-center text-purple-500 uppercase lg:justify-center flex">
                {" "}
                InternifyLink
              </h1>
              <p className="flex lg:text-base lg:ml-28 lg:mr-10 md:text-md lg:w-auto  lg:justify-center lg:p-5  font-medium text-justify">
                Our goal is to empower the next generation of tech leaders. Our
                internship program offers hands-on experience in different
                fields.
              </p>
              <div className="button flex justify-center md:pt-0 pt-10">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center p-5">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 px-7 pt-5 gap-4 py-14">
          <div class="max-w-sm  p-6 bg-white border rounded-lg shadow  drop-shadow-xl shadow-purple-500 hover:bg-purple-500 hover:translate-y-2 delay-150 duration-500 hover:text-white ">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/internship.png"
              alt="internship"
            />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight    ">
                InternshipOpportunity
              </h5>
            </a>
            <p class="mb-3 font-normal text-justify">
              Gain hands-on experience, build professional networks, and
              discover career pathways. Whether you're a student or a
              professional, internships offer invaluable opportunities for
              growth and advancement.
            </p>
          </div>
          <div class="max-w-sm hover:translate-y-2 delay-150 duration-500  p-6 bg-white border rounded-lg shadow  drop-shadow-xl shadow-purple-700 hover:bg-purple-500 hover:text-white text-justify">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/50/external-online-book-education-solid-solidglyph-m-oki-orlando.png"
              alt="external-online-book-education-solid-solidglyph-m-oki-orlando"
            />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight    ">
                Empowerment
              </h5>
            </a>
            <p class="mb-3 font-normal">
              Ignite your potential through learning - Embark on a
              transformative journey of discovery, acquisition, and growth, as
              you delve into new subjects, master new skills, and embrace the
              endless possibilities that await.
            </p>
          </div>
          <div class="max-w-sm hover:translate-y-2 delay-150 duration-500 p-6 bg-white border rounded-lg shadow  drop-shadow-xl shadow-purple-700 hover:bg-purple-500 hover:text-white  text-justify ">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/certificate.png"
              alt="certificate"
            />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight    ">
                CertifyEase
              </h5>
            </a>
            <p class="mb-3 font-normal">
              Simplify and expedite your credentialing process with our
              user-friendly platform. Obtain your certificates of completion
              efficiently, unlocking new opportunities and accelerating your
              path to success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
