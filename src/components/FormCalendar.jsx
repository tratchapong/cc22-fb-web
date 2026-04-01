import React from 'react'
import { DayPicker, getDefaultClassNames } from 'react-day-picker'
import { Controller } from 'react-hook-form'

function FormCalendar(props) {
  const { control, name, label } = props
    const defaultClassNames = getDefaultClassNames();
    console.log(defaultClassNames)
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-semibold">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div className="w-100 bg-accent">
            <div className={`w-full border rounded-lg p-2 bg-gray-50 ${error ? 'border-red-500' : 'border-gray-200'}`}>
              <DayPicker
                className="react-day-picker" 
                mode='single'
                selected={field.value}
                onSelect={field.onChange}
                footer={
                  <p className="mt-2 text-sm text-gray-500">
                    {field.value ? `วันที่เลือก: ${field.value.toLocaleDateString('th-TH')}` : "กรุณาเลือกวันที่"}
                  </p>
                }
              />
            </div>
             {error && <span className="text-red-500 text-xs mt-1">{error.message}</span>}
          </div>
        )}
      >
      </Controller>
    </div>
  )
}

export default FormCalendar
