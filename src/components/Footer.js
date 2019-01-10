import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://github.com/JonJee"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://acmicpc.net/user/iam"
          target="_blank"
          rel="noopener noreferrer">
          BOJ
        </a>
      </footer>
    )
  }
}

export default Footer
