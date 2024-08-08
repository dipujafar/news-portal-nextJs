import CategoriesList from "@/components/ui/CategoriesList";
import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CategoriesList></CategoriesList>
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
