import React from 'react';

// import styles from './DocsLayout.module.scss';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}
const DocsLayout = (props: IProps) => {
  return (
    <div className="flex position-fixed width-100 height-100">
      <main className="container-boxed container-boxed bg-dark color-light">
        <span>DocsLayout</span>
      </main>
    </div>
  );
}

export default DocsLayout;
