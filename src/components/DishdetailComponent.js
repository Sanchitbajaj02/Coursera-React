import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else return <div />;
  }

  componentDidMount() {
    console.log("DishDetail Component componentDidMount invoked");
  }
  componentDidUpdate() {
    console.log("DishDetail Component componentDidUpdate invoked");
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author},&nbsp;
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    console.log("DishDetail Component render invoked");

    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      );
    } else return <div />;
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
