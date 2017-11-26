import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchArticles } from '../utils/api'
import { articlesLoaded, filterUpdated } from '../actions/articles'
import { selectArticles, selectLoading, selectFilter } from '../selectors/articles'

import ArticlesList from '../components/ArticlesList'
import SearchField from '../components/SearchField'

class ArticlesContainer extends Component {
  componentWillMount() {
    const { dispatchLoadedEvent } = this.props

    fetchArticles()
      .then(json => dispatchLoadedEvent(json))
  }

  render() {
    const { articles, loading, filter, dispatchFilterEvent } = this.props

    let components

    if (loading) {
      components = <div>LOADING!</div>
    } else {
      components = (
        <div>
          <h1 className="c-header">Articles Pulled from the RSS Feed</h1>
          <SearchField filter={filter} onFilterUpdate={dispatchFilterEvent} />
          <ArticlesList articles={articles} />
        </div>
      )
    }

    return components
  }
}

ArticlesContainer.propTypes = {
  dispatchFilterEvent: PropTypes.func.isRequired,
  dispatchLoadedEvent: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  articles: ArticlesList.propTypes.articles,
  filter: PropTypes.string,
}

ArticlesContainer.defaultProps = {
  articles: [],
  filter: undefined,
}

export {
  ArticlesContainer as Component,
}

export default connect(
  state => ({
    articles: selectArticles(state),
    loading: selectLoading(state),
    filter: selectFilter(state),
  }),
  dispatch => ({
    dispatchLoadedEvent: articles => dispatch(articlesLoaded(articles)),
    dispatchFilterEvent: filter => dispatch(filterUpdated(filter)),
  }),
)(ArticlesContainer)
