import { Fragment, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
// import "./App.css";

function App() {
  // const { state, handleFunction } = useContext(GlobalContext);
  // const { test, setTesting } = state;

  const [dataGempa, setDataGempa] = useState([]);
  const [limitAwal, setLimitAwal] = useState(0);

  const [showDetail, setShowDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState({
    tanggal: "",
    jam: "03:44 WIB",
    datetime: "2023-03-27T17 : 03:44+00:00",
    coordinates: "3.24, 97.92",
    lintang: "3.24 LU",
    bujur: "97.92 BT",
    magnitude: "2.4",
    kedalaman: "4 Km",
    wilayah:
      "Pusat Gempa berasa di darat 29 km Tengga Kutacane - Kab. Aceh Selatan",
    dirasakan: "II Pasie Raja, Kab. Aceh Selatan",
  });

  const [showMenu, setShowMenu] = useState(false);

  const [page1, setPage1] = useState("text-white bg-[#643DFF]");
  const [page2, setPage2] = useState("");

  useEffect(() => {
    const request = new Request(
      "http://localhost:8080/https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json",
      {
        method: "GET",
      }
    );

    const response = fetch(request);

    response
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        const data = responseJson.Infogempa.gempa;

        setDataGempa(data);
      })
      .catch((error) => console.info(error))
      .finally(() => console.info("Tetap Semangat!"));
  }, [setDataGempa]);

  console.info(dataGempa);
  console.info("detail: ", dataDetail);

  const handleDetail = () => {
    setShowDetail(!showDetail);

    console.info("click!");
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);

    console.info("click!");
  };

  const previousPage = () => {
    setLimitAwal(limitAwal - 9);
    setPage1("text-white bg-[#643DFF]");
    setPage2("");
  };

  const nextPage = () => {
    setLimitAwal(limitAwal + 10);
    setPage1("");
    setPage2("text-white bg-[#643DFF]");
  };

  return (
    <Fragment>
      {/* header */}
      {/* <header>test header</header> */}

      {/* Main content */}
      <main>
        <div className="flex text-white h-[142px] md:h-[146px] bg-[#643DFF] font-sans">
          <div className="absolute top-0 left-0 w-full h-full p-4 md:grid md:grid-cols-[minmax(0px,_20%)_minmax(0px,_80%)] md:gap-6">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col bg-white rounded-2xl shadow-md shadow-gray-200 border text-black p-4">
              <div className="flex p-2.5">
                <svg
                  className="animate-spin"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_25_7)">
                    <rect width="32" height="32" rx="16" fill="#643DFF" />
                    <rect x="16" width="16" height="32" fill="#8364FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_25_7">
                      <rect width="32" height="32" rx="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="ml-3">Logo</p>
              </div>

              <div className="flex flex-col justify-between h-[92%]">
                <div className="mt-1">
                  <ul>
                    <a href={""} className="text-[#667085]">
                      <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                        <svg
                          className="mr-3"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 5.5C3 4.11929 4.11929 3 5.5 3H8.5C9.88071 3 11 4.11929 11 5.5V8.5C11 9.88071 9.88071 11 8.5 11H5.5C4.11929 11 3 9.88071 3 8.5V5.5ZM5.5 5H8.5C8.77614 5 9 5.22386 9 5.5V8.5C9 8.77614 8.77614 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5V5.5C5 5.22386 5.22386 5 5.5 5Z"
                            fill="#667085"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 5.5C13 4.11929 14.1193 3 15.5 3H18.5C19.8807 3 21 4.11929 21 5.5V8.5C21 9.88071 19.8807 11 18.5 11H15.5C14.1193 11 13 9.88071 13 8.5V5.5ZM15.5 5H18.5C18.7761 5 19 5.22386 19 5.5V8.5C19 8.77614 18.7761 9 18.5 9H15.5C15.2239 9 15 8.77614 15 8.5V5.5C15 5.22386 15.2239 5 15.5 5Z"
                            fill="#667085"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.5 13C14.1193 13 13 14.1193 13 15.5V18.5C13 19.8807 14.1193 21 15.5 21H18.5C19.8807 21 21 19.8807 21 18.5V15.5C21 14.1193 19.8807 13 18.5 13H15.5ZM18.5 15H15.5C15.2239 15 15 15.2239 15 15.5V18.5C15 18.7761 15.2239 19 15.5 19H18.5C18.7761 19 19 18.7761 19 18.5V15.5C19 15.2239 18.7761 15 18.5 15Z"
                            fill="#667085"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 15.5C3 14.1193 4.11929 13 5.5 13H8.5C9.88071 13 11 14.1193 11 15.5V18.5C11 19.8807 9.88071 21 8.5 21H5.5C4.11929 21 3 19.8807 3 18.5V15.5ZM5.5 15H8.5C8.77614 15 9 15.2239 9 15.5V18.5C9 18.7761 8.77614 19 8.5 19H5.5C5.22386 19 5 18.7761 5 18.5V15.5C5 15.2239 5.22386 15 5.5 15Z"
                            fill="#667085"
                          />
                        </svg>
                        Dashboard
                      </li>
                    </a>
                    <a href={""} className="">
                      <li className="flex items-center text-sm font-bold p-3 rounded-lg bg-[#F0ECFF]">
                        <svg
                          className="mr-3"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4L8 4ZM10 4H14V6H10V4ZM16 6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16Z"
                            fill="#643DFF"
                          />
                        </svg>
                        Data Gempa
                      </li>
                    </a>
                    <a href={""} className="text-[#667085]">
                      <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                        <svg
                          className="mr-3"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 3C4.55228 3 5 3.44772 5 4V19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
                            fill="#667085"
                          />
                          <path
                            d="M19.832 8.55468C20.1384 8.09516 20.0142 7.47429 19.5547 7.16793C19.0952 6.86158 18.4743 6.98576 18.1679 7.44528L14.7543 12.5657L11.6 10.2C11.1407 9.85553 10.4864 9.96762 10.1679 10.4453L6.16793 16.4453C5.86158 16.9048 5.98576 17.5257 6.44528 17.832C6.90481 18.1384 7.52568 18.0142 7.83203 17.5547L11.2457 12.4342L14.4 14.8C14.8593 15.1444 15.5136 15.0324 15.832 14.5547L19.832 8.55468Z"
                            fill="#667085"
                          />
                        </svg>
                        Analisis
                      </li>
                    </a>
                    <a href={""} className="text-[#667085]">
                      <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                        <svg
                          className="mr-3"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 3C9.15985 3 9.31094 3.03751 9.44495 3.1042C9.50806 3.1186 9.57063 3.1361 9.63246 3.15671L15 4.94589L19.3675 3.49004C20.6626 3.05836 22 4.02229 22 5.38741V17.2792C22 18.1401 21.4491 18.9044 20.6325 19.1766L15.6325 20.8433C15.5707 20.8639 15.5081 20.8813 15.4451 20.8957C15.311 20.9625 15.1599 21 15 21C14.8401 21 14.689 20.9625 14.5549 20.8957C14.4919 20.8813 14.4293 20.8639 14.3675 20.8433L9 19.0541L4.63246 20.5099C3.33739 20.9416 2 19.9777 2 18.6126V6.72074C2 5.85988 2.55086 5.09561 3.36754 4.82338L8.36754 3.15671C8.42937 3.1361 8.49194 3.1186 8.55505 3.1042C8.68906 3.03751 8.84015 3 9 3ZM16 18.6126L20 17.2792V5.38741L16 6.72074V18.6126ZM14 6.72074V18.6126L10 17.2792V5.38741L14 6.72074ZM4 6.72074L8 5.38741V17.2792L4 18.6126V6.72074Z"
                            fill="#667085"
                          />
                        </svg>
                        Peta Wilayah
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="mt-1">
                  <ul>
                    <a href={"/test"} className="text-[#667085]">
                      <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                        <svg
                          className="mr-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7857 8C10.7995 8 10 8.79948 10 9.78569V10.2273C10 10.7796 9.55228 11.2273 9 11.2273C8.44772 11.2273 8 10.7796 8 10.2273V9.78569C8 7.69491 9.69491 6 11.7857 6H11.9339C13.6089 6 15.0625 7.15543 15.4403 8.78721C15.8594 10.5966 14.8328 12.4278 13.0705 13.0143L12.9679 13.0484C12.8212 13.0973 12.7222 13.2345 12.7222 13.3891V14C12.7222 14.5523 12.2745 15 11.7222 15C11.1699 15 10.7222 14.5523 10.7222 14V13.3891C10.7222 12.3733 11.3725 11.4716 12.3363 11.1508L12.4389 11.1166C13.222 10.856 13.6781 10.0424 13.4919 9.23843C13.324 8.51339 12.6781 8 11.9339 8H11.7857Z"
                            fill="#667085"
                          />
                          <path
                            d="M11.75 16C12.3023 16 12.75 16.4477 12.75 17C12.75 17.5523 12.3023 18 11.75 18C11.1977 18 10.75 17.5523 10.75 17C10.75 16.4477 11.1977 16 11.75 16Z"
                            fill="#667085"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                            fill="#667085"
                          />
                        </svg>
                        Support
                      </li>
                    </a>
                    <a href={"/test"} className="text-[#667085]">
                      <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                        <svg
                          className="mr-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.9732 18.6594L17.0233 15.7096L15.0772 18.2868L14.3701 18.0077L14.3656 18.0059L14.3568 18.0024L14.3266 17.9902C14.301 17.9798 14.2647 17.9649 14.2187 17.9455C14.1266 17.9069 13.9955 17.8505 13.8334 17.7775C13.5097 17.6316 13.0601 17.4181 12.5508 17.145C11.5465 16.6064 10.2501 15.8046 9.2412 14.7957C8.23228 13.7868 7.43043 12.4904 6.89177 11.4859C6.61864 10.9766 6.40508 10.527 6.25921 10.2033C6.18616 10.0412 6.12978 9.91006 6.09111 9.818C6.07177 9.77196 6.05684 9.73564 6.04643 9.71008L6.03424 9.6799L6.03072 9.67109L6.02922 9.6673L5.74978 8.95947L8.32705 7.01328L5.37727 4.0635C4.79237 5.01929 4.03987 6.64469 4.03506 8.66566C4.03007 10.7615 4.82803 13.4138 7.72559 16.3113C10.6232 19.2089 13.2754 20.0068 15.3712 20.0017C17.3921 19.9969 19.0174 19.2443 19.9732 18.6594ZM8.19264 9.62095L9.53229 8.60934C10.5015 7.87749 10.6 6.45782 9.74127 5.59907L6.70516 2.56297C5.91561 1.77342 4.4906 1.73455 3.78703 2.83463C3.07493 3.94806 2.04137 6.0137 2.03506 8.6609C2.02867 11.3442 3.07862 14.4928 6.31137 17.7255C9.54415 20.9583 12.6927 22.0082 15.376 22.0017C18.0231 21.9954 20.0887 20.9617 21.2021 20.2496C22.3021 19.546 22.2632 18.121 21.4737 17.3315L18.4376 14.2954C17.5788 13.4366 16.1591 13.5352 15.4273 14.5043L14.4156 15.844C14.157 15.7228 13.8416 15.5677 13.496 15.3824C12.5597 14.8803 11.4615 14.1876 10.6554 13.3815C9.84928 12.5753 9.15651 11.4771 8.65431 10.5407C8.46896 10.1951 8.31387 9.87968 8.19264 9.62095Z"
                            fill="#667085"
                          />
                        </svg>
                        Phone
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Mobile Device */}
            {showMenu ? (
              <>
                <div className="fixed md:hidden top-0 left-0 w-3/4 h-full p-4 bg-white text-black z-10 duration-300">
                  <div className="flex items-center p-2.5">
                    <svg
                      className="border rounded-full animate-pulse"
                      width="32"
                      height="32"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="white" />
                      <circle
                        cx="28"
                        cy="28"
                        r="5"
                        fill="#29CCB0"
                        stroke="#633CFC"
                        strokeWidth="2"
                      />
                    </svg>
                    <p className="font-medium text-[#4f5768] ml-3">
                      Kadek Frama
                    </p>
                    <span
                      onClick={() => setShowMenu(false)}
                      className="absolute top-6 right-5 p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer shadow-md"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1725 9.99393C11.498 10.3194 11.498 10.847 11.1725 11.1724C10.8471 11.4979 10.3194 11.4979 9.994 11.1724L5.99995 7.17844L2.00601 11.1724C1.68058 11.4979 1.15294 11.4979 0.8275 11.1725C0.502061 10.847 0.502056 10.3194 0.82749 9.99394L4.82143 5.99994L0.827331 2.00591C0.501891 1.68047 0.501893 1.15284 0.827332 0.827405C1.15277 0.50197 1.68041 0.501969 2.00585 0.827404L5.99993 4.82142L9.99386 0.827418C10.3193 0.501978 10.8469 0.501975 11.1724 0.827409C11.4978 1.15284 11.4978 1.68048 11.1724 2.00592L7.17845 5.99992L11.1725 9.99393Z"
                          fill="#A3A9B5"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="flex flex-col justify-between h-[72%] md:h-[92%]">
                    <div className="mt-1">
                      <ul>
                        <a href={""} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 5.5C3 4.11929 4.11929 3 5.5 3H8.5C9.88071 3 11 4.11929 11 5.5V8.5C11 9.88071 9.88071 11 8.5 11H5.5C4.11929 11 3 9.88071 3 8.5V5.5ZM5.5 5H8.5C8.77614 5 9 5.22386 9 5.5V8.5C9 8.77614 8.77614 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5V5.5C5 5.22386 5.22386 5 5.5 5Z"
                                fill="#667085"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13 5.5C13 4.11929 14.1193 3 15.5 3H18.5C19.8807 3 21 4.11929 21 5.5V8.5C21 9.88071 19.8807 11 18.5 11H15.5C14.1193 11 13 9.88071 13 8.5V5.5ZM15.5 5H18.5C18.7761 5 19 5.22386 19 5.5V8.5C19 8.77614 18.7761 9 18.5 9H15.5C15.2239 9 15 8.77614 15 8.5V5.5C15 5.22386 15.2239 5 15.5 5Z"
                                fill="#667085"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.5 13C14.1193 13 13 14.1193 13 15.5V18.5C13 19.8807 14.1193 21 15.5 21H18.5C19.8807 21 21 19.8807 21 18.5V15.5C21 14.1193 19.8807 13 18.5 13H15.5ZM18.5 15H15.5C15.2239 15 15 15.2239 15 15.5V18.5C15 18.7761 15.2239 19 15.5 19H18.5C18.7761 19 19 18.7761 19 18.5V15.5C19 15.2239 18.7761 15 18.5 15Z"
                                fill="#667085"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 15.5C3 14.1193 4.11929 13 5.5 13H8.5C9.88071 13 11 14.1193 11 15.5V18.5C11 19.8807 9.88071 21 8.5 21H5.5C4.11929 21 3 19.8807 3 18.5V15.5ZM5.5 15H8.5C8.77614 15 9 15.2239 9 15.5V18.5C9 18.7761 8.77614 19 8.5 19H5.5C5.22386 19 5 18.7761 5 18.5V15.5C5 15.2239 5.22386 15 5.5 15Z"
                                fill="#667085"
                              />
                            </svg>
                            Dashboard
                          </li>
                        </a>
                        <a href={""} className="">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg bg-[#F0ECFF]">
                            <svg
                              className="mr-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4L8 4ZM10 4H14V6H10V4ZM16 6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16Z"
                                fill="#643DFF"
                              />
                            </svg>
                            Data Gempa
                          </li>
                        </a>
                        <a href={""} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 3C4.55228 3 5 3.44772 5 4V19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
                                fill="#667085"
                              />
                              <path
                                d="M19.832 8.55468C20.1384 8.09516 20.0142 7.47429 19.5547 7.16793C19.0952 6.86158 18.4743 6.98576 18.1679 7.44528L14.7543 12.5657L11.6 10.2C11.1407 9.85553 10.4864 9.96762 10.1679 10.4453L6.16793 16.4453C5.86158 16.9048 5.98576 17.5257 6.44528 17.832C6.90481 18.1384 7.52568 18.0142 7.83203 17.5547L11.2457 12.4342L14.4 14.8C14.8593 15.1444 15.5136 15.0324 15.832 14.5547L19.832 8.55468Z"
                                fill="#667085"
                              />
                            </svg>
                            Analisis
                          </li>
                        </a>
                        <a href={""} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9 3C9.15985 3 9.31094 3.03751 9.44495 3.1042C9.50806 3.1186 9.57063 3.1361 9.63246 3.15671L15 4.94589L19.3675 3.49004C20.6626 3.05836 22 4.02229 22 5.38741V17.2792C22 18.1401 21.4491 18.9044 20.6325 19.1766L15.6325 20.8433C15.5707 20.8639 15.5081 20.8813 15.4451 20.8957C15.311 20.9625 15.1599 21 15 21C14.8401 21 14.689 20.9625 14.5549 20.8957C14.4919 20.8813 14.4293 20.8639 14.3675 20.8433L9 19.0541L4.63246 20.5099C3.33739 20.9416 2 19.9777 2 18.6126V6.72074C2 5.85988 2.55086 5.09561 3.36754 4.82338L8.36754 3.15671C8.42937 3.1361 8.49194 3.1186 8.55505 3.1042C8.68906 3.03751 8.84015 3 9 3ZM16 18.6126L20 17.2792V5.38741L16 6.72074V18.6126ZM14 6.72074V18.6126L10 17.2792V5.38741L14 6.72074ZM4 6.72074L8 5.38741V17.2792L4 18.6126V6.72074Z"
                                fill="#667085"
                              />
                            </svg>
                            Peta Wilayah
                          </li>
                        </a>
                      </ul>
                    </div>
                    <div className="mt-1">
                      <ul>
                        <a href={"/test"} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-2"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.7857 8C10.7995 8 10 8.79948 10 9.78569V10.2273C10 10.7796 9.55228 11.2273 9 11.2273C8.44772 11.2273 8 10.7796 8 10.2273V9.78569C8 7.69491 9.69491 6 11.7857 6H11.9339C13.6089 6 15.0625 7.15543 15.4403 8.78721C15.8594 10.5966 14.8328 12.4278 13.0705 13.0143L12.9679 13.0484C12.8212 13.0973 12.7222 13.2345 12.7222 13.3891V14C12.7222 14.5523 12.2745 15 11.7222 15C11.1699 15 10.7222 14.5523 10.7222 14V13.3891C10.7222 12.3733 11.3725 11.4716 12.3363 11.1508L12.4389 11.1166C13.222 10.856 13.6781 10.0424 13.4919 9.23843C13.324 8.51339 12.6781 8 11.9339 8H11.7857Z"
                                fill="#667085"
                              />
                              <path
                                d="M11.75 16C12.3023 16 12.75 16.4477 12.75 17C12.75 17.5523 12.3023 18 11.75 18C11.1977 18 10.75 17.5523 10.75 17C10.75 16.4477 11.1977 16 11.75 16Z"
                                fill="#667085"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                                fill="#667085"
                              />
                            </svg>
                            Support
                          </li>
                        </a>
                        <a href={"/test"} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-2"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.9732 18.6594L17.0233 15.7096L15.0772 18.2868L14.3701 18.0077L14.3656 18.0059L14.3568 18.0024L14.3266 17.9902C14.301 17.9798 14.2647 17.9649 14.2187 17.9455C14.1266 17.9069 13.9955 17.8505 13.8334 17.7775C13.5097 17.6316 13.0601 17.4181 12.5508 17.145C11.5465 16.6064 10.2501 15.8046 9.2412 14.7957C8.23228 13.7868 7.43043 12.4904 6.89177 11.4859C6.61864 10.9766 6.40508 10.527 6.25921 10.2033C6.18616 10.0412 6.12978 9.91006 6.09111 9.818C6.07177 9.77196 6.05684 9.73564 6.04643 9.71008L6.03424 9.6799L6.03072 9.67109L6.02922 9.6673L5.74978 8.95947L8.32705 7.01328L5.37727 4.0635C4.79237 5.01929 4.03987 6.64469 4.03506 8.66566C4.03007 10.7615 4.82803 13.4138 7.72559 16.3113C10.6232 19.2089 13.2754 20.0068 15.3712 20.0017C17.3921 19.9969 19.0174 19.2443 19.9732 18.6594ZM8.19264 9.62095L9.53229 8.60934C10.5015 7.87749 10.6 6.45782 9.74127 5.59907L6.70516 2.56297C5.91561 1.77342 4.4906 1.73455 3.78703 2.83463C3.07493 3.94806 2.04137 6.0137 2.03506 8.6609C2.02867 11.3442 3.07862 14.4928 6.31137 17.7255C9.54415 20.9583 12.6927 22.0082 15.376 22.0017C18.0231 21.9954 20.0887 20.9617 21.2021 20.2496C22.3021 19.546 22.2632 18.121 21.4737 17.3315L18.4376 14.2954C17.5788 13.4366 16.1591 13.5352 15.4273 14.5043L14.4156 15.844C14.157 15.7228 13.8416 15.5677 13.496 15.3824C12.5597 14.8803 11.4615 14.1876 10.6554 13.3815C9.84928 12.5753 9.15651 11.4771 8.65431 10.5407C8.46896 10.1951 8.31387 9.87968 8.19264 9.62095Z"
                                fill="#667085"
                              />
                            </svg>
                            Phone
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div
                  onClick={() => setShowMenu(false)}
                  className="absolute top-0 left-0 w-full h-full bg-black opacity-25"
                ></div>
              </>
            ) : (
              <>
                <div className="fixed md:hidden top-0 left-[-294px] w-3/4 h-full p-4 bg-white text-black z-10 duration-300">
                  <div className="flex items-center p-2.5">
                    <svg
                      className="border rounded-full"
                      width="32"
                      height="32"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="white" />
                      <circle
                        cx="28"
                        cy="28"
                        r="5"
                        fill="#29CCB0"
                        stroke="#633CFC"
                        strokeWidth="2"
                      />
                    </svg>
                    <p className="ml-3">Kadek Frama</p>
                    <span
                      onClick={() => setShowMenu(false)}
                      className="absolute top-6 right-5 p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer shadow-md"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1725 9.99393C11.498 10.3194 11.498 10.847 11.1725 11.1724C10.8471 11.4979 10.3194 11.4979 9.994 11.1724L5.99995 7.17844L2.00601 11.1724C1.68058 11.4979 1.15294 11.4979 0.8275 11.1725C0.502061 10.847 0.502056 10.3194 0.82749 9.99394L4.82143 5.99994L0.827331 2.00591C0.501891 1.68047 0.501893 1.15284 0.827332 0.827405C1.15277 0.50197 1.68041 0.501969 2.00585 0.827404L5.99993 4.82142L9.99386 0.827418C10.3193 0.501978 10.8469 0.501975 11.1724 0.827409C11.4978 1.15284 11.4978 1.68048 11.1724 2.00592L7.17845 5.99992L11.1725 9.99393Z"
                          fill="#A3A9B5"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="flex flex-col justify-between h-[72%] md:h-[92%]">
                    <div className="mt-1">
                      <ul>
                        <a href={""} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 5.5C3 4.11929 4.11929 3 5.5 3H8.5C9.88071 3 11 4.11929 11 5.5V8.5C11 9.88071 9.88071 11 8.5 11H5.5C4.11929 11 3 9.88071 3 8.5V5.5ZM5.5 5H8.5C8.77614 5 9 5.22386 9 5.5V8.5C9 8.77614 8.77614 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5V5.5C5 5.22386 5.22386 5 5.5 5Z"
                                fill="#667085"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13 5.5C13 4.11929 14.1193 3 15.5 3H18.5C19.8807 3 21 4.11929 21 5.5V8.5C21 9.88071 19.8807 11 18.5 11H15.5C14.1193 11 13 9.88071 13 8.5V5.5ZM15.5 5H18.5C18.7761 5 19 5.22386 19 5.5V8.5C19 8.77614 18.7761 9 18.5 9H15.5C15.2239 9 15 8.77614 15 8.5V5.5C15 5.22386 15.2239 5 15.5 5Z"
                                fill="#667085"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.5 13C14.1193 13 13 14.1193 13 15.5V18.5C13 19.8807 14.1193 21 15.5 21H18.5C19.8807 21 21 19.8807 21 18.5V15.5C21 14.1193 19.8807 13 18.5 13H15.5ZM18.5 15H15.5C15.2239 15 15 15.2239 15 15.5V18.5C15 18.7761 15.2239 19 15.5 19H18.5C18.7761 19 19 18.7761 19 18.5V15.5C19 15.2239 18.7761 15 18.5 15Z"
                                fill="#667085"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 15.5C3 14.1193 4.11929 13 5.5 13H8.5C9.88071 13 11 14.1193 11 15.5V18.5C11 19.8807 9.88071 21 8.5 21H5.5C4.11929 21 3 19.8807 3 18.5V15.5ZM5.5 15H8.5C8.77614 15 9 15.2239 9 15.5V18.5C9 18.7761 8.77614 19 8.5 19H5.5C5.22386 19 5 18.7761 5 18.5V15.5C5 15.2239 5.22386 15 5.5 15Z"
                                fill="#667085"
                              />
                            </svg>
                            Dashboard
                          </li>
                        </a>
                        <a href={""} className="">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg bg-[#F0ECFF]">
                            <svg
                              className="mr-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4L8 4ZM10 4H14V6H10V4ZM16 6C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16Z"
                                fill="#643DFF"
                              />
                            </svg>
                            Data Gempa
                          </li>
                        </a>
                        <a href={""} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 3C4.55228 3 5 3.44772 5 4V19H20C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
                                fill="#667085"
                              />
                              <path
                                d="M19.832 8.55468C20.1384 8.09516 20.0142 7.47429 19.5547 7.16793C19.0952 6.86158 18.4743 6.98576 18.1679 7.44528L14.7543 12.5657L11.6 10.2C11.1407 9.85553 10.4864 9.96762 10.1679 10.4453L6.16793 16.4453C5.86158 16.9048 5.98576 17.5257 6.44528 17.832C6.90481 18.1384 7.52568 18.0142 7.83203 17.5547L11.2457 12.4342L14.4 14.8C14.8593 15.1444 15.5136 15.0324 15.832 14.5547L19.832 8.55468Z"
                                fill="#667085"
                              />
                            </svg>
                            Analisis
                          </li>
                        </a>
                        <a href={""} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-3"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9 3C9.15985 3 9.31094 3.03751 9.44495 3.1042C9.50806 3.1186 9.57063 3.1361 9.63246 3.15671L15 4.94589L19.3675 3.49004C20.6626 3.05836 22 4.02229 22 5.38741V17.2792C22 18.1401 21.4491 18.9044 20.6325 19.1766L15.6325 20.8433C15.5707 20.8639 15.5081 20.8813 15.4451 20.8957C15.311 20.9625 15.1599 21 15 21C14.8401 21 14.689 20.9625 14.5549 20.8957C14.4919 20.8813 14.4293 20.8639 14.3675 20.8433L9 19.0541L4.63246 20.5099C3.33739 20.9416 2 19.9777 2 18.6126V6.72074C2 5.85988 2.55086 5.09561 3.36754 4.82338L8.36754 3.15671C8.42937 3.1361 8.49194 3.1186 8.55505 3.1042C8.68906 3.03751 8.84015 3 9 3ZM16 18.6126L20 17.2792V5.38741L16 6.72074V18.6126ZM14 6.72074V18.6126L10 17.2792V5.38741L14 6.72074ZM4 6.72074L8 5.38741V17.2792L4 18.6126V6.72074Z"
                                fill="#667085"
                              />
                            </svg>
                            Peta Wilayah
                          </li>
                        </a>
                      </ul>
                    </div>
                    <div className="mt-1">
                      <ul>
                        <a href={"/test"} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-2"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.7857 8C10.7995 8 10 8.79948 10 9.78569V10.2273C10 10.7796 9.55228 11.2273 9 11.2273C8.44772 11.2273 8 10.7796 8 10.2273V9.78569C8 7.69491 9.69491 6 11.7857 6H11.9339C13.6089 6 15.0625 7.15543 15.4403 8.78721C15.8594 10.5966 14.8328 12.4278 13.0705 13.0143L12.9679 13.0484C12.8212 13.0973 12.7222 13.2345 12.7222 13.3891V14C12.7222 14.5523 12.2745 15 11.7222 15C11.1699 15 10.7222 14.5523 10.7222 14V13.3891C10.7222 12.3733 11.3725 11.4716 12.3363 11.1508L12.4389 11.1166C13.222 10.856 13.6781 10.0424 13.4919 9.23843C13.324 8.51339 12.6781 8 11.9339 8H11.7857Z"
                                fill="#667085"
                              />
                              <path
                                d="M11.75 16C12.3023 16 12.75 16.4477 12.75 17C12.75 17.5523 12.3023 18 11.75 18C11.1977 18 10.75 17.5523 10.75 17C10.75 16.4477 11.1977 16 11.75 16Z"
                                fill="#667085"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                                fill="#667085"
                              />
                            </svg>
                            Support
                          </li>
                        </a>
                        <a href={"/test"} className="text-[#667085]">
                          <li className="flex items-center text-sm font-bold p-3 rounded-lg">
                            <svg
                              className="mr-2"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.9732 18.6594L17.0233 15.7096L15.0772 18.2868L14.3701 18.0077L14.3656 18.0059L14.3568 18.0024L14.3266 17.9902C14.301 17.9798 14.2647 17.9649 14.2187 17.9455C14.1266 17.9069 13.9955 17.8505 13.8334 17.7775C13.5097 17.6316 13.0601 17.4181 12.5508 17.145C11.5465 16.6064 10.2501 15.8046 9.2412 14.7957C8.23228 13.7868 7.43043 12.4904 6.89177 11.4859C6.61864 10.9766 6.40508 10.527 6.25921 10.2033C6.18616 10.0412 6.12978 9.91006 6.09111 9.818C6.07177 9.77196 6.05684 9.73564 6.04643 9.71008L6.03424 9.6799L6.03072 9.67109L6.02922 9.6673L5.74978 8.95947L8.32705 7.01328L5.37727 4.0635C4.79237 5.01929 4.03987 6.64469 4.03506 8.66566C4.03007 10.7615 4.82803 13.4138 7.72559 16.3113C10.6232 19.2089 13.2754 20.0068 15.3712 20.0017C17.3921 19.9969 19.0174 19.2443 19.9732 18.6594ZM8.19264 9.62095L9.53229 8.60934C10.5015 7.87749 10.6 6.45782 9.74127 5.59907L6.70516 2.56297C5.91561 1.77342 4.4906 1.73455 3.78703 2.83463C3.07493 3.94806 2.04137 6.0137 2.03506 8.6609C2.02867 11.3442 3.07862 14.4928 6.31137 17.7255C9.54415 20.9583 12.6927 22.0082 15.376 22.0017C18.0231 21.9954 20.0887 20.9617 21.2021 20.2496C22.3021 19.546 22.2632 18.121 21.4737 17.3315L18.4376 14.2954C17.5788 13.4366 16.1591 13.5352 15.4273 14.5043L14.4156 15.844C14.157 15.7228 13.8416 15.5677 13.496 15.3824C12.5597 14.8803 11.4615 14.1876 10.6554 13.3815C9.84928 12.5753 9.15651 11.4771 8.65431 10.5407C8.46896 10.1951 8.31387 9.87968 8.19264 9.62095Z"
                                fill="#667085"
                              />
                            </svg>
                            Phone
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Content */}

            <div className="flex flex-col gap-6">
              {/* Head Bar */}
              <div className="flex justify-between items-center py-2">
                <p className="text-xl md:text-2xl">Data Gempa</p>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="rounded-full p-1 active:bg-gray-200 md:hover:bg-gray-200"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM18.3334 6H5.6667L11.4 10.3C11.7556 10.5667 12.2445 10.5667 12.6 10.3L18.3334 6ZM4 7.24998V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V7.25002L13.8 11.9C12.7334 12.7 11.2667 12.7 10.2 11.9L4 7.24998Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="ml-4 rounded-full p-1 active:bg-gray-200 md:hover:bg-gray-200"
                  >
                    <svg
                      className="animate-[bounce_1.5s_infinite] hover:animate-none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V3.57088C7.60769 4.0561 4.99997 6.97352 4.99997 10.5V15.5L4.28237 16.7558C3.71095 17.7558 4.433 19 5.58474 19H8.12602C8.57006 20.7252 10.1362 22 12 22C13.8638 22 15.4299 20.7252 15.874 19H18.4152C19.5669 19 20.289 17.7558 19.7176 16.7558L19 15.5V10.5C19 6.97354 16.3923 4.05614 13 3.57089V3ZM6.99997 16.0311L6.44633 17H17.5536L17 16.0311V10.5C17 7.73858 14.7614 5.5 12 5.5C9.23854 5.5 6.99997 7.73858 6.99997 10.5V16.0311ZM12 20C11.2597 20 10.6134 19.5978 10.2676 19H13.7324C13.3866 19.5978 12.7403 20 12 20Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-white text-xs absolute top-4 ml-2 px-2 py-0.5 rounded-full bg-[#EC3131]">
                      12
                    </p>
                  </a>

                  {/* divider */}
                  <svg
                    className="ml-6 hidden md:flex"
                    width="2"
                    height="24"
                    viewBox="0 0 2 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 0V24" stroke="#C2C6CE" />
                  </svg>

                  <a
                    onClick={handleMenu}
                    className="flex md:hidden rounded-full p-1 ml-5 active:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      color="white"
                      class="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                      />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="hidden md:flex items-center ml-6 rounded hover:bg-gray-200"
                  >
                    <svg
                      className="animate-pulse"
                      width="32"
                      height="32"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="16" fill="white" />
                      <circle
                        cx="28"
                        cy="28"
                        r="5"
                        fill="#29CCB0"
                        stroke="#633CFC"
                        strokeWidth="2"
                      />
                    </svg>
                    <p className="text-white text-xs mx-2">Kadek Frama</p>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5893 0.910749C11.2638 0.585313 10.7362 0.585313 10.4108 0.910749L6.00001 5.32149L1.58926 0.910749C1.26382 0.585313 0.736186 0.585313 0.41075 0.910749C0.0853124 1.23619 0.0853124 1.76382 0.41075 2.08926L5.70538 7.38389C5.8681 7.54661 6.13191 7.54661 6.29463 7.38389L11.5893 2.08926C11.9147 1.76382 11.9147 1.23619 11.5893 0.910749Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[112px]">
                <div className="flex flex-col justify-center p-4 bg-white rounded-lg text-black border w-full shadow-md shadow-gray-200">
                  <p className="flex items-center text-sm">
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#643DFF" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.33329 6.66667C9.33329 5.93029 9.93025 5.33333 10.6666 5.33333H13.3333C14.0697 5.33333 14.6666 5.93029 14.6666 6.66667H15.3333C16.4379 6.66667 17.3333 7.5621 17.3333 8.66667V16.6667C17.3333 17.7712 16.4379 18.6667 15.3333 18.6667H8.66663C7.56206 18.6667 6.66663 17.7712 6.66663 16.6667V8.66667C6.66663 7.5621 7.56206 6.66667 8.66663 6.66667L9.33329 6.66667ZM10.6666 6.66667H13.3333V8H10.6666V6.66667ZM14.6666 8C14.6666 8.73638 14.0697 9.33333 13.3333 9.33333H10.6666C9.93025 9.33333 9.33329 8.73638 9.33329 8H8.66663C8.29844 8 7.99996 8.29848 7.99996 8.66667V16.6667C7.99996 17.0349 8.29844 17.3333 8.66663 17.3333H15.3333C15.7015 17.3333 16 17.0349 16 16.6667V8.66667C16 8.29848 15.7015 8 15.3333 8H14.6666Z"
                        fill="white"
                      />
                    </svg>
                    Total Data
                  </p>
                  <p className="text-xl font-semibold mt-2">15</p>
                </div>

                <div className="flex flex-col justify-center p-4 bg-white rounded-lg text-black border md:w-full shadow-md shadow-gray-200">
                  <p className="flex items-center text-sm">
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#00A6FF" />
                      <path
                        d="M8.47145 11.8047C8.2111 12.0651 7.78899 12.0651 7.52864 11.8047C7.26829 11.5444 7.26829 11.1223 7.52864 10.8619L11.7643 6.62623C11.8945 6.49605 12.1056 6.49605 12.2357 6.62623L16.4714 10.8619C16.7318 11.1223 16.7318 11.5444 16.4714 11.8047C16.2111 12.0651 15.789 12.0651 15.5286 11.8047L12.6667 8.94281V16.6667C12.6667 17.0349 12.3682 17.3333 12 17.3333C11.6319 17.3333 11.3334 17.0349 11.3334 16.6667V8.94281L8.47145 11.8047Z"
                        fill="white"
                      />
                    </svg>
                    Tertinggi
                  </p>
                  <p className="text-xl font-semibold mt-2">2.4 Mag</p>
                </div>

                <div className="flex flex-col justify-center p-4 bg-white rounded-lg text-black border md:w-full shadow-md shadow-gray-200">
                  <p className="flex items-center text-sm">
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#EC3131" />
                      <path
                        d="M12.6666 15.0572L15.5286 12.1953C15.7889 11.9349 16.211 11.9349 16.4714 12.1953C16.7317 12.4556 16.7317 12.8777 16.4714 13.1381L12.2357 17.3738C12.1055 17.5039 11.8945 17.5039 11.7643 17.3738L7.52858 13.1381C7.26823 12.8777 7.26823 12.4556 7.52858 12.1953C7.78892 11.9349 8.21103 11.9349 8.47138 12.1953L11.3333 15.0572V7.33333C11.3333 6.96514 11.6318 6.66667 12 6.66667C12.3682 6.66667 12.6666 6.96514 12.6666 7.33333V15.0572Z"
                        fill="white"
                      />
                    </svg>
                    Rata-rata Kedalaman
                  </p>
                  <p className="text-xl font-semibold mt-2">4.5 Km</p>
                </div>
                <div className="flex flex-col justify-center p-4 bg-white rounded-lg text-black border md:w-full shadow-md shadow-gray-200">
                  <p className="flex items-center text-sm">
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="12" fill="#FC9532" />
                      <path
                        d="M14.6444 12.465C14.9012 12.2011 14.8955 11.7791 14.6317 11.5223C14.3678 11.2655 13.9458 11.2712 13.6889 11.535L11.5158 13.7678L10.5837 13.0206C10.2964 12.7903 9.87682 12.8365 9.64652 13.1238C9.41623 13.411 9.46243 13.8306 9.74971 14.0609L11.3905 15.3762C11.5244 15.4836 11.7181 15.4716 11.8378 15.3486L14.6444 12.465Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.33333 5.33333C9.70152 5.33333 10 5.63181 10 6H14C14 5.63181 14.2985 5.33333 14.6667 5.33333C15.0349 5.33333 15.3333 5.63181 15.3333 6H16C17.1046 6 18 6.89543 18 8V16.6667C18 17.7712 17.1046 18.6667 16 18.6667H8C6.89543 18.6667 6 17.7712 6 16.6667V8C6 6.89543 6.89543 6 8 6H8.66667C8.66667 5.63181 8.96514 5.33333 9.33333 5.33333ZM16.6667 8V8.66667H7.33333V8C7.33333 7.63181 7.63181 7.33333 8 7.33333H8.66667C8.66667 7.70152 8.96514 8 9.33333 8C9.70152 8 10 7.70152 10 7.33333H14C14 7.70152 14.2985 8 14.6667 8C15.0349 8 15.3333 7.70152 15.3333 7.33333H16C16.3682 7.33333 16.6667 7.63181 16.6667 8ZM7.33333 16.6667V10H16.6667V16.6667C16.6667 17.0349 16.3682 17.3333 16 17.3333H8C7.63181 17.3333 7.33333 17.0349 7.33333 16.6667Z"
                        fill="white"
                      />
                    </svg>
                    Terbaru
                  </p>
                  <p className="text-xl font-semibold mt-2">28 Mar 2023</p>
                </div>
              </div>

              {/* Table Section */}
              <div className="text-black bg-white rounded-lg border min-h-[90%] md:min-h-[61%] shadow-lg shadow-gray-200 mt-28 md:mt-0 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs uppercase dark:text-gray-400">
                    <tr className="items-center border-b-2 border-gray-100 rounded-lg  text-gray-400">
                      <th scope="col" class="px-6 py-3">
                        No
                      </th>
                      <th scope="col" class="flex px-6 py-3">
                        Tanggal
                        <svg
                          className="ml-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.8047 9.5286C11.5444 9.26825 11.1223 9.26825 10.8619 9.5286L8 12.3905L5.13807 9.5286C4.87772 9.26825 4.45561 9.26825 4.19526 9.5286C3.93491 9.78894 3.93491 10.2111 4.19526 10.4714L7.5286 13.8047C7.78895 14.0651 8.21105 14.0651 8.4714 13.8047L11.8047 10.4714C12.0651 10.2111 12.0651 9.78894 11.8047 9.5286Z"
                            fill="#333843"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.8047 6.4714C11.5444 6.73175 11.1223 6.73175 10.8619 6.4714L8 3.60948L5.13807 6.4714C4.87772 6.73175 4.45561 6.73175 4.19526 6.4714C3.93491 6.21106 3.93491 5.78895 4.19526 5.5286L7.5286 2.19526C7.78895 1.93491 8.21105 1.93491 8.4714 2.19526L11.8047 5.5286C12.0651 5.78895 12.0651 6.21106 11.8047 6.4714Z"
                            fill="#A3A9B6"
                          />
                        </svg>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Jam
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Coordinate
                      </th>
                      <th scope="col" className="flex px-6 py-3">
                        Magnitudo
                        <svg
                          className="ml-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.8047 9.5286C11.5444 9.26825 11.1223 9.26825 10.8619 9.5286L8 12.3905L5.13807 9.5286C4.87772 9.26825 4.45561 9.26825 4.19526 9.5286C3.93491 9.78894 3.93491 10.2111 4.19526 10.4714L7.5286 13.8047C7.78895 14.0651 8.21105 14.0651 8.4714 13.8047L11.8047 10.4714C12.0651 10.2111 12.0651 9.78894 11.8047 9.5286Z"
                            fill="#333843"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.8047 6.4714C11.5444 6.73175 11.1223 6.73175 10.8619 6.4714L8 3.60948L5.13807 6.4714C4.87772 6.73175 4.45561 6.73175 4.19526 6.4714C3.93491 6.21106 3.93491 5.78895 4.19526 5.5286L7.5286 2.19526C7.78895 1.93491 8.21105 1.93491 8.4714 2.19526L11.8047 5.5286C12.0651 5.78895 12.0651 6.21106 11.8047 6.4714Z"
                            fill="#A3A9B6"
                          />
                        </svg>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Kedalaman
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Wilayah
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {dataGempa.length != 0 &&
                      dataGempa
                        .filter((result, index) => {
                          return index >= limitAwal && index < limitAwal + 10;
                        })
                        .map((result, index) => {
                          return (
                            <tr
                              key={index + 1}
                              onClick={() => {
                                setShowDetail(!showDetail);
                                setDataDetail({
                                  tanggal: result.Tanggal,
                                  jam: result.Jam,
                                  datetime: result.DateTime,
                                  coordinates: result.Coordinates,
                                  lintang: result.Lintang,
                                  bujur: result.Bujur,
                                  magnitude: result.Magnitude,
                                  kedalaman: result.Kedalaman,
                                  wilayah: result.Wilayah,
                                  dirasakan: result.Dirasakan,
                                });
                              }}
                              className="bg-white dark:bg-gray-800 hover:bg-[#F3F0FF] cursor-pointer !text-black text-sm"
                            >
                              <td className="px-6 py-2 font-medium">
                                {index + 1}
                              </td>
                              <td className="px-6 py-2 font-medium">
                                {result.Tanggal}
                              </td>
                              <td className="px-6 py-2 font-medium">
                                {result.Jam}
                              </td>
                              <td className="px-6 py-2 font-medium">
                                {result.Coordinates}
                              </td>
                              <td className="px-6 py-2 font-medium">
                                {result.Magnitude}
                              </td>
                              <td className="px-6 py-2 font-medium">
                                {result.Kedalaman}
                              </td>
                              <td className="px-6 py-2 font-medium">
                                {result.Wilayah}
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>

              {/* Pagination Section */}
              <div className="flex justify-between items-center text-black px-2 md:px-0">
                <p className="flex items-center font-medium text-[#667085]">
                  Show
                  <span className="text-[#3e434d] text-xs font-medium rounded-lg px-2.5 py-2 mx-2 border">
                    10
                  </span>{" "}
                  from 15
                </p>
                <div className="flex">
                  <button
                    onClick={previousPage}
                    className="px-3 py-2 mr-2 bg-[#F0ECFF]"
                  >
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.6726 0.410765C6.99804 0.736202 6.99804 1.26384 6.6726 1.58928L2.26186 6.00002L6.6726 10.4108C6.99804 10.7362 6.99804 11.2638 6.6726 11.5893C6.34716 11.9147 5.81953 11.9147 5.49409 11.5893L0.199462 6.29465C0.0367436 6.13193 0.0367434 5.86811 0.199462 5.70539L5.49409 0.410765C5.81953 0.0853278 6.34716 0.0853278 6.6726 0.410765Z"
                        fill="#643DFF"
                      />
                    </svg>
                  </button>
                  <p
                    className={`text-xs rounded-lg px-3 py-2 border mr-1 ${page1}`}
                  >
                    1
                  </p>
                  <p className={`text-xs rounded-lg px-3 py-2 border ${page2}`}>
                    2
                  </p>
                  <button
                    onClick={nextPage}
                    className="px-3 py-2 ml-2 bg-[#F0ECFF]"
                  >
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.327406 0.410765C0.00196911 0.736202 0.00196911 1.26384 0.327406 1.58928L4.73815 6.00002L0.327406 10.4108C0.00196911 10.7362 0.00196911 11.2638 0.327406 11.5893C0.652843 11.9147 1.18048 11.9147 1.50592 11.5893L6.80054 6.29465C6.96326 6.13193 6.96326 5.86811 6.80054 5.70539L1.50592 0.410765C1.18048 0.0853278 0.652843 0.0853278 0.327406 0.410765Z"
                        fill="#643DFF"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Section */}
        {showDetail ? (
          <>
            <div className="fixed p-6 top-0 right-0 z-10 w-[100%] md:w-1/4 h-full bg-white text-black duration-300">
              <div className="">
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#333843] text-xl font-semibold">Detail</p>
                  <span
                    onClick={() => setShowDetail(false)}
                    className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer shadow-md"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1725 9.99393C11.498 10.3194 11.498 10.847 11.1725 11.1724C10.8471 11.4979 10.3194 11.4979 9.994 11.1724L5.99995 7.17844L2.00601 11.1724C1.68058 11.4979 1.15294 11.4979 0.8275 11.1725C0.502061 10.847 0.502056 10.3194 0.82749 9.99394L4.82143 5.99994L0.827331 2.00591C0.501891 1.68047 0.501893 1.15284 0.827332 0.827405C1.15277 0.50197 1.68041 0.501969 2.00585 0.827404L5.99993 4.82142L9.99386 0.827418C10.3193 0.501978 10.8469 0.501975 11.1724 0.827409C11.4978 1.15284 11.4978 1.68048 11.1724 2.00592L7.17845 5.99992L11.1725 9.99393Z"
                        fill="#A3A9B5"
                      />
                    </svg>
                  </span>
                </div>
                <hr className="my-4"></hr>
                <div className="w-full">
                  <div className="text-sm md:text-sm font-medium">
                    <p className="text-[#858D9D] mb-1">Tanggal</p>
                    <p>{dataDetail.tanggal}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Jam</p>
                    <p>{dataDetail.jam}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Date Time</p>
                    <p>{dataDetail.datetime}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Koordinat</p>
                    <p>{dataDetail.coordinates}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Lintang</p>
                    <p>{dataDetail.lintang}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Bujur</p>
                    <p>{dataDetail.bujur}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Magnitudo</p>
                    <p>{dataDetail.magnitude} Mag</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Kedalaman</p>
                    <p>{dataDetail.kedalaman}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4 border7">
                    <p className="text-[#858D9D] mb-1">Wilayah</p>
                    <p>{dataDetail.wilayah}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Dirasakan</p>
                    <p>{dataDetail.dirasakan}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div
              onClick={() => setShowDetail(false)}
              className="absolute top-0 left-0 w-full h-full bg-black opacity-25"
            ></div>
          </>
        ) : (
          <>
            <div className="fixed invisible top-0 right-[-400px] md:right-[-486px] z-10 w-[90%] md:w-1/4 h-full bg-white text-black duration-300">
              <div className="">
                <div className="flex items-center justify-between w-full">
                  <p className="text-xl font-semibold">Detail</p>
                  <span
                    onClick={() => setShowDetail(false)}
                    className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1725 9.99393C11.498 10.3194 11.498 10.847 11.1725 11.1724C10.8471 11.4979 10.3194 11.4979 9.994 11.1724L5.99995 7.17844L2.00601 11.1724C1.68058 11.4979 1.15294 11.4979 0.8275 11.1725C0.502061 10.847 0.502056 10.3194 0.82749 9.99394L4.82143 5.99994L0.827331 2.00591C0.501891 1.68047 0.501893 1.15284 0.827332 0.827405C1.15277 0.50197 1.68041 0.501969 2.00585 0.827404L5.99993 4.82142L9.99386 0.827418C10.3193 0.501978 10.8469 0.501975 11.1724 0.827409C11.4978 1.15284 11.4978 1.68048 11.1724 2.00592L7.17845 5.99992L11.1725 9.99393Z"
                        fill="#A3A9B5"
                      />
                    </svg>
                  </span>
                </div>
                <hr className="my-4"></hr>
                <div className="w-full">
                  <div className="text-sm md:text-sm font-medium">
                    <p className="text-[#858D9D] mb-1">Tanggal</p>
                    <p>{dataDetail.tanggal}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Jam</p>
                    <p>{dataDetail.jam}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Date Time</p>
                    <p>{dataDetail.datetime}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Koordinat</p>
                    <p>{dataDetail.coordinates}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Lintang</p>
                    <p>{dataDetail.lintang} LU</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Bujur</p>
                    <p>{dataDetail.bujur} BT</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Magnitudo</p>
                    <p>{dataDetail.magnitude} Mag</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Kedalaman</p>
                    <p>{dataDetail.kedalaman} Km</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4 border7">
                    <p className="text-[#858D9D] mb-1">Wilayah</p>
                    <p>{dataDetail.wilayah}</p>
                  </div>
                  <div className="text-sm md:text-sm font-medium mt-4">
                    <p className="text-[#858D9D] mb-1">Dirasakan</p>
                    <p>{dataDetail.dirasakan}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* footer */}
      {/* <footer>test footer</footer> */}
    </Fragment>
  );
}

export default App;
