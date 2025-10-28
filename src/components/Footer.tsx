import {
  Github,
  Instagram,
  MessageCircle,
  Bot,
  Heart,
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SeanChiuGit",
      color: "hover:text-white",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/seanchiu.dev/",
      color: "hover:text-pink-400",
    },
    {
      icon: MessageCircle,
      label: "小红书",
      href: "https://www.xiaohongshu.com/user/profile/5f2a950900000000010098cc",
      color: "hover:text-red-400",
    },
    {
      icon: Bot,
      label: "ChatGPT",
      href: "https://chatgpt.com/g/g-p-68b0c8446f2481918cd44e1b1cb16df3-shen-mi-kong-jian/project",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Thank You Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Thanks for visiting my portfolio.
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Feel free to reach out if you'd like to collaborate
            or just want to chat about games and data!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={`p-3 text-slate-400 transition-all duration-200 hover:scale-110 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-slate-700 mx-auto mb-8"></div>

        {/* Copyright */}
        <div className="flex items-center justify-center space-x-2 text-slate-500 text-sm">
          <span>Made with</span>
          <Heart size={16} className="text-red-400" />
          <span>by Sean Chiu</span>
          <span>•</span>
          <span>© 2024</span>
        </div>
      </div>
    </footer>
  );
}