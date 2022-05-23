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
import ImageCard from "examples/Cards/BlogCards/ImageCard";

// Video Player imports
import React from 'react'
import ReactPlayer from 'react-player'

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing="auto" alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="space-between">
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
                    image="https://imagedump.imgix.net/StephenJoins_Original.JPG"
                    title="SH"
                    description=""
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <ImageCard
                    image="https://imagedump.imgix.net/JayJoins_Original.JPG"
                    title="JJ"
                    description=""
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <ReactPlayer url='https://streamable.com/4h81mi' />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
