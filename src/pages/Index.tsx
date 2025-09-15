import { useState } from "react";
import { GameHeader } from "@/components/GameHeader";
import { GameMenu } from "@/components/GameMenu";
import { CharacterCard } from "@/components/CharacterCard";
import { StorySection } from "@/components/StorySection";
import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";

// Import character images
import mainCharacterImage from "@/assets/main-character-new.jpg";
import minSupplierImage from "@/assets/min-supplier.jpg";
import captainLeeImage from "@/assets/captain-lee.jpg";
import kaiMysteriousImage from "@/assets/kai-mysterious.jpg";
import qiLinesBgImage from "@/assets/qi-lines-bg.jpg";
import boneDemonImage from "@/assets/bone-demon.jpg";
import snakeDemonImage from "@/assets/snake-demon.jpg";
import foxDemonImage from "@/assets/fox-demon.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [currentChapter, setCurrentChapter] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerChoices, setPlayerChoices] = useState<{[key: string]: string}>({});
  const [playerRoute, setPlayerRoute] = useState<'min' | 'lee' | 'kai' | 'neutral'>('neutral');
  
  const [characters, setCharacters] = useState([
    {
      id: 'min',
      name: 'Min',
      title: 'Weapons Supplier',
      image: minSupplierImage,
      description: 'Mid-twenties Macau native, half Cantonese/half Portuguese. Broad shoulders, wicked smile, and deep knowledge of occult history.',
      affection: 15,
      isUnlocked: true,
      relationship: 'Your trusted supplier with protective instincts that hint at deeper feelings.'
    },
    {
      id: 'captain-lee',
      name: 'Captain Lee',
      title: 'Supernatural Investigation Unit',
      image: captainLeeImage,
      description: 'Early thirties Korean American commander. Tall, broad-shouldered, commanding presence leading supernatural investigations.',
      affection: 10,
      isUnlocked: true,
      relationship: 'Professional respect with underlying personal interest and protective nature.'
    },
    {
      id: 'kai',
      name: 'Kai',
      title: 'Ancient Guardian',
      image: kaiMysteriousImage,
      description: '5000 years old but appears timeless. East Asian features, swimmer\'s build. Mysterious protector with ancient knowledge.',
      affection: 5,
      isUnlocked: true,
      relationship: 'Enigmatic guardian who appears in dreams and saves your life repeatedly.'
    },
  ]);

  const demonBestiary = {
    baigujing: "Bone Demon - Bone white monster with hollow eye sockets burning with crimson fire.",
    sheyao: "Snake Demon - Soft spoken and meek in appearance but deadly when angry.", 
    yaoguai: "Yaoguai - Monstrous half human/half beast creatures with dangerous intelligence.",
    huxian: "Fox Demon - Extremely beautiful and charismatic with multiple fox tails."
  };

  const storyContent: {[key: number]: any} = {
    // ACT I: THE AWAKENING (Chapters 1-6)
    1: {
      title: "ACT I: Night Market Shadows",
      content: "Macau's night market pulses with neon life, but ancient darkness stirs beneath. You track the baigujing through narrow alleys, silver dagger ready. The bone demon turns—hollow sockets burning crimson. 'Little hunter,' it hisses, 'the seals weaken, and your world will learn the gods' cruelty.' Your blade connects, but it dissolves into mist, leaving pulsing qi residue. Whispers echo: 'The prison shrinks... soon...'",
      image: boneDemonImage,
      choices: [
        { id: 'examine_qi_residue', text: 'Examine the strange qi energy' },
        { id: 'track_demon_trail', text: 'Follow the demon\'s path' },
        { id: 'contact_min_supplier', text: 'Contact Min about weakening seals' },
      ]
    },
    2: {
      title: "The Mysterious Guardian",
      content: "Three more baigujing emerge. Your talismans are spent when a figure drops from above—fluid, deadly, impossible. He dispatches demons with inhuman grace. Dark eyes meet yours for a heartbeat that stretches like eternity, stirring recognition you can't place. He vanishes like mist, leaving only sandalwood and rain... and the certainty he's still watching.",
      image: kaiMysteriousImage,
      choices: [
        { id: 'seek_kai_connection', text: 'Try to find your mysterious savior' },
        { id: 'focus_on_supplies', text: 'Head to Min\'s workshop for supplies' },
        { id: 'report_to_authorities', text: 'Consider reporting the incident' },
      ]
    },
    3: {
      title: "Min's Workshop",
      content: "Min's workshop smells of sage and blessed silver. His roguish grin fades seeing your torn jacket and qi burns. 'Every time you come in like this, I die a little inside,' he says, Portuguese accent thick with worry. Fresh talismans slide across the counter, his fingers lingering on yours. 'These are stronger—my grandmother's Taoist binding spells. But maybe... backup?' The vulnerability in his brown eyes reveals deeper feelings.",
      image: minSupplierImage,
      choices: [
        { id: 'min_flirt_back', text: 'Let yourself respond to his affection' },
        { id: 'ask_about_old_seals', text: 'Ask about his grandmother\'s stories' },
        { id: 'keep_professional_min', text: 'Maintain professional boundaries' },
      ]
    },
    4: {
      title: "Federal Investigation",
      content: "Captain Lee waits in your lobby, federal badge gleaming. His commanding presence fills the space as steel-gray eyes assess you. 'Demon manifestations spiked 400% globally,' he states. 'My unit is taking point. You can cooperate... or I make this official.' His concern seems genuine beneath the authority, but his methods feel restrictive to your independence.",
      image: captainLeeImage,
      choices: [
        { id: 'lee_cooperation', text: 'Agree to work with his unit' },
        { id: 'resist_lee_authority', text: 'Refuse federal interference' },
        { id: 'negotiate_lee_terms', text: 'Propose a partnership instead' },
      ]
    },
    5: {
      title: "First Dream - Kai's Warning",
      content: "Your dreams shift to a moonlit garden, timelessly ancient. Lotus blossoms float on qi-humming water. 'You're stronger than you know,' says a familiar voice. Kai stands among flowers, more real than reality. His eyes hold centuries of wisdom and tender concern. 'The demons aren't what they seem. I want to tell you everything, but...' He reaches toward your face, hesitates. 'Trust your instincts. Be careful who you trust.' You wake with sandalwood on your pillow.",
      image: qiLinesBgImage,
      choices: [
        { id: 'pursue_kai_dreams', text: 'Try to reconnect in dreams' },
        { id: 'research_dream_qi', text: 'Study dream-realm connections' },
        { id: 'focus_on_mission', text: 'Dismiss as stress dreams' },
      ]
    },
    6: {
      title: "The Team Assembles",
      content: "A massive qi disturbance beneath Hong Kong brings you together. Reality wavers where barriers have thinned. Lee coordinates tactical teams while Min consults ancient maps. 'The disturbance centers on qi lines,' Min reports. 'If this opens completely...' Lee's jaw tightens. 'Full manifestation event.' You realize something is systematically weakening barriers between worlds.",
      image: qiLinesBgImage,
      choices: [
        { id: 'work_with_min', text: 'Focus on mystical research with Min' },
        { id: 'coordinate_with_lee', text: 'Support Lee\'s tactical approach' },
        { id: 'seek_kai_guidance', text: 'Try to contact Kai for answers' },
      ]
    },

    // ACT II: THE PATTERN (Chapters 7-16)
    7: {
      title: "ACT II: The Snake's Truth",
      content: "The sheyao appears as perfect beauty—until fangs show. 'Pretty hunter,' she purrs hypnotically. Her facade slips, revealing oil-slick scales and burning eyes. 'We weren't always monsters. Once we loved and dreamed. Ask yourself—who made us this way? Who bound us in chains and called it justice?' Her words plant doubt even as you raise your blade.",
      image: snakeDemonImage,
      choices: [
        { id: 'listen_to_sheyao', text: 'Hear the snake demon\'s claims' },
        { id: 'attack_snake_demon', text: 'Strike before more lies' },
        { id: 'demand_snake_proof', text: 'Demand proof of accusations' },
      ]
    },
  };

  const handleChoice = (choiceId: string) => {
    setPlayerChoices(prev => ({
      ...prev,
      [currentChapter]: choiceId
    }));
    
    // Update character affection based on choices
    if (choiceId.includes('min')) {
      updateCharacterAffection('min', 5);
      if (currentChapter > 6) setPlayerRoute('min');
    } else if (choiceId.includes('lee')) {
      updateCharacterAffection('captain-lee', 5);
      if (currentChapter > 6) setPlayerRoute('lee');
    } else if (choiceId.includes('kai')) {
      updateCharacterAffection('kai', 5);
      if (currentChapter > 6) setPlayerRoute('kai');
    }
    
    setCurrentChapter(prev => Math.min(prev + 1, 22));
  };

  const updateCharacterAffection = (characterId: string, amount: number) => {
    setCharacters(prev => 
      prev.map(char => 
        char.id === characterId 
          ? { ...char, affection: Math.min(char.affection + amount, 100) }
          : char
      )
    );
  };

  const getCurrentStory = () => {
    const route = getStoryBranch(currentChapter, playerChoices);
    return storyContent[currentChapter] || storyContent[1];
  };

  const getStoryBranch = (chapter: number, choices: {[key: string]: string}) => {
    const minPoints = Object.values(choices).filter(c => c.includes('min')).length;
    const leePoints = Object.values(choices).filter(c => c.includes('lee')).length;
    const kaiPoints = Object.values(choices).filter(c => c.includes('kai')).length;
    
    if (chapter > 6) {
      if (minPoints > leePoints && minPoints > kaiPoints) return 'min_route';
      if (leePoints > minPoints && leePoints > kaiPoints) return 'lee_route';
      if (kaiPoints > minPoints && kaiPoints > leePoints) return 'kai_route';
    }
    return 'main_story';
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
              Broken Seals
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              An otome visual novel where ancient Chinese mythology meets modern supernatural hunting. 
              Your choices determine both the fate of the world and your heart.
            </p>
            <Button 
              onClick={() => setGameStarted(true)}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              <Play className="mr-2 h-5 w-5" />
              Begin Your Journey
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <GameHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GameMenu 
              activeTab={activeTab} 
              onTabChange={setActiveTab}
              currentChapter={currentChapter}
              totalChapters={22}
            />
            
            {activeTab === 'story' && (
              <StorySection 
                story={getCurrentStory()}
                onChoice={handleChoice}
                currentChapter={currentChapter}
                totalChapters={22}
              />
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-primary" />
                Characters
              </h3>
              <div className="space-y-4">
                {characters.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
