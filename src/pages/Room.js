import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../component/StyledHero'

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    }
  }

  // ACCESS THE CONTEXT
  static contextType = RoomContext

  render() {
    const { getRoom } = this.context
    const room = getRoom(this.state.slug)
    if (!room) {
      return (
        <div className='error'>
          <h3>no such rooms could be found...</h3>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link>
        </div>
      )
    }

    // DESTRUCTURE FROM ROOM
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room

    const [mainImg, ...defaultImg] = images

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              return to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>

          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>

            <article className='info'>
              <h3>info</h3>
              <h6>price: &#8377;{price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                max capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets are allowed' : 'no pets are allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
      </>
    )
  }
}
