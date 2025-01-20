import { Box, Text } from "components-library";
import { Header } from "./components/Layout/Header";
import "components-library";

export default function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind!</h1>
      </div>
      <Box>
        <Text align="center" as="p" size="base" weight="normal">
          This is a test
        </Text>
      </Box>
    </>
  );
}
