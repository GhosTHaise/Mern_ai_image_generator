import React from 'react'
import { download } from '../assets'
import { downloadImage } from '../utils'
type Props = {
  _id : string
  name : string,
  prompt : string,
  image : string
}

const Card = (props: Props) => {
  return (
    <div className='rounded-xl group relative shadow-card
    hover:shadow-cardhover card
    '>
        <img 
        src={props.image} 
        alt={props.prompt} 
        className="w-full h-auto object-cover rounded-xl" />
        
        <div className='group-hover:flex flex-col max-h-[94.5%]
              hidden absolute bottom-0 left-0 right-0 bg-[#10131f]
              m-2 p-4 rounded-md
        '>

        </div>
    </div>
  )
}

export default Card