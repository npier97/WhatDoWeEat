import 'components-library';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SuggestedRecipes from './components/SuggestedRecipes';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <SuggestedRecipes />
    </main>
    <Footer />
  </>
);

export default App;
