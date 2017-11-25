import React from 'react'
import { shallow } from 'enzyme'
import ArticlesComponent from '../../components/ArticlesComponent'

const mockArticles = [
  {
    title: 'Chris',
    link: 'Chris.com',
    images: [
      'image1.png'
    ]
  }
]

describe('Articles component correctly renders its content', () => {
  it('should json stringify the content it gets in', () => {
    const $ = shallow(<ArticlesComponent articles={mockArticles} />)
    expect($.contains(JSON.stringify(mockArticles))).toBe(true)
  })
})
