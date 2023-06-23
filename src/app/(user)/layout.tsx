import Banner from "@/components/banner";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      {children}
    </>
  );
}
