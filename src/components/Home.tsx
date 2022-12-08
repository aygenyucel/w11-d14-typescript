import { useEffect, useState } from "react";
import { Article } from "./../types/index";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";

const Home = () => {
  const [articlesData, setArticleData] = useState<Article[]>([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log("response", response);
      if (response.ok) {
        let data = await response.json();
        console.log("data", data);
        setArticleData(data);
      } else {
        console.log("something went wrong:(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {articlesData.map((article) => {
        return <SingleArticle article={article} />;
      })}
    </div>
  );
};

export default Home;
