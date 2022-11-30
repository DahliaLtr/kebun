import React, { useState } from 'react'
import Button from '../../../components/Buttons';
import Layout from '../../../components/Layout'
import Select from '../../../components/Select'
import TableOtoritas from '../../../components/Table/TableOtoritas';
import Title from '../../../components/Title'
import { useAppContext } from '../../../Hooks/useAppContext';

const PengaturanOtoritas = () => {
  const {dummy} = useAppContext();
  const { level_kuasa, pengaturan_otoritas} = dummy;
  const level = level_kuasa.map((i) => {
    return {name: i.kuasa, value: i.kode}
  })
  const [selectedData, setSelectedData] = useState(null);
  const handelChangeSelect = (item) => {
    const findSelected = pengaturan_otoritas.find(
      (pengaturan) => pengaturan.kode === item.value
    );
    setSelectedData(findSelected);
    console.log("selected", findSelected)
  }
  const handleSimpan = (e)=>{
    e.preventDefault();
    console.log("simpan data", selectedData);
  }

  return (
    <>
    <Layout>
      <div>
        <Title pagetitle page='user' title='pengaturan otoritas'/>
        <div className="w-full">
          <div className= " rounded-sm shadow bg-white " >
            <div className = "grid grid-cols-4 p-3 space-x-3" >
              <div className = "grid grid-cols-1" >
              <Select 
                kategori={level}
                desc='-pilih level kuasa-' 
                style="rounded-none"
                handleChange = {(item) => handelChangeSelect(item)}
                />
              </div>
              {selectedData && (
                <div className = "grid grid-cols-1" >
                <Button type="greendark" text="simpan" handleClik={(e) => handleSimpan(e)}/>
              </div>
              )}
              
            </div>
            <div className='p-3'>
              {selectedData && (
                <TableOtoritas data={selectedData.otoritas} key="tableotoritas" desc="-- pilih level kuasa --"/>
              )}
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </>
  );
};

export default PengaturanOtoritas;
