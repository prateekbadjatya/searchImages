import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <main>
      <>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
      </>
    </main>
  );
};
export default App;
