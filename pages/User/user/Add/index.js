import React from "react";
import FotoProfil from "../../../../components/FotoProfil";
import Inputfields from "../../../../components/Inputfields";
import Layout from "../../../../components/Layout";
import Password from "../../../../components/Password";
import Select from "../../../../components/Select";
import Label from "../../../../components/Label";
import Button from "../../../../components/Buttons";
import Title from "../../../../components/Title";

const TambahDataUser = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="w-full">
            <Title back title="user" link="/User/user"/>
            <div className="grid bg-white rounded-lg shadow pt-5 pb-10 mt-8">
              <span className="flex justify-center font-medium text-lg pb-5 capitalize">tambah data user</span>
              <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-2 sm:px-3 mx-5">
                <div className="space-y-4">
                  <div className="grid grid-cols-1">
                    <Label title="NIK" />
                    <Inputfields type="text" placeholder="Masukkan NIK" />
                  </div>
                  <div className="grid grid-cols-1">
                    <Label title="e-mail" />
                    <Inputfields type="text" placeholder="Masukkan E-mail" />
                  </div>
                  <div className="grid grid-cols-1">
                    <Label title="username" />
                    <Inputfields type="text" placeholder="Masukkan Username" />
                  </div>
                  <div className="grid grid-cols-1">
                    <Label title="password" />
                    <Password type="text" placeholder="Masukkan password baru" />
                  </div>
                  <div className="grid grid-cols-1">
                    <Label title="level kuasa" />
                    <Select style="rounded" kategori={[{ name: "Pimpinan" }, { name: "Admin" }, { name: "Pegawai" }]} desc="-pilih level kuasa-" />
                  </div>
                </div>
                <div className="space-y-4">
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
                  <div className="grid grid-cols-1">
                    <Label title="status" />
                    <Select style="rounded" kategori={[{ name: "Aktif" }, { name: "Non Aktif" }]} desc="-pilih status-" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col items-center justify-center">
                    <FotoProfil />
                    <div className="pt-5">
                      <Button type="blue" text="UPLOAD IMAGE" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mr-10">
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
  );
};
export default TambahDataUser;
