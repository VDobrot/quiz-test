import React from 'react'

type ContactOption = 'WhatsApp' | 'Email'

interface ContactInputProps {
  contactOption: ContactOption
  contactValue: string
  contactError: string
  onContactOptionChange: (option: ContactOption) => void
  onContactValueChange: (value: string) => void
  onContactErrorChange: (error: string) => void
}

export const ContactInput = (props: ContactInputProps) => {
  const {
    contactOption,
    contactValue,
    contactError,
    onContactOptionChange,
    onContactValueChange,
    onContactErrorChange
  } = props

  const handleOptionChange = (event: any) => {
    onContactOptionChange(event.target.value)
    onContactValueChange('')
    onContactErrorChange('')
  }

  const handleValueChange = (event: any) => {
    onContactValueChange(event.target.value)
    if (contactOption === 'WhatsApp') {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/
      if (!phoneRegex.test(event.target.value)) {
        onContactErrorChange('Invalid phone number')
      } else {
        onContactErrorChange('')
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(event.target.value)) {
        onContactErrorChange('Invalid email address')
      } else {
        onContactErrorChange('')
      }
    }
  }


  return (
    <div>
      <select id="contact-method" value={contactOption} onChange={handleOptionChange}>
        <option value="WhatsApp">WhatsApp</option>
        <option value="Email">Email</option>
      </select>
      <input
        type={contactOption === 'WhatsApp' ? 'tel' : 'email'}
        value={contactValue}
        onChange={handleValueChange}
        placeholder={contactOption === 'WhatsApp' ? 'WhatsApp number' : 'Email address'}
        required
      />
      {contactError && <p style={{color: 'red'}}>{contactError}</p>}
    </div>
  )
}
