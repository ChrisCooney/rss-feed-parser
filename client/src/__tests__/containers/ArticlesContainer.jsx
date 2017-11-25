import React from 'react'
import { shallow } from 'enzyme'

import ArticlesList from '../../components/ArticlesList'
import ArticlesContainer from '../../containers/ArticlesContainer'

describe('Images renders out the correct child components', () => {
  it('should render the articles component', () => {
    const $ = shallow(<ArticlesContainer />)
    expect($.containsMatchingElement(<ArticlesList />)).toBe(true)
  })
})
