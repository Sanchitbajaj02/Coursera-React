import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

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
      const commentList = comments.comments.map((comm) => {
        return (
          <React.Fragment>
            <li
              key={comm.id}
              style={{
                listStyle: "none",
              }}
            >
              <p>{comm.comment}</p>
              <p>
                -- <span>{comm.author}</span>,&nbsp;
                <span>
                  {new Date(comm.date).toLocaleDateString([], {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
              </p>
            </li>
          </React.Fragment>
        );
      });

      return (
        <Card>
          <h4>Comments</h4>
          <div>{commentList}</div>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <>
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.details)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.details)}
        </div>
      </>
    );
  }
}

export default DishDetail;

/* 
Another way of writing the date in react

{
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  })
  .format(new Date(Date.parse(comm.date)))
}

*/
