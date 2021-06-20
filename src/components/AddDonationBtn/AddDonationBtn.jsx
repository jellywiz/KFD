import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'

export default function AddDonationBtn() {

  const history = useHistory()
  const handleClick = () => {
    history.push('/adddonation')
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-blue  text-md   text-white py-2 text-center  space-x-1 items-center   w-full shadow-md hover:shadow-none rounded-full transition duration-300 ease-in focus:outline-none hover:bg-darkBlue px-3  "
    >
      <span className=""> Add Donation </span>
      <FontAwesomeIcon icon="plus" />
    </button>
  )
}
