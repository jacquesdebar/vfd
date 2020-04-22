import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Popover from "@material-ui/core/Popover"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e6396c",
    height: "80px",
    width: "100%",
    borderBottom: "2.5px solid #014378",
    position: "fixed",

    zIndex: "999",
  },
  logo: {
    height: "55px",
    margin: "16px 50px 10px 5vw"
  },
  linkBox: {
    padding: "15px",
    paddingTop: "31px",
    paddingBottom: "28px",
    "&:hover": {
      backgroundColor: "#eee",
      color: "black",
      borderBottom: "2.5px solid #e6396c",
    },
    color: "white",
    height: "80px",
  },
  inputField: {
    marginRight: 12,
    marginLeft: 12,
    marginTop: 5,
    marginBottom: 10,
  },
}))

const Header = ({ siteTitle }) => {

  const classes = useStyles();
  
  return (
    <header>
      <Box
        className={classes.root}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <a href="/">
            <img
              className={classes.logo}
              src="https://lh3.googleusercontent.com/IkT_MWNrKmrtp3FKcagMz7Zd81PNqNSYc86Xwe_GGf-bBUa5y73bAx9hPjvljvMH4iKMloKJvHGgfIKC69eaucDu3skCuha75NqKmxWPXDlFBwhZsGDXsQHZWtluzgz9SRs5qeGW9ega77eab_rsu36tyrh9gyRKYUivmbuKb92fkDP0DbcSFHeCDfaBUb1vcaomoJ3Lwb6InG-UPCPQ1rMWSMMxi8eA7wFsTeI3JOPZAP5O3wiLJ5mC12d4aM7N0RV8AjHKOwBc2sFflAbuCPqeOhdIedC_02LqflOmJaqcMVLzFVA2UawlvVoz_U5W4fLYWOAnoOjY8mZRWHV478UW61y386EbPJsHc2vuLdWwYVjjQzBRqqQGQhmR87JieOlcyguVX-M91iJS7ejmeKEq6HXzOdoYj2AbSOLTZznOHlVUyNl4nKRkSDLdsi0ut8Fb4CihAnlgU2isv_5astrbw2V3NAnc_rAXwldOSo0uu4F65WgRfwAduOfe3V493OzxSSZWq4L6gABXSVjPzDrJM59O5XO_G5pp997mSVo452Xtxx6M7sANOF6xHrUGLa4X76sPp4606faya65AbBHn4npfrFTBSBMx0_3HNnPgptoBkp-pE5j7xjuiT9GqaQTbI1lj9JJALXz28hOA_lTjOrLntxRLKNHKDtLFkK0zCMYsRbN9PRWuJVo5=w1206-h375-no"
              alt="vacay logo"
            />
          </a>

          <Typography>
            <Link to="/" className={classes.linkBox}>
              About Us
            </Link>
            <Link to="/" className={classes.linkBox}>
              Destinations
            </Link>
            <Link to="/testimonials" className={classes.linkBox}>
              Testimonials
            </Link>
            <Link to="/" className={classes.linkBox}>
              FAQ
            </Link>
          </Typography>
        </Box>
      </Box>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
