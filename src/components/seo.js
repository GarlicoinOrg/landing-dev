import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, keywords, title }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const {
          title: defaultTitle,
          description: defaultDescription,
          keywords: defaultKeywords
        } = data.site.siteMetadata;
        const metaTitle = title || defaultTitle;
        const metaDescription = description || defaultDescription;
        const metaKeywords = [
          ...(defaultKeywords.split(', ') || []),
          ...(keywords || [])
        ];

        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={metaTitle}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: metaTitle
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author
              },
              {
                name: 'twitter:title',
                content: metaTitle
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                metaKeywords.length > 0
                  ? {
                      name: 'keywords',
                      content: metaKeywords.join(', ')
                    }
                  : []
              )
              .concat(meta)}>
            {/*<html lang="en" />*/}
          </Helmet>
        );
      }}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;
