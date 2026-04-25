export function Tombol({text}) {
    return (<button>{text}</button>
    )
}

export const Button = ({text}) => {
    return (<button>{text}</button>
    )
}

export const 
UserProfile = ({profile,
    siswa
}) => {
    const {name, age} = profile;
}

return (
    <div>
        <h1>Profile user</h1>
        <p>Nama: {name}</p>
        <p>Umur: {age}</p>

        <h2>Seluruh siswa</h2>
        <ol style={{ textAlign :"left"}}>
            {" "}
            {siswa.map ((item) => (
                <li>{item}</li>
            ))}
        </ol>
    </div>
)