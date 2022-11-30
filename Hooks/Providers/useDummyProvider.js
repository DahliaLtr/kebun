export const useDummyProvider = () => {
  const data_user = [
    {
      Nama: "no name",
      "Level kuasa": "Pimpinan",
      Status: "aktif",
    },
    {
      Nama: "no name",
      "Level kuasa": "admin",
      Status: "aktif",
    },
    {
      Nama: "no name",
      "Level kuasa": "Pegawai",
      Status: "aktif",
    },
  ];
  const jadwal_cel_tumbuhan =[
    {
      "Hari/Tanggal": "Senin,26-09-2022",
      "Nama Petugas": "Mazi",
      "Name Kebun": "Stroberi",
      Blok: "ST/02",
      Waktu: "06.00 - 10.00"
    },
    {
      "Hari/Tanggal": "Senin,26-09-2022",
      "Nama Petugas": "Mazi",
      "Name Kebun": "Stroberi",
      Blok: "ST/02",
      Waktu: "06.00 - 10.00"
    },
    {
      "Hari/Tanggal": "Senin,26-09-2022",
      "Nama Petugas": "Mazi",
      "Name Kebun": "Stroberi",
      Blok: "ST/02",
      Waktu: "06.00 - 10.00"
    },
    {
      "Hari/Tanggal": "Senin,26-09-2022",
      "Nama Petugas": "Mazi",
      "Name Kebun": "Stroberi",
      Blok: "ST/02",
      Waktu: "06.00 - 10.00"
    },
    {
      "Hari/Tanggal": "Senin,26-09-2022",
      "Nama Petugas": "Mazi",
      "Name Kebun": "Stroberi",
      Blok: "ST/02",
      Waktu: "06.00 - 10.00"
    }
  ];
  const kebun =[
    {
      "Nama Kebun": "Stoberi",
      Panjang: "100 M",
      Lebar: "100 M",
      Luas :"100 M2"
    },
    {
      "Nama Kebun": "Stoberi",
      Panjang: "100 M",
      Lebar: "100 M",
      Luas: "100 M2"
    },
    {
      "Nama Kebun": "Stoberi",
      Panjang: "100 M",
      Lebar: "100 M",
      Luas: "100 M2"
    },
    {
      "Nama Kebun": "Stoberi",
      Panjang: "100 M",
      Lebar: "100 M",
      Luas: "100 M2"
    },
    {
      "Nama Kebun": "Stoberi",
      Panjang: "100 M",
      Lebar: "100 M",
      Luas: "100 M2"
    }
  ];
  const kondisi_cuaca =[
    {
      "Hari/Tanggal" : "date",
      Cuaca: "hujan",
      "Kondisi Cuaca": "Cerah",
      Suhu: "27 C",
      Catatan: "nice"
    },
    {
      "Hari/Tanggal": "date",
      Cuaca: "cerah",
      "Kondisi Cuaca": "Cerah",
      Suhu: "27 C",
      Catatan: "nice"
    },
    {
      "Hari/Tanggal": "date",
      Cuaca: "salju",
      "Kondisi Cuaca": "Cerah",
      Suhu: "27 C",
      Catatan: "nice"
    }
  ];
  const jadwal_pengecekan =[
    {
      "Hari/Tanggal" : "senin, 26-09-2022",
      "Nama Petugas": "Mazi",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "Nama Pupuk": "nitrogen",
      jumlah: "1 kg",
      waktu: "06.00-10.00"
    },
    {
      "Hari/Tanggal": "date",
      "Nama Petugas": "Mazi",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "Nama Pupuk": "nitrogen",
      jumlah: "1 kg",
      waktu: "time"
    },
    {
      "Hari/Tanggal": "date",
      "Nama Petugas": "Mazi",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "Nama Pupuk": "nitrogen",
      jumlah: "1 kg",
      waktu: "time"
    },
    {
      "Hari/Tanggal": "date",
      "Nama Petugas": "Mazi",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "Nama Pupuk": "nitrogen",
      jumlah: "1 kg",
      waktu: "time"
    },
    {
      "Hari/Tanggal": "date",
      "Nama Petugas": "Mazi",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "Nama Pupuk": "nitrogen",
      jumlah: "1 kg",
      waktu: "time"
    }
  ];
  const pencatatan_hama =[
    {
      "Hari/Tanggal": "senin, 26-09-2022",
      "Nama hama": "ulat",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "tingkat kerusakan": "sedang",
      jumlah: "1 ",
    },
    {
      "Hari/Tanggal": "senin, 26-09-2022",
      "Nama hama": "ulat",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "tingkat kerusakan": "sedang",
      jumlah: "1 ",
    },
    {
      "Hari/Tanggal": "senin, 26-09-2022",
      "Nama hama": "ulat",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "tingkat kerusakan": "sedang",
      jumlah: "1 ",
    },
    {
      "Hari/Tanggal": "senin, 26-09-2022",
      "Nama hama": "ulat",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "tingkat kerusakan": "sedang",
      jumlah: "1 ",
    },
    {
      "Hari/Tanggal": "senin, 26-09-2022",
      "Nama hama": "ulat",
      "Nama Kebun": "stroberi",
      Blok: "ST/02",
      "tingkat kerusakan": "sedang",
      jumlah: "1 ",
    }
  ];
  const hasil_panen =[
    {
      "nama kebun": "durian",
      bagus: "7 kg",
      "kurang bagus": "7 kg",
      "total panen": "14 kg",
    },
    {
      "nama kebun": "durian",
      bagus: "7 kg",
      "kurang bagus": "7 kg",
      "total panen": "14 kg",
    },
    {
      "nama kebun": "durian",
      bagus: "7 kg",
      "kurang bagus": "7 kg",
      "total panen": "14 kg",
    },
    {
      "nama kebun": "durian",
      bagus: "7 kg",
      "kurang bagus": "7 kg",
      "total panen": "14 kg",
    },
    {
      "nama kebun": "durian",
      bagus: "7 kg",
      "kurang bagus": "7 kg",
      "total panen": "14 kg",
    }
  ];
  const level_kuasa =[
    {
      kode: "LK01",
      kuasa: "pimpinan"
    },
    {
      kode: "LK02",
      kuasa: "admin"
    },
    {
      kode: "LK03",
      kuasa: "pegawai"
    }
  ]
  const pengaturan_otoritas=[
    {
      kode: "LK01",
      otoritas: [
        {
          akses: "dashboard",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "jadwal",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "cuaca",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "hama",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        }
      ]
    },
    {
      kode: "LK02",
      otoritas: [
        {
          akses: "dashboard",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "jadwal",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "cuaca",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "hama",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        }
      ]
    },
    {
      kode: "LK03",
      otoritas: [
        {
          akses: "dashboard",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "jadwal",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "cuaca",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        },
        {
          akses: "hama",
          lihat: false,
          tambah: false,
          edit: false,
          hapus: false,
        }
      ]
    }
  ];
  const pricing =[
    {
      "nama kebun": "stoberi",
      satuan: "kg",
      "harga bagus": 40000,
      "harga kurang bagus": 60000
    },
    {
      "nama kebun": "stoberi",
      satuan: "kg",
      "harga bagus": 40000,
      "harga kurang bagus": 60000
    },
    {
      "nama kebun": "stoberi",
      satuan: "kg",
      "harga bagus": 40000,
      "harga kurang bagus": 60000
    }
  ]
  const penjualan_hasil_panen =[
    {
      "hari/tanggal": "Senin, 26-09-2022",
      "nama pembeli": "lia",
      "total harga": 100000000,
      "sisa tagihan": 0,
      status: true
    },
    {
      "hari/tanggal": "Senin, 26-09-2022",
      "nama pembeli": "lia",
      "total harga": 100000000,
      "sisa tagihan": 0,
      status: true
    },
    {
      "hari/tanggal": "Senin, 26-09-2022",
      "nama pembeli": "lia",
      "total harga": 100000000,
      "sisa tagihan": 0,
      status: true
    }
  ]
  const aset =[
    {
      "kode aset": "PMB/PPK/260922/01",
      "nama aset": "cangkul",
      "tanggal pembelian": "Senin, 26-09-2022",
      jumlah : 5
    },
    {
      "kode aset": "PMB/PPK/260922/01",
      "nama aset": "cangkul",
      "tanggal pembelian": "Senin, 26-09-2022",
      jumlah : 5
    },
    {
      "kode aset": "PMB/PPK/260922/01",
      "nama aset": "cangkul",
      "tanggal pembelian": "Senin, 26-09-2022",
      jumlah : 5
    },
    {
      "kode aset": "PMB/PPK/260922/01",
      "nama aset": "cangkul",
      "tanggal pembelian": "Senin, 26-09-2022",
      jumlah : 5
    }
  ]
  return {
    data_user,
    jadwal_cel_tumbuhan,
    kebun,
    kondisi_cuaca,
    jadwal_pengecekan,
    pencatatan_hama,
    hasil_panen,
    level_kuasa,
    pengaturan_otoritas,
    pricing,
    penjualan_hasil_panen,
    aset,
  };
};
