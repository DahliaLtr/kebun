import React from 'react'
import Layout from '../../../../components/Layout'
import {BiArrowBack} from 'react-icons/bi'
import Label from '../../../../components/Label'
import Inputfields from '../../../../components/Inputfields'
import Button from '../../../../components/Buttons'
import Select from '../../../../components/Select'
import FotoProfil from '../../../../components/FotoProfil'
import Title from '../../../../components/Title'

const EditDataUser =()=> {
  return (
    <>
    <Layout>
      <div>
          <div className="w-full">
            <Title back title="user" link="/User/user"/>
            <div className="grid bg-white rounded-lg shadow pt-5 pb-10 mt-8">
              <span className="flex justify-center font-medium text-lg pb-5">Edit Data User</span>
              <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-2 sm:px-3 mx-5">
                <div>
                  <div className="grid grid-cols-1">
                    <Label title="NIK" />
                    <Inputfields type="text" placeholder="Masukkan NIK" />
                  </div>
                  <div className="grid grid-cols-1 mt-3">
                    <Label title="e-mail" />
                    <Inputfields type="text" placeholder="Masukkan E-mail" />
                  </div>
                  <div className="grid grid-cols-1 mt-3">
                    <Label title="username" />
                    <Inputfields type="text" placeholder="Masukkan Username" />
                  </div>
                  <div className="grid grid-cols-1 mt-3">
                    <Label title="level kuasa" />
                    <Select style="rounded" kategori={[{ name: "Pimpinan" }, { name: "Admin" }, { name: "Pegawai" }]} desc="-pilih level kuasa-" />
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1">
                    <Label title="nama lengkap" />
                    <Inputfields type="text" placeholder="Masukkan Nama Lengkap" />
                  </div>
                  <div className="grid grid-cols-1 mt-3">
                    <Label title="nomor telepon" />
                    <Inputfields type="text" placeholder="Masukkan Nomor Telepon" />
                  </div>
                  <div className="grid grid-cols-1 mt-3">
                    <Label title="alamat" />
                    <Inputfields type="text" placeholder="Masukkan Alamat" />
                  </div>
                  <div className="grid grid-cols-1 mt-3">
                    <Label title="status" />
                    <Select style="rounded" kategori={[{ name: "Aktif" }, { name: "Non Aktif" }]} desc="-pilih status-" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-center">
                    <FotoProfil />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mr-10 pt-5">
                  <div className="mr-3">
                    <Button type="gray" text="cancel" />
                  </div>
                  <div>
                    <Button type="lightgreen" text="simpan" />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
    </>
  )
}

export default EditDataUser