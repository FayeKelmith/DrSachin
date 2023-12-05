"use client";
import Image from "next/image";
const ArticleRep = () => {
  return (
    <div className="flex sm:flex-row flex-col mx-4 md:max-w-5xl justify-between p-4 shadow-2xl dark:bg-[#1a1a1a] md:bg-blank rounded-md dark:shadow-slate-800">
      <div className="container relative w-80 h-80 mx-auto md:max-w-sm brightness-75 md:brightness-100">
        {/* Image for doc */}
        <Image
          src="/images/mic.jpg"
          alt="Microphone"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>
      <div className="hidden md:block md:max-w-2xl p-2 mx-4">
        {/* Description */}
        <h3 className="text-4xl font-bold py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
          molestias?
        </h3>
        <p className="text-lg dark:bg-[#232323] p-4 bg-white rounded-sm">
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
