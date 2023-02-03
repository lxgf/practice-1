import Head from "next/head";
import { New } from "@/components/New";
import { newsMock } from "@/mockups/newsMock";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { getFromStorage } from "@/utils/localStorage";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const status: string = getFromStorage("isAuthenticated");
    setIsAuthenticated(status === "true");
  }, []);

  return (
    <>
      <Head>
        <title>Newsly — Main</title>
        <meta name="description" content="Practice web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row gap-3.5 justify-between bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white h-screen md:flex-col md:gap-8">
        <div className="mx-auto container max-w-3xl flex flex-col w-full xl:px-8">
          <Header isAuthenticated={isAuthenticated} />
          <section className="h-max my-auto flex flex-col gap-4 justify-center">
            <h1 className="font-black text-6xl font-mono">Newsly</h1>
            <p className="text-sm">The most interesting news</p>
          </section>
        </div>
        <section className="container max-w-xs divide-y divide-gray-200 h-full max-h-full overflow-auto shadow-md shadow-gray-600/50 transition duration-300 hover:shadow-xl hover:shadow-gray-500/90 bg-white lg:max-w-full xl:px-3">
          {newsMock.map(({ title, description, timestamp, link }, index) => (
            <New
              key={index}
              title={title}
              description={description}
              timestamp={timestamp}
              link={link}
              index={index}
            />
          ))}
        </section>
      </main>
    </>
  );
}
