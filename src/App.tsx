import { Header } from "./components/Layout/Header";
import "components-library";
export default function App() {
  return (
    <>
      <Header />
      <div className="pt-40 pb-20 flex items-center justify-center bg-gray-100">
        <h1 className="h-screen text-4xl font-bold text-blue-500">
          Hello, Tailwind!
        </h1>
      </div>
    </>
  );
}
