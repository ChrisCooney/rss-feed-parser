import React from 'react'
import { shallow } from 'enzyme'

import ArticlesList from '../../components/ArticlesList'
import { Component as ArticlesContainer } from '../../containers/ArticlesContainer'

describe('Images renders out the correct child components', () => {
  it('should render the articles component', () => {
    const $ = shallow(<ArticlesContainer />)

    fetch.mockResponse(
      JSON.stringify([
        {
          title: 'title',
          link: 'link',
          images: [],
        },
      ]),
      { status: 200 },
    )
    expect($.containsMatchingElement(<ArticlesList />)).toBe(true)
  })
})
