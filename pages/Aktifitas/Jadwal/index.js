import React from 'react'
import Date from '../../../components/Date'
import Layout from '../../../components/Layout'
import Pagination from '../../../components/pagination'
import Table from '../../../components/Table/Tablebasic'
import Title from '../../../components/Title'
import { useAppContext } from '../../../Hooks/useAppContext'

const Jadwal = () => {
  const {dummy} = useAppContext();
  const {jadwal_pengecekan} = dummy;
  return (
    <>
    <Layout>
      <Title pagetitle page="aktivitas" title="jadwal pengecekan"/>
      <Date/>
      <Table data={jadwal_pengecekan} Top action/>
      <Pagination/>
    </Layout>
    </>
  )
}

export default Jadwal;