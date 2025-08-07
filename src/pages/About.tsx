import { Navigation } from "../components/Navigation";

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-8 md:top-16 right-4 md:right-16 z-10">
        <Navigation />
      </div>

      {/* Hero Section: Content left, Education right */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-4 mt-15">
        {/* Content (left) */}
        <div className="relative z-10 w-full lg:w-1/2 max-w-[681px] px-4 lg:px-0 mb-16 lg:mb-0 pr-8 lg:pr-16">
          {/* Name Section */}
          <div className="mb-8 lg:mb-16">
            <p className="font-hanken text-[24px] md:text-[30px] lg:text-[35px] font-light text-black mb-6 lg:mb-[49px]">
              My name is
            </p>
            <h1 className="font-hammersmith text-[50px] md:text-[70px] lg:text-[90px] leading-none text-black">
              Angela Verine Hutomo
            </h1>
            <p className="font-hanken text-base md:text-lg font-medium text-black mt-6 lg:mt-8 leading-normal">
              I'm a computer science student at Bina Nusantara University majoring in Intelligent Systems. I'm passionate about building tech projects, especially in web development and machine learning.
            </p>
          </div>
        </div>

        {/* Education Section (right) */}
        <div className="w-full lg:w-1/2 max-w-[591px] px-4 pl-10">
          <h2 className="font-hammersmith text-[50px] text-black mb-16">Education</h2>
          {/* Timeline */}
          <div className="relative flex flex-col">
            {/* Timeline vertical line */}
            <div className="absolute left-[14px] top-[23px] bottom-[100px] w-0.5 bg-black z-0" />
            {/* High School */}
            <div className="flex items-start mb-8 relative z-10">
              {/* Dot */}
              <div className="w-[30px] h-[30px] rounded-full bg-white border-4 border-black flex-shrink-0 ml-0 mr-6" />
              {/* Content */}
              <div>
                <h3 className="font-hanken text-[25px] font-medium text-black">
                  Taruna Nusa Harapan High School
                </h3>
                <p className="font-hanken text-xl font-medium text-black">
                  (2020 - 2023)
                </p>
              </div>
            </div>
            {/* University */}
            <div className="flex items-start relative z-10">
              {/* Dot */}
              <div className="w-[30px] h-[30px] rounded-full bg-white border-4 border-black flex-shrink-0 ml-0 mr-6" />
              {/* Content */}
              <div>
                <h3 className="font-hanken text-[25px] font-medium text-black">
                  Bina Nusantara University
                </h3>
                <p className="font-hanken text-xl font-medium text-black">
                  Bachelor of Computer Science – Intelligent Systems
                </p>
                <p className="font-hanken text-xl font-medium text-black">
                  GPA : 3.83 / 4.00
                </p>
                <p className="font-hanken text-xl font-medium text-black">
                  (2023 - Expected 2027)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organization & Volunteer Experience Section */}
      <div className="bg-[#1F1F1F] py-26 px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-hammersmith text-[50px] text-white mb-16">
            Organization & Volunteer Experience
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* First Experience */}
            <div>
              <h3 className="font-hanken text-[25px] font-medium text-white mb-4">
                Bina Nusantara University | Freshmen Partner
              </h3>
              <p className="font-hanken text-lg font-medium text-white max-w-[630px]">
                Provided guidance and support to first-year university students for two semesters, assisting them in adjusting to campus environment and student.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2fb93efc4f525beeec5ddc1a327de9e3247e9a66?width=1020" 
                alt="Freshmen Partner" 
                className="w-[510px] h-[383px] object-cover rounded-[30px]"
              />
            </div>
            
            {/* Second Experience */}
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7f9a9b39b0b7b16646b4e88825f1a8aa31621862?width=1020" 
                alt="Volunteer SD" 
                className="w-[510px] h-[383px] object-cover rounded-[30px]"
              />
            </div>
            <div>
              <h3 className="font-hanken text-[25px] font-medium text-white mb-4">
                Teach For Indonesia | Volunteer
              </h3>
              <p className="font-hanken text-lg font-medium text-white max-w-[630px]">
                Provided basic computer lesson to elementary students, introducing them to Microsoft PowerPoint through simple, interactive lessons.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-24 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-hammersmith text-[50px] text-black text-right mb-10">Skills</h2>
          
          {/* Programming Languages */}
          <div className="mb-16">
            <h3 className="font-hanken text-[25px] font-medium text-black text-center mb-2">
              Programming Languages
            </h3>
            <div className="w-[90px] h-0.5 bg-black mx-auto mb-20"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-40 gap-y-8 max-w-4xl mx-auto">
              {[
                { name: 'C', img: 'https://api.builder.io/api/v1/image/assets/TEMP/6c8e2b66443ab0d7954b83bd6279d12ba90e0474?width=218' },
                { name: 'Python', img: 'https://api.builder.io/api/v1/image/assets/TEMP/cd3d1a1f68fbe99201313b7fb4df64338e1ccb17?width=240' },
                { name: 'Java', img: 'https://api.builder.io/api/v1/image/assets/TEMP/c66f8489efca2deb879f5c0d4a31c83f468bdfd9?width=184' },
                { name: 'JavaScript', img: 'https://api.builder.io/api/v1/image/assets/TEMP/347eef9fa48efdda6ea55a279334fb51be41aaaa?width=240' }
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[180px] h-[210px] rounded-[20px] border border-black/10 bg-white custom-shadow flex flex-col items-center justify-center mb-2">
                    <img src={skill.img} alt={skill.name} className=" max-h-[120px] object-contain mb-2" />
                    <p className="font-hanken text-[20px] font-medium text-black text-center pt-3">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-x-40 gap-y-8 max-w-2xl mx-auto justify-center mt-15">
                {[
                { name: 'HTML', img: 'https://api.builder.io/api/v1/image/assets/TEMP/e204521fce9ae1ab43c88ac345fe342833497ee8?width=240' },
                { name: 'CSS', img: 'https://api.builder.io/api/v1/image/assets/TEMP/aaa8316fbfd13940a3d91dfab9cc5a7325be00ac?width=212' },
                { name: 'Lua', img: 'https://api.builder.io/api/v1/image/assets/TEMP/a7b0c694cb71794f7efac805b970ba131923154e?width=240' }
                ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-[180px] h-[210px] rounded-[20px] bg-white custom-shadow flex flex-col items-center justify-center mb-2">
                    <img src={skill.img} alt={skill.name} className="max-h-[120px] object-contain mb-2" />
                    <p className="font-hanken text-[20px] font-medium text-black text-center pt-3">{skill.name}</p>
                    </div>
                </div>
                ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="mb-16 mt-24">
            <h3 className="font-hanken text-[25px] font-medium text-black text-center mb-2">
              Frameworks
            </h3>
            <div className="w-[90px] h-0.5 bg-black mx-auto mb-20"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-40 gap-y-8 max-w-4xl mx-auto">
              {[
                { name: 'Laravel', img: 'https://api.builder.io/api/v1/image/assets/TEMP/0e6020f94d934806c2f2d0104c1a1b3879d933ac?width=230' },
                { name: 'Streamlit', img: 'https://api.builder.io/api/v1/image/assets/TEMP/2e6380ac258092b36e1077ef82a70bae6c815e1c?width=240' },
                { name: 'Flask', img: 'https://api.builder.io/api/v1/image/assets/TEMP/1eb31ae23c038f2532ff153c47485ea0a22c8c26?width=240' },
                { name: 'React', img: 'https://api.builder.io/api/v1/image/assets/TEMP/760f6c6cc9bbdd4dd90be5e6bb27d01dd6694b63?width=240' }
              ].map((framework, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[180px] h-[210px] rounded-[20px] border border-black/10 bg-white custom-shadow flex flex-col items-center justify-center mb-2">
                    <img src={framework.img} alt={framework.name} className="max-h-[120px] object-contain mb-2" />
                    <p className="font-hanken text-[20px] font-medium text-black text-center pt-3">{framework.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="mt-24">
            <h3 className="font-hanken text-[25px] font-medium text-black text-center mb-2">
              Tools & Platforms
            </h3>
            <div className="w-[90px] h-0.5 bg-black mx-auto mb-20"></div>
            <div className="grid grid-cols-2 gap-x-40 gap-y-8 max-w-md mx-auto">
              {[
                { name: 'Figma', img: 'https://api.builder.io/api/v1/image/assets/TEMP/85f48c0f094a800ee5a8d0983062e21f31756713?width=160' },
                { name: 'Github', img: 'https://api.builder.io/api/v1/image/assets/TEMP/6d4ada5a6e765259cf62e736ecf526793ee75f58?width=240' }
              ].map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[180px] h-[210px] rounded-[20px] border border-black/10 bg-white custom-shadow flex flex-col items-center justify-center mb-2">
                    <img src={tool.img} alt={tool.name} className="max-h-[120px] object-contain mb-2" />
                    <p className="font-hanken text-[20px] font-medium text-black text-center pt-3">{tool.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Courses Section */}
      <div className="bg-[#1F1F1F] py-24 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-hammersmith text-[50px] text-white mb-10">
            Certifications & Courses
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Dicoding Academy */}
            <div className="bg-[#1F1F1F] custom-shadow-light rounded-[20px] border border-black/40 p-12 w-full">
              <h3 className="font-hammersmith text-[40px] text-white text-center mb-8">
                Dicoding Academy
              </h3>
              <div className="space-y-6">
                {[
                  { title: 'Belajar Dasar Data Science', date: 'September 2024 - September 2027' },
                  { title: 'Belajar Dasar Structured Query Language (SQL)', date: 'September 2024 - September 2027' },
                  { title: 'Belajar Machine Learning untuk Pemula', date: 'Mei 2021 - Mei 2024' },
                  { title: 'Belajar Dasar Visualisasi Data', date: 'April 2021 - April 2024' },
                  { title: 'Memulai Pemrograman dengan Python', date: 'April 2021 - April 2024' },
                  { title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software', date: 'Maret 2021 - Maret 2024' }
                ].map((course, index) => (
                  <div key={index}>
                    <h4 className="font-hanken text-[22px] font-medium text-white mb-1">
                      {course.title}
                    </h4>
                    <p className="font-hanken text-base font-medium text-white">
                      {course.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Alibaba Cloud Academy */}
            <div className="bg-[#1F1F1F] custom-shadow-light rounded-[20px] border border-black/40 p-12 w-full">
              <h3 className="font-hammersmith text-[40px] text-white text-center mb-1">
                Alibaba Cloud Academy
              </h3>
              <p className="font-hanken text-base font-medium text-white text-center mb-6">
                June 2025 - June 2027
              </p>
              <div className="space-y-4">
                {[
                  'Getting to Know Basic Services of Alibaba Cloud',
                  'Basic Cloud Account Security',
                  'Alibaba Cloud Fundamental Training IDN',
                  'Fundamentals of Cloud Computing',
                  'ECS Fundamentals',
                  'VPC Fundamentals',
                  'OSS Fundamentals',
                  'ApsaraDB RDS Fundamentals',
                  'Auto Scaling Fundamentals',
                  'SLB Fundamentals',
                  'CloudMonitor Fundamentals'
                ].map((course, index) => (
                  <p key={index} className="font-hanken text-[22px] font-medium text-white">
                    {course}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* Other Section */}
          <div className="flex justify-center mt-16">
            <div className="bg-[#1F1F1F] custom-shadow-light rounded-[20px] border border-black/40 p-12 max-w-2xl w-full">
              <h3 className="font-hammersmith text-[40px] text-white text-center mb-8">
                Other
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-hanken text-[22px] font-medium text-white">
                    Web Developer Series 11.0 – Backend (Dibimbing.id)
                  </h4>
                </div>
                <div>
                  <h4 className="font-hanken text-[22px] font-medium text-white">
                    Alibaba Cloud Fundamental Bootcamp (Indonesia Cloud Community)
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
