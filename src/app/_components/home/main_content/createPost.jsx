import Image from "next/image";

export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg w-full px-4 py-3">
      <div className="flex items-center gap-2 border-b pb-3">
        <Image
          src="https://placekitten.com/640/640"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
        <div className="px-3 py-2 bg-[#F0F2F5] rounded-full w-full text-gray-500 hover:bg-gray-200 cursor-pointer">
          What's on your mind, User?
        </div>
      </div>
      <div className="flex items-center justify-around pt-3">
        <div>Live Video</div>
        <div>Photo/video</div>
        <div>Feeling/activity</div>
      </div>
    </div>
  );
}
