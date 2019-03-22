import Link from 'next/link';
import Layout from '../layouts/default';

export default () => (
  <>
    <style jsx>{`
      .About-photo {
        width: 200px;
        margin: 0 auto;
        display: block;
      }

      .About-container dt {
        font-weight: bold;
        margin: 1em 0;
      }
      .About-container dd {
        margin: 0;
      }

      @media (min-width: 768px) {
        .About-photo {
          float: right;
        }
        .About-container {
          display: flex;
        }
        .About-container-primary {
          flex: 1;
        }
        .About-container-secondary {
          flex: 3;
        }
        .About-container > *:nth-child(2) {
          padding-left: 2em;
        }
      }
    `}</style>
    <Layout>
      <div className="About-container">
        <div className="About-container-secondary">
          <h1>Contact</h1>
          <b>22, 1996</b>
          <p>
            I live in Austria, Vienna.
          </p>
          <p>
            lets travel 
          </p>
        </div>
        <div className="About-container-primary">
          <img className="About-photo" src="/static/profile-photo2.jpg" />
        </div>
      </div>
      <div className="About-container">
        <div className="About-container-primary">
          <dl>
            <dt>Location</dt>
            <dd>Vienna</dd>
          </dl>
          <dl>
            <dt>Knowledge</dt>
            <dd>
              Wordpress, Adobe programs
            </dd>
          </dl>
          <dl>
            <dt>Nationality</dt>
            <dd>Austrian</dd>
          </dl>
          <dl>
            <dt>Languages</dt>
            <dd>
              <ul>
                <li>German: Native Speaker</li>
                <li>English: Good</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Other Interests</dt>
            <dd>Photography, Writing, Cats</dd>
          </dl>
        </div>
        <div className="About-container-secondary">
          <h2>Work Experience</h2>
          <p>
            Work in an advertising agency for 5 years now.
          </p>
          <h3>Main Client</h3>
          <b>Zentrum Simmering</b>
          <p>Sep 2014 - Mar 2019</p>
          <p>
            Take fotos from the center and look after Social Media.
          </p>
          <ul>
            <li>
              one
            </li>
            <li>two</li>
            <li>three</li>
          </ul>
          <h3>Client two</h3>
          <b>Szigeti</b>
          <p>Jan 2015 - Mar 2019</p>
          <p>
            Its an exclusiv brand for sparkling wine.
          </p>
          <ul>
            <li>one</li>
            <li>
              two
            </li>
            <li>three</li>
          </ul>
        </div>
      </div>
    </Layout>
  </>
);
