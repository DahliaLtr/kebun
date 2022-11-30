import React from 'react'
import Button from '../../../components/Buttons'
import Catatan from '../../../components/Catatan'
import Inputfields from '../../../components/Inputfields'
import Label from '../../../components/Label'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'

const EditDataKebun = () => {
  return (
    <>
    <Layout>
        <div className='w-full'>
            <Title back title="kebun" link="/Kebun"/>
            <div className='grid bg-white rounded-lg shadow pt-5 pb-24 mt-8'>
                <span className='flex justify-center font-medium text-lg pb-5 capitalize'>Edit data kebun</span>
                <div className='grid md:grid-cols-3 gap-3 md:gap-8 mt-2 sm:px-3 mx-5'>
                    <div>
                        <Label title="nama kebun"/>
                        <Inputfields placeholder="masukkan nama kebun"/>
                    </div>
                    <div>
                        <Label title="panjang"/>
                        <Inputfields placeholder="masukkan panjang"/>
                    </div>
                    <div>
                        <Label title="lebar"/>
                        <Inputfields placeholder="masukkan lebar"/>
                    </div>
                    <div>
                        <Label title="luas"/>
                        <Inputfields placeholder="masukkan luas"/>
                    </div>
                    <div>
                        <Label title="catatan"/>
                        <Catatan/>
                    </div>
                </div>
                <div className='flex justify-end mr-10'>
                    <Button type="lightgreen" text="simpan"/>
                </div>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default EditDataKebun
