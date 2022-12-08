import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Article } from "./../types/index";
import { Container } from "react-bootstrap";

const ArticleDetails = () => {
  const params = useParams();
  const [article, setArticle] = useState<null | Article>(null);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
      );
      console.log("article details response:", response);
      if (response.ok) {
        let data = await response.json();
        setArticle(data);
        console.log("article details data", data);
      } else {
        console.log("oppps, something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("params", params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Container> {article && <div>{article.title}</div>}</Container>;
};

export default ArticleDetails;
