/*
=========================================================
* Snuggle Site v1.0 - Map Page
=========================================================
 =========================================================
*/

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";


import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Line,
  Annotation,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const flightDestinations = [
  {
    from: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta" },
    to: { coord: [-97.83602990109904, 31.070996067619074], city: "Fort Hood, Ashton" },
  },
  {
    from: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta" },
    to: { coord: [-104.95362547433082, 39.718809752100974], city: "Denver, Andrew" },
  },
  {
    from: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta" },
    to: { coord: [-111.96100600525149, 40.7427165396004], city: "Salt Lake City, Michael" },
  },
  {
    from: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta" },
    to: { coord: [-84.10645163124381, 35.27747722064885], city: "Forsyth, Eli" },
  },
  {
    from: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta" },
    to: { coord: [-82.38431842323752, 34.76532825408963], city: "Athens, Nick and Sam" },
  },
  {
    from: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta" },
    to: { coord: [-86.7427113639612, 36.19961352579025], city: "Nashville, Tyler" },
  },
  {
    from: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta" },
    to: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta, Joey and Andy" },
  },
  {
    from: { coord: [-84.29324992404366, 34.07588530732347], city: "Alpharetta" },
    to: { coord: [127.08493860439953, 36.99308489176252], city: "Pyeongtaek, Matt" },
  },
];

function ContactUs() {
  return (
    <>
      <DefaultNavbar routes={routes} />
      <div>
        <ComposableMap>
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
            {flightDestinations.map((route) => (
          <>
            <Line
              key={route.to.city}
              from={route.from.coord}
              to={route.to.coord}
              stroke="red"
              strokeWidth={1}
              strokeLinecap="round"
            />
            <Marker coordinates={route.to.coord}>
              <circle r={1} fill="red" />
            </Marker>
              
            <Annotation subject={route.to.coord} dx={0} dy={0} fill="red">
              <text fontSize="2px" x="3">
                {route.to.city}
              </text>
            </Annotation>
          </>
        ))}
          </ZoomableGroup>
        </ComposableMap>
    </div>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
