import { useState } from "react";

const KomponenHafalan = ({nama, kelas}) => {
    const [jumlahHafalan, setjumlahHafalan] = useState (0);

    const handleOnClick = () => {
        setjumlahHafalan(jumlahHafalan +1);
    }
   
    return (
        <div style={{borderBottom:"1px solid #ddd",
            padding:"20px 0"    
        }}>
            <h2>{nama}</h2>
            <h2>{kelas}</h2>
            <h3>Jumlah hafalan: {jumlahHafalan}</h3>
            <h3>Lulus/Tidak Lulus: {jumlahHafalan <= 5 ? "Tidak Lulus" : "Lulus"}</h3>

            <button onClick={handleOnClick}>Tambah Hafalan</button>

        </div>
    )
}

export default KomponenHafalan;