import * as React from 'react';
import Layout from '../components/layout';
import { Button, Container, Table } from 'react-bootstrap';
import StyledLink from '../components/link';

const DownloadsPage = () => {
  const downloads = new Map([
    ['Windows Installer (.exe)', new Map([['64-bit', ['Github', "javascript:alert('Not yet!')"]]])],
    ['Windows Binary (.zip)', new Map([['64-bit', ['Github', "javascript:alert('Not yet!')"]]])],
    ['macOS Installer (.dmg)', new Map([['64-bit / arm64', ['Github', "javascript:alert('Not yet!')"]]])],
    ['Linux AppImage (x64)', new Map([['64-bit', ['Github', "javascript:alert('Not yet!')"]]])],
    ['Source Code', new Map([['Source', ['Github', "javascript:alert('Not yet!')"]]])],
  ]);

  const legacyDownloads = new Map([
    [
      'Windows Installer (.exe)',
      new Map([
        [
          '64-bit',
          ['Google Drive', 'https://drive.google.com/file/d/1r-sGlNic-hCHJFf4pPA3ev-ePkjpeFft/view?usp=sharing'],
        ],
      ]),
    ],
    [
      'Windows Binary (.zip)',
      new Map([
        [
          '64-bit',
          ['Google Drive', 'https://drive.google.com/file/d/112jB6mKIwpKlaPvMB8alomx1bw0Rpy_c/view?usp=sharing'],
        ],
      ]),
    ],
    [
      'macOS Installer (.dmg)',
      new Map([
        [
          '64-bit / arm64',
          ['Google Drive', 'https://drive.google.com/file/d/1voI44BIKSBQNgcX4Rkpy7Egyra2NTsxx/view?usp=sharing'],
        ],
      ]),
    ],
    [
      'Linux AppImage (x64)',
      new Map([
        [
          '64-bit',
          ['Google Drive', 'https://drive.google.com/file/d/1THwfeGzEQta6i6YrMHwQmu4b3lb__9vh/view?usp=sharing'],
        ],
      ]),
    ],
    [
      'Source Code',
      new Map([['Source', ['Absolute Github URL', 'https://github.com/jackprogramsjp/Wrapper-Offline-Electron']]]),
    ],
  ]);

  return (
    <Layout title="Downloads">
      <Container className="mt-5">
        <h1>Downloads</h1>
        <p className="lead">Latest version: </p>
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
      <Container className="my-5">
        <h1>Legacy Download - Wrapper Offline Electron</h1>
        <p className="lead">Latest version: 0.1.3</p>
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
            {[...legacyDownloads.keys()].map((platform) =>
              // there is no error in this downloads.get(platform)?, it's just intellisense
              [...legacyDownloads.get(platform)?.keys()].map((arch: string) => (
                <tr>
                  <td>{platform}</td>
                  <td>{arch}</td>
                  <td>
                    <a href={legacyDownloads.get(platform)?.get(arch)?.at(1)}>
                      {legacyDownloads.get(platform)?.get(arch)?.at(0)}
                    </a>
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </Table>
        <br className="my-5" />
        <p className="lead">Version: 0.1.0</p>
        <Table striped={true}>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Architecture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Windows Installer {'('}.exe{')'}
              </td>
              <td>64-bit</td>
              <td>
                <a href="https://drive.google.com/file/d/1QLhqw6YNs48T3zjnyLuzS41xxSneRzG5/view">Google Drive</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export default DownloadsPage;
