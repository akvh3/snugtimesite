/*
/*
=========================================================
* Snuggle Site v1.0 - Information in Gallery
=========================================================
 =========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import ImageCard from "examples/Cards/BlogCards/ImageCard";

// Video Player imports
import React from 'react'
import ReactPlayer from 'react-player'

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <ImageCard
                    image="https://imagedump.imgix.net/CraigClassyJoins_Original.JPG"
                    title="Craig Classy"
                    description=""
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <ImageCard
                    image="https://imagedump.imgix.net/CraigClassyJoins_Original.JPG"
                    title="Craig Classy"
                    description=""
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Prebuilt components"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>

            <ReactPlayer url='https://streamable.com/4h81mi' />

          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
