import React from 'react'
import PropTypes from 'prop-types'

const SearchField = ({ filter, onFilterUpdate }) => (
  <input
    onChange={event => onFilterUpdate(event.target.value)}
    type="text" value={filter}
    placeholder="Filter articles on title"
    className="c-article-filter"
  />
)

SearchField.propTypes = {
  filter: PropTypes.string,
  onFilterUpdate: PropTypes.func.isRequired,
}

SearchField.defaultProps = {
  filter: undefined,
}

export default SearchField
