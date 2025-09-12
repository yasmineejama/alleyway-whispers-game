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
  const [characters, setCharacters] = useState([
    {
      id: 'weapons-supplier',
      name: 'Marcus',
      title: 'Weapons Supplier',
      image: weaponsSupplierImage,
      description: 'Your reliable supplier of enchanted weapons and charms. Easygoing and flirtatious, but his quiet devotion runs deeper than his jokes. Represents the safe, familiar choice—but warns you not to trust outsiders.',
      affection: 15,
      isUnlocked: true,
      relationship: 'A steady presence who always has your back, but his protective nature might be stifling your independence.'
    },
    {
      id: 'captain',
      name: 'Commander Hayes',
      title: 'Captain of Supernatural Investigation Unit',
      image: captainImage,
      description: 'An authoritative law-and-order type from NYC investigating the worldwide spike in demon activity. Pushes you to work "by the book" which clashes with your independence, but his protection comes with structure and control.',
      affection: 10,
      isUnlocked: true,
      relationship: 'Professional tension with undeniable chemistry. His way would keep you safe but suffocate your freedom.'
    },
    {
      id: 'mysterious-man',
      name: '???',
      title: 'Mysterious Savior',
      image: mysteriousManImage,
      description: 'A silent, magnetic figure who appears during fights just when you need him most. Disappears before you can question him, but the undeniable chemistry and his uncanny knowledge of your situation is both thrilling and unsettling.',
      affection: 5,
      isUnlocked: true,
      relationship: 'Dangerous attraction. You sense he\'s hiding something, but can\'t help trusting him when he saves your life.'
    },
  ]);

  const storyContent = {
    1: {
      title: "ACT I: The Hunt - Opening Battle",
      content: "The narrow alley behind Macau's glittering casinos reeks of decay and something far worse. Your silver dagger gleams as you corner the baigujing—its bone-white face contorting into a grotesque smile. 'You think you understand the hunt, little slayer?' it hisses, its voice like grinding glass. 'The chains of the gods grow weak. Soon, your precious world will learn the truth.' You lunge forward, but the demon dissolves into mist, leaving behind only strange, pulsing energy residue and the echo of its cryptic words.",
      image: portalBgImage,
      choices: [
        { id: 'examine_residue', text: 'Examine the strange energy residue carefully' },
        { id: 'chase_demon', text: 'Try to track where the demon went' },
        { id: 'call_contacts', text: 'Contact your network for information about "chains of the gods"' },
      ]
    },
    2: {
      title: "The Mysterious Savior",
      content: "Just as you kneel to examine the residue, shadows move at the alley's mouth. Three more baigujing emerge, their bone faces gleaming in the neon light. Your charms are nearly depleted from the first fight. As claws reach for your throat, a figure drops from the fire escape above—silent, precise, deadly. He dispatches two demons before you can blink, his movements almost too fast to follow. When you turn to thank him, piercing dark eyes meet yours for just a moment before he melts back into the shadows. Gone. Like he was never there at all.",
      image: portalBgImage,
      choices: [
        { id: 'follow_mysterious', text: 'Try to follow the mysterious man' },
        { id: 'analyze_fighting', text: 'Analyze his fighting technique - it seemed familiar' },
        { id: 'focus_mission', text: 'Focus on the mission - you need more supplies first' },
      ]
    },
    3: {
      title: "The Weapons Supplier",
      content: "Marcus's shop smells like sage and old leather. He looks up from polishing a silver blade, that familiar easy grin spreading across his face. 'Let me guess—used up all your entrapment charms on some nasty piece of work?' His tone is light, but you catch the concern in his eyes as he takes in your torn jacket and the energy burns on your hands. 'You know I worry when you come in looking like you've been through a blender, sweetheart. Maybe it's time to consider taking on a partner?' He slides a fresh set of charms across the counter. 'These ones are stronger. But promise me you'll be careful?'",
      image: portalBgImage,
      choices: [
        { id: 'flirt_marcus', text: 'Flirt back - his concern is sweet' },
        { id: 'ask_about_chains', text: 'Ask him about "chains of the gods"' },
        { id: 'keep_professional', text: 'Keep things professional - you need supplies, not complications' },
      ]
    },
    4: {
      title: "The Captain Arrives",
      content: "Your apartment building's lobby feels different when you finally drag yourself home. Commander Hayes leans against the mailboxes, his federal badge glinting under fluorescent lights. His jaw is set in that way that means trouble. 'We need to talk,' he says without preamble. 'Demon activity has spiked 400% worldwide in the last month. Whatever you're hunting in Macau, it's not isolated. My unit is taking point on this investigation, and whether you like it or not, you're involved.' His steel-gray eyes bore into yours. 'The question is: are you going to cooperate, or do I need to make this official?'",
      image: portalBgImage,
      choices: [
        { id: 'cooperate_hayes', text: 'Agree to cooperate - you need resources' },
        { id: 'resist_authority', text: 'Resist - you work alone for a reason' },
        { id: 'negotiate_terms', text: 'Negotiate - cooperation, but on your terms' },
      ]
    }
  };

  const handleChoice = (choiceId: string) => {
    console.log('Player chose:', choiceId);
    
    // Handle relationship changes based on choices
    if (choiceId === 'flirt_marcus') {
      // Increase Marcus affection
      setCharacters(prev => prev.map(char => 
        char.id === 'weapons-supplier' ? {...char, affection: char.affection + 5} : char
      ));
    } else if (choiceId === 'cooperate_hayes') {
      // Increase Hayes affection
      setCharacters(prev => prev.map(char => 
        char.id === 'captain' ? {...char, affection: char.affection + 5} : char
      ));
    } else if (choiceId === 'follow_mysterious') {
      // Increase mysterious man affection
      setCharacters(prev => prev.map(char => 
        char.id === 'mysterious-man' ? {...char, affection: char.affection + 5} : char
      ));
    }
    
    // Progress to next chapter
    if (currentChapter < 4) {
      setCurrentChapter(prev => prev + 1);
    }
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
        chapter={storyContent[currentChapter]?.title || `Chapter ${currentChapter}`}
      />
      
      <main className="pt-20 container mx-auto px-4 py-8">
        {activeTab === 'story' && (
          <div className="max-w-4xl mx-auto">
            <StorySection
              title={storyContent[currentChapter]?.title || "Chapter Complete"}
              content={storyContent[currentChapter]?.content || "You've reached the end of Act I. More chapters coming soon..."}
              image={storyContent[currentChapter]?.image || portalBgImage}
              choices={storyContent[currentChapter]?.choices || []}
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
