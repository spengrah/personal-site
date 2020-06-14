import React from 'react'
import PropTypes from 'prop-types'

import ethereum from '../images/ethereum-white.svg'

const Social = props => (
      <div id='social'
        style={props.timeout ? { display: 'none' } : {}}
      >
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
          {/* <li>
            <a
              href="https://medium.com/@spengrah"
              className="icon fa-medium"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Medium</span>
            </a>
          </li> */}
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
          {/* <li>
            <a
              href="https://www.goodreads.com/user/show/6234447-spencer-graham"
            //   className="icon fa-google"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">GR</span>
            </a>
          </li> */}
          <li>
            <a
              href="https://www.instagram.com/slgraham/"
              className="icon fa-instagram"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://3box.io/0xa7a5a2745f10d5c23d75a6fd228a408cede1cae5"
              className="icon"
              target="_blank"
              rel="noreferrer"
            >
                <img className='image-icon' src={ethereum} alt=''/>
              {/* <span className="label">Eth</span> */}
            </a>
          </li>
          
        </ul>
      </div>
)

Social.propTypes = {
    timeout: PropTypes.bool,
  }  

export default Social
