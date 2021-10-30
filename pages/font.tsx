import React, { useEffect } from 'react';

import Markdown from "../components/docs/Markdown";
import DocsLayout from "../components/docs/DocsLayout";
import FONTS_DOC from "../docs/fonts.md";

const FontPage = () => {
  useEffect(() => {
    console.log(FONTS_DOC);
  }, []);

  return (
    <DocsLayout>
      <Markdown>
        {FONTS_DOC}
      </Markdown>
    </DocsLayout>
  );
}

export default FontPage;
