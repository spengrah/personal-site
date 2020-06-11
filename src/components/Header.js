import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
          <div className="logo-outline">
            <div className="logo" title='hey look, you found me!'></div>
          </div>
    <div className="content">
      <div className="inner">
              <li>
                <button
                  onClick={() => {
                    window.open('https://medium.com/@spengrah/', "_blank")
                  }}
                >
                  Blog
                </button>
              </li>
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
