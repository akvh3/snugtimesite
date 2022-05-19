/*
=========================================================
* Snuggle Site v1.0 - Gallery Page
=========================================================
 =========================================================
*/

import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Gallery page sections
import Information from "pages/LandingPages/ImageGallery/sections/Information";

// Images
import bgImage from "assets/images/bg-about-us.jpg";


function ImagesGallery() {
    return (
      <>
        <DefaultNavbar routes={routes}/>

        <MKBox
            minHeight="75vh"
            width="100%"
            sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
                )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
            }}
        >
            <Container>
            <Grid
                container
                item
                xs={12}
                lg={8}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{ mx: "auto", textAlign: "center" }}
            >
                <MKTypography
                variant="h1"
                color="white"
                sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                    },
                })}
                >
                Work with an amazing design
                </MKTypography>
                <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                We&apos;re constantly trying to express ourselves and actualize our dreams. If you
                have the opportunity to play this game
                </MKTypography>
                
            </Grid>
            </Container>
        </MKBox>

        <Information />

        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  }
  
  export default ImagesGallery;