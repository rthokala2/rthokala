import React from 'react';
import { useRef } from 'react';
import { Brain, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
   const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = async () => {
  if (!videoRef.current) return;

  const video = videoRef.current;

  // If the video already finished, restart it
  if (video.ended) {
    video.currentTime = 0;
  }

  video.muted = false;

  try {
    await video.play();
  } catch (error) {
    console.error("Unable to play video:", error);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-900">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
            {/* Profile Image */}
          <div className="lg:w-1/2 flex items-center justify-center animate-scale-in">
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
              {/* Video */}
              <div className="relative z-10 w-[620px] max-w-full rounded-2xl overflow-hidden border border-purple-500/30 bg-black/20 backdrop-blur-xl shadow-[0_30px_100px_rgba(168,85,247,.45)] transition-all duration-500 hover:scale-105 hover:shadow-[0_40px_120px_rgba(168,85,247,.75)]">

                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onClick={handleVideoClick}
                  className="w-full h-full object-cover rounded-2xl cursor-pointer"
                >
                  <source src="/intro.mp4" type="video/mp4" />
                </video>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm animate-pulse pointer-events-none">
                  🔊 Click to hear my introduction
                </div>

              </div>

            </div>
          </div>

            {/* Content */}
         {/* Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="space-y-6">

                <h1 className="leading-tight">
                  <span className="block text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-100 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                    Hi, I'm
                  </span>

                  <span className="block text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-500 bg-clip-text text-transparent">
                    Rohith Thokala
                  </span>
                </h1>

                <p className="text-xl md:text-2xl  text-purple-200">
                  Python Developer • AI & Machine Learning Enthusiast
                </p>

                <p className="text-lg text-gray-300 max-w-2xl">
                  Passionate about building intelligent applications using Python,
                  Machine Learning, and Data Science. I enjoy solving real-world
                  problems through innovative software solutions and continuously
                  learning emerging technologies.
                </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start py-4">

  <span className="px-5 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300">
    Python
  </span>

  <span className="px-5 py-2 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300">
    Machine Learning
  </span>

  <span className="px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300">
    Data Science
  </span>

  <span className="px-5 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300">
    Flask
  </span>

  <span className="px-5 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
    TensorFlow
  </span>

</div>
                {/* Social Links */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in delay-600">
                  <a
                    href="https://www.linkedin.com/in/rohiththokala"
                    target="_blank"
                    rel="noopener noreferrer"className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-purple-500 hover:scale-105 text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/rthokala2"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-purple-500 hover:scale-105 text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:Rohithkumar.1601@gmail.com"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-purple-500 hover:scale-105 text-white transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-8">
                  <button
                    onClick={() => navigate("/projects")}
                    className="flex w-[230px] items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    View Projects
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="https://drive.google.com/file/d/1AGJvn847hI2Px40yP-xsoGRbU7tERPZs/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    Download Resume
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">About Me</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
              <p className="text-gray-300 leading-relaxed">
                I'm a Python Developer with a strong passion for Artificial Intelligence, Machine Learning, and Data Science.
                I enjoy building intelligent applications using Python, training machine learning models, and solving real-world problems through technology.
                I'm continuously learning modern AI tools, exploring new technologies, and creating projects that combine innovation with practical impact.
                              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;