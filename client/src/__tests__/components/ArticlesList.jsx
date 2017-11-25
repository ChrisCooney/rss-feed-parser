import React from 'react'
import { mount } from 'enzyme'
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
    const $ = mount(<ArticlesList articles={mockArticles} />)
    expect($.containsMatchingElement(<Article />)).toBe(true)
    /* Benched while working on article component */
  })
})
