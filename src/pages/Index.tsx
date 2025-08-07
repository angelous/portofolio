import { Navigation } from "../components/Navigation";

export default function Index() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <div className="absolute top-8 md:top-16 right-4 md:right-16 z-10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col min-h-screen px-8 md:px-16 lg:px-[73px]">
        <div className="max-w-6xl mb-40">
          <h1 className="font-hammersmith text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] leading-none text-black mb-4 lg:mb-8 mt-60">
            Hi!
          </h1>
          <h2 className="font-hammersmith text-[60px] sm:text-[100px] md:text-[135px] lg:text-[170px] leading-none text-black mb-15">
            I'm Angela
          </h2>
          <p className="font-hanken text-base md:text-lg font-medium text-black max-w-[510px] leading-normal ml-4">
            I'm a computer science student with a strong interest in web development, machine learning, and creative problem-solving.
          </p>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1">
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
          <path d="M2 2L12 12" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 2L12 12" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L12 12" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 2L12 12" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div> */}
    </div>
  );
}