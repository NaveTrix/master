// Renamed from page.tsx to team-page.tsx

export default function TeamPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      {/* Team Section */}
      <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 mt-12">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Our Team</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-md w-full md:w-1/2">
            <div className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-green-300 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4">KR</div>
            <h2 className="text-xl font-semibold text-gray-800">Kalpana Reddy</h2>
            <p className="text-sm text-gray-500 mb-2">Founder & CEO</p>
            <p className="text-center text-gray-600">Visionary leader driving Navetrix forward with innovation and passion for technology solutions.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-md w-full md:w-1/2">
            <div className="w-24 h-24 bg-gradient-to-tr from-purple-400 to-pink-300 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4">AL</div>
            <h2 className="text-xl font-semibold text-gray-800">Alex Lehrer</h2>
            <p className="text-sm text-gray-500 mb-2">Director</p>
            <p className="text-center text-gray-600">Director at Navetrix, passionate about building strong teams and delivering exceptional client value.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
