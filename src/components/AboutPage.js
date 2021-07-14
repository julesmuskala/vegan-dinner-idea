import { Link } from 'react-router-dom'

const AboutPage = () => (
  <>
    <main className="ideas-main ideas-main-about">
      <p className="about-page__text">
        This is just a fun open-souce project you can find on <a
          className="line-link"
          href="https://github.com/breakingbar/vegan-dinner-idea"
          target="_blank"
          rel="noreferrer"
          >my GitHub.</a>
      </p>
      <p className="about-page__text line-link">
        <Link to="/">back to <strong>tapping!</strong></Link>
      </p>
    </main>
    <footer className="ideas-footer">
      <p>
        All recipes and pictures belong to their respective users.
      </p>
    </footer>
  </>
)

export default AboutPage