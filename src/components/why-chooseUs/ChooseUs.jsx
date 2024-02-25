import React from 'react'
import './ChooseUs.css'
import { FaWrench, FaTools, FaHammer, FaHandshake } from "react-icons/fa";

function ChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us-section">
        <div className="container">
            <div className="why-choose-us-content">
                <h2>Warum uns wählen?</h2>
                <div className="why-choose-us-cards">
                    <div className="why-choose-us-card">
                        <FaWrench className="icon" />
                        <h3>Expertise und Erfahrung</h3>
                        <p>Mit jahrelanger Branchenerfahrung bringt unser Team
                            unvergleichliche Expertise in jedes Kanalproblem ein, und sorgt für zuverlässige 
                            Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind.</p>
                    </div>
                    <div className="why-choose-us-card">
                        <FaTools className="icon" />
                        <h3>Innovativste Technologie</h3>
                        <p>Durch die Nutzung der neuesten Fortschritte in der Kanalinspektion und Reparaturtechnologie setzen wir 
                            innovative Lösungen ein, um selbst die komplexesten Kanalprobleme genau zu diagnostizieren und effizient zu lösen.</p>
                    </div>
                    <div className="why-choose-us-card">
                        <FaHammer className="icon" />
                        <h3>Prompter und zuverlässiger Service</h3>
                        <p>Bei MB Kanaltechnik verstehen wir die Dringlichkeit von Kanalproblemen. Deshalb sind wir darauf bedacht, prompten und 
                            zuverlässigen Service zu bieten und effektive Lösungen mit minimaler Unterbrechung umzusetzen.</p>
                    </div>
                    <div className="why-choose-us-card">
                        <FaHandshake className="icon" />
                        <h3>Garantie für Kundenzufriedenheit</h3>
                        <p>Ihre Zufriedenheit ist für uns von höchster Bedeutung und steht absolut im Vordergrund. Deshalb stehen wir 
                            hinter unserer Arbeit mit einer umfassenden Kundenzufriedenheitsgarantie. Diese Garantie ist ein Zeichen 
                            unseres Engagements für Sie und Ihre Bedürfnisse.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ChooseUs
