import * as React from 'react';
import Layout from '../components/layout';
import { Alert, Container } from 'react-bootstrap';
import { Link } from 'gatsby';

const DiscordPage = () => {
  return (
    <Layout title="Discord">
      <Container className="my-5">
        <Alert key="warning" variant="warning">
          Due to the deprecation of Wrapper Offline Desktop, the discord server is no longer active and will not contain
          sufficient members.
        </Alert>
        <Alert key="warning" variant="warning">
          Here is <Link to="/reason">why</Link> Wrapper Offline Desktop is not being maintained anymore.
        </Alert>
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

export default DiscordPage;
