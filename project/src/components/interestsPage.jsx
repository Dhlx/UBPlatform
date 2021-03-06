import React, { Component } from "react";
import BookCardInfo from "./bookCardInfo";
import axios from "axios";
import AccountPage from "./accountPage";
class InterestsPage extends Component {
  state = {
    data: [],
    intervalIsSet: null
  };

  getDataFromDb = obj => {
    axios
      .post(this.props.api + "/guessYouLike", obj)
      .then(res => {
        this.state.data[0] = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.props.randomBook.map(book => (
          <BookCardInfo key={book._id} bookInfo={book} />
        ))}
      </div>
    );
  }
}
export default InterestsPage;
