import React,{useState} from 'react'

type Props = {
  labelName : string,
  type : string,
  name : string,
  placeholder : string,
  value : string,
  handleChange : any,
  isSurpriseMe? : boolean,
  handleSurpriseMe ? : any
}

const FormFiled = (props: Props) => {

  return (
    
    <div>
      <div className='flex items-center gap-2 mb-2'>
            <label 
            htmlFor={props.name}
            className="bold text-sm font-medium text-gray-900"
            >
                {props.labelName}
            </label>
            {props.isSurpriseMe && ( 
              <button 
              onClick={props.handleSurpriseMe}
              type='button'
              className='font-semibold text-xs bg-[#ececf1] py-1 px-2 
              rounded-[5px] text-black' 
              >
                  Surprise me
              </button>
            )}
      </div>
      <input 
      type={props.type} 
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}  
      onChange={props.handleChange}
      required
      className="bg-gray-50 border border-gray-300 text-gray-900 
      text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]
      outline-none block w-full p-3
      "      
      />
    </div>
  )
}

export default FormFiled