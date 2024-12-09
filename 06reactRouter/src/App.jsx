import { useRoutes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import JobDetails from './components/JobDetails';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import { Home, About, Footer, Product, Contact, Jobs } from './pages';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/product', element: <Product /> },
    {
      path: '/contact',
      element: <Contact />,
      children: [
        { path: 'contactinfo', element: <ContactInfo /> },
        { path: 'contactform', element: <ContactForm /> },
      ],
    },
    { path: '/jobs', element: <Jobs /> },
    { path: '/jobs/:id', element: <JobDetails /> },
    { path: '*', element: <Notfound /> },
  ]);

  return (
    <>
      <Navbar />
      {routes}
      <Footer />
    </>
  );
}

export default App;
