const Birthday2 = ({ name, message, age, date, location }) => {
  const monthsFull = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const now = new Date();

let month = now.getMonth();
let year = now.getFullYear();

if (date) {
  const parsed = new Date(date);
  if (!isNaN(parsed)) {
    month = parsed.getMonth();
    year = parsed.getFullYear();
  }
}

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const userDay = date ? new Date(date).getDate() : null;
const displayDate = date ? new Date(date).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' }) : "Today"

  const calDays = [];
  for(let i = 0; i < firstDay; i++) calDays.push(null);
  for(let i = 1; i <= daysInMonth; i++) calDays.push(i);

  return (
    <div style={{
      width:"100%",
      aspectRatio:"3/4",
      background:"#3a0a0a",
      backgroundImage:"radial-gradient(ellipse at 30% 20%, #5a1a1a 0%, #3a0a0a 60%)",
      borderRadius:20,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      overflow:"hidden",
      boxSizing:"border-box",
      padding:"20px 18px 18px",
      position:"relative",
      fontFamily:"Georgia, serif",
    }}>

      {/* Fabric texture */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(45deg,rgba(0,0,0,0.03) 0px,rgba(0,0,0,0.03) 1px,transparent 1px,transparent 8px)", pointerEvents:"none" }}/>

      {/* "Happy" top left */}
      <div style={{ position:"absolute", top:18, left:16, zIndex:5 }}>
        <p style={{ fontFamily:"Great Vibes, cursive", fontSize:34, color:"#d4a84b", margin:0, textShadow:"0 2px 8px rgba(0,0,0,0.5)", transform:"rotate(-8deg)" }}>
          Happy
        </p>
      </div>

      {/* "Birthday!!" top right */}
      <div style={{ position:"absolute", top:22, right:14, zIndex:5 }}>
        <p style={{ fontFamily:"Great Vibes, cursive", fontSize:30, color:"#d4a84b", margin:0, textShadow:"0 2px 8px rgba(0,0,0,0.5)", transform:"rotate(6deg)" }}>
          Birthday!!
        </p>
      </div>

      {/* Scattered hearts */}
      {[[8,8],[18,14],[85,8],[90,16],[50,6]].map(([l,t],i) => (
        <div key={i} style={{ position:"absolute", left:`${l}%`, top:`${t}%`, color:"#8b1a1a", fontSize:i===2?14:10, opacity:0.7 }}>♥</div>
      ))}

      {/* Center content */}
      <div style={{ display:"flex", gap:12, width:"100%", position:"relative", zIndex:3, alignItems:"flex-start" }}>

        {/* Left — handwritten note + flower */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", gap:10 }}>

          {/* Handwritten note */}
          <div style={{
            background:"#f5f0e0",
            borderRadius:3,
            padding:"10px 10px 12px",
            transform:"rotate(-3deg)",
            boxShadow:"2px 3px 8px rgba(0,0,0,0.5)",
            position:"relative",
          }}>
            {/* Pin */}
            <div style={{ position:"absolute", top:-7, left:"50%", transform:"translateX(-50%)", width:9, height:9, borderRadius:"50%", background:"#8b1a1a", boxShadow:"0 1px 3px rgba(0,0,0,0.5)" }}/>
            <p style={{ fontFamily:"Courier New, monospace", fontSize:8, color:"#5a3a2a", lineHeight:1.9, margin:0 }}>
              {location||"Karachi"} ♥<br/>
              {displayDate}<br/>
              <span style={{ fontFamily:"Great Vibes, cursive", fontSize:14 }}>{name||"dear one"}'s</span><br/>
              {age||"special"} birthday!<br/>
              <span style={{ color:"#8b1a1a" }}>♥ ♥ ♥</span>
            </p>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ position:"absolute", left:8, right:8, bottom:`${14+i*11}px`, height:0.5, background:"rgba(100,70,50,0.18)" }}/>
            ))}
          </div>

          {/* Flower image */}
          <div style={{
            transform:"rotate(-5deg)",
            borderRadius:6,
            overflow:"hidden",
            boxShadow:"3px 4px 12px rgba(0,0,0,0.6)",
            width:"100%",
            aspectRatio:"1/1",
          }}>
            <img
              src="https://i.pinimg.com/736x/7c/e6/f6/7ce6f62bf0cc3ba86a85633ca3e64a6a.jpg"
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
            />
          </div>

        </div>

        {/* Right — calendar + name */}
        <div style={{ flex:1.1, display:"flex", flexDirection:"column", gap:10 }}>

          {/* Calendar */}
          <div style={{
            background:"#fff",
            borderRadius:3,
            padding:"8px 7px 7px",
            boxShadow:"2px 3px 10px rgba(0,0,0,0.5)",
            transform:"rotate(2deg)",
          }}>
            <p style={{ fontFamily:"Great Vibes, cursive", fontSize:18, fontWeight:700, textAlign:"center", margin:"0 0 4px", color:"#111" }}>
              {monthsFull[month]}
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:1, marginBottom:2 }}>
              {["S","M","T","W","T","F","S"].map((d,i) => (
                <div key={i} style={{ textAlign:"center", fontSize:6, color:"#888", fontWeight:600 }}>{d}</div>
              ))}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:1 }}>
              {calDays.map((d,i) => (
                <div key={i} style={{
                  textAlign:"center", fontSize:7,
                  color: d===userDay?"#8b1a1a":"#333",
                  background: d===userDay?"transparent":"transparent",
                  border: d===userDay?"1.5px solid #8b1a1a":"none",
                  borderRadius: d===userDay?"50%":"0",
                  fontWeight: d===userDay?700:400,
                  padding:"1.5px 0",
                  aspectRatio:"1/1",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>{d||""}</div>
              ))}
            </div>
          </div>

          {/* Name tag */}
          <div style={{
            background:"#1a0808",
            border:"1px solid rgba(212,168,75,0.3)",
            borderRadius:4,
            padding:"8px 10px",
            transform:"rotate(-1deg)",
            boxShadow:"2px 3px 8px rgba(0,0,0,0.5)",
            textAlign:"center",
          }}>
            <p style={{ fontFamily:"Great Vibes, cursive", fontSize:20, color:"#d4a84b", margin:0 }}>
              {name||"Your Name"}
            </p>
            <p style={{ fontFamily:"Courier New, monospace", fontSize:7, color:"#a07050", margin:"3px 0 0" }}>
              {age||""} ♥
            </p>
          </div>

        </div>
      </div>

      {/* Message at bottom */}
      <div style={{ position:"relative", zIndex:3, marginTop:14, borderTop:"1px solid rgba(212,168,75,0.25)", paddingTop:8, width:"100%" }}>
        <p style={{ fontFamily:"Courier New, monospace", fontSize:8.5, color:"#d4c090", lineHeight:1.7, margin:0, textAlign:"center" }}>
          {message||"hope your special day brings u all that your heart desires! here's wishing u a day full of pleasant surprises"} ♥
        </p>
      </div>

    </div>
  );
};

export default Birthday2;