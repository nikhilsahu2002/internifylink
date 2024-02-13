import React from "react";
import img from "../assets/img.gif";
import com from "../assets/computer.gif";
import load from "../assets/under.gif";

export default function AboutUs() {
  return (
    <div className="py-11">
      <div className="grid md:grid-cols-2">
        <div className="title md:ml-20">
          <h1 className="md:text-4xl  text-xl p-5 font-semibold font-[Rubik]">
            About Us
            <img src={load} alt="" className="md:w-20" />
          </h1>

          <div className="about grid grid-cols-1 ">
            <p className="md:w-96 md:font-medium  text-xs ml-5 font-[Rubik]">
              At INTERNIFYLINK , we are passionate about empowering innovations
              that shape a better future for businesses and individuals alike.
            </p>
            <div className="md:pt-10 p-5 w-full col-span-1 ">
              <span
                href="#"
                class="block max-w-lg h-auto w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-purple-800 dark:border-purple-700 dark:hover:bg-green-700 translate ease-in-out delay-75 hover:scale-105 duration-500">
                <p class="md:font-normal text-sm text-gray-700 dark:text-white">
                  <h1 className="font-semibold">
                    Cultivating Opportunities at InternifyLink
                  </h1>
                  At InternifyLink, we foster a dynamic ecosystem where students
                  and professionals explore, learn, and thrive. We curate
                  diverse internship opportunities to empower individuals on
                  their career journey with excellence and innovation.
                  <h1 className="font-semibold pt-10"> Our Mission:</h1>
                  Driven by the belief in untapped potential, we bridge the gap
                  between talent and opportunity. We provide a platform for
                  nurturing aspirations, honing skills, and forging connections,
                  fostering personal and professional growth
                  <h1 className="font-semibold pt-10">
                    {" "}
                    Why Choose InternifyLink?
                  </h1>
                  With InternifyLink, you gain access to a wealth of resources
                  and support to propel your career forward. Whether you're a
                  student seeking hands-on experience or a professional looking
                  to transition into a new field, we offer tailored solutions to
                  meet your unique needs.
                  <h1 className="font-semibold pt-10">
                    Join us at InternifyLink and embark on a transformative
                    journey towards realizing your ambitions
                  </h1>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="gif flex  ">
          <img src={img} alt="Example GIF" />
        </div>
      </div>
    </div>
  );
}
