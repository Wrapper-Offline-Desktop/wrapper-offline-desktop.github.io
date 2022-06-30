import * as React from 'react';
import Layout from '../components/layout';
import { Button } from 'react-bootstrap';

const DownloadsPage = () => {
  return (
    <Layout title="Downloads">
      <div
        className="text-center text-white rounded-lg"
        style={{
          padding: '10.0rem',
        }}
      >
        <h1 className="display-4">Wrapper Offline Desktop</h1>
        <p className="lead">The multiplatform solution for Wrapper Offline video creation.</p>
        <hr className="my-4" />
        <Button variant="outline-light" size="lg">
          Get Started
        </Button>{' '}
      </div>
    </Layout>
  );
};

export default DownloadsPage;
