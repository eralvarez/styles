import React from 'react';

import Code from '../Code';


const FontSection = () => {
  const codeExample1 = {
    code: `<h4 class="font-light">Light font using "font-light" class</h4>
<h4 class="font-normal">Normal font using "font-normal" class</h4>
<h4 class="font-bold">Bold font using "font-bold" class</h4>
<h4 class="font-w-100">Font using "font-w/weight-100" class</h4>
<h4 class="font-w-200">Font using "font-w/weight-200" class</h4>
<h4 class="font-w-300">Font using "font-w/weight-300" class</h4>
<h4 class="font-w-400">Font using "font-w/weight-400" class</h4>
<h4 class="font-w-500">Font using "font-w/weight-500" class</h4>
<h4 class="font-w-600">Font using "font-w/weight-600" class</h4>
<h4 class="font-w-700">Font using "font-w/weight-700" class</h4>
<h4 class="font-w-800">Font using "font-w/weight-800" class</h4>
<h4 class="font-w-900">Font using "font-w/weight-900" class</h4>`,
    demo: `
      <h4 class="margin-no font-light">Light font using "font-light" class</h4>
      <h4 class="margin-no font-normal">Normal font using "font-normal" class</h4>
      <h4 class="margin-no font-bold">Bold font using "font-bold" class</h4>
      <h4 class="margin-no font-w-100">Font using "font-w/weight-100" class</h4>
      <h4 class="margin-no font-w-200">Font using "font-w/weight-200" class</h4>
      <h4 class="margin-no font-w-300">Font using "font-w/weight-300" class</h4>
      <h4 class="margin-no font-w-400">Font using "font-w/weight-400" class</h4>
      <h4 class="margin-no font-w-500">Font using "font-w/weight-500" class</h4>
      <h4 class="margin-no font-w-600">Font using "font-w/weight-600" class</h4>
      <h4 class="margin-no font-w-700">Font using "font-w/weight-700" class</h4>
      <h4 class="margin-no font-w-800">Font using "font-w/weight-800" class</h4>
      <h4 class="margin-no font-w-900">Font using "font-w/weight-900" class</h4>
    `
  };
  const codeExample2 = {
    code: `<h4 class="font-14">Font using "font-14" class</h4>
<h4 class="font-16">Font using "font-16" class</h4>
<h4 class="font-18">Font using "font-18" class</h4>
<h4 class="font-20">Font using "font-20" class</h4>
<h4 class="font-22">Font using "font-22" class</h4>
<h4 class="font-24">Font using "font-24" class</h4>
<h4 class="font-26">Font using "font-26" class</h4>
<h4 class="font-28">Font using "font-28" class</h4>
<h4 class="font-30">Font using "font-30" class</h4>
<h4 class="font-32">Font using "font-32" class</h4>
<h4 class="font-34">Font using "font-34" class</h4>
<h4 class="font-36">Font using "font-36" class</h4>
<h4 class="font-38">Font using "font-38" class</h4>
<h4 class="font-40">Font using "font-40" class</h4>
<h4 class="font-42">Font using "font-42" class</h4>
<h4 class="font-44">Font using "font-44" class</h4>
<h4 class="font-46">Font using "font-46" class</h4>
<h4 class="font-48">Font using "font-48" class</h4>
<h4 class="font-50">Font using "font-50" class</h4>
<h4 class="font-52">Font using "font-52" class</h4>`,
    demo: `
    <h4 class="font-14 margin-no font-normal">Font using "font-14" class</h4>
    <h4 class="font-16 margin-no font-normal">Font using "font-16" class</h4>
    <h4 class="font-18 margin-no font-normal">Font using "font-18" class</h4>
    <h4 class="font-20 margin-no font-normal">Font using "font-20" class</h4>
    <h4 class="font-22 margin-no font-normal">Font using "font-22" class</h4>
    <h4 class="font-24 margin-no font-normal">Font using "font-24" class</h4>
    <h4 class="font-26 margin-no font-normal">Font using "font-26" class</h4>
    <h4 class="font-28 margin-no font-normal">Font using "font-28" class</h4>
    <h4 class="font-30 margin-no font-normal">Font using "font-30" class</h4>
    <h4 class="font-32 margin-no font-normal">Font using "font-32" class</h4>
    <h4 class="font-34 margin-no font-normal">Font using "font-34" class</h4>
    <h4 class="font-36 margin-no font-normal">Font using "font-36" class</h4>
    <h4 class="font-38 margin-no font-normal">Font using "font-38" class</h4>
    <h4 class="font-40 margin-no font-normal">Font using "font-40" class</h4>
    <h4 class="font-42 margin-no font-normal">Font using "font-42" class</h4>
    <h4 class="font-44 margin-no font-normal">Font using "font-44" class</h4>
    <h4 class="font-46 margin-no font-normal">Font using "font-46" class</h4>
    <h4 class="font-48 margin-no font-normal">Font using "font-48" class</h4>
    <h4 class="font-50 margin-no font-normal">Font using "font-50" class</h4>
    <h4 class="font-52 margin-no font-normal">Font using "font-52" class</h4>`,
  };

  return (
    <section className="margin-bottom-40">
      <h2 className="font-normal font-36 margin-top-0">Fonts</h2>

      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Weights</h3>
      <Code code={codeExample1.code} demo={codeExample1.demo} language="html" />

      <h3 className="font-normal font-28 margin-top-20 margin-bottom-10">Sizes</h3>
      <Code code={codeExample2.code} demo={codeExample2.demo} language="html" />

      {/* <table className="table table-striped">
        <thead>
          <tr>
            <th>class</th>
            <th>css</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>
              <div>
                flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;
              </div>
            </td>
          </tr>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>
              <div>
                flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;
              </div>
            </td>
          </tr>
          <tr>
            <td>x</td>
            <td>x</td>
            <td>
              <div>
                flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;flex-wrap: wrap;display: flex;
              </div>
            </td>
          </tr>
        </tbody>
      </table> */}
    </section>
  );
}

export default FontSection;
