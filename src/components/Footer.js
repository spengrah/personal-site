import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Spencer Graham, 2020. Built with Gatsby from the Dimension template
      by{' '}
      <a href="https://html5up.net" target="_blank" rel="noreferrer">
        HTML5 UP
      </a>
      .<br></br>Hosted on web3.
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
