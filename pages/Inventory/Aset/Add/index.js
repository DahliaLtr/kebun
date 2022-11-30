import React from 'react'
import Button from '../../../../components/Buttons';
import Catatan from '../../../../components/Catatan';
import Inputfields from '../../../../components/Inputfields';
import Label from '../../../../components/Label';
import Layout from "../../../../components/Layout";
import Select from '../../../../components/Select';
import Title from '../../../../components/Title';

const TambahDataAset = () => {
    return(
        <>
        <Layout>
        <div className='w-full'>
            <Title back title="inventory" link="/Inventory/Aset"/>
            <div className='grid bg-white rounded-lg shadow pt-5 pb-24 mt-8'>
                <span className='flex justify-center font-medium text-lg pb-5 capitalize'>tambah data aset</span>
                <div className='grid md:grid-cols-3 gap-3 md:gap-8 mt-2 sm:px-3 mx-5'>
                    <div>
                        <Label title="jenis"/>
                        <Select kategori={[{name: "barang"}, {name: "pupuk"}]} desc="-- pilih jenis --"/>
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <Label title="nama barang"/>
                        <Inputfields placeholder="masukkan nama barang"/>
                    </div>
                    <div>
                        <Label title="tanggal pembelian"/>
                        <Inputfields type="date"/>
                    </div>
                    <div>
                        <Label title="jumlah barang"/>
                        <Inputfields placeholder="masukkan jumlah barang"/>
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
export default TambahDataAset;