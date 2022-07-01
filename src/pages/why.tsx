import * as React from 'react';
import Layout from '../components/layout';
import { Button } from 'react-bootstrap';
import StyledLink from '../components/link';

const WhyPage = () => {
  return (
    <Layout title="Why?">
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
        <hr />
      </div>
    </Layout>
  );
};

export default WhyPage;
