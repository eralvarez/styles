import React from 'react';

import Code from '../Code';


const ElevationSection = () => {
  const codeExample1 = {
    code: `<div class="container flex flex-wrap">
  <div class="elevation-1">Column using "elevation-1" class</div>
  <div class="elevation-2">Column using "elevation-2" class</div>
  <div class="elevation-3">Column using "elevation-3" class</div>
  <div class="elevation-4">Column using "elevation-4" class</div>
  <div class="elevation-5">Column using "elevation-5" class</div>
  <div class="elevation-6">Column using "elevation-6" class</div>
  <div class="elevation-7">Column using "elevation-7" class</div>
  <div class="elevation-8">Column using "elevation-8" class</div>
  <div class="elevation-9">Column using "elevation-9" class</div>
</div>`,
    demo: `
    <div class="container flex flex-wrap margin-bottom-20">
      <div class="col-3 color-dark elevation-1 margin-right-20 margin-bottom-20">Column using "elevation-1" class</div>
      <div class="col-3 color-dark elevation-2 margin-right-20 margin-bottom-20">Column using "elevation-2" class</div>
      <div class="col-3 color-dark elevation-3 margin-right-20 margin-bottom-20">Column using "elevation-3" class</div>
      <div class="col-3 color-dark elevation-4 margin-right-20 margin-bottom-20">Column using "elevation-4" class</div>
      <div class="col-3 color-dark elevation-5 margin-right-20 margin-bottom-20">Column using "elevation-5" class</div>
      <div class="col-3 color-dark elevation-6 margin-right-20 margin-bottom-20">Column using "elevation-6" class</div>
      <div class="col-3 color-dark elevation-7 margin-right-20 margin-bottom-20">Column using "elevation-7" class</div>
      <div class="col-3 color-dark elevation-8 margin-right-20 margin-bottom-20">Column using "elevation-8" class</div>
      <div class="col-3 color-dark elevation-9 margin-right-20 margin-bottom-20">Column using "elevation-9" class</div>
    </div>`
  };

  return (
    <section className="margin-bottom-40">
      <h2 className="font-normal font-36 margin-top-0">Elevation</h2>

      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Levels</h3>
      <Code code={codeExample1.code} demo={codeExample1.demo} language="html" />

    </section>
  );
}

export default ElevationSection;
