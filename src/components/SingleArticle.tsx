import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Article } from "./../types/index";

interface SingleArticleProps {
  article: Article;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  let formattedDate = article.publishedAt.toString();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{formattedDate}</Card.Text>
        <Link to={`/details/${article.id}`}>
          <div className="btn btn-primary">Go somewhere</div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
