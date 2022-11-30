import React from 'react'
import Button from '../../../../components/Buttons'
import Catatan from '../../../../components/Catatan'
import Inputfields from '../../../../components/Inputfields'
import Label from '../../../../components/Label'
import Layout from '../../../../components/Layout'
import Select from '../../../../components/Select'
import Title from '../../../../components/Title'


const TambahDataCuaca = () =>{
    const cuaca = [
        {name: "hujan"}, {name: "salju"}, {name: "cerah"}
    ]
  return (
    <>
    <Layout>
        <div className="w-full">
            <Title back title="cuaca" link="/Aktifitas/Cuaca"/>
            <div className = "grid bg-white rounded-lg shadow pt-5 pb-12 mt-8" >
                <span className="flex justify-center font-medium text-lg pb-5 capitalize">tambah data aktifitas cuaca</span>
                <div className ="grid md:grid-cols-3 gap-3 md:gap-8 mt-2 sm:px-3 mx-5" >
                    <div>
                        <Label title="hari/tanggal"/>
                        <Inputfields type="date"/>
                    </div>
                    <div>
                        <Label title="kondisi cuaca"/>
                        <Inputfields type="text" placeholder="masukkan kondisi cuaca"/>
                    </div>
                    <div>
                        <Label title="catatan"/>
                        <Catatan style="h-8"/>
                    </div>
                    <div>
                        <Label title="cuaca"/>
                        <Select kategori={cuaca}/>
                    </div>
                    <div>
                        <Label title="suhu"/>
                        <Inputfields type="text" placeholder="masukkan angka suhu"/>
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

export default TambahDataCuaca