import { Box, Text } from "components-library";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "components-library";

const App = () => (
  <>
    <Header />
    <Box className="pt-40 pb-20 flex items-center justify-center bg-gray-100">
      <Text as="h1" className="h-screen text-4xl font-bold text-green-600">
        Hello, Tailwind!
      </Text>
    </Box>
    <Footer />
  </>
);

export default App;
