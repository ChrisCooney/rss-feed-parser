import React from 'react'
import { shallow } from 'enzyme'
import SearchField from '../../components/SearchField'

describe('SearchField', () => {
  it('should render out a text box for the user to enter data into', () => {
    const $ = shallow(<SearchField filter="hello" onFilterUpdate={jest.fn()} />)
    expect($.containsMatchingElement(<input type="text" value="hello" />))
  })
})
