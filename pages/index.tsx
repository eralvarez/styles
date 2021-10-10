import React from 'react';

import FontSection from '../components/sections/Fonts';
import ColumnsSection from '../components/sections/Columns';
import ButtonsSection from '../components/sections/Buttons';
import InputsSection from '../components/sections/Inputs';
import ElevationSection from '../components/sections/Elevation';
import BorderSection from '../components/sections/Border';

const Home = () => {

  return (
    <div className="flex position-absolute width-100 height-100">
      <main className="container-boxed container-boxed color-dark">
        <h1 className="font-normal font-40">Docs @ealvarez/ui</h1>

        <FontSection />
        <ColumnsSection />
        <ButtonsSection />
        <InputsSection />
        <ElevationSection />
        <BorderSection />

        <br />
      </main>
    </div>
  );
}

export default Home
