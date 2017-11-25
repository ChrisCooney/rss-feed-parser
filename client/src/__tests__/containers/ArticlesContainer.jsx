import React from 'react'

import { shallow } from 'enzyme'
import ArticlesContainer from '../../containers/ArticlesContainer'

describe('Images renders out the correct child components', () => {
  it('should render the articles component', () => {
    const $ = shallow(<ArticlesContainer />)
    expect($.containsMatchingElement(<ArticlesList />)).toBe(true)

    /*
    Benched while building out the ArticlesList functionality.
    */
  })
})
