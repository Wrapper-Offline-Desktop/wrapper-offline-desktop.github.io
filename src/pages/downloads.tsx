import * as React from 'react';
import Layout from '../components/layout';
import { Button, Container, Table } from 'react-bootstrap';
import StyledLink from '../components/link';

const DownloadsPage = () => {
  const downloads = new Map([
    [
      'Windows Installer (.exe)',
      new Map([['64-bit', ['Google Drive', "javascript:alert('Please download the .zip file instead')"]]]),
    ],
    [
      'Windows Binary (.zip)',
      new Map([
        [
          '64-bit',
          [
            'Google Drive',
            "javascript:confirm('Please EXTRACT the zip file. Opening it directly will make the app not work.')?window.location.href='https://drive.google.com/file/d/1vW5nSjEtWbMsEiHi5jZMGBZJ96F74cby/view?usp=sharing':[]",
          ],
        ],
      ]),
    ],
    [
      'macOS Installer (.dmg)',
      new Map([['64-bit / arm64', ['Google Drive', "javascript:alert('Please download the .tar.gz file instead')"]]]),
    ],
    [
      'macOS Binary (.tar.gz)',
      new Map([
        [
          '64-bit / arm64',
          ['Google Drive', 'https://drive.google.com/file/d/1fRckyj2Yg88hEu4S-HusHPkagLAmAo_C/view?usp=sharing'],
        ],
      ]),
    ],
    [
      'Linux AppImage (x64)',
      new Map([
        ['64-bit', ['Nothing', "javascript:alert('Wrapper Offline Desktop isn\\'t released for Linux, yet.')"]],
      ]),
    ],
    [
      'Source Code',
      new Map([
        [
          'Source',
          ['Github', 'https://github.com/Wrapper-Offline-Desktop/Wrapper-Offline-Desktop/archive/refs/heads/beta.zip'],
        ],
      ]),
    ],
  ]);

  return (
    <Layout title="Downloads">
      <Container className="my-5">
        <h1>Downloads</h1>
        <p className="lead">Latest version: v0.1.1-preview+2</p>
        <p>Download the Wrapper Offline Desktop source code or an installer, and make videos today.</p>
        <br className="my-5" />
        <Table striped={true}>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Architecture</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {[...downloads.keys()].map((platform) =>
              // there is no error in this downloads.get(platform)?, it's just intellisense
              [...downloads.get(platform)?.keys()].map((arch: string) => (
                <tr>
                  <td>{platform}</td>
                  <td>{arch}</td>
                  <td>
                    <a href={downloads.get(platform)?.get(arch)?.at(1)}>{downloads.get(platform)?.get(arch)?.at(0)}</a>
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </Table>
        <hr className="my-5" />
        <a href="javascript:alert('Sorry, not existing yet!')">Older Releases</a>
      </Container>
    </Layout>
  );
};

export default DownloadsPage;
