import Banner from "@/components/banner";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      {children}
    </div>
  );
}
