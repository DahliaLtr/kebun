import React from 'react'
import Button from '../Buttons'
import Inputfields from '../Inputfields'

const Date = () => {
  return (
    <>
    <div className="flex text-sm space-x-3 justify-end pb-3 items-center">
        <div className="flex md:gap-3 gap-6 items-center relative">
            <span>Dari:</span>
            <Inputfields type="date"/>
        </div>
        <div className="flex md:gap-3 gap-6 items-center relative">
            <span>Sampai:</span>
            <Inputfields type="date"/>
        </div>
        <Button type="greendark" text="cari"/>
    </div>
    </>
  )
}

export default Date