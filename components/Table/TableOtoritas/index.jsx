import { useState } from "react";

const TableOtoritas =({data,}) => {
    let table_head= []
    Object.keys(data[0]).forEach((key) => table_head.push(key));

    const CellStyle = "px-2 py-2 h-10 text-center";
    
  return (
    <div className="w-full rounded">
        <table className="w-full text-sm text-justify table-auto capitalize">
            <thead className="bg-white">
                <tr className="text-center">
                    <th className="border"></th>
                        {table_head.map((head, index)=>(
                            <th className={`${CellStyle} px-5 border`} key={"head"+index}>{head}</th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index)=> {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const [itemrow, setItemrow] = useState(item);
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const [checkAll, setCheckAll] = useState(false);
                    //handle checked
                    const handleCheck = (e) => {
                        const {name, checked} = e.target;
                        setItemrow({...itemrow, [name]: checked});
                    }
                    //handle check all
                    const handleCheckAll = (e) => {
                        const {checked} = e.target;
                        setCheckAll(checked);
                        setItemrow({...itemrow,
                            lihat: checked,
                            tambah: checked,
                            edit: checked,
                            hapus: checked,
                        });
                    }
                    console.log(itemrow)
                    return (
                        <tr key={"tableotoritas" + index}>
                            <td td className = {`${CellStyle} border bg-[#064635] w-24`
                            } >
                                <input type="checkbox" checked={checkAll} onChange={handleCheckAll}/>
                            </td>
                            <td className={`${CellStyle} border`}>{itemrow.akses}</td>
                            <td className={`${CellStyle} border`}>
                                <input type="checkbox" name="lihat" checked={itemrow.lihat} onChange={handleCheck}/>
                            </td>
                            <td className={`${CellStyle} border`}>
                                <input type="checkbox" name="tambah" checked={itemrow.tambah} onChange={handleCheck}/>
                            </td>
                            <td className={`${CellStyle} border`}>
                                <input type="checkbox" name="edit" checked={itemrow.edit} onChange={handleCheck}/>
                            </td>
                            <td className={`${CellStyle} border`}>
                                <input type="checkbox" name="hapus" checked={itemrow.hapus} onChange={handleCheck}/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    );
}

export default TableOtoritas
