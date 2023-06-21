import React, { useEffect, useState } from "react";
import { Card, Image, Icon, Input, Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { tagOptions } from "./tagOptions";
import BookItem from "./BookItem";
import "./style.css";
function Home() {
  const [books, setBooks] = useState([]);
  const [ctgValue, setCtgValue] = useState("");
  const [bookTitleSearch, setBookTitleSearch] = useState("");
  const [bookAuthorSearch, setBookAuthorSearch] = useState("");
  useEffect(() => {
    axios
      .get("/api/public/books")
      .then((res) => setBooks(res.data.data))
      .catch((err) => console.dir(err));
  }, [books]);
  const handleTitleFilter = (e) => {
    setBookTitleSearch(e.target.value);
  };
  const handleAuthorFilter = (e) => {
    setBookAuthorSearch(e.target.value);
  };
  return (
    <div className="min-h-[500px] p-10">
      <Menu>
        <Menu.Item>
          <Input
            label="Book title"
            className="icon"
            icon="search"
            placeholder="Search..."
            onChange={(e) => {
              handleTitleFilter(e);
            }}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Dropdown
            text={ctgValue ? ctgValue : "Filter Posts"}
            icon="filter"
            floating
            labeled
            button
            className="icon"
          >
            <Dropdown.Menu>
              <Dropdown.Menu scrolling>
                {tagOptions.map((option) => (
                  <Dropdown.Item
                    key={option.value}
                    {...option}
                    onClick={(event, data) => {
                      setCtgValue(data.value);
                    }}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
      <div>
        <Card.Group itemsPerRow={4}>
          {books
            .filter((book) =>
              bookTitleSearch
                ? book.title
                    .toLowerCase()
                    .includes(bookTitleSearch.toLowerCase())
                : book
            )
            .filter((book) =>
              ctgValue ? book.category.includes(ctgValue) : book
            )
            .map((book, index) => (
              <BookItem key={index} book={book} />
            ))}
        </Card.Group>
      </div>
    </div>
  );
}

export default Home;
