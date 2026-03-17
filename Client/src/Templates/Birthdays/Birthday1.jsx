const Birthday1 = ({ name, message, date, location, age }) => {
  const today = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });

  return (
    <div style={{
      width:"100%",
      aspectRatio:"3/4",
      background:"#f5f2ed",
      borderRadius:20,
      display:"flex",
      flexDirection:"column",
      overflow:"hidden",
      boxSizing:"border-box",
      padding:"18px 18px 14px",
      fontFamily:"Georgia, serif",
      filter:"grayscale(100%)",
    }}>

      {/* Masthead */}
      <div style={{ textAlign:"center", borderBottom:"3px double #111", paddingBottom:7, marginBottom:7 }}>
        <p style={{ fontFamily:"'UnifrakturMaguntia', 'Palatino Linotype', serif", fontSize:22, fontWeight:900, margin:0, color:"#111", letterSpacing:1 }}>
          The Birthday Post
        </p>
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:9.5, color:"#333", marginTop:4, borderTop:"1px solid #999", paddingTop:3 }}>
          <span>{location || "Mumbai, India"}</span>
<span>{date ? new Date(date).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' }) : today}</span>
        </div>
      </div>

      {/* Headline */}
      <div style={{ textAlign:"center", borderBottom:"1.5px solid #111", paddingBottom:7, marginBottom:5 }}>
        <h1 style={{ fontFamily:"Georgia, serif", fontSize:22, fontWeight:900, margin:0, letterSpacing:3, textTransform:"uppercase", color:"#111" }}>
          Happy Birthday
        </h1>
        <p style={{ fontFamily:"Great Vibes, cursive", fontSize:20, margin:"2px 0 0", color:"#111", fontStyle:"italic" }}>
          {name || "To my best friend"}
        </p>
      </div>

      {/* Sub bar */}
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:8.5, color:"#555", borderBottom:"1px solid #bbb", paddingBottom:3, marginBottom:7 }}>
        <span>VOL. 1 • ISSUE 1</span>
        <span style={{ fontStyle:"italic" }}>Because you deserve the world ♥</span>
      </div>

      {/* Body columns */}
      <div style={{ display:"flex", gap:10, flex:1, minHeight:0 }}>

        {/* Left column */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", gap:7 }}>

          {/* Photo box */}
          <div style={{ width:"100%", aspectRatio:"4/5", borderRadius:3, border:"1px solid #bbb", overflow:"hidden", background:"#ddd" }}>
            <img
              src="https://i.pinimg.com/736x/0a/2c/e2/0a2ce2b786f56ae6cf856511f6f854d2.jpg"
              style={{ width:"100%", height:"100%", objectFit:"cover" }}
            />
          </div>

          <p style={{ fontSize:8, color:"#444", lineHeight:1.5, margin:0, fontStyle:"italic", borderTop:"1px solid #ccc", paddingTop:3 }}>
            On this day my favorite person was born
          </p>

          <p style={{ fontSize:8.5, color:"#333", lineHeight:1.65, margin:0, textAlign:"justify" }}>
            I'm so glad our paths crossed, and I know life wouldn't be the same without your laughter, support, and endless kindness.
          </p>

          <div style={{ marginTop:"auto", borderTop:"1px solid #bbb", paddingTop:5 }}>
            <p style={{ fontSize:8, color:"#444", margin:0, fontFamily:"Georgia, serif", fontStyle:"italic" }}>Love you forever! ♥</p>
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex:1.4, display:"flex", flexDirection:"column", gap:7 }}>

          <p style={{ fontSize:9.5, fontWeight:700, margin:0, color:"#111", borderBottom:"1px solid #111", paddingBottom:3, textTransform:"uppercase", letterSpacing:0.5 }}>
            Your {age || "25th"} Birthday ♥
          </p>

          <p style={{ fontSize:9, color:"#222", lineHeight:1.7, margin:0, textAlign:"justify", flex:1 }}>
            {message || "I honestly don't know what I'd do without you. You are one of the most amazing, kind-hearted, and genuine people I've ever known, and I'm beyond grateful to have you in my life."}
          </p>

          {/* Second photo */}
          <div style={{ width:"100%", aspectRatio:"4/3", borderRadius:3, border:"1px solid #bbb", overflow:"hidden", background:"#ddd" }}>
            <img
              src="https://i.pinimg.com/1200x/fe/3a/6b/fe3a6bf87fdcded63ddb817194754612.jpg"
              style={{ width:"100%", height:"100%", objectFit:"cover" }}
            />
          </div>

        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop:"3px double #111", marginTop:8, paddingTop:5, textAlign:"center" }}>
        <p style={{ fontSize:10, letterSpacing:5, textTransform:"uppercase", margin:0, color:"#111", fontWeight:700 }}>
          Happy Birthday
        </p>
      </div>

    </div>
  );
};

export default Birthday1;