import React from 'react'
import Button from '../../../../components/Buttons'
import Catatan from '../../../../components/Catatan'
import Inputfields from '../../../../components/Inputfields'
import Label from '../../../../components/Label'
import Layout from '../../../../components/Layout'
import Select from '../../../../components/Select'
import Title from '../../../../components/Title'

const TambahDataHama =()=> {
  return (
    <>
    <Layout>
        <div className="w-full">
            <Title back title="hama" link="/Aktifitas/Hama"/>
            <div className = "grid bg-white rounded-lg shadow pt-5 pb-10 mt-8" >
                <span className="flex justify-center font-medium text-lg pb-5 capitalize">tambah data aktifitas pencatatan hama</span>
                <div className='grid md:grid-cols-3 gap-3 md:gap-8 mt-2 sm:px-3 mx-5'>
                    <div>
                        <Label title="hati/tanggal"/>
                        <Inputfields type="date"/>
                    </div>
                    <div>
                        <Label title="nama hama"/>
                        <Select kategori={[{name: "belalang"}, {name: "tikus"}, {name: "ulat"}, {name: "tungau"}]} desc="-- pilih hama --"/>
                    </div>
                    <div>
                        <Label title="nama kebun"/>
                        <Select kategori={[{name: "stroberi"}, {name: "kelapa sawit"}, {name: "durian"}, {name: "cabe rawit"}]} desc="-- pilih kebun --"/>
                    </div>
                    <div>
                        <Label title="blok"/>
                        <Select kategori={[{name: "ST/01"}, {name: "ST/02"}, {name: "KS/01"}, {name: "KS/02"}]} desc="-- pilih blok --"/>
                    </div>
                    <div>
                        <Label title="tingkat kerusakan"/>
                        <Select kategori={[{name: "sangat besar"}, {name: "besar"}, {name: "sedang"}, {name: "kecil"}]} desc="--pilih tingkat kerusakan--"/>
                    </div>
                    <div>
                        <Label title="jumlah kerusakan"/>
                        <Inputfields placeholder="masukkan jumlah"/>
                    </div>
                    <div className="grid grid-cols-1">
                        <Label title="catatan"/>
                        <Catatan/>
                    </div>
                </div>
                <div className="flex justify-end mr-10">
                    <Button type="lightgreen" text="simpan"/>
                </div>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default TambahDataHama
