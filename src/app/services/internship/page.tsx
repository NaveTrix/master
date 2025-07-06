import Image from "next/image";

export default function InternshipPage() {
  return (
    <main className="max-w-5xl mx-auto min-h-[60vh] flex flex-col md:flex-row items-center justify-center py-12 px-4 gap-8">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <Image
          src="/images/internship.jpeg"
          alt="Internship"
          width={420}
          height={315}
          className="rounded-2xl shadow-lg object-cover w-full max-w-md"
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1B1F3B]">Internship programs</h1>
        <p className="text-lg text-gray-800 mb-6">
          Embark on your professional journey with our tailored internship programs designed for freshers and early-career professionals. At Technyra, we connect you with leading companies in the tech industry, offering valuable hands-on experience and insights into real-world projects. Our programs not only enhance your resume but also help you build essential skills and network with industry experts. Whether you're looking to deepen your knowledge or kickstart your career, our internships provide the perfect platform to grow and succeed. Join us today and take the first step towards a promising future in technology!
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#6D5BFF] text-white font-bold shadow-lg hover:brightness-110 transition text-lg">Schedule appointment</button>
      </div>
    </main>
  );
}
