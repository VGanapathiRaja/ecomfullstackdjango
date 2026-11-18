import React from 'react'
import './Pages.css'
import { useState } from 'react'
export default function Register() {
    const [rdata, setRdata] = useState({ RName: "", REmail: "", RMobile: "", RPassword: "", RCPassword: "", Rinfo: "" })
    const [err, setErr] = useState()

    const handleChange = (registerinfo) => {
        setRdata({ ...rdata, [registerinfo.target.name]: registerinfo.target.value })
        setErr("")
    }

    const handleSubmit = (registerinfo) => {
        registerinfo.preventDefault()

        if (!rdata.RName || !rdata.REmail || !rdata.RMobile || !rdata.RCPassword || !rdata.RPassword || !rdata.Rinfo) {
            // alert("Please fill the data")
            setErr("Please fill the data")
        }
        else {
            alert("Register Successfully ...!!")
            console.log(rdata)
            setRdata({ RName: "", REmail: "", RMobile: "", RPassword: "", RCPassword: "", Rinfo: "" })
        }
    }
    return (
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
        </section>
    )
}
