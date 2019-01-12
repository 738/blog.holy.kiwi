import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {

  __videos = ['https://youtube.com/embed/4PYJuUYKmD4'
  , 'https://www.youtube.com/embed/gTQIp48uiGI'
  , 'https://www.youtube.com/embed/Q1Wm0_fOON4'
  , 'https://www.youtube.com/embed/rg-TheCVOTw'
  , 'https://www.youtube.com/embed/sd3JbeYMbug'];

  getRandomVideo = () => this.__videos[Math.floor(Math.random() * this.__videos.length)];

  render() {
    return (
      <Layout location={this.props.location}>
        <h1>404 Not Found</h1>
        <p>이 페이지에는 문서가 없습니다.</p>
        <iframe
          width="560"
          height="315"
          src={this.getRandomVideo()}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
        <p>제가 좋아하는 노래들 중 하나입니다. 한 번 들어보세요 ㅎㅎ</p>
      </Layout>
    )
  }
}

export default NotFoundPage
