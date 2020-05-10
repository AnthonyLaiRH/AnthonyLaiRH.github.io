import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Typical from "react-typical"
import { Container, Row, Col } from "react-bootstrap"

import headerStyles from "./header.module.css"
import resume from "../../assets/pdf/resume-anthony-lai.pdf"

const Header = ({ siteTitle }) => (
  <Container fluid className={headerStyles.container}>
    <Row className={headerStyles.row}>
      <Col className={headerStyles.title}>
        <Typical wrapper="b" steps={[siteTitle + " "]} />
      </Col>

      <Col className={headerStyles.col}>
        <Link
          className={headerStyles.link}
          to="/"
         
        >
          Home
        </Link>
        
        <Link
          className={headerStyles.link}
          to="/blog/"
          activeStyle={{ color: "#407aff" }}
        >
          Blog
        </Link>
       
        <Link
          className={headerStyles.link}
          to="/notes/"
          activeStyle={{ color: "#407aff" }}
        >
          Course Notes
        </Link>
        
        <a className={headerStyles.link} 
          href={ resume } target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
        </a>
        
        <Link
          className={headerStyles.link}
          to="/contact/"
          activeStyle={{ color: "#407aff" }}
        >
          Contact
        </Link>
      </Col>

      
    </Row>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
