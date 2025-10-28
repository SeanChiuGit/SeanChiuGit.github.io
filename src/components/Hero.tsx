import { Github, Instagram, MessageCircle, Bot } from 'lucide-react';
import profileImage from 'figma:asset/9a88dc20a10d1da950cc3b25d7207a8d2a3259d2.png';

export function Hero() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/SeanChiuGit',
      color: 'hover:text-slate-900'
    },
    {
      icon: Instagram,
      label: 'Instagram', 
      href: 'https://www.instagram.com/seanchiu.dev/',
      color: 'hover:text-pink-600'
    },
    {
      icon: MessageCircle,
      label: '小红书',
      href: 'https://www.xiaohongshu.com/user/profile/5f2a950900000000010098cc',
      color: 'hover:text-red-500'
    },
    {
      icon: Bot,
      label: 'ChatGPT',
      href: 'https://chatgpt.com/g/g-p-68b0c8446f2481918cd44e1b1cb16df3-shen-mi-kong-jian/project',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
            <img 
              src={profileImage} 
              alt="Sean Chiu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Sean Chiu
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            UCSD Senior | Math & Econ Major | Indie Game Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={`p-3 text-slate-500 transition-all duration-200 hover:scale-110 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full mx-auto">
            <div className="w-1 h-3 bg-slate-400 rounded-full mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}