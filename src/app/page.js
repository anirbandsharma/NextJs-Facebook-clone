import LeftSidebar from "./_components/home/leftSidebar";
import MainContent from "./_components/home/mainContent";
import RightSidebar from "./_components/home/rightSidebar";

export default function Home() {
  return (
    <main className="px-4 py-3 flex items-center justify-between">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </main>
  );
}
