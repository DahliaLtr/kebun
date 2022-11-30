import { useState } from "react";
import Button from "../../../components/Buttons";
import Inputfields from "../../../components/Inputfields";
import Layout from "../../../components/Layout";
import Title from "../../../components/Title";

const Levelkuasa = ({ input, setInput }) => {
  const [list, setList] = useState([
    { id: 1, title: "Pimpinan", status: false },
    { id: 2, title: "Admin", status: false },
    { id: 3, title: "Pegawai", status: false },
  ]);

  //add level kuasa
  const addlist = () => {
    if (level) {
      let num = list.length + 1;
      let newEntry = { id: num, title: level, status: false };
      setList([...list, newEntry]);
      setLevel("");
    }
  };

  return (
    <>
      <Layout>
        <Title pagetitle page="user" title="level kuasa" />
        <div>
          <div className="w-full">
            <div className="grid rounded-lg shadow bg-white">
              <div className="flex sm:flex-row px-4 items-center pt-2">
                <Inputfields placeholder="masukkan level kuasa" style="rounded-none"/>
                <div className="ml-3">
                  <Button type="add" />
                </div>
              </div>
              {list &&
                list
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map((lk) => {
                    return (
                      <>
                        <div key={lk.id} className="justify-between flex border-b px-4 py-1">
                          <span>{lk.title}</span>
                          <Button type="delete"/>
                        </div>
                      </>
                    );
                  })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Levelkuasa;
