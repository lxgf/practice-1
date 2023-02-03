import Head from "next/head";
import { New } from "@/components/New";
import { newsMock } from "@/mockups/newsMock";
import { Header } from "@/components/Header";
import {useEffect, useState} from 'react';
import {getFromStorage} from '@/utils/localStorage';

export default function Articles() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const status: string = getFromStorage("isAuthenticated");
    setIsAuthenticated(status === "true");
  }, []);

  return (
    <>
      <Head>
        <title>Newsly — Articles</title>
        <meta name="description" content="Practice web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row gap-3.5 items-center flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white h-screen">
        <div className='xl:px-8 w-full flex justify-center'>
          <Header isAuthenticated={isAuthenticated} />
        </div>
        <section className="container max-w-4xl divide-y divide-gray-200 h-full px-2 py-4 mb-5 max-h-full overflow-auto shadow-md shadow-gray-600/50 transition duration-300 hover:shadow-xl hover:shadow-gray-500/90 bg-white">
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
