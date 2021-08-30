import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb.png" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Explore nearby section */}
        <section className="pt-5">
          <h2 className="text-4xl font-bold pb-8">Explore nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={location}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        {/* Live anywhere section */}
        <section className="pt-5">
          <h2 className="text-4xl font-bold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData.map(({ img, title }) => (
              <MediumCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>
        {/* large card section */}
        <section>
          <LargeCard
            img="/large-card-img.webp"
            title="The Greatest Outdoors"
            description="Wishlist curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
        {/* footer */}
        <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/LIZ3").then((res) =>
    res.json()
  );
  const cardData = await fetch("https://jsonkeeper.com/b/58HM").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
