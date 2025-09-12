import { useState } from "react";
import { GameHeader } from "@/components/GameHeader";
import { GameMenu } from "@/components/GameMenu";
import { CharacterCard } from "@/components/CharacterCard";
import { StorySection } from "@/components/StorySection";
import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";

// Import character images
import mainCharacterImage from "@/assets/main-character.jpg";
import weaponsSupplierImage from "@/assets/weapons-supplier.jpg";
import captainImage from "@/assets/captain.jpg";
import mysteriousManImage from "@/assets/mysterious-man.jpg";
import portalBgImage from "@/assets/portal-bg.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [currentChapter, setCurrentChapter] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);

  const characters = [
    {
      id: 'weapons-supplier',
      name: 'Marcus',
      title: 'Weapons Supplier',
      image: weaponsSupplierImage,
      description: 'An easygoing and flirtatious supplier of enchanted weapons and charms. Knows more ancient lore than he lets on. Represents stability and safety.',
      affection: 20,
      isUnlocked: true,
    },
    {
      id: 'captain',
      name: 'Commander Hayes',
      title: 'Captain of Supernatural Investigation Unit',
      image: captainImage,
      description: 'An authoritative law-and-order type from NYC. Professionally interested in you due to spiking demon activity worldwide. Demands cooperation.',
      affection: 10,
      isUnlocked: true,
    },
    {
      id: 'mysterious-man',
      name: '???',
      title: 'Mysterious Savior',
      image: mysteriousManImage,
      description: 'A silent, magnetic figure who appears during fights to tip the scales. Disappears before you can question him. Represents danger and forbidden allure.',
      affection: 5,
      isUnlocked: false,
    },
  ];

  const storyContent = {
    1: {
      title: "The Alley Encounter",
      content: "The neon lights of Macau's busy streets fade behind you as you chase the shadow into a narrow alley. Your heart pounds as you corner the demon, its red eyes glowing in the darkness. 'You cannot stop what has already begun,' it hisses before dissolving into mist, leaving behind only a strange crystalline fragment that pulses with otherworldly energy.",
      image: portalBgImage,
      choices: [
        { id: 'investigate', text: 'Examine the crystal fragment carefully' },
        { id: 'follow', text: 'Try to track where the demon went' },
        { id: 'report', text: 'Contact the supernatural investigation unit' },
      ]
    }
  };

  const handleChoice = (choiceId: string) => {
    console.log('Player chose:', choiceId);
    // Handle story progression based on choice
  };

  const handleCharacterSelect = (characterId: string) => {
    console.log('Selected character:', characterId);
    // Handle character interaction
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${portalBgImage})` }}
        >
          <div className="absolute inset-0 gradient-fantasy opacity-80" />
        </div>

        {/* Title Screen */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
          <div className="floating mb-8">
            <Sparkles className="h-16 w-16 text-accent mx-auto mb-4" />
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
            Portal Hearts
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-2 max-w-2xl">
            A Journey Through Worlds
          </p>
          
          <p className="text-lg text-white/70 mb-12 max-w-xl">
            Uncover the truth behind the mysterious portals and find love in the most unexpected places.
          </p>

          <div className="space-y-4">
            <Button 
              variant="romantic" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => setGameStarted(true)}
            >
              <Play className="h-5 w-5 mr-2" />
              Begin Your Journey
            </Button>
            
            <div className="flex gap-4">
              <Button variant="secondary" size="lg">
                Load Game
              </Button>
              <Button variant="secondary" size="lg">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <GameHeader 
        title="Portal Hearts" 
        chapter={`Chapter ${currentChapter}: The First Encounter`}
      />
      
      <main className="pt-20 container mx-auto px-4 py-8">
        {activeTab === 'story' && (
          <div className="max-w-4xl mx-auto">
            <StorySection
              title={storyContent[1].title}
              content={storyContent[1].content}
              image={storyContent[1].image}
              choices={storyContent[1].choices}
              onChoice={handleChoice}
            />
          </div>
        )}

        {activeTab === 'characters' && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl text-gradient-romantic mb-4">
                Characters
              </h2>
              <p className="text-muted-foreground">
                Build relationships and uncover their secrets
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onSelect={handleCharacterSelect}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'memories' && (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl text-gradient-romantic mb-4">
              Memories
            </h2>
            <p className="text-muted-foreground mb-8">
              Revisit special moments and scenes you've unlocked
            </p>
            <div className="otome-card p-8">
              <p className="text-muted-foreground">
                No memories unlocked yet. Progress through the story to collect special moments!
              </p>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl text-gradient-romantic mb-8 text-center">
              Settings
            </h2>
            <div className="space-y-4">
              <div className="otome-card p-6">
                <h3 className="font-semibold mb-4">Audio Settings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Master Volume</span>
                    <div className="w-32 h-2 bg-muted rounded-full">
                      <div className="w-3/4 h-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Music Volume</span>
                    <div className="w-32 h-2 bg-muted rounded-full">
                      <div className="w-2/3 h-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="otome-card p-6">
                <h3 className="font-semibold mb-4">Game Settings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Auto-play Speed</span>
                    <Button variant="secondary" size="sm">Medium</Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Text Speed</span>
                    <Button variant="secondary" size="sm">Normal</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <GameMenu activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
