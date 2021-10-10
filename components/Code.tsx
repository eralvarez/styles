import React, { useState, useEffect } from 'react';
import Prismjs from 'prismjs';

interface IProps {
  code: string;
  demo: string;
  language: 'html' | 'javascript';
}
const CodeSection = (props: IProps) => {
  const { code, demo, language } = props;
  const [demoMode, setDemoMode] = useState(true);

  useEffect(() => {
    if (!demoMode) {
      Prismjs.highlightAll();
    }
  }, [demoMode]);

  return (
    <div className="position-relative">
      <button className="position-absolute" style={{right: 0, zIndex: 2}} onClick={() => setDemoMode(!demoMode)}>
        {demoMode ? 'See code' : 'See demo'}
      </button>
      {demoMode ?
        <div dangerouslySetInnerHTML={{ __html: demo }}></div>
        :
        <pre className="bg-dark color-light margin-no padding-no">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      }
    </div>
  );
}

export default CodeSection;