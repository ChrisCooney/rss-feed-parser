import React from 'react'
import { mount } from 'enzyme'

import Article from '../../components/Article'

const mockArticle = {
  title: 'Chris',
  link: 'chris.com',
  images: [
    'image1.png',
  ],
}

describe('Article', () => {
  it('should render out the details of an article', () => {
    const $ = mount(<Article article={mockArticle} />)

    expect($.contains(mockArticle.title)).toBe(true)
    expect($.containsMatchingElement(
      <img src={mockArticle.images[0]} />,
    )).toBe(true)
  })
})
