import React from 'react';
// import Markdown from 'markdown-to-jsx';

// import markdownConfig from "../constants/markdown.config";
import Markdown from "../components/docs/Markdown";
import DocsLayout from "../components/docs/DocsLayout";
import README from "../README.md";

// const markdownConfig = {
//   createElement: (type: any, props: any, children: any) => {
//     return (
//       <div className="parent">
//         {React.createElement(type, props, children)}
//       </div>
//     );
//   },
//   overrides: {
//     h1: {
//       props: {
//         className: 'font-normal color-dark',
//       },
//     },
//   },
// };
// const readmeFile = require("../README.md");
// import FontSection from '../components/sections/Fonts';
// import ColumnsSection from '../components/sections/Columns';
// import ButtonsSection from '../components/sections/Buttons';
// import InputsSection from '../components/sections/Inputs';
// import ElevationSection from '../components/sections/Elevation';
// import BorderSection from '../components/sections/Border';

const Home = () => {

  return (
    <DocsLayout>
      <Markdown>
        {README}
      </Markdown>
    </DocsLayout>
  );
}

export default Home
