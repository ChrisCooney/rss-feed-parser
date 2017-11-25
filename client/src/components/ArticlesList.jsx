import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexgrid'

import Article from './Article'

const ArticlesList = ({ articles }) => (
  <Grid>
    <Row>
      {
        articles.map(
          article => (
            <Col key={article.url} xs={12} md={6}>
              <Article article={article} />
            </Col>
          ),
        )
      }
    </Row>
  </Grid>
)

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(Article.propTypes.article),
}

ArticlesList.defaultProps = {
  articles: [],
}

export default ArticlesList
