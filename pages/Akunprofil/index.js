import React from "react";
import Button from "../../components/Buttons";
import FotoProfil from "../../components/FotoProfil";
import Inputfields from "../../components/Inputfields";
import Label from "../../components/Label";
import Layout from "../../components/Layout";
import Password from "../../components/Password";
import Title from "../../components/Title";
const ProfilAkun = () => {
  return (
    <>
      <Layout>
        <div className="static">
          <Title pagetitle page="profil akun" title="Profil akun" />
          <div className="w-full">
            <div className="grid bg-white rounded-lg shadow">
              <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-5 sm:px-3 mx-5 mb-5">
                <div className="space-y-3">
                  <div className="grid grid-cols-1">
                    <Label title="NIK" />
                    <Inputfields type="text" placeholder="Masukkan NIK" />
                  </div>
                  <div className="grid grid-cols-1">
                    <Label title="e-mail" />
                    <Inputfields type="text" placeholder="Masukkan E-mail" title="E-mail" />
                  </div>
                  <div className="grid grid-cols-1">
                    <Label title="username" />
                    <Inputfields type="text" placeholder="Masukkan Username" title="Username" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-1">
                    <Label title="nama lengkap" />
                    <Inputfields type="text" placeholder="Masukkan Nama Lengkap" />
                  </div>
                  <div className="grid grid-cols-1">
                    <Label title="nomor telepon" />
                    <Inputfields type="text" placeholder="Masukkan Nomor Telepon" />
                  </div>
                  <div className="grid grid-cols-1">
                    <Label title="alamat" />
                    <Inputfields type="text" placeholder="Masukkan Alamat" />
                  </div>
                </div>
                <div className="">
                  <FotoProfil />
                </div>
              </div>
              <div className='flex justify-end mr-10 pb-10'>
                  <Button type="lightgreen" text="simpan"/>
              </div>
            </div>
          </div>
          <Title title="password" />
          <div className="w-full">
            <div className="grid bg-white rounded-lg shadow">
              <div className="grid md:grid-cols-3 gap-3 md:gap-8 mt-2 sm:px-3 mx-5">
                <div>
                  <Label title="password lama" />
                  <Password type="text" placeholder="Masukkan password baru" />
                </div>
                <div>
                  <Label title="password baru" />
                  <Password type="text" placeholder="Masukkan password baru" />
                </div>
                <div>
                  <Label title="konfirmasi password baru" />
                  <Password type="text" placeholder="Masukkan password baru" />
                </div>
              </div>
              <div className=" flex md:justify-end mr-3 pb-5 pt-10">
                <Button type="lightgreen" text="ubah password" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilAkun;
