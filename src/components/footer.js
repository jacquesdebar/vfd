import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#061B4A",
    borderTop: "3.5px solid #217AE8",
  },
  gridContainer: {
    padding: theme.spacing(4),
    textAlign: "left",
    color: "#FFFFFF",
  },
  emailContainer: {
    paddingLeft: "10px",
  },
  emailInput: {
    marginTop: "10px",
    padding: "7px",
    textAlign: "left",
    fontWeight: "10",
  },
  links: {
    color: "inherit",
    textDecoration: "none",
  },
  h2: {
    color: "#e6396c",
  },
  newsletterField: {
    "&:hover $notchedOutline": {
      borderColor: "white",
      color: "white",
    },
  },
  notchedOutline: {},
}))


const Footer = ({ siteTitle }) => {
    
    const classes = useStyles();

    const InputProps = {
        classes: {
            input: classes.newsletterField,
            notchedOutline: classes.notchedOutline
        }
    };
    
    return (
      <footer
        style={
          {
            // background: `#f03265`,
          }
        }
      >
        <div className={classes.root}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} md={6} className={classes.emailContainer}>
                <h2 className={classes.h2}>Join the list</h2>
                <p>
                  Need more information? Subscribe to our monthly newsletter to
                  recieve updates
                  <br />
                  on upcoming trips and the latest from Vacay for Democracy.
                  <br />
                </p>

                <form noValidate autoComplete="off">
                  <TextField
                    id="newsletter"
                    label="Your email"
                    variant="outlined"
                    className={classes.newsletterField}
                    InputProps={InputProps}
                  />
                </form>
              </Grid>
              <Grid item xs={12} md={3}>
                <h2 className={classes.h2}>Contact</h2>
                <p>
                  1411 4th Avenue Suite 1000
                  <br />
                  Seattle, WA 98101
                </p>
                <p>
                  <a
                    href="mailto:hello@commonpurposenow.org"
                    target="_top"
                    className={classes.links}
                  >
                    hello@cpnxt.org
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={3}>
                <h2 className={classes.h2}>Follow us</h2>
                <p>
                  <a
                    href="https://www.instagram.com/cpnxt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.links}
                  >
                    Instagram
                  </a>
                  <br />
                  <a
                    href="https://twitter.com/cpnxt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.links}
                  >
                    Twitter
                  </a>
                  <br />
                  <a
                    href="https://www.moreperfectaf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.links}
                  >
                    Podcast
                  </a>
                </p>
              </Grid>
            </Grid>
          </Box>
        </div>
      </footer>
    )
}

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
