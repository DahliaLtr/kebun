import React from 'react'
import Layout from '../../components/Layout'
import Table from '../../components/Table/Tablebasic'
import Title from '../../components/Title'
import { useAppContext } from '../../Hooks/useAppContext'

const Hasilpanen =() => {
  const {dummy} = useAppContext();
  const {hasil_panen} = dummy;
  return (
    <>
    <Layout>
      <Title pagetitle page="hasil panen" title="hasil panen"/>
      <Table data={hasil_panen} update/>
    </Layout>
    </>
  )
}

export default Hasilpanen