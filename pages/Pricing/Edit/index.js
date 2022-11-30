import React from 'react'
import Button from '../../../components/Buttons'
import Inputfields from '../../../components/Inputfields'
import Label from '../../../components/Label'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Select from '../../../components/Select'

const DataKebunEdit = ()=> {
  return (
    <>
    <Layout>
        <div className='w-full'>
            <Title back title="pricing" link="/Pricing"/>
            <div className='grid bg-white rounded-lg shadow pt-5 pb-24 mt-8'>
                <span className='flex justify-center font-medium text-lg pb-5 capitalize'>edit data kebun</span>
                <div className='grid md:grid-cols-3 gap-3 md:gap-8 mt-2 sm:px-3 mx-5'>
                    <div>
                        <Label title="nama kebun"/>
                        <Select kategori={[{name: "stroberi"}, {name: "sawi"}]} desc="-- pilih nama kebun --"/>
                    </div>
                    <div>
                        <Label title="satuan"/>
                        <Select kategori={[{name:"kg"}, {name:"ons"}, {name:"ton"}]} desc="-- pilih satuan --"/>
                    </div>
                    <div>
                        <Label title="harga bagus"/>
                        <Inputfields placeholder="Rp. "/>
                    </div>
                    <div>
                        <Label title="harga kurang bagus"/>
                        <Inputfields placeholder="Rp. "/>
                    </div>
                </div>
                <div className='flex justify-end mr-10 space-x-3'>
                    <Button type="gray" text="cancel"/>
                    <Button type="lightgreen" text="simpan"/>
                </div>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default DataKebunEdit