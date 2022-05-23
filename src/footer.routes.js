// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/favicon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Snuggle Time",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/akvhill",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/akvh3/snugtimesite",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/user/HillandBro1211",
    },
  ],
  menus: [
    {
      name: "Pages",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "snuggle map", href: "https://www.creative-tim.com/templates/free" },
        { name: "gallery", href: "https://www.creative-tim.com/templates/premium" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Deez Nuts by{" "} Eatmyhairy.
    </MKTypography>
  ),
};
