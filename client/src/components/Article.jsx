import React from 'react'
import PropTypes from 'prop-types'

import Images from './Images'

const Article = ({ article }) => (
  <a href={article.url}>
    <div className="c-article" key={article.url}>
      <h2 className="c-article__title">{article.title}</h2>
      <Images images={article.images} />
    </div>
  </a>
)

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default Article
