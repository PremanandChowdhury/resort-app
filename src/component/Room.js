import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

export default function Room({ room }) {
  const { name, images, slug, price } = room
  return (
    // FEATURED ROOM CARD DYNAMIC DATA
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='single room' />
        <div className='price-top'>
          <h6>&#8377;{price}</h6>
          <p>per night</p>
        </div>

        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
          Features
        </Link>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  )
}

// FOR VALIDATING THE PROPS
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
}
