function santriCard({nama, nilai, kehadiran}) {
    const status = nilai >= 75 && kehadiran >= 85 ? "lulus" : "remedial";

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "12px",
            margin: "10px",
            borderRadius: "8px"
        }}>
            <h3>{nama}</h3>
            <p>Nilai: {nilai}</p>
            <p>Kehadiran: {kehadiran}</p>
            <p>Status: {status}</p>
        </div>
    )

}

export default santriCard;