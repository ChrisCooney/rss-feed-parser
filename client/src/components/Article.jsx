import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ article }) => (
  <div key={article.url}>
    <p>{article.title}</p>
  </div>
)

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default Article
