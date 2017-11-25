import React from 'react'
import { mount } from 'enzyme'
import ArticlesList from '../../components/ArticlesList'
import Article from '../../components/Article'

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
  it('should render out an article for the articles it gets in', () => {
    const $ = mount(<ArticlesList articles={mockArticles} />)
    expect($.containsMatchingElement(<Article />)).toBe(true)
    /* Benched while working on article component */
  })
})
