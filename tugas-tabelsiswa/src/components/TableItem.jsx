function daftarSiswa ({nama, nilai_pekanan, nilai_bulanan, nilai_akhir, kehadiran}) {
    const status = nilai_akhir >= 75 && kehadiran >= 85 ? "Lulus" : "Gagal";

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "12px",
            margin: "10px",
            borderRadius: "8px"
        }}>
            <tbody>
                <tr>
                    <td>{nama}</td>
                    <td>{nilai_pekanan}</td>
                    <td>{nilai_bulanan}</td>
                    <td>{nilai_akhir}</td>
                    <td>{kehadiran}</td>
                    <td>{status}</td>
                </tr>
            </tbody>         
            
        </div>
    );
}

export default daftarSiswa;