import React, { memo } from 'react';
import Link from 'next/link';


interface INavItem {
  text: string;
  href: string;
}

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const DocsLayout = (props: IProps) => {
  const { children } = props;

  const navItems: INavItem[] = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Font',
      href: '/font'
    },
  ]

  return (
    <div className="flex position-absolute width-100 height-100">
      <aside className="bg-dark col-md-2">
        <nav className="margin-top-26">
          <ul className="margin-no padding-no">
            {navItems.map((navItem, navItemIndex) => (
              <li key={`docNavItem-${navItemIndex}`}>
                <Link href={navItem.href}>
                  <span className="color-light font-22 font-light display-block padding-y-10 padding-x-14 cursor-pointer">{navItem.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="color-dark overflow-y-auto width-100 padding-bottom-20">
        {children}
      </main>
    </div>
  );
};

export default memo(DocsLayout);

export type {
  INavItem
};
