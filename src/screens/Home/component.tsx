import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import PageView from "../../components/PageView/component";

const Home = () => {
  const navigate = useNavigate();
  return (
    <PageView>
      <div className="HomeContainer">
        <div>
          <h1>Home Page</h1>
          <button onClick={() => navigate("/skills")}>Go to skills</button>
        </div>
      </div>
    </PageView>
  )
}

export default Home;