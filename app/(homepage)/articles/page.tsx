import React from "react";
import ArticleRep from "@/app/ui/components/ArticleRep";
import ArticleHero from "@/app/ui/components/ArticleHero";
const articles = () => {
  return (
    <div className="pt-20 bg-grey dark:bg-noire">
      <div className="container mx-auto">
        <ArticleHero />
      </div>
      <div className="">
        <ArticleRep />
        <ArticleRep />
        <ArticleRep />
        <ArticleRep />
        <ArticleRep />
        <ArticleRep />
      </div>
    </div>
  );
};

export default articles;
