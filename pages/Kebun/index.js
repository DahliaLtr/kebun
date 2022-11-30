import { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import Table from '../../components/Table/Tablebasic';
import Title from '../../components/Title';
import { useAppContext } from '../../Hooks/useAppContext';

const Kebun =({data}) =>{
  // const { dummy } = useAppContext();
  // const { kebun } = dummy;
  const [dataKebun, setDataKebun] = useState([])
  useEffect(()=>{
    const kbn = data.map((kebun)=> {
      const asArray = Object.entries(kebun);
      const filtered = asArray.filter(([key, value]) => 
      key === "farmName" || key === "farmLength" || key === "farmWidth" || key === "farmArea"
      );
      const obj = Object.fromEntries(filtered);
      return obj;
    });
    setDataKebun(kbn)
    console.log(data, kbn)
  }, [data]);

  return (
    <>
    <Layout>
      <Title pagetitle page="kebun" title="kebun"/>
      <div>
        {dataKebun && dataKebun.length > 0 && <Table data={dataKebun} action Top/> }
      </div>
    </Layout>
    </>
  )
}
export async function getServerSideProps() {
  // Fetching data
  const res = await fetch(
  'https://api-mbkm-perkebunan.kotasatelit.com/api/v1/farm', { headers: {
    Authorization: "Bearer 14|9kz66Aw0YrFO0qX3LkZHywt9wKHlLYhUnoaPtUFf"
  }});
  const data = await res.json() ;
  // Passing data to the Product Page using props
  return {
      props : {data}
  }
}

export default Kebun;