import React from 'react'
import PropTypes from 'prop-types'

import Article from './Article'

const ArticlesList = ({ articles }) => (
  <div>
    {
      articles.map(
        article => <Article key={article.url} article={article} />,
      )
    }
  </div>
)

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(Article.propTypes.article),
}

ArticlesList.defaultProps = {
  articles: [],
}

export default ArticlesList
