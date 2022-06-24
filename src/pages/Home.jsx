import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/base/Layout";
import FeedItem from "../components/feed/FeedItem";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("email") || !localStorage.getItem("email")) {
      alert("로그인 해주세요.");
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <div className="main">
        <FeedList />
      </div>
    </Layout>
  );
};

const FeedList = () => {
  return (
    <ul>
      <FeedItem />
    </ul>
  );
};

export default Home;
