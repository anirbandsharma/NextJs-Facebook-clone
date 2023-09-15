import CreatePost from "./main_content/createPost";
import Post from "./main_content/post";
import Stories from "./main_content/stories";

export default function MainContent() {
  return (
    <div className="col-span-2 px-4 space-y-4">
      <Stories />
      <CreatePost />
      <Post />
    </div>
  );
}
