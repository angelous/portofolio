import { Navigation } from '../components/Navigation';

export function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-8 md:top-16 right-4 md:right-16 z-10">
        <Navigation />
      </div>

      {/* CAteriNgz Project */}
      <section className="py-24 px-4 md:px-16 mt-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title & Description */}
          <div>
            <h1 className="font-hammersmith text-[60px] md:text-[100px] text-black mb-4">
              CAteriNgz Website
            </h1>
            <p className="font-hanken text-lg font-medium text-black mb-1">
              Responsive website for fictional catering business with product listings, testimonials, and registration form.
            </p>
            {/* GitHub Icon */}
            <a
              href="https://github.com/yourusername/cateringz-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 group"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="transition-colors"
              >
                <path
                  d="M20 0C17.3736 0 14.7728 0.530159 12.3463 1.56021C9.91982 2.59025 7.71504 4.10002 5.85786 6.0033C2.10714 9.84714 0 15.0605 0 20.4965C0 29.556 5.74 37.2422 13.68 39.9683C14.68 40.1322 15 39.4968 15 38.9434V35.4795C9.46 36.7093 8.28 32.733 8.28 32.733C7.36 30.3554 6.06 29.72 6.06 29.72C4.24 28.4492 6.2 28.4902 6.2 28.4902C8.2 28.6337 9.26 30.6013 9.26 30.6013C11 33.7168 13.94 32.7945 15.08 32.3025C15.26 30.9703 15.78 30.0684 16.34 29.556C11.9 29.0436 7.24 27.2809 7.24 19.4717C7.24 17.1966 8 15.3724 9.3 13.9172C9.1 13.4047 8.4 11.2731 9.5 8.50606C9.5 8.50606 11.18 7.95266 15 10.5967C16.58 10.1458 18.3 9.92033 20 9.92033C21.7 9.92033 23.42 10.1458 25 10.5967C28.82 7.95266 30.5 8.50606 30.5 8.50606C31.6 11.2731 30.9 13.4047 30.7 13.9172C32 15.3724 32.76 17.1966 32.76 19.4717C32.76 27.3014 28.08 29.0231 23.62 29.5355C24.34 30.1709 25 31.4212 25 33.3274V38.9434C25 39.4968 25.32 40.1527 26.34 39.9683C34.28 37.2217 40 29.556 40 20.4965C40 17.8049 39.4827 15.1396 38.4776 12.6529C37.4725 10.1661 35.9993 7.90658 34.1421 6.0033C32.285 4.10002 30.0802 2.59025 27.6537 1.56021C25.2272 0.530159 22.6264 0 20 0Z"
                  fill="black"
                  className="transition-colors group-hover:fill-[#241C6B]"
                />
              </svg>
            </a>
            <img 
              src={new URL('../assets/image/CateringzHome.png', import.meta.url).href}
              alt="CAteriNgz Homepage" 
              className="w-full object-cover project-display pt-10"
            />
            <img 
              src={new URL('../assets/image/CateringzTestimonials.png', import.meta.url).href}  
              alt="CAteriNgz Testimonials" 
              className="w-full object-cover project-display"
            />
            <img 
              src={new URL('../assets/image/CateringzAbout.png', import.meta.url).href}  
              alt="CAteriNgz About" 
              className="w-full object-cover project-display"
            />
          </div>
          {/* Right: Images */}
          <div className="flex flex-col gap-8">
            <img 
              src={new URL('../assets/image/CateringzProducts.png', import.meta.url).href}  
              alt="CAteriNgz Products" 
              className="w-full object-cover project-display pt-40"
            />
            <img 
              src={new URL('../assets/image/CateringzRegister.png', import.meta.url).href}  
              alt="CAteriNgz Profile" 
              className="w-full object-cover project-display"
            />
          </div>
        </div>
      </section>

      {/* Nyenyakin Project */}
      <section className="py-24 px-4 md:px-16 bg-[#1F1F1F]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title & Description */}
          <div>
            <img 
              src={new URL('../assets/image/Nyenyakinhome.png', import.meta.url).href}  
              alt="Nyenyakin App" 
              className="w-full object-cover project-display pt-15"
            />
            <img 
              src={new URL('../assets/image/Nyenyakinsleeptips.png', import.meta.url).href}  
              alt="Nyenyakin Dashboard" 
              className="w-full object-cover project-display"
            />
          </div>
          {/* Right: Images */}
          <div className="flex flex-col gap-8">
            <h2 className="font-hammersmith text-[60px] md:text-[100px] text-white">
              Nyenyakin
            </h2>
            <p className="font-hanken text-lg font-medium text-white -mb-1">
              Web application to predict user's sleep quality using a trained Support Vector Machine (SVM) model. Responsible for developing the machine learning model and implementing the backend using Flask.
            </p>
            {/* GitHub Icon White */}
            <a
              href="https://github.com/CatherineDanielle/Nyenyakin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 group"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="transition-colors"
              >
                <path
                  d="M20 0C17.3736 0 14.7728 0.530159 12.3463 1.56021C9.91982 2.59025 7.71504 4.10002 5.85786 6.0033C2.10714 9.84714 0 15.0605 0 20.4965C0 29.556 5.74 37.2422 13.68 39.9683C14.68 40.1322 15 39.4968 15 38.9434V35.4795C9.46 36.7093 8.28 32.733 8.28 32.733C7.36 30.3554 6.06 29.72 6.06 29.72C4.24 28.4492 6.2 28.4902 6.2 28.4902C8.2 28.6337 9.26 30.6013 9.26 30.6013C11 33.7168 13.94 32.7945 15.08 32.3025C15.26 30.9703 15.78 30.0684 16.34 29.556C11.9 29.0436 7.24 27.2809 7.24 19.4717C7.24 17.1966 8 15.3724 9.3 13.9172C9.1 13.4047 8.4 11.2731 9.5 8.50606C9.5 8.50606 11.18 7.95266 15 10.5967C16.58 10.1458 18.3 9.92033 20 9.92033C21.7 9.92033 23.42 10.1458 25 10.5967C28.82 7.95266 30.5 8.50606 30.5 8.50606C31.6 11.2731 30.9 13.4047 30.7 13.9172C32 15.3724 32.76 17.1966 32.76 19.4717C32.76 27.3014 28.08 29.0231 23.62 29.5355C24.34 30.1709 25 31.4212 25 33.3274V38.9434C25 39.4968 25.32 40.1527 26.34 39.9683C34.28 37.2217 40 29.556 40 20.4965C40 17.8049 39.4827 15.1396 38.4776 12.6529C37.4725 10.1661 35.9993 7.90658 34.1421 6.0033C32.285 4.10002 30.0802 2.59025 27.6537 1.56021C25.2272 0.530159 22.6264 0 20 0Z"
                  fill="white"
                  className="transition-colors group-hover:fill-[#241C6B]"
                />
              </svg>
            </a>
            <img 
              src={new URL('../assets/image/Nyenyakinabout.png', import.meta.url).href} 
              alt="Nyenyakin Interface" 
              className="w-full object-cover project-display pt-15"
            />
            <img 
              src={new URL('../assets/image/Nyenyakintest.png', import.meta.url).href} 
              alt="Nyenyakin Results" 
              className="w-full object-cover project-display"
            />
          </div>
        </div>
      </section>

      {/* BOMI Project */}
      <section className="py-24 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title & Description */}
          <div>
            <h2 className="font-hammersmith text-[60px] md:text-[100px] text-black mb-1">
              BOMI
            </h2>
            <p className="font-hanken text-lg font-medium text-black mb-1">
              A BMI calculator website equipped with tracking features and body composition estimation (muscle, fat, bone, etc.). Handled backend development, database, and UI design.
            </p>
            {/* GitHub Icon */}
            <a
              href="https://github.com/CatherineDanielle/BOMI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 group"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="transition-colors"
              >
                <path
                  d="M20 0C17.3736 0 14.7728 0.530159 12.3463 1.56021C9.91982 2.59025 7.71504 4.10002 5.85786 6.0033C2.10714 9.84714 0 15.0605 0 20.4965C0 29.556 5.74 37.2422 13.68 39.9683C14.68 40.1322 15 39.4968 15 38.9434V35.4795C9.46 36.7093 8.28 32.733 8.28 32.733C7.36 30.3554 6.06 29.72 6.06 29.72C4.24 28.4492 6.2 28.4902 6.2 28.4902C8.2 28.6337 9.26 30.6013 9.26 30.6013C11 33.7168 13.94 32.7945 15.08 32.3025C15.26 30.9703 15.78 30.0684 16.34 29.556C11.9 29.0436 7.24 27.2809 7.24 19.4717C7.24 17.1966 8 15.3724 9.3 13.9172C9.1 13.4047 8.4 11.2731 9.5 8.50606C9.5 8.50606 11.18 7.95266 15 10.5967C16.58 10.1458 18.3 9.92033 20 9.92033C21.7 9.92033 23.42 10.1458 25 10.5967C28.82 7.95266 30.5 8.50606 30.5 8.50606C31.6 11.2731 30.9 13.4047 30.7 13.9172C32 15.3724 32.76 17.1966 32.76 19.4717C32.76 27.3014 28.08 29.0231 23.62 29.5355C24.34 30.1709 25 31.4212 25 33.3274V38.9434C25 39.4968 25.32 40.1527 26.34 39.9683C34.28 37.2217 40 29.556 40 20.4965C40 17.8049 39.4827 15.1396 38.4776 12.6529C37.4725 10.1661 35.9993 7.90658 34.1421 6.0033C32.285 4.10002 30.0802 2.59025 27.6537 1.56021C25.2272 0.530159 22.6264 0 20 0Z"
                  fill="black"
                  className="transition-colors group-hover:fill-[#241C6B]"
                />
              </svg>
            </a>
            <img 
              src={new URL('../assets/image/Bomiartikel.png', import.meta.url).href} 
              alt="BOMI Interface" 
              className="w-full object-cover project-display pt-15"
            />
            <img 
              src={new URL('../assets/image/Bomibeforelogin.png', import.meta.url).href} 
              alt="BOMI Calculator" 
              className="w-full object-cover project-display"
            />
            <img 
              src={new URL('../assets/image/Bomilogin.png', import.meta.url).href}  
              alt="BOMI Results" 
              className="w-full object-cover project-display"
            />
            <div className="w-[200px] h-0.5 bg-black mb-1 "></div>
            <p className="font-hanken text-lg font-medium text-black mt-8">
              The BMI tracking feature is only available after logging in. Each account can save its own BMI records.
            </p>
            <img 
              src={new URL('../assets/image/Bomiafterlogin.png', import.meta.url).href}  
              alt="BOMI Tracking" 
              className="w-full object-cover project-display pt-15"
            />
          </div>
          {/* Right: Images */}
          <div className="flex flex-col gap-8">
            <img 
              src={new URL('../assets/image/Bomihome.png', import.meta.url).href}  
              alt="BOMI Dashboard" 
              className="w-full object-cover project-display pt-30"
            />
            <img 
              src={new URL('../assets/image/Bomiregister.png', import.meta.url).href}  
              alt="BOMI Profile" 
              className="w-full object-cover project-display"
            />
            <img 
              src={new URL('../assets/image/Bomitracker.png', import.meta.url).href}  
              alt="BOMI History" 
              className="w-full object-cover project-display"
            />
          </div>
        </div>
      </section>

      {/* Emotion Detector Project */}
      <section className="py-24 px-4 md:px-16 bg-[#1F1F1F]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title & Description */}
          <div>
            <img 
              src={new URL('../assets/image/EmotionNeutral.png', import.meta.url).href}  
              alt="Emotion Detector Interface" 
              className="w-full object-cover project-display pt-40"
            />
            <img 
              src={new URL('../assets/image/EmotionJoy.png', import.meta.url).href}  
              alt="Emotion Detection Result" 
              className="w-full object-cover project-display"
            />
            <img 
              src={new URL('../assets/image/EmotionFear.png', import.meta.url).href}  
              alt="Emotion Categories" 
              className="w-full object-cover project-display"
            />
            <img 
              src={new URL('../assets/image/EmotionSad.png', import.meta.url).href}   
              alt="Emotion Analysis" 
              className="w-full object-cover project-display"
            />
          </div>
          {/* Right: Images */}
          <div className="flex flex-col gap-8">
            <h2 className="font-hammersmith text-[60px] md:text-[100px] text-white mb-1">
              Emotion Detector App
            </h2>
            <p className="font-hanken text-lg font-medium text-white -mb-1">
              An AI-powered web application that classifies user-inputted sentences into one of six emotion categories: fear, sadness, joy, love, surprise, and anger. Built and trained a Naive Bayes classifier using a labeled emotion dataset from Kaggle. Developed the user interface and deployed the application using Streamlit.
            </p>
            {/* GitHub Icon White */}
            <a
              href="https://github.com/angelous/EmotionDetector"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 group"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="transition-colors"
              >
                <path
                  d="M20 0C17.3736 0 14.7728 0.530159 12.3463 1.56021C9.91982 2.59025 7.71504 4.10002 5.85786 6.0033C2.10714 9.84714 0 15.0605 0 20.4965C0 29.556 5.74 37.2422 13.68 39.9683C14.68 40.1322 15 39.4968 15 38.9434V35.4795C9.46 36.7093 8.28 32.733 8.28 32.733C7.36 30.3554 6.06 29.72 6.06 29.72C4.24 28.4492 6.2 28.4902 6.2 28.4902C8.2 28.6337 9.26 30.6013 9.26 30.6013C11 33.7168 13.94 32.7945 15.08 32.3025C15.26 30.9703 15.78 30.0684 16.34 29.556C11.9 29.0436 7.24 27.2809 7.24 19.4717C7.24 17.1966 8 15.3724 9.3 13.9172C9.1 13.4047 8.4 11.2731 9.5 8.50606C9.5 8.50606 11.18 7.95266 15 10.5967C16.58 10.1458 18.3 9.92033 20 9.92033C21.7 9.92033 23.42 10.1458 25 10.5967C28.82 7.95266 30.5 8.50606 30.5 8.50606C31.6 11.2731 30.9 13.4047 30.7 13.9172C32 15.3724 32.76 17.1966 32.76 19.4717C32.76 27.3014 28.08 29.0231 23.62 29.5355C24.34 30.1709 25 31.4212 25 33.3274V38.9434C25 39.4968 25.32 40.1527 26.34 39.9683C34.28 37.2217 40 29.556 40 20.4965C40 17.8049 39.4827 15.1396 38.4776 12.6529C37.4725 10.1661 35.9993 7.90658 34.1421 6.0033C32.285 4.10002 30.0802 2.59025 27.6537 1.56021C25.2272 0.530159 22.6264 0 20 0Z"
                  fill="white"
                  className="transition-colors group-hover:fill-[#241C6B]"
                />
              </svg>
            </a>
            <img 
              src={new URL('../assets/image/EmotionLove.png', import.meta.url).href}   
              alt="Emotion Detection Process"
              className="w-full object-cover project-display pt-10"
            />
            <img 
              src={new URL('../assets/image/EmotionAnger.png', import.meta.url).href}   
              alt="Model Performance" 
              className="w-full object-cover project-display"
            />
            <img 
              src={new URL('../assets/image/EmotionSurprise.png', import.meta.url).href}   
              alt="Emotion Results" 
              className="w-full object-cover project-display"
            />
          </div>
        </div>
      </section>

      {/* BISINDO Project */}
      <section className="py-24 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title & Description */}
          <div>
            <h2 className="font-hammersmith text-[60px] md:text-[100px] text-black mb-2">
              BISINDO real time detection
            </h2>
            <p className="font-hanken text-lg font-medium text-black mb-1">
              Real time BISINDO (Indonesian sign language) recognition using webcam input.
            </p>
            {/* GitHub Icon */}
            <a
              href="https://github.com/yourusername/bisindo-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 group"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="transition-colors"
              >
                <path
                  d="M20 0C17.3736 0 14.7728 0.530159 12.3463 1.56021C9.91982 2.59025 7.71504 4.10002 5.85786 6.0033C2.10714 9.84714 0 15.0605 0 20.4965C0 29.556 5.74 37.2422 13.68 39.9683C14.68 40.1322 15 39.4968 15 38.9434V35.4795C9.46 36.7093 8.28 32.733 8.28 32.733C7.36 30.3554 6.06 29.72 6.06 29.72C4.24 28.4492 6.2 28.4902 6.2 28.4902C8.2 28.6337 9.26 30.6013 9.26 30.6013C11 33.7168 13.94 32.7945 15.08 32.3025C15.26 30.9703 15.78 30.0684 16.34 29.556C11.9 29.0436 7.24 27.2809 7.24 19.4717C7.24 17.1966 8 15.3724 9.3 13.9172C9.1 13.4047 8.4 11.2731 9.5 8.50606C9.5 8.50606 11.18 7.95266 15 10.5967C16.58 10.1458 18.3 9.92033 20 9.92033C21.7 9.92033 23.42 10.1458 25 10.5967C28.82 7.95266 30.5 8.50606 30.5 8.50606C31.6 11.2731 30.9 13.4047 30.7 13.9172C32 15.3724 32.76 17.1966 32.76 19.4717C32.76 27.3014 28.08 29.0231 23.62 29.5355C24.34 30.1709 25 31.4212 25 33.3274V38.9434C25 39.4968 25.32 40.1527 26.34 39.9683C34.28 37.2217 40 29.556 40 20.4965C40 17.8049 39.4827 15.1396 38.4776 12.6529C37.4725 10.1661 35.9993 7.90658 34.1421 6.0033C32.285 4.10002 30.0802 2.59025 27.6537 1.56021C25.2272 0.530159 22.6264 0 20 0Z"
                  fill="black"
                  className="transition-colors group-hover:fill-[#241C6B]"
                />
              </svg>
            </a>
          </div>
          {/* Right: Images */}
          <div className="flex flex-col gap-8">
            <img 
              src={new URL('../assets/image/bisindo.png', import.meta.url).href}  
              alt="BISINDO Detection Demo" 
              className="w-full max-w-[322px] object-cover project-display ml-30"
            />
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-black text-white px-4 py-6 rounded-[30px] font-hanken text-lg font-bold flex flex-col items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <span>Top</span>
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12L12 2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M2 12L12 2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
