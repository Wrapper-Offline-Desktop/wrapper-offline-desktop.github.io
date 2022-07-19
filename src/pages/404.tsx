import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import StyledLink from '../components/link';
import { Alert } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Layout title="404">
      <Alert key="warning" variant="warning">
        Here is <Link to="/reason">why</Link> Wrapper Offline Desktop is not being maintained anymore.
      </Alert>
      <div className="text-center p-5 rounded-lg">
        <h1 className="display-4">404</h1>
        <p className="lead">Page not found.</p>
        <hr className="my-4" />
        <StyledLink to="/">
          <Button variant="secondary" size="lg">
            Go Home
          </Button>
        </StyledLink>{' '}
      </div>
    </Layout>
  );
};

export default NotFoundPage;
