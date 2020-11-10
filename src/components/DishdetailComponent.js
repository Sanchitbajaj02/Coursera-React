import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else return <div></div>;
  }

  renderComments(comments) {
    if (comments != null) {
      const commentList = comments.comments.map((comment) => {
        return (
          <React.Fragment>
            <li
              key={comment.id}
              style={{
                listStyle: "none",
              }}
            >
              <p>{comment.comment}</p>
              <p>
                -- <span>{comment.author}</span>,&nbsp;
                <span>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </span>
              </p>
            </li>
          </React.Fragment>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <div>{commentList}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;

/* 
Another way of writing the date in react

{
  new Date(comment.date).toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

*/
