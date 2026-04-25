import SantriCard from "./SantriCard"

function SantriList({data}) {
    return(
        <div>
            {
                data.map((santri, index) => (
                    <SantriCard key={index} {...santri} />
                ))
            }
        </div>
    )
}

export default SantriList;