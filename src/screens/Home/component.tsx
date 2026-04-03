import React from 'react';

import wavePicture from '../../assets/backgrounds/bg-wave-reversed.jpg';
import Introduction from '../../components/Introduction/component';
import PageView from '../../components/PageView/component';
import PreviousLife from '../../components/PreviousLife/component';
import Timeline from '../../components/Timeline/component';

const HOME_SQUARE_BORDER = 'linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%)';

const Home = () => {
  return (
    <PageView>
      <Introduction
        pictureSrc={wavePicture}
        squareBorderColor={HOME_SQUARE_BORDER}
      />
      <Timeline />
      <PreviousLife />
    </PageView>
  );
};

export default Home;
