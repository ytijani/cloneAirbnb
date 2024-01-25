
import Category from "./components/Category";
import { getData } from "./utils/api";



export default async function Home() {

  const exploreData = await getData();

  return (
    <main>

      <Category exploreData={exploreData} />

    </main>
  )
}
