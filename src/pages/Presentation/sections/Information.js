/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Experience the
                    <br />
                    Snuggle
                  </>
                }
                description="A historian's look at a group of friends that will be spoken of for generations."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="Experience the history of this legendary group of friends."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/about-us",
                  label: "Learn About Us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="all_inclusive"
                  title="A Lifetime"
                  description="The friendships that will last a lifetime, documented right here on this site."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="archive"
                  title="An Archive"
                  description="Check out the archives that date back as far as 15 years from the boys."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="video_library"
                  title="All Sorts of Media"
                  description="Whether its pictures, videos, or personal accounts from the historian, it can all be found here."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="expand"
                  title="Fully Expandable"
                  description="A Snuggle Time member has an idea for something to add? Ask your friendly historian/website developer."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
