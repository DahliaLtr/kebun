import React from "react";
import Date from "../../../components/Date";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/pagination";
import Table from "../../../components/Table/Tablebasic";
import Title from "../../../components/Title";
import { useAppContext } from "../../../Hooks/useAppContext";

const Hama = ()=> {
  const { dummy } = useAppContext();
  const { pencatatan_hama } = dummy;
  return (
    <>
      <Layout>
        <Title pagetitle page="aktifitas" title="data pencatatan hama" />
        <Date />
        <Table data={pencatatan_hama} Top action />
        <Pagination />
      </Layout>
    </>
  )
}

export default Hama