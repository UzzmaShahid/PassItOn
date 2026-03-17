import { useState } from "react";

function BirthdayEditor({ bdyname, bdymessage, age, date, location, setbdyname, setbdymessage, setAge, setDate, setLocation }) {

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} style={{ padding:"16px 12px", display:"flex", flexDirection:"column", gap:16 }}>
                
                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    <label htmlFor="name" style={{ fontFamily:"Caveat, cursive", fontSize:16, color:"#7a5a30", letterSpacing:1 }}>✦ Name</label>
                    <input
                        type="text"
                        value={bdyname}
                        onChange={(e) => setbdyname(e.target.value)}
                        style={{ fontFamily:"Georgia, serif", fontSize:14, padding:"8px 12px", border:"1.5px dashed #c8a87a", borderRadius:6, background:"#fffdf5", color:"#3a2a10", outline:"none", width:"100%", boxSizing:"border-box" }}
                    />
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    <label htmlFor="message" style={{ fontFamily:"Caveat, cursive", fontSize:16, color:"#7a5a30", letterSpacing:1 }}>✦ Message</label>
                    <textarea
                        value={bdymessage}
                        onChange={(e) => setbdymessage(e.target.value)}
                        rows={4}
                        style={{ fontFamily:"Georgia, serif", fontSize:13, padding:"8px 12px", border:"1.5px dashed #c8a87a", borderRadius:6, background:"#fffdf5", color:"#3a2a10", outline:"none", resize:"none", lineHeight:1.6, width:"100%", boxSizing:"border-box" }}
                    />
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    <label htmlFor="age" style={{ fontFamily:"Caveat, cursive", fontSize:16, color:"#7a5a30", letterSpacing:1 }}>✦ Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={{ fontFamily:"Georgia, serif", fontSize:14, padding:"8px 12px", border:"1.5px dashed #c8a87a", borderRadius:6, background:"#fffdf5", color:"#3a2a10", outline:"none", width:"100%", boxSizing:"border-box" }}
                    />
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    <label htmlFor="date" style={{ fontFamily:"Caveat, cursive", fontSize:16, color:"#7a5a30", letterSpacing:1 }}>✦ Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{ fontFamily:"Georgia, serif", fontSize:14, padding:"8px 12px", border:"1.5px dashed #c8a87a", borderRadius:6, background:"#fffdf5", color:"#3a2a10", outline:"none", width:"100%", boxSizing:"border-box" }}
                    />
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    <label htmlFor="location" style={{ fontFamily:"Caveat, cursive", fontSize:16, color:"#7a5a30", letterSpacing:1 }}>✦ Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={{ fontFamily:"Georgia, serif", fontSize:14, padding:"8px 12px", border:"1.5px dashed #c8a87a", borderRadius:6, background:"#fffdf5", color:"#3a2a10", outline:"none", width:"100%", boxSizing:"border-box" }}
                    />
                </div>

            </form>
        </>
    )
}

export default BirthdayEditor;