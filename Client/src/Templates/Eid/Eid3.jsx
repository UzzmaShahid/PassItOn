const Eid3 = ({ name, message, font }) => {
  const buntingColors = ["#e8603a","#2a6b5a","#c8a040","#e8603a","#2a6b5a","#c8a040","#e8603a","#2a6b5a","#c8a040","#e8603a","#2a6b5a","#c8a040"];

  const lanterns = [
    { left:"12%", ropeH:55, scale:1.1 },
    { left:"24%", ropeH:80, scale:1.4 },
    { left:"68%", ropeH:60, scale:1.2 },
    { left:"82%", ropeH:85, scale:1.5 },
  ];

  const glitters = [
    [18,22],[35,15],[52,28],[74,18],[88,25],
    [8,42],[45,38],[80,40],[25,55],[65,50],
    [12,68],[55,72],[85,65],[30,80],[70,78],
    [40,12],[60,8],[20,35],[78,32],[50,60],
  ];

  return (
    <div style={{
      width:"100%",
      aspectRatio:"3/4",
      background:"linear-gradient(160deg, #fdf6e3 0%, #fef9f0 40%, #fdf0e8 100%)",
      borderRadius:20,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      position:"relative",
      overflow:"hidden",
      boxSizing:"border-box",
      padding:"0 24px 24px",
    }}>

      <style>{`
        @keyframes shimmer {
          0%,100% { opacity:0.2; transform:scale(1); }
          50% { opacity:1; transform:scale(1.4); }
        }
        @keyframes float {
          0%,100% { transform:translateY(0px); }
          50% { transform:translateY(-6px); }
        }
      `}</style>

      {/* Glitter dots */}
      {glitters.map(([l,t],i) => (
        <div key={i} style={{
          position:"absolute", left:`${l}%`, top:`${t}%`,
          width: i%4===0?5:i%3===0?4:3,
          height: i%4===0?5:i%3===0?4:3,
          borderRadius:"50%",
          background: i%3===0?"#f0c040":i%3===1?"#ffd700":"#ffe066",
          animation:`shimmer ${1.5+(i%4)*0.4}s ease-in-out ${i*0.2}s infinite`,
          boxShadow:`0 0 ${i%3===0?8:5}px ${i%3===0?"#f0c040":"#ffd700"}`,
        }}/>
      ))}

      {/* Bunting ropes */}
      <div style={{ position:"absolute", top:32, left:"0%", right:"50%", height:1.5, background:"rgba(100,70,30,0.3)", transform:"rotate(3deg)", transformOrigin:"left center" }}/>
      <div style={{ position:"absolute", top:32, left:"50%", right:"0%", height:1.5, background:"rgba(100,70,30,0.3)", transform:"rotate(-3deg)", transformOrigin:"right center" }}/>

      {/* Bunting flags */}
      {buntingColors.map((color, i) => {
        const x = (i/(buntingColors.length-1))*90+5;
        const sag = Math.sin((i/(buntingColors.length-1))*Math.PI)*18;
        return (
          <div key={i} style={{
            position:"absolute", left:`${x}%`, top:`${18+sag}px`,
            width:0, height:0,
            borderLeft:"8px solid transparent", borderRight:"8px solid transparent",
            borderTop:`14px solid ${color}`, opacity:0.85,
          }}/>
        );
      })}

      {/* Hanging lanterns */}
      {lanterns.map((l,i) => (
        <div key={i} style={{ position:"absolute", top:18, left:l.left, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <div style={{ width:1.5, height:l.ropeH, background:"rgba(140,100,30,0.35)" }}/>
          <div style={{ width:18*l.scale, height:7*l.scale, background:"linear-gradient(90deg,#c8a040,#f0d060,#c8a040)", borderRadius:"3px 3px 0 0" }}/>
          <div style={{
            width:15*l.scale, height:28*l.scale,
            background:"linear-gradient(160deg,#e8b84080,#f5d06080,#e8b84080)",
            border:"2px solid #c8a040", borderRadius:5,
            boxShadow:`0 0 ${10*l.scale}px rgba(240,192,64,0.6), inset 0 0 ${8*l.scale}px rgba(255,220,80,0.4)`,
            display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden",
          }}>
            <div style={{ width:"50%", height:"60%", background:"rgba(255,230,100,0.6)", borderRadius:3 }}/>
            <div style={{ position:"absolute", top:0, bottom:0, left:"33%", width:1, background:"rgba(200,160,64,0.4)" }}/>
            <div style={{ position:"absolute", top:0, bottom:0, left:"66%", width:1, background:"rgba(200,160,64,0.4)" }}/>
          </div>
          <div style={{ width:9*l.scale, height:5*l.scale, background:"linear-gradient(90deg,#c8a040,#f0d060,#c8a040)", borderRadius:"0 0 4px 4px" }}/>
          <div style={{ width:2, height:6*l.scale, background:"#c8a040", opacity:0.7 }}/>
          <div style={{ color:"#2a4a6a", fontSize:10*l.scale, opacity:0.8, marginTop:2 }}>★</div>
        </div>
      ))}

      {/* Stars on bunting */}
      {[[20,10],[45,6],[75,10]].map(([l,t],i) => (
        <div key={i} style={{ position:"absolute", left:`${l}%`, top:`${t}%`, color:"#2a4a6a", fontSize:14, opacity:0.7 }}>★</div>
      ))}

      {/* Eid Mubarak title */}
      <p style={{
        position:"relative", zIndex:5,
        color:"#b8860b", letterSpacing:6, fontSize:17,
        textTransform:"uppercase", margin:"190px 0 0 0",
        fontFamily:"sans-serif", fontWeight:700,
      }}>
        Eid Mubarak
      </p>

      {/* Letter card */}
      <div style={{
        position:"relative", zIndex:5,
        width:"92%",
        background:"rgba(255,255,255,0.92)",
        borderRadius:12,
        padding:"16px 18px",
        border:"1px solid rgba(200,160,64,0.3)",
        boxShadow:"0 8px 32px rgba(200,160,64,0.15)",
        marginTop:10,
        animation:"float 4s ease-in-out infinite",
      }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,transparent,#f0c040,#ffd700,#f0c040,transparent)", borderRadius:"12px 12px 0 0" }}/>

        <p style={{ fontFamily:"Courier New, monospace", fontSize:14, color:"#5a3a1a", margin:"0 0 10px 0" }}>
          Dear <span style={{ fontFamily:font||"Great Vibes, cursive", fontSize:21, color:"#8a4a1a" }}>{name||"Ahmad"}</span>,
        </p>

        <p style={{ fontFamily:font || "Courier New, monospace", fontSize:14, color:"#6a4a2a", margin:"0 0 14px 0", lineHeight:1.75 }}>
          {message||"May this Eid bring you joy, peace, and endless blessings"}
        </p>

        <div style={{ textAlign:"right" }}>
          <p style={{ fontFamily:"Courier New, monospace", fontSize:12, color:"#8a6a3a", margin:"0 0 2px 0" }}>Sincerely,</p>
          <p style={{ fontFamily:font||"Great Vibes, cursive", fontSize:19, color:"#8a4a1a", margin:0 }}>With love 🌙</p>
        </div>

        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:3, background:"linear-gradient(90deg,transparent,#f0c040,#ffd700,#f0c040,transparent)", borderRadius:"0 0 12px 12px" }}/>
      </div>

      {/* Bottom sparkle row */}
      <div style={{ display:"flex", gap:10, marginTop:12, zIndex:5 }}>
        {["✦","★","✦","★","✦"].map((s,i) => (
          <span key={i} style={{ color:"#f0c040", fontSize:i===2?16:11, opacity:0.7, animation:`shimmer ${1.8+i*0.3}s ease-in-out ${i*0.3}s infinite` }}>{s}</span>
        ))}
      </div>

    </div>
  );
};

export default Eid3;