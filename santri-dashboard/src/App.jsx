import './App.css'
import SantriList from './components/SantriList'


function App() {
  const daftarSantri = [
    {nama: 'Ahmad', nilai: 85, kehadiran: 90},
    {nama: 'Bambang', nilai: 60, kehadiran: 75},
    {nama: 'Zahra', nilai: 95, kehadiran: 100},
    {nama: 'Steve', nilai: 70, kehadiran: 80},
    {nama: 'Aisyah', nilai: 100, kehadiran: 95},
    {nama: 'Nasir', nilai: 70, kehadiran: 65},
  ]
  
  return ( 
     <div style={{padding:"20px"}}>
      <h1>Dashboard santri</h1>

      <SantriList data={daftarSantri} />
     </div>
  
  )
}

export default App
