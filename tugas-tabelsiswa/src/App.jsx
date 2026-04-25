import "./App.css";
import TableList from "./components/TableList";

function App() {
  const dataSiswa = [
    {
      nama: "Ahmad",
      nilai_pekanan: 85,
      nilai_bulanan: 80,
      nilai_akhir: 82,
      kehadiran: 90,
    },
    {
      nama: "Siti",
      nilai_pekanan: 70,
      nilai_bulanan: 65,
      nilai_akhir: 68,
      kehadiran: 85,
    },
    {
      nama: "Umar",
      nilai_pekanan: 90,
      nilai_bulanan: 92,
      nilai_akhir: 91,
      kehadiran: 75,
    },
    {
      nama: "Fatimah",
      nilai_pekanan: 88,
      nilai_bulanan: 85,
      nilai_akhir: 86,
      kehadiran: 100,
    },
  ];

  return (
    <>
      <div style={{ padding: "10px" }}>
        <h1>Daftar siswa</h1>
        <table style={{ border: "1" }}>
          <thead>
            <tr>
            <th>Nama</th>
            <th>Nilai pekanan</th>
            <th>Nilai bulanan</th>
            <th>Nilai Akhir</th>
            <th>Statuss</th>
          </tr>
          </thead>
          <tbody>
            <TableList data={dataSiswa} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
