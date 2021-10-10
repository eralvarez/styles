import React from 'react';

import Code from '../Code';


const InputsSection = () => {
  const codeExample1 = {
    code: `<div class="container margin-bottom-20">
  <h5>type="date"</h5>
  <input class="input" type="date">
  <h5>type="datetime-local"</h5>
  <input class="input" type="datetime-local">
  <h5>type="email"</h5>
  <input class="input" type="email">
  <h5>type="month"</h5>
  <input class="input" type="month">
  <h5>type="number"</h5>
  <input class="input" type="number">
  <h5>type="password"</h5>
  <input class="input" type="password">
  <h5>type="tel"</h5>
  <input class="input" type="tel">
  <h5>type="text"</h5>
  <input class="input" type="text">
  <h5>type="time"</h5>
  <input class="input" type="time">
  <h5>type="url"</h5>
  <input class="input" type="url">
  <h5>type="week"</h5>
  <input class="input" type="week">
</div>`,
    demo: ``
  };
  const codeExample2 = {
    code: `
    <div class="container margin-bottom-20">
      <h5>type="checkbox"</h5>  
      <input class="input" type="checkbox">
      <h5>type="radio"</h5>
      <input class="input" type="radio">
      <h5>type="range"</h5>
      <input class="input" type="range">
    </div>`,
    demo: ``
  };

  return (
    <section className="margin-bottom-40">
      <h2 className="font-normal font-36 margin-top-0">Inputs</h2>

      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Text types</h3>
      <Code code={codeExample1.code} demo={codeExample1.code} language="html" />
      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Special types</h3>
      <Code code={codeExample2.code} demo={codeExample2.code} language="html" />

    </section>
  );
}

export default InputsSection;
