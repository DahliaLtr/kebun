import { data } from "autoprefixer";
import React from "react";

const Alert = ({title, head, data}) => {
    let table_head = [];
    Object.keys(data[0]).forEach((key) => table_head.push(key));
    return (
        <div className="w-full">
            <div className="bg-white rounded-lg shadow w-96 p-2">
                <div>
                    <span>{title}</span>
                </div>
                <br/>
                <div className="flex space-x-2">
                    <div className="w-48 flex justify-between">
                        <div>{table_head.map((head) => (<span key={head}>{head}</span>))} </div>
                        <div>:</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Alert;