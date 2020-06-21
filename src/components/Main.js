import PropTypes from 'prop-types'
import React from 'react'
import kayak1 from '../images/kayak1.jpg'
import Patagonia1 from '../images/Patagonia1.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  handleClick = () => {
    this.props.onCloseArticle()
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        aria-label="close"
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={kayak1} alt="" />
          </span>
          <p>
            Hi, I'm Spencer. Welcome to my home base on the internet, where
            sometimes I go by the name Spengrah. Spengrah is a portmanteau of my
            first and last name, which should tell you something about me: I
            like portmanteaus.
          </p>
          <p>What are some of my other interests?</p>
          <ul>
            <li>Burritos, and proper burrito construction</li>
            <li>
              Traveling and photography (all the images on this site are
              pictures I took while traveling). I particularly enjoy
              experiencing other ecosystems and, insofar as it is safe for me
              and them, rubbing elbows with the resident fauna.
            </li>
            <li>
              <a
                href="https://www.goodreads.com/user/show/6234447-spencer-graham"
                target="_blank"
                rel="noreferrer"
              >
                Reading
              </a>
              , with a preference for science fiction and fantasy novels
              (exploratory escapism, if you will)
            </li>
            <li>Urbanism and housing policy. Build more housing!</li>
            <li>
              Sports, of the participatory variety: soccer, ultimate frisbee,
              and cycling
            </li>
            <li>
              Sports, of the observational variety: primarily baseball (go
              Giants!), soccer, football (go Niners!), and basketball. I draw a
              great deal of joy experiencing sports from a statistical and
              analytical perspective.
            </li>
            <li>Science. Knowing how things work enhances their beauty. </li>
            <li>
              The study of uncertainty and how to make decisions within it.
              Recently, I've been fascinated with{' '}
              <a
                href="https://ergodicityeconomics.com/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Ergodicity Economics
              </a>
              .
            </li>
            <li>
              Puns. Most of mine are bad, but some are straight gems! My
              philosophy is that the best way to make quality jokes is to make a
              lot of jokes.
            </li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={Patagonia1} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        {/* <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" aria-labelledby="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                aria-labelledby="email"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                aria-labelledby="message"
              >
                {' '}
              </textarea>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="special"
                  aria-label="send message"
                />
              </li>
              <li>
                <input type="reset" value="Reset" aria-label="reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/spengrah"
                target="_blank"
                rel="noreferrer"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@spengrah"
                className="icon fa-medium"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/spencergraham/"
                className="icon fa-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/slgraham"
                className="icon fa-github"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article> */}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
