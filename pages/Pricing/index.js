import React from 'react'
import Layout from '../../components/Layout'
import Table from '../../components/Table/Tablebasic'
import Title from '../../components/Title'
import { useAppContext } from '../../Hooks/useAppContext'

const Pricing =()=> {
  const {dummy} = useAppContext();
  const {pricing} = dummy
  return (
    <>
    <Layout>
    <Title pagetitle page="pricing" title="pricing"/>
    <Table data={pricing} add edit/>
    </Layout>
    </>
    
  )
}

export default Pricing