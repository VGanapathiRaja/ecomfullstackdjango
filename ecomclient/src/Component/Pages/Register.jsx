import React from 'react'
import './Pages.css'
import { useState, useEffect } from 'react'
import API from '../../Api'
export default function Register() {
    const [rdata, setRdata] = useState({ RName: "", REmail: "", RMobile: "", RPassword: "", RCPassword: "", Rinfo: "" })
    const [err, setErr] = useState()

    const handleChange = (registerinfo) => {
        setRdata({ ...rdata, [registerinfo.target.name]: registerinfo.target.value })
        setEditData({
            ...editData,
            [registerinfo.target.name]: registerinfo.target.value
        });
        setErr("")
    }

    const handleSubmit = async (registerinfo) => {
        registerinfo.preventDefault()

        if (!rdata.RName || !rdata.REmail || !rdata.RMobile || !rdata.RCPassword || !rdata.RPassword || !rdata.Rinfo) {
            // alert("Please fill the data")
            setErr("Please fill the data")
        }
        else {

            console.log(rdata)
            setRdata({ RName: "", REmail: "", RMobile: "", RPassword: "", RCPassword: "", Rinfo: "" })
        }

        try {
            await API.post('/registerdata/', rdata);
            // alert("Data sended in db and BE saved....!")
            alert("Register Successfully ...!!")
        }
        catch (error) {
            console.error(error, "data not sent db & BE");
            alert("Data not send BE & DB")
        }
    }


    const [userdata, setUserdata] = useState([])
    const getuserData = async () => {
        try {
            const userDatas = await API.get('/userdatas/');
            console.log(userDatas.data)
            setUserdata(userDatas.data)
        }
        catch (e) {
            console.error(e, "data not loading from backend ")
        }
    };


    useEffect(() => {
        getuserData()
    }, [])



    const [rinfo, setRinfo] = useState([])

    const getData = async () => {
        try {
            const data = await API.get('/erdata/');
            console.log(data)
            setRinfo(data.data)
        }
        catch (e) {
            console.error('data not load', e)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 2000)
    }, [])

    const [editId, setEditId] = useState(null);

    const [editData, setEditData] = useState({
        RName: "",
        REmail: "",
        RMobile: "",
        Rinfo: ""
    });

    const handleEdit = (ri) => {
        setEditId(ri.id);

        setEditData({
            RName: ri.RName,
            REmail: ri.REmail,
            RMobile: ri.RMobile,
            Rinfo: ri.Rinfo
        });
    };



    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await API.patch(
                `/update/${editId}/`,
                editData
            );

            alert("Employee Updated Successfully");

            console.log(response.data);

            setEditId(null);
            getData();

        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            const response = await API.delete(`/delete/${id}/`);

            alert(response.data.message);

            getData();

        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };


    return (
        <>
            <section className='regsection'>
                <div className="regiform">
                    <h2>Register Form Employee's</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <label htmlFor="rname">Full name</label>
                            <div>
                                <input type="text" name='RName' placeholder='Enter your Fullname'
                                    onChange={handleChange} value={rdata.RName} />
                                {err && <p>{err} </p>}
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="rname">Register Email</label>
                            <div>
                                <input type="email" name='REmail' placeholder='Enter your FullEmail'
                                    onChange={handleChange} value={rdata.REmail} />
                                {err && <p>{err} </p>}
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="rname">Register Mobile</label>
                            <div>
                                <input type="tel" name='RMobile' placeholder='Enter your FullMobile'
                                    onChange={handleChange} value={rdata.RMobile} />
                                {err && <p>{err} </p>}
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="rname">Register Password</label>
                            <div>
                                <input type="password" name='RPassword' placeholder='Enter your FullPassword'
                                    onChange={handleChange} value={rdata.RPassword} />
                                {err && <p>{err} </p>}
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="rname">Register Confirm Password</label>
                            <div>
                                <input type="password" name='RCPassword' placeholder='Enter your FullPassword'
                                    onChange={handleChange} value={rdata.RCPassword} />
                                {err && <p>{err} </p>}
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="rname">Register Info</label>
                            <div>
                                <textarea name="Rinfo" placeholder='Enter your Info'
                                    onChange={handleChange} value={rdata.Rinfo} ></textarea>
                                {err && <p>{err} </p>}
                            </div>
                        </div>
                        <div className="inputs">
                            <button type='submit'>Save Data</button>
                        </div>
                    </form>
                </div>

                <div>
                    <h2>user datas</h2>
                    {
                        userdata.map((ud) =>
                            <p key={ud.id}> {ud.RName} </p>
                        )
                    }
                </div>
            </section>
            <section className='regsection'>
                <div className="regiform">
                    <h2>Employee's Data</h2>
                    <div>
                        <table border={1} cellPadding={10}>
                            <thead>
                                <td>rid</td>
                                <td>R name</td>
                                <td>R email</td>
                                <td>R mobile</td>
                                <td>R pass</td>
                                <td>R confirm pass</td>
                                <td>R feedback</td>
                                <td colSpan={2} style={{ textAlign: "center" }}>action</td>
                            </thead>
                            <tbody>
                                {rinfo.map((ri) =>
                                    <tr key={ri.id}>
                                        <td> {ri.id} </td>
                                        <td> {ri.RName} </td>
                                        <td> {ri.REmail} </td>
                                        <td> {ri.RMobile} </td>
                                        <td> {ri.RPassword} </td>
                                        <td> {ri.RCPassword} </td>
                                        <td> {ri.Rinfo} </td>
                                        <td>
                                            <button onClick={() => handleEdit(ri)}>
                                                Edit
                                            </button>
                                        </td>

                                        <td>
                                            <button onClick={() => handleDelete(ri.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {editId !== null && (
                            <form onSubmit={handleUpdate}>

                                <h3>Update Employee</h3>

                                <input
                                    name="RName"
                                    value={editData.RName}
                                    onChange={handleChange}
                                    placeholder="Name"
                                />

                                <input
                                    name="REmail"
                                    value={editData.REmail}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />

                                <input
                                    name="RMobile"
                                    value={editData.RMobile}
                                    onChange={handleChange}
                                    placeholder="Mobile"
                                />

                                <textarea
                                    name="Rinfo"
                                    value={editData.Rinfo}
                                    onChange={handleChange}
                                    placeholder="Feedback"
                                />

                                <button type="submit">
                                    Update Employee
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setEditId(null)}
                                >
                                    Cancel
                                </button>

                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
