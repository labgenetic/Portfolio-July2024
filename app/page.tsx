import Body from "./ui/app/body";
import Header from "./ui/app/header";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#121315]">
      <Header/>
      <Body/>
    </main>
  );
}
