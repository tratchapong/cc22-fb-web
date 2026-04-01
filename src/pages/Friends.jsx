import FormCalendar from '@/components/FormCalendar'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { useForm } from 'react-hook-form'

function Friends() {
  const {handleSubmit, control} = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className='min-h-screen w-full bg-info p-4 '>
      <button className="btn btn-secondary"
        onClick={() => document.getElementById('modal1').showModal()}
      > Open Modal</button>
      <dialog id="modal1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)} >
            <FormCalendar control={control} name='dueDate' label='Due Date'/>
            <button className='btn btn-accent'>Submit</button>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Friends