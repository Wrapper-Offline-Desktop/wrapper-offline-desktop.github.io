import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Header from './header';

interface Props {
  title: string;
  description?: string;
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
        <meta name="description" content={props.description ?? 'The multiplatform solution to Wrapper Offline'} />
        <meta name="keywords" content="Multiplatform, Solution, Wrapper, Desktop, App" />
        <meta name="author" content="JackProgramsJP" />
      </Helmet>
      <Header />
      <main style={props.style}>{children}</main>
      <footer className="text-muted">
        <Container className="border-top pt-5">
          <p className="float-right">
            <Link to="#">Back to Top</Link>
          </p>
          <p>© JackProgramsJP 2022</p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
