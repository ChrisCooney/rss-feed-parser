import React, { Component } from 'react'
import { connect } from 'react-redux'

import ArticlesList from '../components/ArticlesList'

class ArticlesContainer extends Component {
  render() {
    return <ArticlesList />
  }
}

export default ArticlesContainer
