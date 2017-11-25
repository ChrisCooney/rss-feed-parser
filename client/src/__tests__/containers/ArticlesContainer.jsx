import React from 'react'

import { shallow } from 'enzyme'
import ArticlesContainer from '../../containers/ArticlesContainer'

describe('Images renders out the correct child components', () => {
  it('should render the articles component', () => {
    const rendered = shallow(<ArticlesContainer />)
    expect(rendered.containsMatchingElement(<ArticlesList />)).toBe(true)
  })
})
