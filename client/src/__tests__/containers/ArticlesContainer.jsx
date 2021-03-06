import React from 'react'
import { mount } from 'enzyme'
import { fetchArticles } from '../../utils/api'

import ArticlesList from '../../components/ArticlesList'
import SearchField from '../../components/SearchField'
import { Component as ArticlesContainer } from '../../containers/ArticlesContainer'

const mockJsonResponse = [
  {
    title: 'title',
    url: 'url',
    images: [],
  },
]


jest.mock('../../utils/api', () => ({
  fetchArticles: jest.fn(() => new Promise(
    resolve => resolve(mockJsonResponse),
  )),
}))

describe('Images renders out the correct child components', () => {
  it('should render the articles component', () => {
    const mockLoadedFunction = jest.fn()
    const mockFilterFunction = jest.fn()
    const mockErrorFunction = jest.fn()

    const $ = mount(
      <ArticlesContainer
        loading={false}
        filter={undefined}
        dispatchLoadedEvent={mockLoadedFunction}
        dispatchFilterEvent={mockFilterFunction}
        dispatchErrorEvent={mockErrorFunction}
      />,
    )

    fetch.mockResponse(
      new Promise(resolve => resolve(mockJsonResponse)),
      { status: 200 },
    )

    expect($.containsMatchingElement(<ArticlesList />)).toBe(true)
    expect($.containsMatchingElement(
      <SearchField onFilterUpdate={mockFilterFunction} />),
    ).toBe(true)
    expect(fetchArticles).toHaveBeenCalled()
  })
})
