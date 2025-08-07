import { Navigation } from '../components/Navigation';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm("mrblobrv");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-8 md:top-16 right-4 md:right-16 z-10 mb-8">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 md:px-16 py-24 gap-12 mt-40">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 max-w-[510px] lg:ml-[120px]">
          <h1 className="font-hammersmith text-[60px] md:text-[80px] lg:text-[86px] leading-none text-black mb-8 lg:mb-8">
            Get in Touch
          </h1>
          <div className="space-y-3">
            <p className="font-hanken text-lg font-medium text-black leading-normal">
              Got something on your mind?<br />
              Want to collaborate, share some feedback, or just say hi?<br />
              You can use contact form below or find me here
            </p>
            {/* Social Links */}
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/angelaverine/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-hanken text-xl font-medium text-purple-primary underline hover:font-bold transition-all text-[#241C6B]"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/in/angela-verine-hutomo/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block font-hanken text-xl font-medium text-purple-primary underline hover:font-bold transition-all text-[#241C6B]"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:angelaverine@gmail.com" 
                className="block font-hanken text-xl font-medium text-purple-primary underline hover:font-bold transition-all text-[#241C6B]"
              >
                Email
              </a>
            </div>
            <p className="font-hanken text-lg font-medium text-black">
              I'd love to hear from you!
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 max-w-[550px] lg:mr-[120px]">
          <div className="bg-white border-[4px] border-black rounded-[10px] p-12 pb-7">
            {state.succeeded ? (
              <p className="font-hanken text-xl text-[#241C6B] text-center p-3 m-2 pt-1">I will reply as soon as possible! Thank you for contacting me :D</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full py-4 pl-2 pb-1 border-b-2 border-black bg-transparent font-hanken text-lg focus:outline-none focus:border-purple-primary transition-colors"
                    placeholder="Name"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                {/* Email Field */}
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full py-4 pl-2 pb-1 border-b-2 border-black bg-transparent font-hanken text-lg focus:outline-none focus:border-purple-primary transition-colors"
                    placeholder="Email"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full py-4 border-2 pl-4 pr-4 border-black bg-transparent font-hanken text-lg resize-none focus:outline-none focus:border-purple-primary transition-colors"
                    placeholder="Message"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="font-hanken text-lg font-medium text-black hover:text-[#241C6B]-primary hover:underline hover:font-bold transition-all"
                  >
                    Send →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
