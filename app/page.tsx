import Category from "./components/Category";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import { getData } from "./utils/api";



export default async function Home() {
  const exploreData = await getData();
  return (
    <main>
      <Category />
      <CategoryList exploreData={exploreData}/>
      <Footer/>
    </main>
  )
}
