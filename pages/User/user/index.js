import React from "react";
import Layout from "../../../components/Layout";
import { useAppContext } from "../../../Hooks/useAppContext";
import Table from "../../../components/Table/Tablebasic";
import Title from "../../../components/Title";
const User = () => {
  const { dummy } = useAppContext();
  const { data_user } = dummy;
  return (
    <>
      <Layout>
        <Title pagetitle page="user" title="data user" />
        <div>
          <Table data={data_user} action Top/>
        </div>
      </Layout>
    </>
  );
};

export default User;
