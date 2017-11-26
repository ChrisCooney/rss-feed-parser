import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchArticles } from '../utils/api'
import { articlesLoaded, filterUpdated, error } from '../actions/articles'
import { selectArticles, selectLoading, selectFilter, selectError } from '../selectors/articles'

import ArticlesList from '../components/ArticlesList'
import SearchField from '../components/SearchField'

class ArticlesContainer extends Component {
  componentWillMount() {
    const { dispatchLoadedEvent, dispatchErrorEvent } = this.props

    fetchArticles()
      .then(json => dispatchLoadedEvent(json))
      .catch(() => dispatchErrorEvent())
  }

  render() {
    const { articles, loading, filter, dispatchFilterEvent, hasErrorOccurred } = this.props

    let component

    if (loading) {
      component = (
        <div className="c-loading">
          LOADING
        </div>
      )
    } else if (hasErrorOccurred) {
      component = (
        <div className="c-error">
          An Error has occurred. Please refresh the page.
        </div>
      )
    } else {
      component = (
        <div>
          <h1 className="c-header">
            Articles Pulled from the RSS Feed
          </h1>
          <SearchField filter={filter} onFilterUpdate={dispatchFilterEvent} />
          <ArticlesList articles={articles} />
        </div>
      )
    }

    return component
  }
}

ArticlesContainer.propTypes = {
  dispatchFilterEvent: PropTypes.func.isRequired,
  dispatchLoadedEvent: PropTypes.func.isRequired,
  dispatchErrorEvent: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  articles: ArticlesList.propTypes.articles,
  filter: PropTypes.string,
  hasErrorOccurred: PropTypes.bool,
}

ArticlesContainer.defaultProps = {
  articles: [],
  filter: undefined,
  hasErrorOccurred: false,
}

export {
  ArticlesContainer as Component,
}

export default connect(
  state => ({
    articles: selectArticles(state),
    loading: selectLoading(state),
    filter: selectFilter(state),
    hasErrorOccurred: selectError(state),
  }),
  dispatch => ({
    dispatchLoadedEvent: articles => dispatch(articlesLoaded(articles)),
    dispatchFilterEvent: filter => dispatch(filterUpdated(filter)),
    dispatchErrorEvent: () => dispatch(error()),
  }),
)(ArticlesContainer)
