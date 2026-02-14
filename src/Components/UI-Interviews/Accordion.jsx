import { useState } from 'react'

function Accordion({ item, activeAccordion, handleAccordionClick }) {
    const isActive = activeAccordion === item

    return (
        <div style={{ marginTop: '20px', background: 'pink' }}>
            <div
                onClick={() => handleAccordionClick(item)}
                style={{ cursor: 'pointer', padding: '10px' }}
            >
                Accordion Header {item}
            </div>

            {isActive && (
                <div
                    style={{
                        padding: '20px',
                        background: 'magenta'
                    }}
                >
                    Accordion content {item}
                </div>
            )}
        </div>
    )
}

export const AccordionContainer = () => {
    const [activeAccordion, setActiveAccordion] = useState(null)

    const handleAccordionClick = (accordion) => {
        setActiveAccordion(prev =>
            prev === accordion ? null : accordion
        )
    }

    return (
        <>
            {Array.from({ length: 10 }, (_, i) => (
                <Accordion
                    key={i}
                    item={i}
                    activeAccordion={activeAccordion}
                    handleAccordionClick={handleAccordionClick}
                />
            ))}
        </>
    )
}
