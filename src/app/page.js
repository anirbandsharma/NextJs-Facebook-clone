import LeftSidebar from "./_components/home/leftSidebar";
import MainContent from "./_components/home/mainContent";
import RightSidebar from "./_components/home/rightSidebar";

export default function Home() {
  return (
    <main className="px-4 py-7 grid grid-cols-4 gap-2">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </main>
  );
}
