import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ article }) => (
  <a href={article.url}>
    <div className="c-article col-6" key={article.url}>
      <h2 className="c-article__title">{article.title}</h2>
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
