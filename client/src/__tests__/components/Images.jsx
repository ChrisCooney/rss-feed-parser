import React from 'react'
import { shallow } from 'enzyme'

import Images from '../../components/Images'

const images = ['img1', 'img2']

describe('Images component correctly rendering children', () => {
  it('should render out an image tag when passed in an array of images', () => {
    const $ = shallow(<Images images={images} />)

    expect($.containsMatchingElement(
      <img src="img1" />,
    )).toBe(true)
  })
})
