import React from "react";
import Image from "next/image";

const articles = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 items-center">
          <h1 className="text-5xl ">
            What have I to <span className="text-[#EB455F]">say?</span>
          </h1>

          {/* Lateset post */}
          <div className="w-4/5 px-4 py-2 my-auto">
            <h3 className="text-3xl">How to grow your LinkedIn following</h3>
            <p className="text-lg  py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
              quas reiciendis amet illo incidunt molestiae beatae omnis, neque
              reprehenderit officia laudantium quo. Odit assumenda aliquam cum
              deleniti, architecto recusandae saepe.
            </p>
          </div>
        </div>
        {/* <Image
          src="/images/blog-image.svg"
          alt="Image for blog page"
          width={640}
          height={960}
          className=""
        /> */}
      </div>
    </div>
  );
};

export default articles;
