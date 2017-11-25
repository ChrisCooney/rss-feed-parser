import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchArticles } from '../utils/api'
import { articlesLoaded } from '../actions/articles'
import { selectArticles, selectLoading } from '../selectors/articles'

import ArticlesList from '../components/ArticlesList'

class ArticlesContainer extends Component {
  componentWillMount() {
    const { dispatchLoadedEvent } = this.props

    fetchArticles()
      .then(json => dispatchLoadedEvent(json))
  }

  render() {
    const { articles, loading } = this.props

    let components

    if (loading) {
      components = <div>LOADING!</div>
    } else {
      components = (
        <div>
          <h1 className="c-header">Articles Pulled from the RSS Feed</h1>
          <ArticlesList articles={articles} />
        </div>
      )
    }

    return components
  }
}

ArticlesContainer.propTypes = {
  dispatchLoadedEvent: PropTypes.func.isRequired,
  articles: ArticlesList.propTypes.articles,
  loading: PropTypes.bool.isRequired,
}

ArticlesContainer.defaultProps = {
  articles: [],
}

export {
  ArticlesContainer as Component,
}

export default connect(
  state => ({
    articles: selectArticles(state),
    loading: selectLoading(state),
  }),
  dispatch => ({
    dispatchLoadedEvent: articles => dispatch(articlesLoaded(articles)),
  }),
)(ArticlesContainer)
