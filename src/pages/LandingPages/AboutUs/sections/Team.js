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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/tyler.PNG";
// import team4 from "assets/images/nick.png";
import team5 from "assets/images/andy.PNG";
import team2 from "assets/images/joe.PNG";
import team3 from "assets/images/matt.PNG";
import team6 from "assets/images/sam.PNG";
import team7 from "assets/images/eli.PNG";
import team8 from "assets/images/mike.PNG";
import team9 from "assets/images/ashton.PNG";
import team10 from "assets/images/andrew.PNG";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Snuggle Gang
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team6}
                name="Sam Bowers"
                position={{ color: "info", label: "The Speedster" }}
                description="Don't let his shyness deceive, he will run sub 4 in the mile and then steal your girl."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Tyler Bradshaw"
                position={{ color: "info", label: "The Big Poop" }}
                description="A legendary fibber, this man ran a sub-17 minute 5k as a pre-teen and once lost 12 pounds from one bowl movement."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2}
                name="Joey Brovont"
                position={{ color: "info", label: "The Heart" }}
                description="If Snuggle Time has been silent for more than one day, be rest assured that this man will revive it as soon he notices."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Matt Brovont"
                position={{ color: "info", label: "The DNer" }}
                description="If this man ever asks you a question out of the blue, do NOT answer it or you will get dunked on."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image="https://imagedump.imgix.net/nick.PNG"
                name="Nick Butzow"
                position={{ color: "info", label: "The Sneak" }}
                description="This man will pass under the radar so elitely you might forget he's there unless you say Hey Nick."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team5}
                name="Andy Butzow"
                position={{ color: "info", label: "The Sex Appeal" }}
                description="Without a doubt our most attractive member, this man makes every woman he walks by weak in the knees."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team7}
                name="Eli Jones"
                position={{ color: "info", label: "The Lube" }}
                description="The jack of all trades with the most nicknames, he's the only member with frosted tips and has a smile that will melt your heart."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team8}
                name="Michael McCarthy"
                position={{ color: "info", label: "The Tank" }}
                description="This man has broken more bones than you, and also got hit by a car and went to Africa two days later. Beast."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team9}
                name="Ashton Meade"
                position={{ color: "info", label: "The Dancer" }}
                description="I didn't forget all the dances Ashton used to post on Instagram, and I won't let you forget either."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team10}
                name="Andrew von Hillebrandt"
                position={{ color: "info", label: "The Historian" }}
                description="I have 97 GBs of data on my phone and about 90 of them are photos and old texts, a.k.a. I have a hoarding problem."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
