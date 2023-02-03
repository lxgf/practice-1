import Head from 'next/head';
import {Header} from '@/components/Header';
import {userMock} from '@/mockups/userMock';
import {timestampToTime} from '@/utils/timestampToTime';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {getFromStorage} from '@/utils/localStorage';
import {useRouter} from 'next/router';

export default function Profile() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | void>();

  useEffect(() => {
    const status: string = getFromStorage("isAuthenticated");
    setIsAuthenticated(status === "true");
  }, []);

  useEffect(() => {
    if (isAuthenticated == false) {
      router.push('/login')
    }
  }, [isAuthenticated]);


  return (
    <>
      <Head>
        <title>Newsly — Main</title>
        <meta name="description" content="Practice web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex xl:px-8 flex-row gap-3.5 justify-between bg-gradient-to-r from-orange-500 to-red-500 text-white h-screen">
        <div className="mx-auto container max-w-3xl flex flex-col w-full">
          <Header isAuthenticated={isAuthenticated} />
          <>
            {isAuthenticated &&
              <section className="h-max my-auto flex w-full flex-col gap-4 justify-center">
                <h1 className="font-black text-6xl font-mono">{userMock.username}</h1>
                <div className='flex flex-col gap-2 ml-4'>
                  <div className="text-sm flex flex-col">
                    <b>Birth date</b>
                    <p>{timestampToTime(userMock.birth)}</p>
                  </div>
                  <div className="text-sm flex flex-col">
                    <b>Sex</b>
                    <p>{userMock.sex}</p>
                  </div>
                  <div className="text-sm flex flex-col">
                    <b>Country</b>
                    <p>{userMock.country}</p>
                  </div>
                </div>
                <Link className="font-bold ml-4 hover:underline" href="/logout">Log out</Link>
              </section>
            }
          </>
        </div>
      </main>
    </>
  );
}