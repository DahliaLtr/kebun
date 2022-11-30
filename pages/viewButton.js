import React from "react";
import Alert from "../components/Alert/Persetujuan";
import Button from "../components/Buttons";
import Date from "../components/Date";
import { useAppContext } from "../Hooks/useAppContext";

const ViewButton = () => {
  const {dummy} = useAppContext();
  const {data_user} = dummy;
  return (
    <>
      <div className="flex space-x-4 m-4">
      <Button type="add" link="/TambahDataUser" />
      <Button type="back" link="/User/user" />
      <Button type="eye" />
      <Button type="blue" text="delete" />
      <Button type="blue+print" text="Invoice" />
      <Button type="yellow" text="menunggu" />
      <Button type="edit" />
      <Button type="delete" />
      <Button type="green-cyan" text="cari" />
      <Button type="red" text="hutang" />
      <Button type="calendar" />
      <Button type="time" />
      <Button type="check" />
      <Button type="block" />
      <Button type="like" />
      <Button type="checklist"/>
    </div>
    <div>
      <Date/>
    </div>
    <div>
      <Alert title="belajar doang" data={data_user} />
    </div>
    </>

  );
};

export default ViewButton;
