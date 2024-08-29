import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Image from "next/image";

import { Hero, Navbar,Products} from "./components";


export default async function Home() {


// console.log(products)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Products/>

    </>
  );
}
