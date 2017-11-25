import React from 'react'
import PropTypes from 'prop-types'

const ArticlesList = ({ articles }) => (
  <div>{ JSON.stringify(articles) }</div>
)

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  })),
}

ArticlesList.defaultProps = {
  articles: [],
}

export default ArticlesList
