import "../styles/homeStyle.css";
import HeroSection from "../components/homeComponents/HeroSection";
import CategoriesNav from "../components/homeComponents/CategoriesNav";
import NewAndNoticeable from "../components/homeComponents/NewAndNoticeable";

export function meta() {
  return [
    { title: "Bookzaar" },
    { name: "description", content: "Community-based website for trading books" },
  ];
}

export default function Home() {
  return (
      <main className="main-content">
          <HeroSection />
          <CategoriesNav />
          <NewAndNoticeable />
      </main>
  );
}
