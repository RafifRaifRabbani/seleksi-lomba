import './App.css'
import { Tombol } from "./tombol.jsx"
import { UserProfile } from './tombol.jsx'


function App() {
  const nama ="Budi"
  const hobi ="Robotik"

  const profile = {name: "Fulan bin Alan", age:15};

  const {name, age} = profile;
  const siswaKelasX = ["Budi", "Fulan", "Andi"];
  const siswaKelasXI = ["Ubaid", "Fatah", "Ihza"];

  const gabungan = [
    ...siswaKelasX,
    ...siswaKelasXI,
    "Abdurrahman"
  ]

  const detail = {...profile, alamat:"LikeEarth"};

  const DataPribadi =  ({nama, hobi}) => (
    <>
      Nama saya adalah {nama} - dan hobi saya adalah {hobi}
    </>
  )

  return (
    <>
      <h1 className="judul">{name + "" + age}</h1>
      <h2>{`Data pribadi ${nama} ${hobi}`}</h2>
      <tombol text="Tekan Disini"/>
      <tombol text="Buka Halaman"/>
      
      {JSON.stringify(siswaKelasX)}
      <hr />
      {JSON.stringify(gabungan)}
      <hr />
      {JSON.stringify(detail)}
      <button text="Tombol" />

      
    </>
  );
}

export default App
