import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// add and post comments
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          var error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.res = res;
          throw error;
        }
      },
      (err) => {
        var errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((res) => dispatch(addComment(res)))
    .catch((error) => {
      console.log("Post Comment", error.message);
      alert("Your comment could not be posted \nError: " + error.message);
    });
};

// action for dishes
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          var error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.res = res;
          throw error;
        }
      },
      (err) => {
        var errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

// action for comments
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          var error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.res = res;
          throw error;
        }
      },
      (err) => {
        var errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

// actions for promotions
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + "promotions")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          var error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.res = res;
          throw error;
        }
      },
      (err) => {
        var errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

// action for leaders
export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading(true));

  return fetch(baseUrl + "leaders")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          var error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.res = res;
          throw error;
        }
      },
      (err) => {
        let errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((dishes) => dispatch(addLeaders(dishes)))
    .catch((error) => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess,
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});

// post feedback
export const postFeedback = (feedback) => (dispatch) => {
  // feedback.date = new Date().toISOString();
  // feedback.date = new Date('05 October 2011 14:48 UTC');
  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          var error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.res = res;
          throw error;
        }
      },
      (err) => {
        var errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((response) => {
      console.log("Feedback", response);
      alert("Thank you for your feedback!\n" + JSON.stringify(response));
    })
    .catch((error) => {
      console.log("Post Comment", error.message);
      alert("Your comment could not be posted \nError: " + error.message);
    });
};
