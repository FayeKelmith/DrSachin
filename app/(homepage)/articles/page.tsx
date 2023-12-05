import React from "react";
import ArticleRep from "@/app/ui/components/articleRep";

const articles = () => {
  return (
    <div className="mx-auto py-20 bg-grey w-screen h-screen overflow-x-hidden dark:bg-noire">
      <ArticleRep />
      <ArticleRep />
    </div>
  );
};

export default articles;
