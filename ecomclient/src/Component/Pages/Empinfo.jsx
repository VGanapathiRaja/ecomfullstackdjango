import React from "react";
import { useState, useEffect } from "react";
function Empinfo() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:7878/api/emp')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setInfo(data)
            })
            .catch((e) => {
                console.error("data not getting", e)
            })
    }, [])
    return (
        <div>
            <h1>hello app react</h1>

            {
                info.map((emp) =>
                    <p key={emp.id}>{emp.empname}</p>
                )
            }

        </div>
    )
}
export default Empinfo;