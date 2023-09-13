"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function homeLinkComponent(name, icon) {
  var activePage = usePathname().replace("/", "");
  return (
    <Link
      href={`/${name == "home" ? "" : name}`}
      className={`flex relative group px-10 py-3 border-b-4 ${
        activePage == name
          ? "border-blue-500"
          : activePage == ""
          ? "first:border-blue-500 border-transparent"
          : "border-transparent"
      }`}
    >
      <span
        class="group-hover:opacity-100 transition-opacity bg-gray-800 p-2 text-xs text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto capitalize"
      >
        {name}
      </span>
      {icon}
    </Link>
  );
}

export default function Header() {
  const homeLinks = [
    {
      name: "home",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 23.979H21.25C21.386 23.979 21.5 23.864 21.5 23.729V13.979C21.5 13.427 21.949 12.979 22.5 12.979H24.33L14.017 4.046L3.67199 12.979H5.49999C6.05199 12.979 6.49999 13.427 6.49999 13.979V23.729C6.49999 23.864 6.61499 23.979 6.74999 23.979H10.5V17.729C10.5 17.04 11.061 16.479 11.75 16.479H16.25C16.939 16.479 17.5 17.04 17.5 17.729V23.979ZM21.25 25.479H17C16.448 25.479 16 25.031 16 24.479V18.327C16 18.135 15.844 17.979 15.652 17.979H12.348C12.156 17.979 12 18.135 12 18.327V24.479C12 25.031 11.552 25.479 11 25.479H6.74999C5.78399 25.479 4.99999 24.695 4.99999 23.729V14.479H3.06899C2.56699 14.479 2.07899 14.215 1.86799 13.759C1.62999 13.245 1.75699 12.658 2.17499 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521C14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29C26.244 12.658 26.371 13.245 26.133 13.759C25.921 14.215 25.434 14.479 24.931 14.479H23V23.729C23 24.695 22.217 25.479 21.25 25.479Z"
            fill="#65676B"
          />
        </svg>
      ),
    },
    {
      name: "video",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5C8 24.086 8.336 23.75 8.75 23.75H19.25C19.664 23.75 20 24.086 20 24.5C20 24.914 19.664 25.25 19.25 25.25H8.75ZM17.163 12.846L12.055 15.923C11.591 16.202 11 15.869 11 15.327V9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18V6.5C24 5.258 22.992 4.25 21.75 4.25H6.25C5.008 4.25 4 5.258 4 6.5V18C4 19.242 5.008 20.25 6.25 20.25H21.75ZM21.75 21.75H6.25C4.179 21.75 2.5 20.071 2.5 18V6.5C2.5 4.429 4.179 2.75 6.25 2.75H21.75C23.821 2.75 25.5 4.429 25.5 6.5V18C25.5 20.071 23.821 21.75 21.75 21.75Z"
            fill="#65676B"
          />
        </svg>
      ),
    },
    {
      name: "marketplace",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 23.75H21.75C22.164 23.75 22.5 23.414 22.5 23V14H22.531C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25H18.869C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25H13.907C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25H8.896C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14H5.5V23C5.5 23.414 5.836 23.75 6.25 23.75H10.5V17.5C10.5 16.81 11.06 16.25 11.75 16.25H16.25C16.94 16.25 17.5 16.81 17.5 17.5V23.75ZM3.673 8.75H24.327C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25H6.54C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25H3.5V12C3.5 12.414 3.836 12.75 4.25 12.75H4.421C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75H9.074C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75H14.044C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75H19.095C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75C24.097 12.75 24.5 12.347 24.5 11.85V10.25ZM24 14.217V23C24 24.243 22.993 25.25 21.75 25.25H6.25C5.007 25.25 4 24.243 4 23V14.236C2.875 14.112 2 13.158 2 12V9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75H21.461C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951V11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75V17.75H12V23.75H16Z"
            fill="#65676B"
          />
        </svg>
      ),
    },
    {
      name: "groups",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 9.5H10.25C10.0511 9.5 9.86032 9.57902 9.71967 9.71967C9.57902 9.86032 9.5 10.0511 9.5 10.25V17.25C9.5 17.664 9.836 18 10.25 18H17V23.5H4.5V4.5H23.5V9.5ZM23.5 23.5H18.5V17.25C18.5 17.0511 18.421 16.8603 18.2803 16.7197C18.1397 16.579 17.9489 16.5 17.75 16.5H11V11H23.5V23.5ZM25 23.75V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25V23.75C3 24.439 3.561 25 4.25 25H23.75C24.439 25 25 24.439 25 23.75Z"
            fill="#65676B"
          />
        </svg>
      ),
    },
    {
      name: "gaming",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 9.5H10.25C10.0511 9.5 9.86032 9.57902 9.71967 9.71967C9.57902 9.86032 9.5 10.0511 9.5 10.25V17.25C9.5 17.664 9.836 18 10.25 18H17V23.5H4.5V4.5H23.5V9.5ZM23.5 23.5H18.5V17.25C18.5 17.0511 18.421 16.8603 18.2803 16.7197C18.1397 16.579 17.9489 16.5 17.75 16.5H11V11H23.5V23.5ZM25 23.75V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25V23.75C3 24.439 3.561 25 4.25 25H23.75C24.439 25 25 24.439 25 23.75Z"
            fill="#65676B"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="px-3 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2 min-w-[24rem]">
        <div id="logo" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
              x1="9.993"
              x2="40.615"
              y1="9.993"
              y2="40.615"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#2aa4f4"></stop>
              <stop offset="1" stop-color="#007ad9"></stop>
            </linearGradient>
            <path
              fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
              d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
            ></path>
            <path
              fill="#fff"
              d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
            ></path>
          </svg>
        </div>

        <div
          id="search-bar"
          className="pl-3 flex gap-2 items-center rounded-full bg-gray-200"
        >
          <div id="magnify-icon" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Facebook"
            className="bg-transparent py-2 rounded-full rounded-l-none w-48"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 w-[36rem]">
        {homeLinks.map(({ name, icon }) => {
          return homeLinkComponent(name, icon);
        })}
      </div>

      <div className="flex gap-2 items-center justify-end min-w-[24rem]">
        <div className="relative group p-2.5 aspect-square rounded-full bg-gray-200 hover:bg-gray-300 duration-200">
          <span
            class="group-hover:opacity-100 transition-opacity bg-gray-800 p-2 text-xs text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            Menu
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_131)">
              <path
                d="M3.18186 5.90911C4.68809 5.90911 5.90914 4.68806 5.90914 3.18183C5.90914 1.6756 4.68809 0.454559 3.18186 0.454559C1.67563 0.454559 0.45459 1.6756 0.45459 3.18183C0.45459 4.68806 1.67563 5.90911 3.18186 5.90911Z"
                fill="#050505"
              />
              <path
                d="M9.99998 5.90911C11.5062 5.90911 12.7273 4.68806 12.7273 3.18183C12.7273 1.6756 11.5062 0.454559 9.99998 0.454559C8.49375 0.454559 7.27271 1.6756 7.27271 3.18183C7.27271 4.68806 8.49375 5.90911 9.99998 5.90911Z"
                fill="#050505"
              />
              <path
                d="M16.8181 5.90911C18.3243 5.90911 19.5454 4.68806 19.5454 3.18183C19.5454 1.6756 18.3243 0.454559 16.8181 0.454559C15.3119 0.454559 14.0908 1.6756 14.0908 3.18183C14.0908 4.68806 15.3119 5.90911 16.8181 5.90911Z"
                fill="#050505"
              />
              <path
                d="M3.18186 12.7273C4.68809 12.7273 5.90914 11.5062 5.90914 10C5.90914 8.49378 4.68809 7.27274 3.18186 7.27274C1.67563 7.27274 0.45459 8.49378 0.45459 10C0.45459 11.5062 1.67563 12.7273 3.18186 12.7273Z"
                fill="#050505"
              />
              <path
                d="M9.99998 12.7273C11.5062 12.7273 12.7273 11.5062 12.7273 10C12.7273 8.49378 11.5062 7.27274 9.99998 7.27274C8.49375 7.27274 7.27271 8.49378 7.27271 10C7.27271 11.5062 8.49375 12.7273 9.99998 12.7273Z"
                fill="#050505"
              />
              <path
                d="M16.8181 12.7273C18.3243 12.7273 19.5454 11.5062 19.5454 10C19.5454 8.49378 18.3243 7.27274 16.8181 7.27274C15.3119 7.27274 14.0908 8.49378 14.0908 10C14.0908 11.5062 15.3119 12.7273 16.8181 12.7273Z"
                fill="#050505"
              />
              <path
                d="M3.18186 19.5455C4.68809 19.5455 5.90914 18.3244 5.90914 16.8182C5.90914 15.312 4.68809 14.0909 3.18186 14.0909C1.67563 14.0909 0.45459 15.312 0.45459 16.8182C0.45459 18.3244 1.67563 19.5455 3.18186 19.5455Z"
                fill="#050505"
              />
              <path
                d="M9.99998 19.5455C11.5062 19.5455 12.7273 18.3244 12.7273 16.8182C12.7273 15.312 11.5062 14.0909 9.99998 14.0909C8.49375 14.0909 7.27271 15.312 7.27271 16.8182C7.27271 18.3244 8.49375 19.5455 9.99998 19.5455Z"
                fill="#050505"
              />
              <path
                d="M16.8181 19.5455C18.3243 19.5455 19.5454 18.3244 19.5454 16.8182C19.5454 15.312 18.3243 14.0909 16.8181 14.0909C15.3119 14.0909 14.0908 15.312 14.0908 16.8182C14.0908 18.3244 15.3119 19.5455 16.8181 19.5455Z"
                fill="#050505"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_131">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="relative group p-2.5 aspect-square rounded-full bg-gray-200 hover:bg-gray-300 duration-200">
          <span
            class="group-hover:opacity-100 transition-opacity bg-gray-800 p-2 text-xs text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            Messenger
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 1.45856C14.8287 1.45856 18.5715 4.9957 18.5715 9.77284C18.5715 14.55 14.8287 18.0871 10.0001 18.0871C9.16194 18.0891 8.32732 17.9783 7.51867 17.7578C7.36675 17.7159 7.20498 17.7277 7.06081 17.7914L5.35724 18.5421C5.25444 18.5874 5.14209 18.6068 5.03005 18.5985C4.91801 18.5903 4.80971 18.5547 4.71465 18.4948C4.61959 18.4349 4.54068 18.3526 4.48484 18.2552C4.429 18.1577 4.39794 18.048 4.39438 17.9357L4.34795 16.4114C4.34481 16.3186 4.32279 16.2275 4.28324 16.1435C4.2437 16.0595 4.18746 15.9844 4.11795 15.9228C3.25796 15.1481 2.57321 14.1987 2.10944 13.1381C1.64568 12.0776 1.41359 10.9303 1.42867 9.77284C1.42867 4.9957 5.17153 1.45856 10.0001 1.45856ZM4.85296 12.2043C4.80202 12.285 4.78104 12.381 4.79369 12.4756C4.80633 12.5701 4.85179 12.6573 4.92214 12.7217C4.99248 12.7862 5.08324 12.8239 5.17856 12.8283C5.27388 12.8327 5.36771 12.8035 5.44367 12.7457L8.14795 10.6928C8.23733 10.6256 8.34613 10.5893 8.45795 10.5893C8.56978 10.5893 8.67858 10.6256 8.76795 10.6928L10.768 12.1928C10.91 12.2991 11.0726 12.3747 11.2453 12.4151C11.418 12.4554 11.5973 12.4596 11.7717 12.4273C11.9461 12.3951 12.112 12.3271 12.2589 12.2276C12.4057 12.1281 12.5304 11.9993 12.6251 11.8493L15.143 7.85499C15.1939 7.7743 15.2149 7.67828 15.2022 7.5837C15.1896 7.48912 15.1441 7.40198 15.0738 7.33751C15.0034 7.27304 14.9127 7.23532 14.8174 7.23094C14.722 7.22656 14.6282 7.2558 14.5522 7.31356L11.848 9.36641C11.7586 9.43364 11.6498 9.46999 11.538 9.46999C11.4261 9.46999 11.3173 9.43364 11.228 9.36641L9.22795 7.86641C9.08588 7.7602 8.92336 7.68453 8.75062 7.64417C8.57788 7.60381 8.39865 7.59964 8.22422 7.63191C8.04979 7.66418 7.88392 7.7322 7.73705 7.83168C7.59018 7.93117 7.46549 8.05997 7.37081 8.20999L4.85296 12.2043Z"
              fill="#050505"
            />
          </svg>
        </div>
        <div className="relative group p-2.5 aspect-square rounded-full bg-gray-200 hover:bg-gray-300 duration-200">
          <span
            class="group-hover:opacity-100 transition-opacity bg-gray-800 p-2 text-xs text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            Notifications
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.60496 16.7771C6.57639 16.7771 8.17353 16.6879 10.3335 16.29C9.95996 17.3057 8.98639 18.0336 7.84282 18.0336C6.89211 18.0336 6.05925 17.53 5.58925 16.7771H5.60496ZM17.8021 11.2357C17.9785 12.1443 17.3414 12.9479 15.9071 13.6257C15.1214 13.9964 13.3742 14.7021 10.4885 15.2636C8.26282 15.6957 6.63211 15.795 5.60568 15.795C5.30068 15.795 5.04853 15.7864 4.84996 15.775C3.26711 15.6843 2.37425 15.1771 2.19782 14.2686C1.92996 12.8921 2.35353 12.3607 3.05568 11.4807L3.24068 11.2486C3.71425 10.6479 3.89925 10.0579 3.59639 8.50143C2.91853 5.01572 4.48853 2.63358 7.90282 1.96643C11.3185 1.30715 13.6671 2.92572 14.345 6.41215C14.6471 7.96858 15.04 8.44572 15.7042 8.825V8.82572L15.9628 8.97215C16.9428 9.525 17.5342 9.85858 17.8021 11.2357Z"
              fill="#050505"
            />
          </svg>
        </div>
        <div className="relative group aspect-square rounded-full bg-gray-200 hover:bg-gray-300 duration-200">
          <span
            class="group-hover:opacity-100 transition-opacity bg-gray-800 p-2 text-xs text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
          >
            Account
          </span>
          <img
            src="https://placekitten.com/640/640"
            alt=""
            className="w-9 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
