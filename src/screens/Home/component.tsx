import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import PageView from "../../components/PageView/component";
import Timeline from "../../components/Timeline/component";
import Introduction from "../../components/Introduction/component";

const Home = () => {
  const navigate = useNavigate();
  return (
    <PageView>
      <div className="home-container">
        <div className="intro-container">
          <Introduction />
        </div>
        {/* <h1>Home Page</h1>
        <button onClick={() => navigate("/skills")}>Go to skills</button> */}
        <Timeline />
      </div>
    </PageView>
  )
}

export default Home;