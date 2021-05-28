import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import Services from '../component/Services'
import FeaturedRooms from '../component/FeaturedRooms'

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='Luxurious rooms'
          subtitle='deluxe rooms starting at &#8377;3000'>
          <Link to='/rooms' className='btn btn-primary'>
            check rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  )
}

export default Home
