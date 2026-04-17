import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const calonPeserta = [
{ nama: 'Tariq', nilaiUjian: 85 },
{ nama: 'Ziyad', nilaiUjian: 60 },
{ nama: 'Aisyah', nilaiUjian: 92 },
{ nama: 'Fulan', nilaiUjian: 70 },
{ nama: 'Khadijah', nilaiUjian: 88 }
];
 
const pesertaLolos = calonPeserta.filter
(peserta => peserta.nilaiUjian >= 80);

const daftarNamaLolos = pesertaLolos.map
(peserta => peserta.nama);
console.log("🎉 Daftar Peserta Lolos:", daftarNamaLolos);

  return (
    <>
    <div> 
      <ul>
       {pesertaLolos.map((peserta, index) => (
        <li>{peserta.nama}</li>
       ))}
      </ul>

    </div>
    </>
  )
}

export default App
