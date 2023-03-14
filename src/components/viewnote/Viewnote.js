import { useEffect, useState } from "react"

function Viewnote() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/viewNotes")
            .then(res => {
                return res.json()
            })
            .then(value => {
                setData(value)
            })
        
    },[])
    // console.log(data)
    return (
        <div>
            <table>
                <thead>
                    <th>Category</th>
                    <th>Note</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    
                {
                    data.map(item=> <tr><td>{item.Category}</td><td>{item.Note}</td><td>{item.Date}</td></tr>)
                }
                </tbody>
            </table>
        </div>
    )
}
export default Viewnote;