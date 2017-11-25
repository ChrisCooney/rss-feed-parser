import React from 'react'
import { shallow } from 'enzyme'
import ArticlesList from '../../components/ArticlesList'

const mockArticles = [
  {
    title: 'Chris',
    link: 'Chris.com',
    images: [
      'image1.png',
    ],
  },
]

describe('Articles component correctly renders its content', () => {
  it('should json stringify the content it gets in', () => {
    const $ = shallow(<ArticlesList articles={mockArticles} />)
    expect($.contains(JSON.stringify(mockArticles))).toBe(true)
  })
})
