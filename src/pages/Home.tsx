import AccommodationList from "../components/AccomodationList";
import Banner from "../components/Banner";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <AccommodationList />
      <Footer />
    </>
  );
};

export default Home;
