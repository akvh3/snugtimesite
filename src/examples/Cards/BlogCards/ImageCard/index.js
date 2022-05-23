/*
=========================================================
* Snuggle Site v1.0 - Image Card
=========================================================
 =========================================================
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function ImageCard({ image, title }) {
  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageCard;
