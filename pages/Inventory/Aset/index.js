import React from 'react'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Date from '../../../components/Date'
import { useAppContext } from '../../../Hooks/useAppContext'
import Table from '../../../components/Table/Tablebasic'
import Pagination from '../../../components/pagination'

const Aset =()=> {
  const {dummy} = useAppContext();
  const {aset} = dummy;
  return (
    <>
    <Layout>
        <Title pagetitle page="inventory" title="aset"/>
        <Date/>
        <Table data={aset} Top action/>
        <Pagination/>
    </Layout>
    </>
  )
}

export default Aset