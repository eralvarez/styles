import React from 'react';
import Markdown from 'markdown-to-jsx';

// import markdownConfig from "../constants/markdown.config";
import DocsLayout from "../components/docs/DocsLayout";

const FontPage = () => {

  const markdownText = `
  # Fonts
  | data | value |
| --- | --- |
| 1 | 1 |
  `;

  return (
    <DocsLayout>
      {/* <Markdown options={markdownConfig}> */}
        {/* {markdownText} */}
      {/* </Markdown> */}
    </DocsLayout>
  );
}

export default FontPage;
