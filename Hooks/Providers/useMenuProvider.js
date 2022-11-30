import { useState } from "react";
import { RiComputerLine, RiFileListFill, RiPlantFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsPersonLinesFill, BsPersonFill, BsCashCoin, BsMicrosoft } from "react-icons/bs";
import { AiFillCloud, AiFillBug } from "react-icons/ai";
import { FaWallet, FaUsersCog, FaUserAlt, FaBookReader, FaBoxes, FaHandHolding, FaUserCog, FaCalendarAlt } from "react-icons/fa";
import { BiLike, BiListCheck } from "react-icons/bi";
import { GiReceiveMoney, GiPayMoney, GiPowderBag, GiGreenhouse } from "react-icons/gi";

export const useMenuProvider = () => {
const Menus =[
  {title:"Dashboard", icon:<BsMicrosoft/>, route: "/Dashboard"},
  {title:"Aktifitas", icon:<RiComputerLine/>,
    SubMenus: [
      {title: "Jadwal", icon:<FaCalendarAlt/>, route: "/Aktifitas/Jadwal"},
      {title: "Cuaca", icon:<AiFillCloud/>, route: "/Aktifitas/Cuaca"},
      {title: "Hama", icon:<AiFillBug/>, route: "/Aktifitas/Hama"}
    ]
  },
  {title:"Kelola Keuangan", icon:<FaWallet/>, 
    SubMenus: [
      {title: "Pemasukan", icon:<GiReceiveMoney/>, route: "/KelolaKeuangan/Pemasukan"},
      {title: "Pengeluaran", icon:<GiPayMoney/>, route: "/KelolaKeuangan/Pengeluaran"},
    ]
  },
  {title:"User", icon:<FaUsersCog/>,
    SubMenus: [
      {title: "User", icon:<BsPersonFill/>, route: "/User/user"},
      {title: "Level Kuasa", icon:<BsPersonLinesFill/>, route: "/User/Levelkuasa"},
      {title: "Pengaturan Otoritas", icon:<FaUserCog/>, route: "/User/Pengaturanotoritas"}
    ]
  },
  {title:"Inventory", icon:<FaBoxes/>,
    SubMenus: [
      {title: "Aset", icon:<GiGreenhouse/>, route: "/Inventory/Aset"},
      {title: "Pemakaian", icon:<BiListCheck/>, route: "/Inventory/Pemakaian"},
      {title: "Permintaan", icon:<FaHandHolding/>, route: "/Inventory/Permintaan"},
      {title: "Persetujuan", icon:<BiLike/>, route: "/Inventory/Persetujuan"},
    ]
  },
  {title:"Hasil Panen", icon:<GiPowderBag/>, route: "/Hasilpanen"},
  {title:"Kebun", icon:<RiPlantFill/>, route: "/Kebun"},
  {title:"Pricing", icon:<BsCashCoin/>, route: "/Pricing"},
  {title:"Laporan", icon:<FaBookReader/>,
    SubMenus: [ 
      {title: "Jadwal", icon:<FaCalendarAlt/>, route: "/Laporan/Jadwal"},
      {title: "Panen", icon:<GiPowderBag/>, route: "/Laporan/Panen"},
      {title: "Penjualan", icon:<RiMoneyDollarCircleLine/>, route: "/Laporan/Penjualan"},
      {title: "Kas", icon:<BsCashCoin/>, route: "/Laporan/Kas"},
    ]
  },
  {title:"Akun Profil", icon:<FaUserAlt/>, route: "/Akunprofil"},
  {title:"Log Aktifitas", icon:<RiFileListFill/>, route: "/LogAktifitas"},
  ]

  const [open, setOpen] = useState("/Dashboar");

  return {
    Menus,
    open,
    setOpen,
  };
};


