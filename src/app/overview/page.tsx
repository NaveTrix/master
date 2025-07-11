"use client";

export default function OverviewPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <section className="bg-primary/10 rounded-2xl shadow-lg p-8 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">BRIDGING TALENT AND TECHNOLOGY FOR BUSINESS SUCCESS</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-dark mb-4">BRIDGING TALENT AND TECHNOLOGY FOR BUSINESS SUCCESS</h3>
        <p className="text-gray-800 text-lg mb-6">
          At Navetrix, we are dedicated to empowering freshers and early-career professionals through innovative internship programs, comprehensive skill-building training, and cutting-edge software development. Our focus is on bridging the gap between education and the tech industry, equipping individuals with the tools they need to succeed. With our consulting services, we also help businesses harness the power of technology to drive success. Join us in shaping the future of tech talent and take your first step towards a thriving career today!
        </p>
        <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-accent hover:text-dark transition text-lg">Get in touch</a>
      </section>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Overview</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        At Navetrix, we bridge the gap between education and employment through real-world tech internships, expert-led training, and powerful software solutions tailored for businesses of all sizes.
      </p>
      <div className="bg-white rounded-xl shadow p-8 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-2">
          We empower freshers and professionals to thrive in the tech industry by providing hands-on learning, mentorship, and career guidance. Our programs are designed to make you job-ready and confident.
        </p>
        <p className="text-gray-700">
          For businesses, we deliver robust software solutions and consulting to accelerate digital transformation and growth.
        </p>
      </div>
      <div className="bg-blue-50 rounded-xl shadow p-8 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Real-world tech internships and training for freshers</li>
          <li>Custom web and mobile app development</li>
          <li>Data engineering and automation solutions</li>
          <li>IT consulting, mentorship, and career guidance</li>
        </ul>
      </div>
      <div className="bg-green-50 rounded-xl shadow p-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Choose Navetrix?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Affordable, accessible, and practical learning</li>
          <li>Mentorship from industry experts</li>
          <li>Project-based, hands-on approach</li>
          <li>Proven track record with students and businesses</li>
        </ul>
      </div>
    </div>
  );
}
