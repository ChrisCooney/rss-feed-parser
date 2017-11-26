import React from 'react'
import PropTypes from 'prop-types'

const Images = ({ images }) => (
  <div>
    { images.map(image => (
      <img key={image} className="c-article__images__img" src={image} />
    ))}
  </div>
)

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Images
