import axios from "axios";

import { useState } from "react";

const Main = () => {
  const [url, setUrl] = useState("");

  const URLFAKE = "https://www.youtube.com/watch?v=Xg1gvP7SMYc";

  // const inputFromUser = document.querySelector(".userInputUrl")

  //   function validateForm(){
  //     if(url === ""){
  //       alert("Please enter a valid url")
  //       return false
  //     }
  //   }

  const handleSubmint = (event) => {
    event.preventDefault();
    setUrl(URLFAKE);
    console.log("url", url);
    axios
      .post("/shrink", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const urlValidation = (url) => {
    if (url === "") {
      return false;
    }

    return true;
  };

  return (
    <main className="bg-orange-200 h-screen">
      <section className="p-8 h-full">
        <h1 className="nunitoFont text-center text-5xl font-black flex justify-center">
          Acortador de URL's
        </h1>
        <form
          className="flex flex-col justify-evenly items-center h-96"
          action="/acortadordeurl"
          onSubmit={handleSubmint}
        >
          <label
            className=" text-center font-black text-xl flex justify-center p-4"
            htmlFor="longurl"
          >
            Pegue su extensa URL aquí debajo
          </label>
          <input
            type="text"
            className="userInputUrl border w-full p-2 bg-white h-16"
            name="longname"
            placeholder="Ingrese su URL aquí"
            required
            minLength="10"
            onChange={(e) => {
              console.log(url);
              //I can validate from here below
              if (urlValidation(e.target.value)) {
                console.log("url is valid");
              } else {
                console.log("url is not valid");
              }
              setUrl(e.target.value);
            }}
          />
          <button
            className="rounded-sm border bg-orange-400 flex w-1/2 h-10 text-2xl text-black justify-center items-center"
            type="submit"
          >
            Acortar
          </button>
        </form>
        <div>
          <p className="latofont text-center">
            Acortador de URL's es una herramienta gratuita para acortar URL y generar
            enlaces cortos. El acortador de URL permite crear un enlace acortado
            para que sea fácil compartirlo.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
