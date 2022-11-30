import React from 'react'
import Date from '../../../components/Date';
import Layout from '../../../components/Layout'
import Pagination from '../../../components/pagination';
import Table from '../../../components/Table/Tablebasic/index.jsx';
import Title from '../../../components/Title';
import { useAppContext } from '../../../Hooks/useAppContext';

const Cuaca = () => {
  const { dummy } = useAppContext();
  const { kondisi_cuaca } = dummy;
  return (
    <>
    <Layout>
      <Title pagetitle={true} page="aktifitas" title="kondisi cuaca"/>
      <Date/>
      <Table data={kondisi_cuaca} edit Top/>
      <Pagination/>
    </Layout>
    </>
  )
}

export default Cuaca