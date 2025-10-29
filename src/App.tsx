import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GameCard } from './components/GameCard';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';

//wavelength
import wavelength1 from './assets/wave1.png';
import wavelength2 from './assets/wave2.png';

//tcube
import tcubeIcon from './assets/tcubeicon.png';
import tcubeplay1 from './assets/tcube1.png';
import tcubeplay2 from './assets/tcube2.png';
import tcubetag from './assets/tcubetag.png';

//dinodash
import dino1 from './assets/dino1.png';
import dino2 from './assets/dino2.png';

//gochess
import gochessImg from './assets/gochess1.png';``

//blindchess
import blindchessImg from './assets/darkchess1.png';

//basket_hoop
import basket1 from './assets/basket1.png';
import basket2 from './assets/basket2.png';




const gamesData = [
  {
    title: 'Wavelength',
    description: 'A creative party game where players give clues to help their team guess concepts on a spectrum. Features real-time multiplayer and intuitive canvas-based interface.',
    tags: ['JavaScript', 'Firebase', 'Canvas', 'Multiplayer'],
    iconImage: 'https://images.unsplash.com/photo-1728311369878-0d4259da74ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdhbWUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NzQ4MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1728311369878-0d4259da74ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdhbWUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NzQ4MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      wavelength1, wavelength2],
      playUrl: 'https://wavelength-game.netlify.app/'
  },
  {
    title: 'TCube',
    description: 'A 3D puzzle game combining Tetris mechanics with cube rotation. Features real-time synchronization and competitive multiplayer modes.',
    tags: ['JavaScript', 'Firebase', 'Realtime Database', '3D'],
    iconImage: tcubeIcon,
    screenshots: [tcubetag, tcubeplay1, tcubeplay2
    ],
    playUrl: 'https://tcube-game.netlify.app/'
  },
  {
    title: 'Dino Dash',
    description: 'An endless runner game featuring pixel art graphics and dynamic obstacle generation. Built with smooth animations and progressive difficulty.',
    tags: ['Python', 'Pygame', 'Pixel Art', 'Animation'],
    iconImage: 'https://images.unsplash.com/photo-1750019486291-691e4e097f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lJTIwcGl4ZWx8ZW58MXx8fHwxNzU4NzQ4MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [dino1,dino2
    ],
    playUrl: 'https://seanchiuitch.itch.io/dinodash'
  },
  {
    title: 'Go Chess Online',
    description: 'Online multiplayer implementation of the ancient game of Go. Features real-time gameplay, spectator mode, and game history tracking.',
    tags: ['JavaScript', 'Firebase', 'Multiplayer', 'Strategy'],
    iconImage: 'https://images.unsplash.com/photo-1702728342833-21a85f6a71b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGdhbWUlMjBib2FyZHxlbnwxfHx8fDE3NTg3NDgwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [gochessImg
    ],
    playUrl: 'https://gochessonline.netlify.app/'
  },
  {
    title: 'Blind Chess',
    description: 'An innovative chess variant designed for accessibility. Features audio cues, tactile feedback simulation, and an intuitive interface design.',
    tags: ['JavaScript', 'Firebase', 'UI Design', 'Accessibility'],
    iconImage: 'https://images.unsplash.com/photo-1702728342833-21a85f6a71b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGdhbWUlMjBib2FyZHxlbnwxfHx8fDE3NTg3NDgwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1702728342833-21a85f6a71b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGdhbWUlMjBib2FyZHxlbnwxfHx8fDE3NTg3NDgwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        blindchessImg    ],
    playUrl: 'https://chesscarnival.netlify.app/'
  },
  {
    title: 'Basket Hoop',
    description: 'A physics-based basketball shooting game with realistic ball mechanics. Features multiple courts, weather effects, and skill-based scoring.',
    tags: ['HTML', 'JavaScript', 'CSS', 'Physics'],
    iconImage: 'https://images.unsplash.com/photo-1743105351315-540bce258f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMG1vYmlsZXxlbnwxfHx8fDE3NTg3NDgwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1743105351315-540bce258f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMG1vYmlsZXxlbnwxfHx8fDE3NTg3NDgwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        basket1,basket2    ],
    playUrl: 'https://basketballhoop.netlify.app/'
  }
];

const dataProjectsData = [
  {
    title: 'Meteorite Analysis',
    description: 'Comprehensive analysis of global meteorite impact data using Python and Plotly. Interactive visualizations reveal patterns in meteorite sizes, compositions, and geographical distributions.',
    tags: ['Python', 'Plotly', 'HTML', 'Data Visualization'],
    thumbnail: 'https://images.unsplash.com/photo-1724925188921-224ff39d6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTg3NDgwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Investment Strategy Simulator',
    description: 'A quantitative analysis tool for backtesting various investment strategies. Features Monte Carlo simulations, risk analysis, and portfolio optimization algorithms.',
    tags: ['Python', 'Quantitative Analysis', 'Monte Carlo', 'Finance'],
    thumbnail: 'https://images.unsplash.com/photo-1724925188921-224ff39d6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTg3NDgwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'games', 'data', 'contact'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 200 && scrollY < offsetTop + offsetHeight - 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      
      <main>
        <Hero />

        {/* Games Portfolio Section */}
        <section id="games" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Games</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Interactive experiences I've built, from party games to strategic challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gamesData.map((game, index) => (
                <GameCard key={index} {...game} />
              ))}
            </div>
          </div>
        </section>

        {/* Data Projects Section */}
        <section id="data" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Data Projects</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Analytical projects combining mathematics, economics, and data science
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {dataProjectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
console.log("✅ NEW BUILD TEST");