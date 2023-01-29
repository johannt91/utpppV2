import React from "react"

const currDate = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contact">
          <span>Contact Us</span>
          <address>
            Piano Pedagogy, Faculty of Music <br />
            Edward Johnson Building <br />
            80 Queen's Park
          </address>
        </div>
        <p className="footer-acknowledge">
          We wish to acknowledge this land on which the University of Toronto
          operates. For thousands of years it has been the traditional land of
          the Huron-Wendat, the Seneca, and the Mississaugas of the Credit.
          Today, this meeting place is still the home to many Indigenous people
          from across Turtle Island and we are grateful to have the opportunity
          to work on this land.
        </p>
      </div>

      <div className="footer-brand">
        <span>
          PIANO PEDAGOGY <br /> UNIVERSITY OF TORONTO
        </span>
        <small className="copyright">&#169;{currDate}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
