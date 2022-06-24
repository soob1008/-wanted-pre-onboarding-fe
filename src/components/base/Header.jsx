import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHome, FaRegPaperPlane } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="inner">
        <div className="header-utils">
          <h1>
            <img
              src={require("../../assets/images/logo.png")}
              alt="인스타그램"
            />
          </h1>
          <div className="header-search">
            <FaSearch />
            <input type="text" placeholder="검색" className="search" />
          </div>
          <nav className="gnb">
            <ul>
              <li>
                <Link to="/">
                  <FaHome />
                </Link>
              </li>
              <li>
                <FaRegPaperPlane />
              </li>
              <li>
                <button type="button" onClick={onLogout}>
                  LOGOUT
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
