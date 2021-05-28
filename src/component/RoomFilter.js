import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'

// GET ALL UNIQUE VALUES
const getUnique = (items, value) => {
  // getting all the rooms value set only the unique value
  return [...new Set(items.map((item) => item[value]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext)
  // console.log(context); // To check if we are getting all the data from the context component

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context

  // get unique types
  let types = getUnique(rooms, 'type')

  // add all
  types = ['all', ...types]

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    )
  })

  // get the capacity
  let people = getUnique(rooms, 'capacity')
  // loop through the people and get the capacity
  people = people.map((item, index) => {
    console.log(index)

    return (
      <option key={index} value={item}>
        {item}
      </option>
    )
  })

  return (
    <section className='filter-container'>
      <Title title={'search rooms'} />
      <form className='filter-form'>
        {/* name: event.target.name passed from context component's handleChange  */}
        {/* value: coming from the context variable*/}

        {/* SELECT TYPE */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* END SELECT TYPE */}

        {/* GUESTS */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* END OF GUESTS */}

        {/* ROOM PRICE*/}
        <div className='form-group'>
          <label htmlFor='price'>room price &#8377;{price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* END ROOM PRICE */}

        {/* SIZE */}
        <div className='form-group'>
          <label htmlFor='size'>room size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>
        {/* END OF SIZE */}

        {/* EXTRAS */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>

          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* END OF EXTRAS */}
      </form>
    </section>
  )
}
