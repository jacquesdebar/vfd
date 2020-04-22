import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F9F8F8",
  },
  ex: {
    height: "850px",
    width: "400px",
    border: "3px solid ##333",
    backgroundColor: "#eee",
    margin: "20px",
  },
  hero: {
    height: "70vh",
    backgroundImage: `url(
      "https://i.imgur.com/EdSdjKf.png"
    )`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: "white",
  },
  heroTitle: {
    textTransform: "uppercase",
    fontSize: "65px",
    marginTop: "20px",
    margin: "0px",
  },
  heroText: {
    fontSize: "30px",
    fontWeight: "bold",
    margin: "0px",
    marginBottom: "16px",
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
  },
  row: {
    marginBottom: "40px",
  },
  textBox: {
    width: "475px",
    marginRight: "15px",
    marginLeft: "10px",
    position: "relative",
    zIndex: "2",
  },
  colorBlock: {
    backgroundColor: "#97CB8E",
    height: "300px",
    width: "450px",
    position: "relative",
    top: "-45px",
    left: "1020px",
    zIndex: "1",
  },
  colorBlock2: {
    backgroundColor: "#97CB8E",
    height: "355px",
    width: "460px",
    position: "relative",
    top: "-20px",
    left: "440px",
    zIndex: "1",
  },
  demImg: {
    height: "auto",
    width: "450px",
    marginTop: "20px",
    marginRight: "20px",
    marginLeft: "20px",
    position: "relative",
    zIndex: "2",
  },
  heading: {
    margin: "0px",
    marginTop: "20px",
  },
  missionParagraph: {
    fontWeight: "bold",
    color: "#e6396c",
  },
  signUpButtonTop: {
    marginTop: "15px",
    backgroundColor: "#014378",
    color: "#FFFFFF",
    fontWeight: "bold",
    height: "60px",
    width: "150px",
    fontSize: "17px",
  },
  h1: {
    color: "#061B4A",
    fontSize: "32px"
  },
  signUpButtonBottom: {
    backgroundColor: "#014378",
    color: "#FFFFFF",
    fontWeight: "bold",
    height: "95px",
    width: "150px",
    fontSize: "16px",
  },
}))


const IndexPage = () => {
  const classes = useStyles()

  return (
  <Layout>
    <SEO title="Home" />
    <div className={classes.root}>
      <Box
        className={classes.hero}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className={classes.heroTitle}>Vacay for Democracy</h1>
        <p className={classes.heroText}>
          Empowering voters where it matters most.
        </p>
        <a href="/#">
          <Button
            variant="contained"
            color="primary"
            className={classes.signUpButtonTop}
          >
            Sign Up
          </Button>
        </a>
      </Box>
      <Box
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className={classes.heading}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.textBox}>
            <h1 className={classes.h1}>Why Vacay for Democracy?</h1>
            <p>
              In 2016, 131.7 million out of 213 million eligible voters in the
              United States cast a ballot in the presidential election; a
              turnout rate of 57%, with even lower rates in swing states.
              Studies show disinterest and apathy played a large role in why
              eligible Americans chose to forfeit their vote. Experts believe
              that some Americans are politically disengaged due to lack of
              education about the importance of democracy and candidates running
              for election.
            </p>
          </div>
          <img
            className={classes.demImg}
            src="https://i.imgur.com/9zii9E7.jpg"
            alt="democracy"
          />
        </Box>
        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className={classes.demImg}
            src="https://i.imgur.com/P2fgX4h.jpg"
            alt="democracy"
          />
          <div className={classes.textBox}>
            <p>
              Democracy is based on the principle of “people’s sovereignty”, in
              other words, citizens in America can form and diffuse authority of
              their government through their elected representatives. Democracy
              allows citizens to have a voice in decision-making and guarantees
              enhanced livelihoods for it’s people. The only way to achieve
              democracy is for all citizens to participate in their elections
              and make informed decisions that impact their lives and our
              communities.g
            </p>
            <p className={classes.missionParagraph}>
              Vacay for Democracy sends canvassers to swing states, working to
              equip voters with the tools and information they need to vote with
              confidence in the 2020 election.
            </p>
          </div>
        </Box>
        <Box className={classes.row}>
          <a href="/#">
            <Button
              variant="contained"
              size="large"
              className={classes.signUpButtonBottom}
            >
              Sign Up
            </Button>
          </a>
        </Box>
        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className={classes.h1}>Our Solution</h1>
          <img
            className={classes.demImg}
            src="https://i.imgur.com/zgqifeF.jpg"
            alt="training module page"
          />
          <img
            className={classes.demImg}
            src="https://i.imgur.com/2hUpBt1.jpg"
            alt="training progress page"
          />
          <img
            className={classes.demImg}
            src="https://i.imgur.com/Caurj9x.png"
            alt="testimonial page"
          />
        </Box>
      </Box>
      </div>
      </Layout>
  )
}

export default IndexPage
