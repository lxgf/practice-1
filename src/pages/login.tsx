import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import { saveToStorage } from "@/utils/localStorage";

export default function Login() {
  interface FormDataInterface {
    username?: string;
    password?: string;
  }

  const [formData, setFormData] = useState<FormDataInterface>({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  interface Result {
    status(number: number): any;
    json: (arg0: { redirectURL?: string; text: string }) => void;
  }

  const login = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setErrorMsg('')
    axios(
      `/api/login?username=${formData.username}&password=${formData.password}`
    )
      .then((res) => {
        saveToStorage("isAuthenticated", true);
        location.replace(res.data.redirectURL);
      })
      .catch((err) => {
        setErrorMsg(err.response.data.text)
      });
  };

  return (
    <>
      <Head>
        <title>Newsly — Log in</title>
        <meta name="description" content="Practice web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row gap-3.5 justify-center items-center bg-gradient-to-t from-sky-500 to-indigo-500 text-white h-screen">
        <form
          onSubmit={e => login(e)}
          method="GET"
          className="bg-white/30 p-5 gap-2 flex flex-col text-black"
        >
          <h1>Auth form</h1>
          <label className="flex flex-col gap-1 text-sm font-light">
            username
            <input
              type="text"
              className="bg-white/30 text-lg p-2"
              onInput={(e: React.FormEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  username: e.currentTarget.value,
                })
              }
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-light">
            pass
            <input
              type="password"
              className="bg-white/30 text-lg p-2"
              onInput={(e: React.FormEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  password: e.currentTarget.value ? e.currentTarget.value : "",
                })
              }
            />
          </label>
          {errorMsg && <p className="font-mono text-sm">{errorMsg}</p>}
          <button
            type="submit"
            className="mt-2 w-full p-4 bg-blue-800 text-white transition duration-150 hover:bg-blue-900"
          >
            Log in
          </button>
        </form>
      </main>
    </>
  );
}
