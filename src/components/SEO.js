import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`

function SEO({ meta, image, title, description, slug }) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { siteMetadata } = data.site
        const metaDescription = description || siteMetadata.description
        const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null
        const url = `${siteMetadata.siteUrl}${slug}`
        return (
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            {...(title
              ? {
                titleTemplate: `%s - ${siteMetadata.title}`,
                title,
              }
              : {
                title: siteMetadata.title,
              })}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'og:description',
                content: metaDescription,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.social.twitter,
              },
              {
                name: 'twitter:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                metaImage
                  ? [
                    {
                      property: 'og:image',
                      content: metaImage,
                    },
                    {
                      name: 'twitter:image',
                      content: metaImage,
                    },
                  ]
                  : []
              )
              .concat(meta)}
          >
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124758878-2"></script>
              <script>
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments); }
                  gtag('js', new Date());
                  gtag('config', 'UA-124758878-2');
                `}
            </script>
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  title: '',
  slug: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
