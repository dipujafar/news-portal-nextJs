import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from "@/assets/Dragon_News_logo.png";
import { getCurrentDate } from "@/utils/currentDate";
const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image
          src={headerImage}
          alt="header_image"
          height={400}
          width={400}
          className="mx-auto"
        ></Image>
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear of Favour
        </Typography>
        <Typography color="gray" textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
