import BioPage from "./components/BioPage";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <>
      <div id="section-1" className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-1 items-center">
          <LandingPage />
        </main>
      </div>
      <div id="section-2" className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-1 items-center">
          <BioPage />
        </main>
      </div>
    </>
  );
}
