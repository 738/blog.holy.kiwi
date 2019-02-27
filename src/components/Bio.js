import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-noto-serif-kr'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Jon Jee`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by <a href="https://github.com/738">Jon Jee</a>.
          <br/>
          I hope to explain with words and code.
        </p>
      </div>
    )
  }
}

export default Bio
