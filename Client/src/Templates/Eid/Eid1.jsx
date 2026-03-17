const Eid1 = ({ name, message, font }) => {
  const buntingColors = ["#e84393","#f0c040","#2ab8a0","#e84393","#9b59b6","#f0c040","#e84393","#2ab8a0","#f0c040","#9b59b6","#e84393","#2ab8a0"];

  const drops = [
    { left:"18%", ropeH:55, type:"lantern", color:"#2a7ab8" },
    { left:"36%", ropeH:38, type:"geo",     color:"#e84393" },
    { left:"52%", ropeH:30, type:"moon",    color:"#f0c040" },
    { left:"65%", ropeH:44, type:"geo",     color:"#2ab8a0" },
    { left:"80%", ropeH:32, type:"star",    color:"#9b59b6" },
  ];

  const glitters = [
    [8,55],[20,62],[35,58],[50,70],[65,60],[80,65],[92,58],
    [12,75],[28,80],[45,72],[60,78],[75,74],[88,80],
    [5,85],[22,88],[40,84],[58,88],[72,83],[90,87],
  ];

  return (
    <div style={{
      width: "100%",
      aspectRatio: "3/4",
      background: "#f5f5f2",
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
        @keyframes glitter {
          0%,100%{opacity:0.1;transform:scale(0.7);}
          50%{opacity:1;transform:scale(1.3);}
        }
      `}</style>

      {/* Glitter dots */}
      {glitters.map(([l,t],i) => (
        <div key={i} style={{
          position:"absolute", left:`${l}%`, top:`${t}%`,
          width:i%4===0?5:3, height:i%4===0?5:3,
          borderRadius:"50%",
          background:["#f0c040","#e84393","#2ab8a0","#9b59b6"][i%4],
          animation:`glitter ${1.2+(i%4)*0.3}s ease-in-out ${i*0.15}s infinite`,
          boxShadow:`0 0 6px ${["#f0c040","#e84393","#2ab8a0","#9b59b6"][i%4]}`,
        }}/>
      ))}

      {/* Bunting rope */}
      <div style={{ position:"absolute", top:20, left:"-2%", right:"-2%", height:1.5, background:"rgba(80,60,40,0.2)" }}/>

      {/* Bunting flags */}
      {buntingColors.map((color,i) => (
        <div key={i} style={{
          position:"absolute",
          left:`${(i/(buntingColors.length-1))*96+2}%`,
          top:20,
          width:0, height:0,
          borderLeft:"9px solid transparent",
          borderRight:"9px solid transparent",
          borderTop:`15px solid ${color}`,
          opacity:0.9,
        }}/>
      ))}

      {/* Hanging drops */}
      {drops.map((d,i) => (
        <div key={i} style={{ position:"absolute", top:20, left:d.left, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <div style={{ width:1, height:d.ropeH, background:"rgba(80,60,40,0.2)" }}/>
          {d.type==="lantern" && (
            <>
              <div style={{ width:16, height:6, background:d.color, borderRadius:"3px 3px 0 0", opacity:0.85 }}/>
              <div style={{ width:12, height:22, border:`2px solid ${d.color}`, borderRadius:4, background:`${d.color}18`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ width:4, height:9, background:`${d.color}66`, borderRadius:2 }}/>
              </div>
              <div style={{ width:7, height:4, background:d.color, borderRadius:"0 0 3px 3px", opacity:0.85 }}/>
            </>
          )}
          {d.type==="geo" && <div style={{ width:20, height:20, background:d.color, clipPath:"polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)", opacity:0.88 }}/>}
          {d.type==="moon" && <div style={{ width:20, height:20, borderRadius:"50%", boxShadow:`inset -5px -1px 0 0 ${d.color}` }}/>}
          {d.type==="star" && <div style={{ color:d.color, fontSize:20, lineHeight:1 }}>★</div>}
        </div>
      ))}

      {/* Text content */}
      <div style={{ marginTop:90, display:"flex", flexDirection:"column", alignItems:"center", gap:6, width:"100%" }}>

        <p style={{ color:"#e84393", letterSpacing:5, fontSize:17, textTransform:"uppercase", margin:0, fontFamily:"sans-serif", fontWeight:700 }}>
          Eid Mubarak
        </p>

        <h1 style={{ fontFamily:font||"Great Vibes, cursive", color:"#2a2a2a", fontSize:52, margin:0, lineHeight:1.05 }}>
          {name}
        </h1>

        <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,transparent,#e84393,transparent)", marginBottom:4 }}/>

        {/* Letter box */}
        <div style={{
          width:"100%",
          borderRadius:8,
          padding:"12px 14px 12px 18px",
          textAlign:"left",
          background:"#fffdf9",
          boxSizing:"border-box",
          borderLeft:"4px solid #e84393",
          boxShadow:"0 2px 12px rgba(0,0,0,0.07)",
        }}>
          <p style={{ fontFamily:"Courier New, monospace", fontSize:13, color:"#2a2a2a", margin:"0 0 8px 0" }}>
            Dear <span style={{ fontFamily:font, fontSize:19, color:"#e84393" }}>{name||"Ahmad"}</span>,
          </p>
          <p style={{ fontFamily:font || "Courier New, monospace", fontSize:14, color:"#3a2a2a", margin:"0 0 12px 0", lineHeight:1.75 }}>
            {message}
          </p>
          <div style={{ textAlign:"right" }}>
            <p style={{ fontFamily:"Courier New, monospace", fontSize:11, color:"#555", margin:"0 0 1px 0" }}>Sincerely,</p>
            <p style={{ fontFamily:font, fontSize:18, color:"#e84393", margin:0 }}>With love 🌸</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Eid1;