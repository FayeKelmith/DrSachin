import React from "react";
import ArticleRep from "@/app/ui/components/ArticleRep";

const articles = () => {
  return (
    <div className="pt-20 mx-auto bg-grey overflow-x-hidden dark:bg-noire">
      <ArticleRep />
      <ArticleRep />
      <ArticleRep />
      <ArticleRep />
      <ArticleRep />
      <ArticleRep />
    </div>
  );
};

export default articles;
