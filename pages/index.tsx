import React from 'react';

import Markdown from "../components/docs/Markdown";
import DocsLayout from "../components/docs/DocsLayout";
import README from "../README.md";

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
