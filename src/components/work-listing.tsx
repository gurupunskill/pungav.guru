import React from 'react';
import '../../static/styles/work.scss';

export default function WorkListing({ post }) {
  return (
    <div
      className="work-listing"
      style={{
        backgroundImage: `url(${post.frontmatter.coverImage.publicURL})`,
        boxShadow: `inset 0 0 0 1000px ${post.frontmatter.coverColor}`,
      }}
    >
      <div className="work-listing--content">
        <div className="work-listing--header">
          <h3 className="mdc-typography--headline2 bold">{post.frontmatter.title}</h3>
          <h6 className="mdc-typography--headline4 medium">{post.frontmatter.subtitle}</h6>
          <div className="medium-spacer" />
          <h6 className="mdc-typography--headline6 light">
            {post.frontmatter.timelineStart}
            {' - '}
            {post.frontmatter.timelineEnd ? post.frontmatter.timelineEnd : 'Present'}
          </h6>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}
