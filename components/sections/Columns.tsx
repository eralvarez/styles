import React from 'react';

import Code from '../Code';


const ColumnsSection = () => {
  const codeExample1 = {
    code: `<div class="container flex flex-wrap margin-bottom-20">
  <div class="col-1 bg-dark color-light">Column using "col-1/12" class</div>
  <div class="col-1 bg-light color-dark">Column using "col-1/12" class</div>
  <div class="col-1 bg-dark color-light">Column using "col-1/12" class</div>
  <div class="col-1 bg-light color-dark">Column using "col-1/12" class</div>
  <div class="col-1 bg-dark color-light">Column using "col-1/12" class</div>
  <div class="col-1 bg-light color-dark">Column using "col-1/12" class</div>
  <div class="col-1 bg-dark color-light">Column using "col-1/12" class</div>
  <div class="col-1 bg-light color-dark">Column using "col-1/12" class</div>
  <div class="col-1 bg-dark color-light">Column using "col-1/12" class</div>
  <div class="col-1 bg-light color-dark">Column using "col-1/12" class</div>
  <div class="col-1 bg-dark color-light">Column using "col-1/12" class</div>
  <div class="col-1 bg-light color-dark">Column using "col-1/12" class</div>
</div>
<div class="container flex flex-wrap margin-bottom-20">
  <div class="col-md-3 bg-light color-dark">Column using "col-md-3" class</div>
  <div class="col-md-3 bg-dark color-light">Column using "col-md-3" class</div>
  <div class="col-md-3 bg-light color-dark">Column using "col-md-3" class</div>
  <div class="col-md-3 bg-dark color-light">Column using "col-md-3" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-1 bg-light color-dark">Column using "col-md-1" class</div>
  <div class="col-md-11 bg-dark color-light">Column using "col-md-11" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-2 bg-light color-dark">Column using "col-md-2" class</div>
  <div class="col-md-10 bg-dark color-light">Column using "col-md-10" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-3 bg-light color-dark">Column using "col-md-3" class</div>
  <div class="col-md-9 bg-dark color-light">Column using "col-md-9" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-4 bg-light color-dark">Column using "col-md-4" class</div>
  <div class="col-md-8 bg-dark color-light">Column using "col-md-8" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-5 bg-light color-dark">Column using "col-md-5" class</div>
  <div class="col-md-7 bg-dark color-light">Column using "col-md-9" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-6 bg-light color-dark">Column using "col-md-6" class</div>
  <div class="col-md-6 bg-dark color-light">Column using "col-md-6" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-7 bg-light color-dark">Column using "col-md-7" class</div>
  <div class="col-md-5 bg-dark color-light">Column using "col-md-5" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-8 bg-light color-dark">Column using "col-md-8" class</div>
  <div class="col-md-4 bg-dark color-light">Column using "col-md-4" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-9 bg-light color-dark">Column using "col-md-9" class</div>
  <div class="col-md-3 bg-dark color-light">Column using "col-md-3" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-10 bg-light color-dark">Column using "col-md-10" class</div>
  <div class="col-md-2 bg-dark color-light">Column using "col-md-2" class</div>
</div>
<div class="container flex flex-wrap">
  <div class="col-md-11 bg-light color-dark">Column using "col-md-11" class</div>
  <div class="col-md-1 bg-dark color-light">Column using "col-md-1" class</div>
</div>`,
    demo: ``
  };

  return (
    <section className="margin-bottom-40">
      <h2 className="font-normal font-36 margin-top-0">Columns</h2>

      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Grid system</h3>
      <Code code={codeExample1.code} demo={codeExample1.code} language="html" />

    </section>
  );
}

export default ColumnsSection;
