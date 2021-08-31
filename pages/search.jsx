import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  //   console.log(router.query);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 pb-6 ml-4">
          <p className="text-xm font-medium">
            300+ Stays - {range} - for {numberOfGuests} gust(s)
          </p>
          <h2 className="text-2xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h2>
          <div className="space-x-3 text-gray-700  whitespace-nowrap hidden lg:inline-flex mb-3">
            <p className="filterButton">Cancellation Flexibility</p>
            <p className="filterButton">Type of Places</p>
            <p className="filterButton">Price</p>
            <p className="filterButton">Beads & Rooms</p>
            <p className="filterButton">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex min-w-[600px]">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://jsonkeeper.com/b/3F14").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}

//pk.eyJ1Ijoic2lyaWxtcCIsImEiOiJja3N6YmNjcGsycnphMnluMWR3dXFteXZpIn0.ZxtO8uHYyW_2XdGBRjhBbQ
