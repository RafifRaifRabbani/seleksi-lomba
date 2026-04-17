import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const daftarSantri = [
    {nama: 'Ahmad', nilai: 85, kehadiran: 90},
    {nama: 'Budi', nilai: 60, kehadiran: 70},
    {nama: 'Fatimah', nilai: 95, kehadiran: 100},
    {nama: 'Zaid', nilai: 70, kehadiran: 90},
    {nama: 'Khadijah', nilai: 80, kehadiran: 95}
  ];

  //tugas 1
  const daftarNama = daftarSantri.map(santri => santri.nama);
  console.log(daftarNama);

  //tugas 2
  const santriLulus = daftarSantri.filter(
    santri => santri.nilai >= 75 && santri.kehadiran >= 85,
  );
  console.log(santriLulus);

  //tugas 3 
  const santriRemed = daftarSantri.filter(
    santri => santri.nilai < 75 || santri.kehadiran < 85,
  );
  console.log(santriRemed);

  return (
    <>
     <div>
      <h1>Tugas Hari Kamis</h1>

      <h2>Daftar nama</h2>
      <ul>
        {daftarNama.map( (nama, index) => (
          <li>{nama}</li>
        ))
        }
      </ul>

      <h2>Santri lulus</h2>
      <ul>
        {santriLulus.map( (santri, index) => (
          <li>{santri.nama} - {santri.nilai}
          </li>
        ))
        }
      </ul>

      <h2>Santri remedial</h2>
      <ul>
        {santriRemed.map( (santri, index) => (
          <li>{santri.nama} - {santri.nilai}</li>
        ))
        }
      </ul>

     </div>
    </>
  )
}

export default App
