import { getAllCategories } from "@/utils/getCategories";
import { Box, Divider, Typography } from "@mui/material";

const CategoriesList = async () => {
  const { data: allCategories } = await getAllCategories();
  return (
    <Box className="mt-5 bg-gray-100 px-5 py-2">
      <Typography variant="h6">Categories</Typography>
      <Divider />
    </Box>
  );
};

export default CategoriesList;
