"use client";
import Image from "next/image";
const ArticleRep = () => {
  return (
    <div className="flex-col my-10 flex md:flex-row mx-auto md:max-w-5xl justify-between p-4 shadow-2xl dark:bg-[#1a1a1a] md:bg-grey rounded-md dark:shadow-slate-800 hover:outline hover:outline-[#19A7CE] hover:outline-1">
      <div className="container  w-72 h-72 mx-auto md:w-80 md:h-80 brightness-75 md:brightness-100">
        {/* Image for doc */}
        <Image
          src="/images/mic.jpg"
          alt="Microphone"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-sm"
        />
      </div>
      <div className=" md:max-w-2xl mx-4">
        {/* Description */}
        <h3 className="text-2xl md:text-4xl font-medium p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
          molestias?
        </h3>
        <p className=" hidden md:block text-lg dark:bg-[#232323] p-4 bg-white rounded-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          optio quas, qui aspernatur, possimus quisquam, ab laboriosam cum
          laudantium ducimus iste neque numquam? Cupiditate provident iure
          consequuntur repellendus voluptas deserunt unde ratione fugiat debitis
          illum earum perferendis, dolores autem soluta pariatur quos mollitia
          quas eum dicta. Vitae velit tempore id.
        </p>
      </div>
    </div>
  );
};

export default ArticleRep;

// TODO:
/*
1. Modify to recieve payload of {title, description, image link, id}
2. Process Image these properties
3. Create page to read the article

*/
