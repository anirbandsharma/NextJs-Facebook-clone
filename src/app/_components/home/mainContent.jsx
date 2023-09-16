import CreatePost from "./main_content/createPost";
import Post from "./main_content/post";
import Stories from "./main_content/stories";

const posts = [
  {
    user: {
      name: "User name",
      image: "https://placekitten.com/640/640",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur cum, nobis eveniet laudantium molestias sed minus placeat fugiat alias, minima perferendis officia soluta quas quaerat voluptatum culpa maiores debitis.",
    media: "https://placekitten.com/640/320",
    likes: [
      { name: "User 1", image: "https://placekitten.com/640/640" },
      { name: "User 2", image: "https://placekitten.com/640/640" },
      { name: "User 3", image: "https://placekitten.com/640/640" },
    ],
  },
  {
    user: {
      name: "User name",
      image: "https://placekitten.com/640/640",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur cum, nobis eveniet laudantium molestias sed minus placeat fugiat alias, minima perferendis officia soluta quas quaerat voluptatum culpa maiores debitis.",
    media: null,
    likes: [
      { name: "User 1", image: "https://placekitten.com/640/640" },
      { name: "User 2", image: "https://placekitten.com/640/640" },
      { name: "User 3", image: "https://placekitten.com/640/640" },
    ],
  },
  {
    user: {
      name: "User name",
      image: "https://placekitten.com/640/320",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur cum, nobis eveniet laudantium molestias sed minus placeat fugiat alias, minima perferendis officia soluta quas quaerat voluptatum culpa maiores debitis.",
    media: "https://placekitten.com/640/640",
    likes: [
      { name: "User 1", image: "https://placekitten.com/640/640" },
      { name: "User 2", image: "https://placekitten.com/640/640" },
      { name: "User 3", image: "https://placekitten.com/640/640" },
    ],
  },
];

export default function MainContent() {
  return (
    <div className="col-span-2 px-10 space-y-4 max-w-2xl mx-auto">
      <Stories />
      <CreatePost />

      {/* {JSON.stringify(posts)} */}

      <div className="flex flex-col items-center gap-2">
        {posts.map((data, index) => {
          return <Post {...data} />;
        })}
      </div>
    </div>
  );
}
