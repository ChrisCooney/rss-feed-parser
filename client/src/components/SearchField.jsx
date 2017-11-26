import React from 'react'
import PropTypes from 'prop-types'

const SearchField = ({ filter, onFilterUpdate }) => (
  <input
    onChange={event => onFilterUpdate(event.target.value)}
    type="text"
    value={filter}
    placeholder="Filter articles on title"
    className="c-search"
  />
)

SearchField.propTypes = {
  filter: PropTypes.string,
  onFilterUpdate: PropTypes.func.isRequired,
}

SearchField.defaultProps = {
  filter: '',
}

export default SearchField
