import React, { createElement, memo } from 'react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const MarkdownWrapper = (props: IProps) => {
  const { children } = props;
  const markdownConfig: MarkdownToJSX.Options = {
    // wrapper: ,
    // forceWrapper: false,
    // createElement: (type: any, props: any, children: any) => {
    //   return (
    //     <div className="parent">
    //       {createElement(type, props, children)}
    //     </div>
    //   );
    // },
    overrides: {
      main: {
        props: {
          className: 'mainclass',
        },
      },
      h1: {
        props: {
          className: 'font-normal color-dark',
        },
      },
    },
  };

  return (

    <Markdown options={markdownConfig} className="container-boxed"
      // style={{
      //   backgroundColor: 'red',
      //   width: '70%',
      //   maxWidth: '1200px',
      //   margin: '0 auto',
      // }}
    >
      {children as any}
    </Markdown>
  );
}

export default memo(MarkdownWrapper);
