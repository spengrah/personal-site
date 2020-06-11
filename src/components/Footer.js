import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Spencer Graham, 2020. Built with the Gatsby Starter - Dimension
      template by{' '} 
      <a href="https://html5up.net" target="_blank" rel="noreferrer">
        HTML5 UP
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
