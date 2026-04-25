import TableItem from "./TableItem"

function TableList({data}) {
    return(
        <div>
            {
                data.map((siswa, index) => (
                    <TableItem key={index} {...siswa} />
                ))
            }
        </div>
    )
}

export default TableList;
