import './Article.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { ArticleProps } from './types';

const Article = ({
  logo,
  sections,
  tags,
  tagsContainerTitle,
  title,
}: ArticleProps) => (
  <>
    <section className="article-header">
      {logo && (
        <img className="article-header-logo" src={logo.src} alt={logo.alt} />
      )}
      <h1
        className={`article-header-title${logo ? '' : ' article-header-title--standalone'}`}>
        {title}
      </h1>
    </section>
    <section className="article-body">
      {sections.map(({ title: sectionTitle, content }) => (
        <React.Fragment key={sectionTitle}>
          <h2 className="article-subtitle">{sectionTitle}</h2>
          {content}
        </React.Fragment>
      ))}
      <h2 className="article-subtitle article-tags-title">
        {tagsContainerTitle}
      </h2>
      {tags && (
        <div className="article-tags-container">
          {tags.map(({ label, to }) => (
            <Link key={to} to={to}>
              <span className="article-tag">{label}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  </>
);

export default Article;
