import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ article }) => (
  <div>
    <h1>{article.title}</h1>
  </div>
)

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default Article
