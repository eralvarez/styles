import React from 'react';

import Code from '../Code';


const ButtonsSection = () => {
  const codeExample1 = {
    code: `<div class="container flex flex-wrap margin-bottom-20">
  <button class="btn margin-right-10 margin-bottom-10">default</button>
  <button class="btn btn-primary margin-right-10 margin-bottom-10">primary button</button>
  <button class="btn btn-secondary margin-right-10 margin-bottom-10">secondary button</button>
  <button class="btn btn-success margin-right-10 margin-bottom-10">success button</button>
  <button class="btn btn-danger margin-right-10 margin-bottom-10">danger button</button>
  <button class="btn btn-warning margin-right-10 margin-bottom-10">warning button</button>
  <button class="btn btn-light margin-right-10 margin-bottom-10">light button</button>
  <button class="btn btn-dark margin-right-10 margin-bottom-10">dark button</button>
</div>`,
    demo: ``
  };
  const codeExample2 = {
    code: `<div class="container flex flex-wrap margin-bottom-20">
  <button class="btn btn-sm margin-right-10 margin-bottom-10">default with "btn-sm" class</button>
  <button class="btn btn-sm btn-primary margin-right-10 margin-bottom-10">primary button with "btn-sm" class</button>
  <button class="btn btn-sm btn-secondary margin-right-10 margin-bottom-10">secondary button with "btn-sm" class</button>
  <button class="btn btn-sm btn-success margin-right-10 margin-bottom-10">success button with "btn-sm" class</button>
  <button class="btn btn-sm btn-danger margin-right-10 margin-bottom-10">danger button with "btn-sm" class</button>
  <button class="btn btn-sm btn-warning margin-right-10 margin-bottom-10">warning button with "btn-sm" class</button>
  <button class="btn btn-sm btn-light margin-right-10 margin-bottom-10">light button with "btn-sm" class</button>
  <button class="btn btn-sm btn-dark margin-right-10 margin-bottom-10">dark button with "btn-sm" class</button>
</div>
<div class="container flex flex-wrap margin-bottom-20">
  <button class="btn btn-md margin-right-10 margin-bottom-10">default with "btn-md" class</button>
  <button class="btn btn-md btn-primary margin-right-10 margin-bottom-10">primary button with "btn-md" class</button>
  <button class="btn btn-md btn-secondary margin-right-10 margin-bottom-10">secondary button with "btn-md" class</button>
  <button class="btn btn-md btn-success margin-right-10 margin-bottom-10">success button with "btn-md" class</button>
  <button class="btn btn-md btn-danger margin-right-10 margin-bottom-10">danger button with "btn-md" class</button>
  <button class="btn btn-md btn-warning margin-right-10 margin-bottom-10">warning button with "btn-md" class</button>
  <button class="btn btn-md btn-light margin-right-10 margin-bottom-10">light button with "btn-md" class</button>
  <button class="btn btn-md btn-dark margin-right-10 margin-bottom-10">dark button with "btn-md" class</button>
</div>
<div class="container flex flex-wrap margin-bottom-20">
  <button class="btn btn-lg margin-right-10 margin-bottom-10">default with "btn-lg" class</button>
  <button class="btn btn-lg btn-primary margin-right-10 margin-bottom-10">primary button with "btn-lg" class</button>
  <button class="btn btn-lg btn-secondary margin-right-10 margin-bottom-10">secondary button with "btn-lg" class</button>
  <button class="btn btn-lg btn-success margin-right-10 margin-bottom-10">success button with "btn-lg" class</button>
  <button class="btn btn-lg btn-danger margin-right-10 margin-bottom-10">danger button with "btn-lg" class</button>
  <button class="btn btn-lg btn-warning margin-right-10 margin-bottom-10">warning button with "btn-lg" class</button>
  <button class="btn btn-lg btn-light margin-right-10 margin-bottom-10">light button with "btn-lg" class</button>
  <button class="btn btn-lg btn-dark margin-right-10 margin-bottom-10">dark button with "btn-lg" class</button>
</div>`,
    demo: ``
  };

  return (
    <section className="margin-bottom-40">
      <h2 className="font-normal font-36 margin-top-0">Buttons</h2>

      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Types</h3>
      <Code code={codeExample1.code} demo={codeExample1.code} language="html" />

      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Sizes</h3>
      <Code code={codeExample2.code} demo={codeExample2.code} language="html" />

    </section>
  );
}

export default ButtonsSection;
