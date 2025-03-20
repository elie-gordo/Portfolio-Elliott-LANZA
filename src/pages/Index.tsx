
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Index() {
  const [currentTime, setCurrentTime] = useState("00:00:00");

  useEffect(() => {
    // Update current time
    function updateTime() {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }
    
    // Update the time immediately and then every second
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 min-h-screen">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A software developer with a passion for creating beautiful and functional web experiences
          </p>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 text-lg mb-6">
            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-400">My tools:</p>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
          <p className="text-3xl font-bold font-mono">
            {currentTime}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your@email.com"
               className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Project 1</h3>
              <p className="text-gray-300">Description of your amazing project</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Project 2</h3>
              <p className="text-gray-300">Description of another cool project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
