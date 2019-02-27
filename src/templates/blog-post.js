import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import AdSense from 'react-adsense';
import { DiscussionEmbed } from "disqus-react";

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { formatReadingTime } from '../utils/helpers'
import { rhythm, scale } from '../utils/typography'

const GITHUB_USERNAME = '738'
const GITHUB_REPO_NAME = 'blog.holy.kiwi'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next, slug } = this.props.pageContext;
    const disqusShortname = "blogholykiwi";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
          {` • ${formatReadingTime(post.timeToRead)}`}
        </p>
        {/* <AdSense.Google
          client='ca-pub-8206246491652082'
          slot='6401258605'
          style={{ display: 'block', marginBottom: 20 }}
          format='auto'
          responsive='true'
        /> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <AdSense.Google
          client='ca-pub-8206246491652082'
          slot='6401258605'
          style={{ display: 'block', marginTop: 20 }}
          format='auto'
          responsive='true'
        /> */}
        {/* <p>
          <a href={discussUrl} target="_blank" rel="noopener noreferrer">
            Discuss on Twitter
          </a>
          {` • `}
          <a href={editUrl} target="_blank" rel="noopener noreferrer">
            Edit on GitHub
          </a>
        </p>*/}
        <div style={{ margin: '90px 0 40px 0' }}>
          {/* <Signup /> */}
        </div>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: rhythm(0.25),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#74b9ff',
            }}
            to={'/'}
          >
            blog.holy.kiwi
          </Link>
        </h3>
        <Bio />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
      }
    }
  }
`
