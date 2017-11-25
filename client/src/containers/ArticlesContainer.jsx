import React, { Component } from 'react'
import { fetchArticles } from '../utils/api'

import ArticlesList from '../components/ArticlesList'

class ArticlesContainer extends Component {
  componentWillMount() {
    const articlesLoaded = this.articlesLoaded

    fetchArticles()
      .then(json => articlesLoaded(json))
  }

  render() {
    return (
      <div>
        <h1>Articles Pulled from the RSS Feed</h1>
        <ArticlesList />
      </div>
    )
  }
}

export {
  ArticlesContainer as Component,
}

export default ArticlesContainer
