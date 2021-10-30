import React, { memo } from 'react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const MarkdownWrapper = (props: IProps) => {
  const { children } = props;
  const markdownConfig: MarkdownToJSX.Options = {
    overrides: {
      main: {
        props: {
          className: 'mainclass',
        },
      },
      h1: {
        props: {
          className: 'font-normal color-dark border-bottom-dark-2 font-40',
        },
      },
      code: {
        props: {
          className: 'bg-dark-l-90 color-dark border-radius-2 padding-x-4 padding-y-2'
        }
      },
      table: {
        props: {
          className: 'table table-striped'
        }
      },
      pre: {
        props: {
          className: 'bg-dark-l-90 color-dark border-radius-2 padding-10'
        }
      }
    },
  };

  return (

    <Markdown options={markdownConfig} className="container-boxed">
      {children as any}
    </Markdown>
  );
}

export default memo(MarkdownWrapper);
