import { useParams } from "react-router-dom"
import { getCardById } from "../Api/CardApi"
import { useState, useEffect } from "react"
import templates from "../Templates"

const VITE_FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL

function CardPreview() {
    const [Card, setCard] = useState(null)
    const [component, setcomponent] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function fetchCard() {
            const result = await getCardById(id)

            if (result.success) {
                setCard(result.res)
                const template = templates.find(t => t.id === result.res.templateId)
                if (template) { setcomponent(() => template.component) }

            }
        }

        fetchCard()
    }, [id])

    if (!Card || !component) return (
        <div style={{ minHeight: "100vh", background: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "Caveat, cursive", fontSize: 24, color: "#a08060" }}>Loading...</p>
        </div>
    )

    const Component = component

    return (
        <div style={{ minHeight: "100vh", background: "#f5f0e8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 16px", boxSizing: "border-box" }}>
            {/* Card placed on white paper */}
            <div style={{ background: "#fff", padding: 10, borderRadius: 12, boxShadow: "4px 6px 0 #d4c0a0", width: "min(380px, 90vw)" }}>
                {Card.occasion === 'eid'
                    ? <Component name={Card.name} message={Card.message} font={Card.font} />
                    : <Component name={Card.name} message={Card.message} date={Card.date} location={Card.location} age={Card.age} />
                }
            </div>

            {/* Footer label */}
            <p style={{ fontFamily: "Caveat, cursive", fontSize: 16, color: "#a08060", marginTop: 20, letterSpacing: 2 }}>
                ✉ Pass It On 
            </p>
            <a href={VITE_FRONTEND_URL}
                style={{
                    fontFamily: "Caveat, cursive",
                    fontSize: 15,
                    color: "#7a5a30",
                    textDecoration: "none",
                    border: "1.5px dashed #c8a87a",
                    borderRadius: 6,
                    padding: "6px 18px",
                    background: "#fffdf5",
                    marginTop: 4,
                    display: "inline-block",
                }}
            >
                ✦ Create your own card →
            </a>
        </div>
    )
}

export default CardPreview