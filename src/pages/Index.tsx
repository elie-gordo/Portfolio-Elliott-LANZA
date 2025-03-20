import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
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
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:your@email.com"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80" 
                    alt="Project 1" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Project 1</h3>
                <p className="text-gray-300">E-commerce platform with modern UI</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80" 
                    alt="Project 2" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Project 2</h3>
                <p className="text-gray-300">Task management application</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80" 
                    alt="Project 3" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Project 3</h3>
                <p className="text-gray-300">Weather forecast dashboard</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80" 
                    alt="Project 4" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Project 4</h3>
                <p className="text-gray-300">Social media analytics tool</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80" 
                    alt="Project 5" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Project 5</h3>
                <p className="text-gray-300">AI-powered image recognition app</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80" 
                    alt="Project 6" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Project 6</h3>
                <p className="text-gray-300">Real-time chat application</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Senior Developer</h3>
                <p className="text-gray-300">Tech Company Inc.</p>
                <p className="text-gray-400 mt-2">
                  Led development of multiple high-impact projects and mentored junior developers.
                </p>
              </div>
              <span className="text-gray-400">2020 - Present</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Full Stack Developer</h3>
                <p className="text-gray-300">Digital Solutions Ltd.</p>
                <p className="text-gray-400 mt-2">
                  Developed and maintained various web applications using modern technologies.
                </p>
              </div>
              <span className="text-gray-400">2018 - 2020</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Frontend Developer</h3>
                <p className="text-gray-300">Creative Web Studio</p>
                <p className="text-gray-400 mt-2">
                  Created responsive user interfaces and improved website performance metrics.
                </p>
              </div>
              <span className="text-gray-400">2016 - 2018</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Junior Web Developer</h3>
                <p className="text-gray-300">Innovation Labs</p>
                <p className="text-gray-400 mt-2">
                  Assisted in building and testing web applications while learning modern development practices.
                </p>
              </div>
              <span className="text-gray-400">2014 - 2016</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
