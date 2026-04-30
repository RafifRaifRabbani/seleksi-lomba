import './App.css'
import KomponenHafalan from './KomponenHafalan'


function App() {
  const siswa = [{
    nama:"Andi",
    kelas: 10
  
  },
  {
    nama: "Irsyad",
    kelas:11
  },
  {
    nama: "Ahmad",
    kelas: 11
  }
];

  return (
    <>
     {siswa.map((item) => <KomponenHafalan key = {item.nama}nama={item.nama} kelas={item.kelas} />)} 
    </>
  )
}

export default App
