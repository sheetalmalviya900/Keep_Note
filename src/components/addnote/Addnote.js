import { useState } from "react"

function Addnote() {
    const [note, setNote] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")
    function addTojsonFile() {
        console.log(note)
        let obj = {
            "Note": note,
            "Date":date,
            "Category": category
        }
        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }
        fetch("http://localhost:3000/viewNotes", requestOption)
            .then(res => {
                return res.json()
            })

    }
    return (

        <main className="form-signin">
            <form>
                <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBkWze4zShFmY0hyLo0zD7t6eQOS13X9MVA&usqp=CAU" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Write your Note here</h1>

                <div>
                    <label>Note
                        <br />
                        <input onChange={(e) => { setNote(e.target.value) }} />
                    </label>
                </div>

                <div>
                    <label>Date
                        <br />
                        <input type="date" onChange={(e) => { setDate(e.target.value) }} />
                    </label>
                </div>

                <div>
                    <label>Select Category
                        <br />
                        <select value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }}>
                            <option value="Social">Social</option>
                            <option value="Professional">Professional</option>
                            <option value="Personal">Personal</option>
                        </select>
                    </label>
                </div>

                <button onClick={addTojsonFile} className="w-100 btn btn-lg btn-primary" type="submit">Add Note</button>

            </form>
        </main>

    )
}
export default Addnote