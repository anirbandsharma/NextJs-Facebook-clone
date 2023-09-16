import Image from "next/image";

export default function Post({ user, text, media, likes }) {
  return (
    <div className="bg-white rounded-lg w-full py-3 flex flex-col gap-2">
      <div className="flex items-center gap-2 px-4">
        <Image
          src={user.image}
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
        <h1>{user.name}</h1>
      </div>
      <p className="px-4">{text}</p>
      {media ? (
        <Image
          src={media}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
      ) : null}
      <p className="px-4">likes_count: {Object.keys(likes).length}</p>
    </div>
  );
}
