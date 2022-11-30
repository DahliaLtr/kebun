import React from 'react'
import Date from '../../../components/Date'
import Layout from '../../../components/Layout'
import Table from '../../../components/Table/Tablebasic'
import Title from '../../../components/Title'
import { useAppContext } from '../../../Hooks/useAppContext'

const Pemasukan=()=> {
  const {dummy} = useAppContext();
  const {penjualan_hasil_panen} = dummy;
  return (
    <>
    <Layout>
        <Title pagetitle page="kelola keuangan" title="penjualan hasil panen"/>
        <Date/>
        <Table data={penjualan_hasil_panen} Top kwitansi/>
    </Layout>
    </>
  )
}

export default Pemasukan