import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import '../../static/styles/work.scss';
import WorkListing from '../components/work-listing';

function Work({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <div className="full-width-content">
      <div className="work-header">
        <h1 className="mdc-typography--headline1">Work.</h1>
      </div>
      <Container fluid className="standard-content">
        <Row gutterWidth={16}>
          {
            edges
              .filter((edge) => !!edge.node.frontmatter.order)
              .map((edge) => (
                <Col md={6} sm={12} style={{ paddingBottom: '16px' }}>
                  <WorkListing key={edge.node.id} post={edge.node} />
                </Col>
              ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default Work;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "work"}}}
      sort: { order: ASC, fields: [frontmatter___order] }
      limit: 1000
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            slug
            timelineStart(formatString: "MMM YYYY")
            timelineEnd(formatString: "MMM YYYY")
            title
            subtitle
            order
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
