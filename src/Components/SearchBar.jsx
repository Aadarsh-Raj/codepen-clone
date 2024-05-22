import React, { useState } from "react";
import { ReactComponent as MyIcon } from "../Assests/logoicon.svg";
import { UserFunction } from "../Context/UserContext";
import "./Style/SearchBar.css";
import { Link } from "react-router-dom";
const SearchBar = () => {
  const [list, setList] = useState([]);
  const userCtx = UserFunction();
  const searchTitle = (e) => {
    const value = e.target.value.toLowerCase();

    const result = userCtx.codeArray.filter((ele) =>
      ele.title.toLowerCase().includes(value)
    );

    setList(result);
  };
  return (
    <>
      <div className="search-bar-container">
        <div className="search-bar-logo">
          <MyIcon />
        </div>
        <div className="search-bar-form">
          <input
            type="text"
            placeholder="Search By Title"
            className="input-search"
            onChange={searchTitle}
          />
          {list && (
            <ul className="search-list">
              {list.map((ele) => (
                <>
                  <Link
                    to={`/editor/${ele.id}`}
                    state={{ title: ele.title, code: ele.code, id: ele.id }}
                    key={ele.id}
                  >
                    <li>{ele.title}</li>
                  </Link>{" "}
                </>
              ))}
            </ul>
          )}
        </div>
        <div className="login-button">
          {userCtx.user ? (
            <Link to={"/profile"}>Profile</Link>
          ) : (
            <Link to={"/login"}>Login </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
