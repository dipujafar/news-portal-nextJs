import { Box, Button, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category ",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <Box className="bg-black px-2 py-10 ">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton>
            <XIcon></XIcon>
          </IconButton>
          <IconButton>
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
        </Box>
        <Box className="text-center">
          {navItems.map((item) => (
            <Link key={item?.route} href={item?.pathname}>
              <Button className="text-white">{item?.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="gray" textAlign="center">
          @2024 The Dragon News. Design by Jafar Uddin Dipu.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
