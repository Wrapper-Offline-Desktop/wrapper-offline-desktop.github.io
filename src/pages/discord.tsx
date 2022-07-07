import * as React from 'react';
import Layout from '../components/layout';
import { Container } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Layout title="Discord">
      <Container className="my-5">
        <h1 className="border-bottom pb-3 mb-4">Discord</h1>
        <div className="d-flex justify-content-center container">
          <iframe
            src="https://discord.com/widget?id=980360088185339955&theme=dark"
            width="350"
            height="500"
            allowTransparency={true}
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
