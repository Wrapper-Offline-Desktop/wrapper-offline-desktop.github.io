import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';

interface Props {
  title: string;
  style?: React.CSSProperties;
}

const Layout = ({ children, ...props }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <Helmet>
        <title>{'Wrapper Offline Desktop - ' + props.title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header />
      <main style={props.style}>{children}</main>
    </>
  );
};

export default Layout;
