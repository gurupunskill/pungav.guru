import React from 'react';
import { navigate } from 'gatsby';
import '../../static/styles/blog-index.scss';

export default function PostListing({ post }) {
  const onClick = () => { navigate(post.frontmatter.slug); };

  return (
    <div
      className="post-listing"
      aria-hidden="true"
      onClick={onClick}
      onKeyDown={onClick}
      style={{
        backgroundImage: `url(${post.frontmatter.coverImage.publicURL})`,
        boxShadow: `inset 0 0 0 1000px ${post.frontmatter.coverColor}`,
      }}
    >
      <div className="text-content--heading">
        <h2 className="post-listing--title mdc-typography--headline2">{post.frontmatter.title}</h2>
      </div>
      <div className="text-content--heading">
        <h6 className="mdc-typography--headline5 light small-spacer">{post.frontmatter.description}</h6>
        <h6 className="mdc-typography--headline6">{post.frontmatter.date}</h6>
      </div>
    </div>
  );
}
