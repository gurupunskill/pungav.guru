import { graphql } from 'gatsby';
import React from 'react';
import '../../../static/styles/blog-index.scss';
import PostListing from '../../components/post-listing';

function BlogIndex({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <>
      <div className="full-width-content">
        <div className="blog-header">
          <h1 className="mdc-typography--headline1">Blog.</h1>
        </div>
        {
          edges
            .filter((edge) => !!edge.node.frontmatter.date)
            .map((edge) => <PostListing key={edge.node.id} post={edge.node} />)
        }
      </div>
    </>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "blog"}}}
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
            coverImage {
              publicURL
            }
            coverColor
          }
        }
      }
    }
  }
`;
