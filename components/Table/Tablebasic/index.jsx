import React from "react";
import Button from "../../Buttons";
import ButtonSearch from "../../ButtonSearch";
import {useRouter} from "next/router";
import Image from 'next/image'

const Table = ({ data, action, Top, edit, update, add, kwitansi, bayar, check,t}) => {
  let table_head = [];
  Object.keys(data[0]).forEach((key) => table_head.push(key));

  const loc = useRouter();
  const path = loc.asPath

  const CellStyle = "px-2 py-2 h-10";
  return (
    <>
      <div className="w-full rounded shadow">
        {Top && (
          <div className="w-full flex py-2 justify-between px-2">
            <div className="items-center">
              <Button type="add" link={path + "/Add"}/>
            </div>
            <div>
              <ButtonSearch/>
            </div>
          </div>
        )}
        {add && (
          <div className="w-full flex py-2 px-2">
              <Button type="add" link={path + "/Add"}/>
          </div>
        )}
        <table className="w-full text-sm table-auto text-justify capitalize">
          <thead className="bg-[#064635] text-white">
            <tr className="">
              <th className={`${CellStyle} w-20 px-5`}>NO</th>
              {table_head.map((head) => (
                <th key={head}>{head}</th>
              ))}
              {(action || update || edit || kwitansi || bayar || check) && <th className="text-center">Aksi</th>}
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, index) => (
              <tr key={"item" + index}>
                <td className={`${CellStyle} border-t w-20 ml-5 px-5`}>{index + 1}</td>
                {table_head.map((head, index) => (
                  <td className="border-t" key={"head"+index}>{ head === "Cuaca" ? <><Image src={`/${item[head]}.svg`} alt="" width={28} height={28}/></> : head === "status" ?<div></div> : item[head]}</td>
                ))}
                {action && (
                  <td className="border-t text-center w-48">
                      <div className="space-x-3">
                        <Button type="eye"/>
                        <Button type="edit" link={path + "/Edit"}/>
                        <Button type="delete"/>
                      </div>
                  </td>
                )}
                {edit && (
                  <td className="border-t w-48 text-center">
                      <div className="space-x-3">
                        <Button type="edit" link={path + "/Edit"}/>
                        <Button type="delete"/>
                      </div>
                  </td>
                )}
                {update && (
                  <td className="border-t w-48 text-center">
                    <Button type="blue" text="update"/>
                  </td>
                )}
                {kwitansi && (
                  <td className="border-t w-48 text-center border-l item-center">
                    <div className="space-x-3">
                      <Button type="blue+print" text="kwitansi"/>
                      <Button type="eye"/>
                    </div>
                  </td>
                )}
                {bayar && (
                  <td className="border-t w-52">
                    <div className="space-x-2 flex item center">
                      <Button type="blue" text="bayar"/>
                      <Button type="blue+print" text="invoice"/>
                      <Button type="delete"/>
                    </div>
                  </td>
                )}
                {check && (
                  <td className="border-t w-48 text-center">
                      <div className="space-x-3">
                        <Button type="edit" link={path + "/Edit"}/>
                        <Button type="delete" />
                        <Button type="check"/>
                      </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;