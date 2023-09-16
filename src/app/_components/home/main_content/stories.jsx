export default function Stories() {
  const activeTab = "stories";
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function card(i) {
    return (
      <div className="bg-gray-400 min-w-[112px] h-48 rounded-md">Test {i}</div>
    );
  }

  return (
    <div className="bg-white rounded-lg w-full">
      <div className="px-4 border-b flex items-center">
        <button
          className={`w-full px-2 py-4 border-b-4 ${
            activeTab == "stories" ? "border-blue-500" : "border-transparent"
          }`}
        >
          Stories
        </button>
        <button
          className={`w-full px-2 py-4 border-b-4 ${
            activeTab == "reels" ? "border-blue-500" : "border-transparent"
          }`}
        >
          Reels
        </button>
      </div>

      <div className="flex items-center gap-2 px-4 py-4 overflow-x-scroll no-scrollbar">
        {array.map((item, index) => {
          return card(item);
        })}
      </div>
    </div>
  );
}
