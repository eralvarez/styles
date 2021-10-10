import React from 'react';

import Code from '../Code';


const BorderSection = () => {
  const codeExample1 = {
    code: `<div class="container flex flex-wrap margin-bottom-20">
  <div class="col-3 color-dark elevation-1 margin-right-20 margin-bottom-20 border-radius">Column using "border-radius" class</div>
  <div class="col-3 color-dark elevation-2 margin-right-20 margin-bottom-20 border-radius-1">Column using "border-radius-1" class</div>
  <div class="col-3 color-dark elevation-3 margin-right-20 margin-bottom-20 border-radius-2">Column using "border-radius-2" class</div>
  <div class="col-3 color-dark elevation-4 margin-right-20 margin-bottom-20 border-radius-3">Column using "border-radius-3" class</div>
  <div class="col-3 color-dark elevation-5 margin-right-20 margin-bottom-20 border-radius-4">Column using "border-radius-4" class</div>
  <div class="col-3 color-dark elevation-6 margin-right-20 margin-bottom-20 border-radius-5">Column using "border-radius-5" class</div>
  <div class="col-3 color-dark elevation-7 margin-right-20 margin-bottom-20 border-radius-6">Column using "border-radius-6" class</div>
  <div class="col-3 color-dark elevation-8 margin-right-20 margin-bottom-20 border-radius-7">Column using "border-radius-7" class</div>
  <div class="col-3 color-dark elevation-9 margin-right-20 margin-bottom-20 border-radius-8">Column using "border-radius-8" class</div>
  <div class="col-3 color-dark elevation-9 margin-right-20 margin-bottom-20 border-radius-9">Column using "border-radius-9" class</div>
  <div class="col-3 color-dark elevation-9 margin-right-20 margin-bottom-20 border-radius-10">Column using "border-radius-10" class</div>
</div>`,
    demo: ``
  };

  return (
    <section className="margin-bottom-40">
      <h2 className="font-normal font-36 margin-top-0">Border</h2>

      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Radius</h3>
      <Code code={codeExample1.code} demo={codeExample1.code} language="html" />

    </section>
  );
}

export default BorderSection;
