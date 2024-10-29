import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Landing from "@/components/Landing/Landing";

export default function Page() {
  return (
    <div className="min-h-screen max-h-fit w-full flex flex-col items-center">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
