const Eid4 = ({ name, message, font }) => {
  const sparkles = Array.from({ length: 28 }, (_, i) => ({
    l: (i * 17) % 95,
    t: 10 + ((i * 29) % 78),
    d: 1.2 + (i % 5) * 0.35,
    s: i % 7 === 0 ? 5 : 3,
    c: ["#ffd36a", "#b7f0ff", "#f4c8ff", "#ffe9b3"][i % 4],
    ch: i % 9 === 0 ? "✦" : i % 13 === 0 ? "★" : "",
  }));

  const dots = Array.from({ length: 36 }, (_, i) => ({
    l: (i * 23 + 11) % 98,
    t: 8 + ((i * 19 + 7) % 86),
    d: 1.1 + (i % 6) * 0.25,
    s: i % 8 === 0 ? 4 : 2,
    c: ["rgba(255,211,106,.55)", "rgba(183,240,255,.55)", "rgba(244,200,255,.5)", "rgba(255,233,179,.55)"][i % 4],
  }));

  return (
    <div style={{
      width: "100%",
      aspectRatio: "3/4",
      background: "linear-gradient(180deg,#fff1f7 0%,#f2fbff 45%,#fff6e9 100%)",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
      padding: "0 24px 20px",
      textAlign: "center",
    }}>
      <style>{`
        @keyframes twinkle{0%,100%{opacity:.15;transform:scale(.8)}55%{opacity:1;transform:scale(1.35)}}
        @keyframes blink{0%,100%{opacity:.08;transform:scale(.7)}50%{opacity:.7;transform:scale(1.2)}}
        @keyframes sweep{0%{transform:translateX(-70%) rotate(10deg);opacity:0}20%{opacity:.25}50%{opacity:.18}80%{opacity:.25}100%{transform:translateX(70%) rotate(10deg);opacity:0}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
      `}</style>

      {/* glitter sweep */}
      <div style={{ position: "absolute", inset: -80, left: "-70%", width: "240%", height: "55%", transform: "rotate(10deg)", background: "linear-gradient(90deg,transparent,rgba(255,211,106,.20),rgba(255,255,255,.28),rgba(183,240,255,.18),transparent)", animation: "sweep 7s ease-in-out infinite", mixBlendMode: "screen", pointerEvents: "none" }} />

      {/* tiny glitter dots */}
      {dots.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${p.l}%`,
          top: `${p.t}%`,
          width: p.s,
          height: p.s,
          borderRadius: "50%",
          background: p.c,
          boxShadow: `0 0 10px ${p.c}`,
          animation: `blink ${p.d}s ease-in-out ${i * 0.07}s infinite`,
          pointerEvents: "none",
          zIndex: 0,
          mixBlendMode: "screen",
        }} />
      ))}

      {/* doodle corners */}
      <div style={{ position: "absolute", top: 10, left: 14, fontSize: 26, opacity: 0.95, transform: "rotate(-4deg)" }}>〰️ ✨</div>
      <div style={{ position: "absolute", top: 18, right: 16, fontSize: 20, opacity: 0.95, transform: "rotate(5deg)" }}>🌸 ✦ 〰️</div>
      <div style={{ position: "absolute", bottom: 16, left: 16, fontSize: 20, opacity: 0.95, transform: "rotate(-6deg)" }}>〰️ ✦ 🌸</div>
      <div style={{ position: "absolute", bottom: 12, right: 16, fontSize: 22, opacity: 0.95, transform: "rotate(4deg)" }}>✨ 〰️ ✦</div>

      {/* hanging icon (theme like your ref) */}
      <div style={{ position: "absolute", top: 34, left: 30, display: "flex", gap: 10, alignItems: "flex-start", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: 0.95 }}>
          <div style={{ width: 2, height: 42, background: "rgba(0,0,0,0.25)", borderRadius: 2 }} />
          <div style={{ fontSize: 46, lineHeight: 1 }}>🌙</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: 0.95 }}>
          <div style={{ width: 2, height: 28, background: "rgba(0,0,0,0.25)", borderRadius: 2 }} />
          <div style={{ fontSize: 28, lineHeight: 1, color: "#f0c040" }}>★</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: 0.95, transform: "translateY(2px)" }}>
          <svg width="42" height="76" viewBox="0 0 44 78" style={{ display: "block" }} aria-hidden="true">
            {/* dotted string + ring */}
            <line x1="22" y1="0" x2="22" y2="16" stroke="rgba(0,0,0,0.35)" strokeWidth="2" strokeLinecap="round" strokeDasharray="1.5 4" />
            <circle cx="22" cy="18" r="4.6" fill="#fff" stroke="#2b4b4a" strokeWidth="1.8" />

            {/* top loop */}
            <path d="M20.5 24c0-3 3-5 1.5-8c2.8 2.6 1.4 6.4 1.4 8" fill="none" stroke="#2b4b4a" strokeWidth="1.8" strokeLinecap="round" />

            {/* lantern body */}
            <path
              d="M14 28 L22 24 L30 28 L32 62 L22 70 L12 62 Z"
              fill="#9ad4c8"
              stroke="#2b4b4a"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />

            {/* top band */}
            <path d="M14.5 28 L22 24 L29.5 28 L27.8 30.2 L22 27.5 L16.2 30.2 Z" fill="#7fbfb1" stroke="#2b4b4a" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M16 30.8 L22 28.2 L28 30.8" fill="none" stroke="#2b4b4a" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1.6 3.2" opacity="0.8" />

            {/* side panels */}
            <path d="M16.3 35.5 L20.6 33.2 L20.2 61.2 L15 58.4 Z" fill="#b5e6db" stroke="#2b4b4a" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M27.7 35.5 L23.4 33.2 L23.8 61.2 L29 58.4 Z" fill="#b5e6db" stroke="#2b4b4a" strokeWidth="1.6" strokeLinejoin="round" />

            {/* front panel */}
            <path d="M19.8 38.2 L22 37 L24.2 38.2 L24 57.8 L22 60 L20 57.8 Z" fill="#c8f2e8" stroke="#2b4b4a" strokeWidth="1.6" strokeLinejoin="round" />

            {/* bottom studs */}
            {Array.from({ length: 7 }).map((_, i) => (
              <circle key={i} cx={14 + i * 3.0} cy="62.8" r="1" fill="#2b4b4a" opacity="0.55" />
            ))}
          </svg>
        </div>
      </div>

      {/* content (same safe sizing rules as Eid1) */}
      <div style={{ marginTop: 90, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: "100%", minHeight: 0, zIndex: 3 }}>
        <p style={{ color: "#2a2a2a", letterSpacing: 5, fontSize: 17, textTransform: "uppercase", margin: 0, fontFamily: "sans-serif", fontWeight: 700, opacity: 0.85 }}>
          Eid Mubarak
        </p>

        <h1 style={{ fontFamily: font || "Great Vibes, cursive", color: "#2a2a2a", fontSize: 52, margin: 0, lineHeight: 1.05 }}>
          {name || "Ahmad"}
        </h1>

        <div style={{ width: 50, height: 1.5, background: "linear-gradient(90deg,transparent,#f0c040,transparent)", marginBottom: 4 }} />

        <div style={{
          width: "100%",
          maxWidth: 360,
          borderRadius: 10,
          padding: "10px 12px 10px 14px",
          textAlign: "left",
          background: "linear-gradient(180deg,rgba(255,255,255,.92),rgba(255,255,255,.78))",
          boxSizing: "border-box",
          border: "1px solid rgba(240,192,64,.35)",
          borderLeft: "4px solid rgba(240,192,64,.95)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
          animation: "float 5s ease-in-out infinite",
          overflow: "hidden",
        }}>
          <div style={{ height: 3, borderRadius: 10, background: "linear-gradient(90deg,transparent,rgba(255,211,106,.95),rgba(183,240,255,.75),rgba(244,200,255,.7),rgba(255,211,106,.95),transparent)", opacity: 0.8, margin: "0 0 10px 0" }} />
          <p style={{ fontFamily: "Courier New, monospace", fontSize: 13, color: "#2a2a2a", margin: "0 0 8px 0" }}>
            Dear <span style={{ fontFamily: font || "Great Vibes, cursive", fontSize: 19, color: "#d86a7b" }}>{name || "Ahmad"}</span>,
          </p>
          <p style={{
            fontFamily: "Courier New, monospace",
            fontSize: 14,
            color: "#3a2a2a",
            margin: "0 0 12px 0",
            lineHeight: 1.75,
            maxHeight: 112,
            overflow: "hidden",
          }}>
            {message || "May this Eid bring you joy, peace, and endless blessings"}
          </p>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "Courier New, monospace", fontSize: 11, color: "#555", margin: "0 0 1px 0" }}>Sincerely,</p>
            <p style={{ fontFamily: font || "Great Vibes, cursive", fontSize: 18, color: "#d86a7b", margin: 0 }}>With love ✨</p>
          </div>
        </div>
      </div>

      {/* glitter particles */}
      {sparkles.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${p.l}%`,
          top: `${p.t}%`,
          width: p.ch ? "auto" : p.s,
          height: p.ch ? "auto" : p.s,
          borderRadius: p.ch ? 0 : "50%",
          background: p.ch ? "transparent" : p.c,
          color: p.c,
          fontSize: p.ch ? 14 : undefined,
          lineHeight: 1,
          opacity: 0.65,
          boxShadow: `0 0 10px ${p.c}`,
          animation: `twinkle ${p.d}s ease-in-out ${i * 0.1}s infinite`,
          pointerEvents: "none",
          zIndex: 1,
          mixBlendMode: "screen",
        }}>{p.ch}</div>
      ))}
    </div>
  );
};

export default Eid4;
