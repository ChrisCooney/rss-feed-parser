import React from 'react'
import { shallow } from 'enzyme'

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
    const $ = shallow(<Article article={mockArticle} />)

    expect($.contains(mockArticle.title)).toBe(true)
    // expect($.containsMatchingElement(
    //   <img src={mockArticle.images[0]} alt={mockArticle.title} />,
    // )).toBe(true)
  })
})
