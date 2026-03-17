const Eid2 = ({ name, message, font }) => {
  return (
    <div style={{
      width: "100%",
      aspectRatio: "3/4",
      background: "linear-gradient(160deg, #0d1f2d 0%, #1a3a4a 60%, #1e4d3a 100%)",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "36px 28px",
      boxSizing: "border-box",
      gap: 12,
    }}>

      {/* Stars */}
      {[[10,8],[25,5],[50,10],[75,6],[88,12],[15,20],[60,15],[82,22],[40,4],[90,18],[5,30],[70,28]].map(([l,t],i) => (
        <div key={i} style={{
          position:"absolute", left:`${l}%`, top:`${t}%`,
          width:i%3===0?3:2, height:i%3===0?3:2,
          borderRadius:"50%", background:"#fff",
          opacity:0.3+(i%4)*0.15,
        }}/>
      ))}

      {/* Crescent */}
      <div style={{ position:"absolute", top:28, right:32, width:40, height:40, borderRadius:"50%", boxShadow:"inset -11px -2px 0 0 #f0d080" }}/>

      {/* Mosque silhouette */}
      <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", opacity:0.4 }}>
        <div style={{ fontSize:10, color:"#f0c040" }}>☽</div>
        <div style={{ width:2, height:14, background:"#f0c040" }}/>
        <div style={{ width:70, height:55, borderRadius:"50% 50% 0 0", background:"#2a5a4a" }}/>
        <div style={{ width:52, height:60, background:"#1e4438" }}/>
        <div style={{ width:120, height:10, background:"#1e4438" }}/>
      </div>

      {/* Foliage */}
      <div style={{ position:"absolute", bottom:0, left:-8, fontSize:70, opacity:0.4, transform:"rotate(-15deg)", lineHeight:1 }}>🌿</div>
      <div style={{ position:"absolute", bottom:0, right:-8, fontSize:70, opacity:0.4, transform:"rotate(15deg) scaleX(-1)", lineHeight:1 }}>🌿</div>
      <div style={{ position:"absolute", top:8, left:8, fontSize:36, opacity:0.4, transform:"rotate(20deg)" }}>🍂</div>

      {/* Text */}
      <div style={{ fontSize:42, marginBottom:4 }}>🌙</div>

      <p style={{ color:"#f0c040", letterSpacing:6, fontSize:12, textTransform:"uppercase", margin:0, fontFamily:"sans-serif" }}>
        Eid Mubarak
      </p>

      <h1 style={{ fontFamily:font||"Great Vibes, cursive", color:"#fff", fontSize:52, margin:0, lineHeight:1.1, textShadow:"0 0 30px rgba(240,192,64,0.4)" }}>
        {name||"Ahmad"}
      </h1>

      <div style={{ width:50, height:1.5, background:"linear-gradient(90deg,transparent,#f0c040,transparent)" }}/>

      <div style={{ position:"relative", padding:"12px 18px", border:"1px solid rgba(240,192,64,0.3)", borderRadius:12, background:"rgba(240,192,64,0.05)", maxWidth:"85%", textAlign:"center" }}>
        <span style={{ position:"absolute", top:5, left:8, color:"#f0c040", fontSize:16, opacity:0.5 }}>❝</span>
        <span style={{ position:"absolute", bottom:5, right:8, color:"#f0c040", fontSize:16, opacity:0.5 }}>❞</span>
        <p style={{ fontFamily:font||"Great Vibes, cursive", color:"rgba(255,255,255,0.85)", fontSize:14, lineHeight:1.7, margin:0 }}>
          {message||"May this Eid bring you joy, peace, and endless blessings"}
        </p>
      </div>

    </div>
  );
};

export default Eid2;