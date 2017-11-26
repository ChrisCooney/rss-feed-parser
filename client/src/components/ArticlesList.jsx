import React from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'

import Article from './Article'

const ArticlesList = ({ articles }) => {
  const tiles = articles.map(article => (
    <li key={article.url} className="c-article-wrapper"><Article article={article} /></li>
  ))

  return (
    <Masonry
      elementType={'ul'} // default 'div'
    >
      {tiles}
    </Masonry>
  )
}

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(Article.propTypes.article),
}

ArticlesList.defaultProps = {
  articles: [],
}

export default ArticlesList
