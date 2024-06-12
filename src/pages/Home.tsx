import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiUrl from "../../api";
import heroImage from "../assets/hero.jpg";
import aboutImage from "../assets/about.jpg";
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await apiUrl.post("/member", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });


      if (response.status == 200) {
        toast.success("ምዘባዎ ተሳክቷል! እናመሰግናለን!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
      } else {
        toast.error("ምዝገባዎ አልተሳካም!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("ምዝገባዎ አልተሳካም!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Error:", error);
    }
  };
  return (
    <>
      <section className=" lg:py-10 py-10  bg-center bg-cover mb-4">
        <div
          className="absolute inset-0 h-[750px]"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        ></div>
        <div className=" relative z-1">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <div className="">
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
                  የጎንደር ኢስላማዊ ማህበር
                </h4>
                <p className="text-white/75 text-lg max-w-xl">
                  ይህ የጎንደር ኢስላማዊ ማህበር የአባል መመዝገቢያ እና መረጃዎችን ማጋሪያ ድረገጽ ሲሆን፣ ድረገጹን
                  እያስተካለን እን እያሰፋን እነሄዳለን።
                </p>

                <div className="mt-6">
                  <a
                    href="#"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    ስለ እኛ
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="p-6 rounded-lg border-t-8 border-indigo-600 bg-white  shadow-lg ">
                <div className="mb-4 text-center">
                  <h4 className="font-bold lg:leading-normal leading-normal text-3xl mb-2">
                    አባል ይሁኑ
                  </h4>
                  <p className="text-slate-400">
                    የጎንደር ኢስላማዊ ማህበር አባል ለመሆን የህን ቅጽ ይሙሉ
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1">
                    <div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                          placeholder="ስም"
                          {...register("first_name", { required: true })}
                        />
                        {errors.first_name && (
                          <span>This field is required</span>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                          placeholder="የአባት ስም"
                          {...register("middle_name", { required: true })}
                        />
                        {errors.middle_name && (
                          <span>This field is required</span>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                          placeholder="የአያት ስም"
                          {...register("last_name", { required: true })}
                        />
                        {errors.last_name && (
                          <span>This field is required</span>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                          placeholder="አድራሻ"
                          {...register("address", { required: true })}
                        />
                        {errors.address && <span>This field is required</span>}
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-indigo-600 focus:ring-0"
                          placeholder="ስልክ ቁጥር"
                          {...register("phone_number", { required: true })}
                        />
                        {errors.phone && <span>This field is required</span>}
                      </div>
                    </div>

                    <div className="mb-5">
                      <input
                        type="submit"
                        className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                        value="ይመዝገቡ"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative bg-indigo-600 py-12">
        <div className="container relative">
          <div className="relative grid md:grid-cols-4 grid-cols-2 items-center gap-[30px]">
            <div className="counter-box text-center">
              <h1 className="text-4xl font-bold mb-4 text-white">
                <span className="counter-value" data-target="100">
                  1
                </span>
                M
              </h1>
              <h5 className="counter-head text-xs font-semibold text-white">
                PEOPLE FACING FOOD INSECURITY
              </h5>
            </div>

            <div className="counter-box text-center">
              <h1 className="text-4xl font-bold mb-4 text-white">
                <span className="counter-value" data-target="152">
                  2
                </span>
                M
              </h1>
              <h5 className="counter-head text-xs font-semibold text-white">
                PEOPLE WFP AIMS TO REACH IN 2022
              </h5>
            </div>

            <div className="counter-box text-center">
              <h1 className="text-4xl font-bold mb-4 text-white">
                $
                <span className="counter-value" data-target="1500">
                  0
                </span>
                M
              </h1>
              <h5 className="counter-head text-xs font-semibold text-white">
                WFP'S FUNDING NEEDS IN 2022
              </h5>
            </div>

            <div className="counter-box text-center">
              <h1 className="text-4xl font-bold mb-4 text-white">
                <span className="counter-value" data-target="29">
                  0
                </span>
                M
              </h1>
              <h5 className="counter-head text-xs font-semibold text-white">
                MEALS DISTRIBUTED WORLDWIDE
              </h5>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6">
              <div className="lg:me-8">
                <img
                  src={aboutImage}
                  className="rounded-full shadow-lg "
                  alt=""
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="lg:ms-8">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  ስለ እኛ
                </h6>
                <h3 className="mb-6 md:text-3xl md:leading-normal text-base leading-normal text-indigo-600 font-semibold">
                  የጎንደር ኢስላማዊ ማህበር
                </h3>
                <p className="text-slate-400 max-w-xl mb-6">
                  በሃገር ዉስጥ እና ከሃገር ዉጭ ያሉትን የጎንደር ወጣቶች ለማሰስባሰብ፣ መረጃ ለመለለዋወጥ እና
                  ለመወያየት ያለመ የአባል ምዝገባ ላየ ያተኮረ ሲሆን በሂደት የተላያዩ ተግባራት የሚከወኑበት ማህበር
                  ይሆናል።
                </p>

                {/* <p className="text-slate-400 max-w-xl mb-6">
                  We’re focused on providing affordable volunteer travel
                  experiences that are responsible. Our programs heighten global
                  awareness and cultural understanding through the skills and
                  expertise taken by volunteers to their host communities, and
                  through the experiences and lessons that volunteers take back
                  to their own countries and cultures.
                </p> */}

                {/* <a
                  href="#"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  Donate Now
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-indigo-600 ">
              አላማችን
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              በአራት የጎንደር ዞኖችና በሁለት የከተማ አስተዳደሮች የመስጅድ ግንባታ ፕሮጀክቶችን መደገፍ፣ የቁርአን
              አቅርቦትና የመድረሳ ግንባታ ላይ መሳተፍ፣ ደረጃውን የጠበቀ የጀናዛ ማጠቢያ መስራትና አስፈላጊ ቁሳቁስ
              ማሟላት ነው።
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group relative rounded hover:-mt-1 shadow hover:shadow-md  overflow-hidden duration-300">
              <div className="relative overflow-hidden">
                <img src="assets/images/charity/cause01.jpg" alt="" />

                <div className="absolute p-4 start-0 end-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 duration-300">
                  {/* <a
                    href="#"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Donate Now
                  </a> */}
                </div>
              </div>

              <div className="p-6">
                <a
                  href="#"
                  className="hover:text-indigo-600 text-lg font-semibold text-indigo-600 "
                >
                  በመስጅድ ግንባታ{" "}
                </a>
                <p className="text-slate-400 mt-2">
                  የተለያዩ የጎንደር አካባቢዎች ላይ የመስጂድ ግንባታ እና እድሳት ለማድረግ
                </p>

                {/* <div className="mt-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-slate-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-100  rounded-full h-[6px]">
                    <div
                      className="bg-indigo-600 h-[6px] rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <ul className="flex list-none justify-between mt-3 mb-2">
                    <li className="font-semibold">
                      <span className="text-indigo-600">Raised: </span>
                      <span>$4500</span>
                    </li>
                    <li className="text-indigo-600 font-semibold">
                      <span>Goal: </span>
                      <span>$10000</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            <div className="group relative rounded hover:-mt-1 shadow hover:shadow-md  overflow-hidden duration-300">
              <div className="relative overflow-hidden">
                <img src="assets/images/charity/cause02.jpg" alt="" />

                <div className="absolute p-4 start-0 end-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 duration-300">
                  {/* <a
                    href="#"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Donate Now
                  </a> */}
                </div>
              </div>

              <div className="p-6">
                <a
                  href="#"
                  className="hover:text-indigo-600 text-lg font-semibold text-indigo-600 "
                >
                  የቁርኣን ስርጭት እና የመድረሳዎች ድጋፍ{" "}
                </a>
                <p className="text-slate-400 mt-2">
                  ቁርኣኖችን ለማሰራጨት እና መድረሳዎችን በህሳብም ሆነ በቁስ ለመደገፍ
                </p>

                {/* <div className="mt-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-slate-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-100  rounded-full h-[6px]">
                    <div
                      className="bg-indigo-600 h-[6px] rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <ul className="flex list-none justify-between mt-3 mb-2">
                    <li className="font-semibold">
                      <span className="text-indigo-600">Raised: </span>
                      <span>$4500</span>
                    </li>
                    <li className="text-indigo-600 font-semibold">
                      <span>Goal: </span>
                      <span>$10000</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            <div className="group relative rounded hover:-mt-1 shadow hover:shadow-md  overflow-hidden duration-300">
              <div className="relative overflow-hidden">
                <img src="assets/images/charity/cause03.jpg" alt="" />

                <div className="absolute p-4 start-0 end-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 duration-300">
                  {/* <a
                    href="#"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Donate Now
                  </a> */}
                </div>
              </div>

              <div className="p-6">
                <a
                  href="#"
                  className="hover:text-indigo-600 text-lg font-semibold text-indigo-600 "
                >
                  በጀናዛ እጥበትና ተያያዥ ጉዳዮች{" "}
                </a>
                <p className="text-slate-400 mt-2">
                  ዘላቂ እና ጥራቱን የተበቀ የጀናዛ ማተቢያ ስፍራ በተለያዩ የጎንደር አካባቢዎች ማዘጋጀት
                </p>

                {/*<div className="mt-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-slate-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-100  rounded-full h-[6px]">
                    <div
                      className="bg-indigo-600 h-[6px] rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <ul className="flex list-none justify-between mt-3 mb-2">
                    <li className="font-semibold">
                      <span className="text-indigo-600">Raised: </span>
                      <span>$4500</span>
                    </li>
                    <li className="text-indigo-600 font-semibold">
                      <span>Goal: </span>
                      <span>$10000</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Home;
