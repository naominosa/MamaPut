import React from 'react'

interface GeneralInputProps{
    placeholder: string;
    type: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    label: string;
}

function GeneralInput({placeholder, type, id, onChange, value, label}: GeneralInputProps) {
  return (
    <div>
          {label && <label htmlFor={id}>{label}</label>}
          <input
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}          
          />
    </div>
  )
}

export default GeneralInput