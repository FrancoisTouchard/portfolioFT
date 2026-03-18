import './Home.css';

import React from 'react';

import Introduction from '../../components/Introduction/component';
import PageView from '../../components/PageView/component';
import PreviousLife from '../../components/PreviousLife/component';
import Timeline from '../../components/Timeline/component';

const Home = () => {
  return (
    <PageView>
      <div className="home-container">
        <div className="intro-container">
          <Introduction />
        </div>
        <Timeline />
        <PreviousLife />
      </div>
    </PageView>
  );
};

export default Home;
