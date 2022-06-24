import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/base/Layout";
import FeedList from "../components/feed/FeedList";

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

export default Home;
