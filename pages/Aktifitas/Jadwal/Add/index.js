import React from 'react'
import Catatan from '../../../../components/Catatan'
import Inputfields from '../../../../components/Inputfields'
import Label from '../../../../components/Label'
import Layout from '../../../../components/Layout'
import Select from '../../../../components/Select'
import Title from '../../../../components/Title'
import Button from '../../../../components/Buttons'

const TambahJadwalPengecekan = () => {
  return (
    <>
    <Layout>
        <div className='w-full'>
            <Title back title="jadwal" link="/Aktifitas/Jadwal"/>
            <div className='grid bg-white rounded-lg shadow pt-5 pb-24 mt-8'>
                <span className='flex justify-center font-medium text-lg pb-5 capitalize'>tambah data jadwal pengecekan</span>
                <div className = 'grid grid-flow-dense grid-cols-3 gap-5 md:gap-8 mt-2 sm:px-3 mx-5' >
                    <div className = 'space-y-4' >
                        <div className = 'grid grid-cols-1' >
                            <Label title="hari/tanggal"/>
                            <Inputfields type="date"/>
                        </div>
                        <div className = 'grid grid-cols-1' >
                            <Label title="blok"/>
                            <Select kategori={[{name:"ST/01"}, {name: "ST/02"}, {name:"KS/01"}, {name:"KS/02"}]}/>
                        </div>
                        <div className = 'grid grid-cols-1' >
                            <Label title="jumlah pemakaian (kg/l)"/>
                            <div className='flex justify-between'>
                                <Inputfields placeholder="masukkan jumlah"/>
                                <Select style="w-16" kategori={[{name:"kg"}, {name:"l"}]}/>
                            </div>
                        </div>
                        <div className = 'grid grid-cols-1' >
                            <Label title="catatan"/>
                            <Catatan/>
                        </div>
                    </div>
                    <div div className = 'grid col-span-2 sm:px-3' >
                        <div className='space-y-4'>
                            <div className = 'grid grid-cols-2 gap-5' >
                                <div className = 'space-y-4' >
                                    <div className='grid grid-cols-1'>
                                        <Label title="nama petugas"/>
                                        <Inputfields placeholder="masukkan nama petugas"/>
                                    </div>
                                    <div className='grid grid-cols-1'>
                                        <Label title="nama pupuk"/>
                                        <Select kategori={[{name:"kompos"}, {name:"urea"}, {name: "palmo"}]}/>
                                    </div>
                                </div>
                                <div>
                                    <div className = 'grid grid-cols-1' >
                                        <Label title="nama kebun"/>
                                        <Select kategori={[{name: "strobery"}, {name: "kelapa sawit"}, {name: "durian"}, {name: "cabe rawit"}]}/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Label title="waktu"/>
                                <div className='flex space-x-4'>
                                    <div className='flex items-center space-x-2'>
                                        <span>Dari:</span>
                                        <Inputfields type="time"/>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <span>Sampai:</span>
                                        <Inputfields type="time"/>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default TambahJadwalPengecekan
