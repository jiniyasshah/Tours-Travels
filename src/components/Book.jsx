import React from "react";

const Book = () => {
  return (
    <div>
      <section className="book" id="book">
        <h1 className="heading">
          <span>b</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
          <span className="space"></span>
          <span>n</span>
          <span>o</span>
          <span>w</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src="images/book-img.svg" alt="" />
          </div>

          <form action="">
            <div className="inputBox">
              <h3>where to</h3>
              <input type="text" placeholder="Place name" />
            </div>
            <div className="inputBox">
              <h3>how many</h3>
              <input type="number" placeholder="Number of guests" />
            </div>
            <div className="inputBox">
              <h3>arrivals</h3>
              <input type="date" />
            </div>
            <div className="inputBox">
              <h3>leaving</h3>
              <input type="date" />
            </div>
            <input type="submit" className="btn" value="book now" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Book;
