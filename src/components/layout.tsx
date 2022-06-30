import React from 'react';
import { Helmet } from 'react-helmet';
import Header, { Navigation } from './header';

interface Props {
  title?: string;
  style?: React.CSSProperties;
  nav: Navigation[];
}

const Layout = ({ children, ...props }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <Helmet>
        <title>{props.title ?? 'Wrapper Offline Desktop Site'}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header nav={props.nav} />
      <main style={props.style}>{children}</main>
    </>
  );
};

export default Layout;
