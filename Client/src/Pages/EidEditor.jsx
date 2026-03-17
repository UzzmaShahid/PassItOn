import fonts from "../Constants/fonts";

function EidEditor({ name, message, font, setRecipientName, setmessage, setfont }) {
    return (
        <form onSubmit={(e) => e.preventDefault()} style={{ padding: "16px 12px", display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Name input */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontFamily: "Caveat, cursive", fontSize: 16, color: "#7a5a30", letterSpacing: 1 }}>
                    ✦ Recipient Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setRecipientName(e.target.value)}
                    style={{
                        fontFamily: "Georgia, serif",
                        fontSize: 14,
                        padding: "8px 12px",
                        border: "1.5px dashed #c8a87a",
                        borderRadius: 6,
                        background: "#fffdf5",
                        color: "#3a2a10",
                        outline: "none",
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                />
            </div>

            {/* Message input */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontFamily: "Caveat, cursive", fontSize: 16, color: "#7a5a30", letterSpacing: 1 }}>
                    ✦ Message
                </label>
                <textarea
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    rows={4}
                    style={{
                        fontFamily: "Georgia, serif",
                        fontSize: 13,
                        padding: "8px 12px",
                        border: "1.5px dashed #c8a87a",
                        borderRadius: 6,
                        background: "#fffdf5",
                        color: "#3a2a10",
                        outline: "none",
                        resize: "none",
                        lineHeight: 1.6,
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                />
            </div>

            {/* Font picker */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontFamily: "Caveat, cursive", fontSize: 16, color: "#7a5a30", letterSpacing: 1 }}>
                    ✦ Font Style
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {fonts.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setfont(f.value)}
                            style={{
                                fontFamily: f.value,
                                fontSize: 15,
                                padding: "8px 12px",
                                borderRadius: 6,
                                cursor: "pointer",
                                border: font === f.value ? "1.5px solid #c8a040" : "1.5px dashed #d4c0a0",
                                background: font === f.value ? "#fffdf0" : "#fdf8f0",
                                color: font === f.value ? "#7a5a10" : "#a08060",
                                textAlign: "left",
                                transition: "all 0.2s",
                            }}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

        </form>
    )
}

export default EidEditor;