import { useState, useEffect } from "react";
import templates from "../Templates"
import EidEditor from "./EidEditor";
import BirthdayEditor from "./BirthdayEditor";
import { postCard } from "../Api/CardApi";

const VITE_FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL

export default function Home() {
    const [occasion, setOccasion] = useState("all");
    const [recipientName, setRecipientName] = useState("Noor");
    const [bdyname, setbdyname] = useState("Julie")
    const [message, setMessage] = useState("Wishing you joy, peace, and blessings on this special day 🌙");
    const [bdymessage, setbdymessage] = useState("A very happy birthday to my favorite human")
    const [font, setFont] = useState("'Playfair Display', serif");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [location, setLocation] = useState("New York");
    const [age, setAge] = useState(20);
    const [template, settemplate] = useState(templates)
    const [currentTemplate, setCurrentTemplate] = useState(templates[0])
    const [activeTab, setactiveTab] = useState("template")
    const [showSheet, setShowSheet] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1070)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1070)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    async function getLinkofEid(recipientName, message, font, templateid, occasion) {
        try {
            const result = await postCard(recipientName, message, font, templateid, occasion)
            if (result.success) {
                const link = `${VITE_FRONTEND_URL}/card/${result.res}`
                await navigator.clipboard.writeText(link)
                alert("Link copied!")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    async function getLinkofBirthday(bdyname, bdymessage, age, date, location) {
        try {
            const result = await postCard(bdyname, bdymessage, null, currentTemplate.id, currentTemplate.occasion, age, date, location)
            if (result.success) {
                const link = `${VITE_FRONTEND_URL}/card/${result.res}`
                await navigator.clipboard.writeText(link)
                alert("Link copied!")
            }
        } catch (error) {
            return error.message
        }
    }

    const filteredTemplates = template.filter(t => t.occasion == occasion || occasion == "all")

    return (
        <>
            {/* ── Header ── */}
            <div style={{
                background: "#fdf8f0",
                borderBottom: "2px dashed #c8a87a",
                padding: isMobile ? "8px 32px 8px 14px" : "0 28px",
                height: isMobile ? "auto" : 68,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: isMobile ? "wrap" : "nowrap",
                gap: isMobile ? 6 : 0,
                position: "relative",
                overflow: "visible",
            }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                    <div style={{ position: "absolute", top: 4, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: "#c84040", border: "1.5px solid #a02020" }} />
                    <li style={{ fontFamily: "Caveat, cursive", fontSize: isMobile ? 22 : 26, fontWeight: 700, color: "#5a3e28", listStyle: "none", padding: "4px 12px", background: "#fff8e8", border: "1px solid #e0c898", transform: "rotate(-1.5deg)", display: "inline-block" }}>
                        ✉ Pass It On

                    </li>
                </div>

                {!isMobile && (
                    <li style={{ listStyle: "none", fontFamily: "Special Elite, monospace", fontSize: 10, letterSpacing: 4, color: "#a08060", textTransform: "uppercase", borderBottom: "1px dashed #c8a87a", paddingBottom: 2 }}>
                        — occasions —
                    </li>
                )}

                <ul style={{ listStyle: "none", display: "flex", gap: 6, padding: "0 8px 0 0", margin: 0, alignItems: "center" }}>                    {!isMobile && <span style={{ fontSize: 14, color: "#a08060", opacity: 0.6, marginRight: 4 }}>✂</span>}
                    <li><button style={{ fontFamily: "Caveat, cursive", fontSize: isMobile ? 13 : 16, padding: isMobile ? "4px 10px" : "5px 16px", borderRadius: 3, cursor: "pointer", background: "#fff0d4", border: `1.5px solid ${occasion === "all" ? "#c8a040" : "#e0c898"}`, color: "#7a5a10", transform: "rotate(-1deg)", fontWeight: occasion === "all" ? 700 : 500 }} onClick={() => setOccasion("all")}>All</button></li>
                    <li><button style={{ fontFamily: "Caveat, cursive", fontSize: isMobile ? 13 : 16, padding: isMobile ? "4px 10px" : "5px 16px", borderRadius: 3, cursor: "pointer", background: "#fde8e8", border: `1.5px solid ${occasion === "birthday" ? "#d48080" : "#f0c0c0"}`, color: "#7a3030", transform: "rotate(1.5deg)", fontWeight: occasion === "birthday" ? 700 : 500 }} onClick={() => setOccasion("birthday")}>Birthday</button></li>
                    <li><button style={{ fontFamily: "Caveat, cursive", fontSize: isMobile ? 13 : 16, padding: isMobile ? "4px 10px" : "5px 16px", borderRadius: 3, cursor: "pointer", background: "#e8f0e0", border: `1.5px solid ${occasion === "eid" ? "#80a860" : "#c0d8a8"}`, color: "#385820", transform: "rotate(-1deg)", fontWeight: occasion === "eid" ? 700 : 500 }} onClick={() => setOccasion("eid")}>Eid</button></li>
                </ul>
            </div>

            {/* ── Body ── */}
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>

                {/* ── Left Panel (desktop only) ── */}
                {!isMobile && (
                    <div style={{ width: "30vw", display: "flex", flexDirection: "column", height: "calc(100vh - 68px)", background: "#fdf8f0", borderRight: "2px dashed #c8a87a" }}>
                        <div style={{ display: "flex", borderBottom: "2px dashed #c8a87a", flexShrink: 0 }}>
                            <div onClick={() => setactiveTab("template")} style={{ flex: 1, padding: "12px 0", textAlign: "center", cursor: "pointer", fontFamily: "Caveat, cursive", fontSize: 18, color: activeTab === "template" ? "#5a3e28" : "#b0987a", background: activeTab === "template" ? "#fff8e8" : "transparent", borderBottom: activeTab === "template" ? "3px solid #c8a040" : "3px solid transparent", fontWeight: activeTab === "template" ? 700 : 500 }}>Templates</div>
                            <div style={{ width: 1, background: "#c8a87a", opacity: 0.4 }} />
                            <div onClick={() => setactiveTab("editor")} style={{ flex: 1, padding: "12px 0", textAlign: "center", cursor: "pointer", fontFamily: "Caveat, cursive", fontSize: 18, color: activeTab === "editor" ? "#5a3e28" : "#b0987a", background: activeTab === "editor" ? "#fff8e8" : "transparent", borderBottom: activeTab === "editor" ? "3px solid #c8a040" : "3px solid transparent", fontWeight: activeTab === "editor" ? 700 : 500 }}>Editor</div>
                        </div>
                        <div style={{ flex: 1, overflowY: "auto", padding: "12px 10px" }}>
                            {activeTab === 'template' ?
                                filteredTemplates.map((i) => (
                                    <div key={i.id} onClick={() => setCurrentTemplate(i)} style={{ borderRadius: 20, marginBottom: 12, cursor: "pointer", border: currentTemplate.id === i.id ? "2px dashed #c8a040" : "2px dashed #d4c0a0", overflow: "hidden", background: "#fff", transform: currentTemplate.id === i.id ? "rotate(-0.5deg)" : "rotate(0.5deg)", transition: "all 0.2s" }}>
                                        <div style={{ pointerEvents: "none" }}>
                                            {i.occasion === 'eid' ? <i.component name={recipientName} message={message} font={font} /> : <i.component name={bdyname} message={bdymessage} date={date} location={location} age={age} />}
                                        </div>
                                        <div style={{ padding: "7px 12px", fontFamily: "Caveat, cursive", fontSize: 13, color: currentTemplate.id === i.id ? "#8a6010" : "#a08060", background: currentTemplate.id === i.id ? "#fffdf0" : "#fdf8f0", textAlign: "center" }}>{i.name}</div>
                                    </div>
                                ))
                                : currentTemplate.occasion === "eid"
                                    ? <EidEditor name={recipientName} message={message} font={font} setRecipientName={setRecipientName} setmessage={setMessage} setfont={setFont} />
                                    : <BirthdayEditor bdyname={bdyname} bdymessage={bdymessage} age={age} date={date} location={location} setbdyname={setbdyname} setbdymessage={setbdymessage} setAge={setAge} setDate={setDate} setLocation={setLocation} />
                            }
                        </div>
                    </div>
                )}

                {/* ── Right Panel ── */}
                <div style={{ width: isMobile ? "100vw" : "70vw", background: "#f5f0e8", display: "flex", flexDirection: "column", justifyContent: isMobile ? "flex-start" : "center", alignItems: "center", height: isMobile ? "auto" : "calc(100vh - 68px)", overflow: isMobile ? "visible" : "hidden", gap: 16, padding: isMobile ? "20px 16px" : 20, position: "relative" }}>

                    {currentTemplate.occasion === "eid" ? <>
                        <div style={{ flex: isMobile ? "none" : 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <div style={{ width: isMobile ? "90vw" : "min(340px, 45vw)" }}>
                                <currentTemplate.component name={recipientName} message={message} font={font} />
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                            <div onClick={() => getLinkofEid(recipientName, message, font, currentTemplate.id, currentTemplate.occasion)} style={{ fontFamily: "Caveat, cursive", fontSize: 17, padding: "7px 22px", borderRadius: 4, cursor: "pointer", background: "#fff8e8", border: "1.5px dashed #c8a040", color: "#7a5a10" }}>🔗 Share Link</div>
                        </div>
                    </> : <>
                        <div style={{ flex: isMobile ? "none" : 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <div style={{ width: isMobile ? "90vw" : "min(340px, 45vw)" }}>
                                <currentTemplate.component name={bdyname} message={bdymessage} age={age} date={date} location={location} />
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                            <div onClick={() => getLinkofBirthday(bdyname, bdymessage, age, date, location)} style={{ fontFamily: "Caveat, cursive", fontSize: 17, padding: "7px 22px", borderRadius: 4, cursor: "pointer", background: "#fff8e8", border: "1.5px dashed #c8a040", color: "#7a5a10" }}>🔗 Share Link</div>
                        </div>
                    </>}

                    {/* Editor below card on mobile */}
                    {isMobile && (
                        <div style={{ width: "100%", borderTop: "2px dashed #c8a87a", paddingTop: 16, marginTop: 8 }}>
                            <p style={{ fontFamily: "Caveat, cursive", fontSize: 18, color: "#7a5a30", margin: "0 0 12px 12px" }}>✦ Customize</p>
                            {currentTemplate.occasion === "eid"
                                ? <EidEditor name={recipientName} message={message} font={font} setRecipientName={setRecipientName} setmessage={setMessage} setfont={setFont} />
                                : <BirthdayEditor bdyname={bdyname} bdymessage={bdymessage} age={age} date={date} location={location} setbdyname={setbdyname} setbdymessage={setbdymessage} setAge={setAge} setDate={setDate} setLocation={setLocation} />
                            }
                        </div>
                    )}

                    {/* ── Floating Templates button (mobile only) ── */}
                    {isMobile && (
                        <div
                            onClick={() => setShowSheet(true)}
                            style={{ position: "fixed", bottom: 28, right: 20, zIndex: 50, fontFamily: "Caveat, cursive", fontSize: 16, padding: "10px 18px", borderRadius: 30, background: "#fff8e8", border: "1.5px dashed #c8a040", color: "#7a5a10", cursor: "pointer", boxShadow: "2px 3px 0 #d4c0a0" }}
                        >
                            🎨 Templates ▲
                        </div>
                    )}
                </div>
            </div>

            {/* ── Bottom Sheet (mobile only) ── */}
            {isMobile && showSheet && (
                <>
                    {/* Dim overlay */}
                    <div onClick={() => setShowSheet(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 60 }} />

                    {/* Sheet */}
                    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 70, background: "#fdf8f0", borderRadius: "20px 20px 0 0", borderTop: "2px dashed #c8a87a", padding: "16px 16px 32px", maxHeight: "70vh", overflowY: "auto" }}>

                        {/* Sheet header */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                            <p style={{ fontFamily: "Caveat, cursive", fontSize: 20, color: "#5a3e28", margin: 0 }}>✦ Pick a Template</p>
                            <div onClick={() => setShowSheet(false)} style={{ fontFamily: "Caveat, cursive", fontSize: 18, color: "#a08060", cursor: "pointer", padding: "2px 10px", border: "1px dashed #d4c0a0", borderRadius: 20 }}>✕</div>
                        </div>

                        {/* 2 column grid */}
                        {/* Single template with prev/next */}
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>

                            {/* Prev arrow */}
                            <div
                                onClick={() => setSelectedIndex(i => Math.max(0, i - 1))}
                                style={{ fontSize: 24, color: selectedIndex === 0 ? "#d4c0a0" : "#7a5a30", cursor: "pointer", padding: "0 8px", userSelect: "none" }}
                            >←</div>

                            {/* Single template */}
                            <div style={{ flex: 1 }}>
                                {(() => {
                                    const i = filteredTemplates[selectedIndex]
                                    if (!i) return null
                                    return (
                                        <div
                                            onClick={() => { setCurrentTemplate(i); setShowSheet(false) }}
                                            style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer", border: currentTemplate.id === i.id ? "2px dashed #c8a040" : "2px dashed #d4c0a0", background: "#fff" }}
                                        >
                                            <div style={{ pointerEvents: "none" }}>
                                                {i.occasion === 'eid'
                                                    ? <i.component name={recipientName} message={message} font={font} />
                                                    : <i.component name={bdyname} message={bdymessage} date={date} location={location} age={age} />
                                                }
                                            </div>
                                            <div style={{ padding: "8px 12px", fontFamily: "Caveat, cursive", fontSize: 15, color: currentTemplate.id === i.id ? "#8a6010" : "#a08060", background: currentTemplate.id === i.id ? "#fffdf0" : "#fdf8f0", textAlign: "center" }}>{i.name}</div>
                                        </div>
                                    )
                                })()}
                            </div>

                            {/* Next arrow */}
                            <div
                                onClick={() => setSelectedIndex(i => Math.min(filteredTemplates.length - 1, i + 1))}
                                style={{ fontSize: 24, color: selectedIndex === filteredTemplates.length - 1 ? "#d4c0a0" : "#7a5a30", cursor: "pointer", padding: "0 8px", userSelect: "none" }}
                            >→</div>

                        </div>

                        {/* Dots indicator */}
                        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
                            {filteredTemplates.map((_, i) => (
                                <div key={i} onClick={() => setSelectedIndex(i)} style={{ width: 8, height: 8, borderRadius: "50%", background: i === selectedIndex ? "#c8a040" : "#d4c0a0", cursor: "pointer" }} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}