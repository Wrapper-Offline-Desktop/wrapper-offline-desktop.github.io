import * as React from 'react';
import Layout from '../components/layout';
import { Alert, Button } from 'react-bootstrap';
import StyledLink from '../components/link';
import { Link } from 'gatsby';

const WhyPage = () => {
  return (
    <Layout title="Why?">
      <Alert key="warning" variant="warning">
        Due to the deprecation of Wrapper Offline Desktop, this page won't be updated anymore. This page was going to be updated, as it is WIP, but due to deprecation, it will remain in WIP.
      </Alert>
      <Alert key="warning" variant="warning">
        Here is <Link to="/reason">why</Link> Wrapper Offline Desktop is not being maintained anymore.
      </Alert>
      <div className="text-center rounded-lg" style={{ padding: '6rem' }}>
        <h1 className="display-5">Start making amazing</h1>
        <h1 className="display-5">Wrapper Offline videos</h1>
        <p className="lead mt-4">
          Wrapper Offline Desktop allows users from all platforms {'('}Windows, MacOS, and Linux{')'}{' '}
        </p>
        <p className="lead">
          to create Wrapper Offline videos without installing dependencies like Flash Player, and with awesome features!
        </p>
        <br className="my-4" />
      </div>
    </Layout>
  );
};

export default WhyPage;
