import Button from "../LandingPage/components/Button";

export default function BusinessInvestorForm() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:w-1/2">
        <img
          src="/buisness.jpg"
          alt=""
          className="h-[390px] w-full  object-cover  rounded-br-[1000px] lg:rounded-none lg:min-h-screen "
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="font-nanum text-center text-2xl font-bold mt-5 lg:mt-10 lg:text-2xl ">
          Business Registration Form
        </h1>
        <div className="pl-7 lg:px-9">
          <div className="flex mt-9">
            <h2 className="">Business Information</h2>
            <p className="text-brickRed">*</p>
          </div>
          <form action="" className=" space-y-7 flex flex-col mb-10 ">
            <input
              type="text"
              placeholder="Business name"
              className="bg-inputGrey mt-3 w-[345px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px]"
            />
            <input
              type="email"
              placeholder="Business email address"
              className="bg-inputGrey w-[345px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px]"
            />
            <input
              type="text"
              placeholder="Business phone number"
              className="bg-inputGrey w-[345px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px]"
            />

            <input
              type="text"
              placeholder="Industry/Sector"
              className="bg-inputGrey w-[345px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] "
            />
            <label htmlFor="Date of establishment">Date of establishment</label>
            <input
              type="date"
              placeholder="Date of establishment"
              className="bg-inputGrey w-[345px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] "
            />
            <Button
              text="Next"
              variant="bg-purple w-[200px] text-center py-2 px-2 mx-auto text-white font-naunum mt-10 "
            />
          </form>
        </div>
      </div>
    </div>
  );
}
