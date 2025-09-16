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
  const [characters, setCharacters] = useState([
    {
      id: 'min',
      name: 'Min',
      title: 'Weapons Supplier',
      image: minSupplierImage,
      description: 'Mid-twenties Macau native with Cantonese-Portuguese heritage. Broad shoulders, wicked smile, and deep knowledge of occult history. His easy humor masks fierce loyalty and quiet devotion that runs deeper than his playful flirting.',
      affection: 15,
      isUnlocked: true,
      relationship: 'Your reliable ally who always has your back, but his protective warnings about outsiders hint at deeper feelings.'
    },
    {
      id: 'captain-lee',
      name: 'Captain Lee',
      title: 'Supernatural Investigation Unit',
      image: captainLeeImage,
      description: 'Early thirties Korean-American commander investigating worldwide demon activity. Tall, broad-shouldered, and commanding, he represents law and order but clashes with your independent nature. His protection comes with structure and control.',
      affection: 10,
      isUnlocked: true,
      relationship: 'Professional tension with undeniable chemistry. His way would keep you safe but challenges your freedom to operate alone.'
    },
    {
      id: 'kai',
      name: 'Kai',
      title: 'Mysterious Guardian',
      image: kaiMysteriousImage,
      description: 'Appears timeless despite being 5000 years old. East Asian features, swimmer\'s build, and an otherworldly presence. Always appears when you need him most, but his knowledge of your situation is both thrilling and deeply unsettling.',
      affection: 5,
      isUnlocked: true,
      relationship: 'Dangerous attraction wrapped in mystery. You sense he\'s hiding something crucial, but can\'t resist trusting him when he saves your life.'
    },
  ]);

  const demonBestiary = {
    baigujing: "Bone Demon - A malevolent spirit inhabiting skeletal remains, bone-white face with hollow eye sockets that burn with crimson fire. Feeds on life force and can phase between physical and ethereal forms.",
    sheyao: "Snake Demon - Appears as a beautiful woman with serpentine lower body. Soft-spoken and deceptively meek, but becomes deadly when angered. Can hypnotize victims with her gaze and poison with her fangs.", 
    yaoguai: "Yaoguai - Monstrous half-human, half-beast creatures born from corrupted souls. Varying animal features mixed with human intelligence, making them unpredictable and dangerous opponents.",
    huxian: "Fox Demon - Extremely beautiful and charismatic beings with multiple fox tails. Masters of illusion and seduction, they can appear fully human but possess ancient wisdom and powerful magic."
  };

  const getStoryBranch = (chapter: number, choices: {[key: string]: string}) => {
    // Different storylines based on player choices
    if (choices.favor_min && chapter > 10) return 'min_route';
    if (choices.favor_lee && chapter > 10) return 'lee_route';  
    if (choices.favor_kai && chapter > 10) return 'kai_route';
    return 'main_story';
  };

  const storyContent: {[key: number]: any} = {
    1: {
      title: "ACT I: The Hunt - Night Market Shadows",
      content: "Macau's night market buzzes with life, but beneath the neon glow and street food aromas, something ancient stirs. You track the baigujing through narrow alleys behind the casinos, silver dagger gleaming in your grip. The bone demon's hollow sockets burn crimson as it turns to face you. 'Little hunter,' it hisses, voice like grinding stone, 'you know nothing of the chains that bind us. Soon, the seals will break, and your precious world will learn the truth of the gods' cruelty.' It lunges with bone claws extended, but you're ready. Yet as your blade connects, the demon dissolves into mist, leaving behind pulsing qi energy that makes your skin crawl. Strange whispers echo in the residue: 'The chains weaken... the prison shrinks... soon...'",
      image: boneDemonImage,
      choices: [
        { id: 'examine_qi_residue', text: 'Examine the strange qi energy residue' },
        { id: 'track_demon_trail', text: 'Try to track where the demon vanished' },
        { id: 'contact_sources', text: 'Contact your network about "weakening seals"' },
      ]
    },
    2: {
      title: "The Guardian Appears",
      content: "As you kneel to study the residue, shadows shift at the alley mouth. Three more baigujing emerge, their bone faces gleaming with malevolent hunger. Your talisman pouch is nearly empty from the first encounter. Claws reach for your throat when a figure drops silently from above—fluid, precise, deadly. He dispatches two demons before you can blink, movements too graceful to be entirely human. Dark eyes meet yours for a heartbeat that stretches like eternity, and you feel something stir in your chest—recognition, though you're certain you've never seen him before. Then he melts back into shadow, vanishing like morning mist. But the scent of sandalwood and rain lingers, and you swear you feel him watching you still.",
      image: qiLinesBgImage,
      choices: [
        { id: 'chase_mysterious_man', text: 'Try to follow the mysterious savior' },
        { id: 'analyze_fighting_style', text: 'Study his impossible fighting technique' },
        { id: 'focus_on_mission', text: 'Focus on getting supplies—questions can wait' },
      ]
    },
    3: {
      title: "Min's Workshop",
      content: "Min's workshop smells of sage, old parchment, and the metallic tang of blessed silver. He looks up from enchanting a new batch of talismans, that familiar roguish grin spreading across his handsome features. 'Let me guess—burned through your whole arsenal on something nasty?' His Portuguese-accented English carries genuine concern as he takes in your torn jacket and the qi burns on your hands. 'You know, sweetheart, every time you come in looking like you've been through a blender, I die a little inside.' He slides fresh talismans across the counter, his fingers brushing yours longer than necessary. 'These are stronger—infused with old Taoist binding spells my grandmother taught me. But maybe it's time to consider... I don't know... backup?' His brown eyes search yours hopefully.",
      image: qiLinesBgImage,
      choices: [
        { id: 'flirt_with_min', text: 'Flirt back—his concern is endearing' },
        { id: 'ask_about_seals', text: 'Ask him about "weakening seals" and ancient chains' },
        { id: 'keep_professional', text: 'Stay professional—romance complicates everything' },
      ]
    },
    4: {
      title: "Federal Interest",
      content: "Your apartment building's lobby feels different when you finally drag yourself home. A stranger in a crisp federal suit leans against the mailboxes, and your hand instinctively moves to the concealed blade at your hip. 'Easy there,' he says, raising his hands and revealing a badge. 'Captain Lee, Supernatural Investigation Unit.' His commanding presence fills the small space as steel-gray eyes assess you with professional interest. 'You're the independent operator who's been tracking supernatural activity in Macau. We need to talk.' He straightens, all business and barely contained authority. 'Demon manifestations have spiked 400% globally in the last month. Whatever you're hunting isn't isolated anymore. My unit is taking point on this investigation.' His gaze doesn't waver. 'The question is: are you going to cooperate, or do I need to make this... official?'",
      image: qiLinesBgImage,
      choices: [
        { id: 'cooperate_with_lee', text: 'Agree to cooperate—you need resources' },
        { id: 'resist_authority', text: 'Push back—you work alone for good reasons' },
        { id: 'negotiate_terms', text: 'Negotiate—cooperation, but on your terms' },
      ]
    },
    5: {
      title: "First Dream Contact",
      content: "That night, your dreams are different. Instead of the usual chaos of hunting and fighting, you find yourself in a moonlit garden that feels both ancient and timeless. Lotus blossoms float on still water, and the air hums with peaceful qi energy. 'You're stronger than you know,' a familiar voice says. You turn to find the mysterious man from the alley, but here in the dream realm, he seems more real somehow—more present. His dark eyes hold centuries of wisdom and something that might be tenderness. 'The path ahead is dangerous. The demons you hunt... they're not what they seem.' He reaches out as if to touch your face, then hesitates. 'I want to tell you everything, but...' His form begins to fade as dawn approaches. 'Trust your instincts. And be careful who you trust.' You wake with the scent of sandalwood on your pillow and his warning echoing in your mind.",
      image: qiLinesBgImage,
      choices: [
        { id: 'seek_dream_connection', text: 'Try to reconnect with him in your dreams' },
        { id: 'research_dream_magic', text: 'Research the connection between dreams and qi' },
        { id: 'dismiss_as_stress', text: 'Dismiss it as stress from recent events' },
      ]
    },
    6: {
      title: "The Team Forms",
      content: "Three days later, you stand before a massive qi disturbance beneath Hong Kong's financial district. The energy readings are off the charts, and reality seems to waver like heat shimmer where the dimensional barrier has worn thin. Captain Lee coordinates his tactical team with military precision while Min unpacks modified containment gear, his usual jokes subdued by the magnitude of what you're facing. 'The disturbance is centered on the old ley—er, qi lines,' Min reports, consulting ancient maps overlaid with modern GPS coordinates. 'If this tears open completely...' Lee's jaw tightens. 'We're looking at a full manifestation event. Potentially hundreds of entities breaking through.' For the first time, you realize you're not facing isolated incidents—something is systematically weakening the barriers between worlds. And somewhere in the back of your mind, a familiar voice whispers a warning you can't quite remember.",
      image: qiLinesBgImage,
      choices: [
        { id: 'focus_on_min_research', text: 'Work closely with Min on the mystical aspects' },
        { id: 'coordinate_with_lee', text: 'Integrate with Lee\'s tactical approach' },
        { id: 'seek_kai_guidance', text: 'Try to contact your mysterious dream guide' },
      ]
    },
    7: {
      title: "ACT II: The Pattern - Snake in the Grass",
      content: "The sheyao appears as the most beautiful woman you've ever seen—until she smiles and you glimpse the fangs. 'Such a pretty little hunter,' she purrs, her voice hypnotically soft. 'Do you really think your silver trinkets can harm one such as I?' Her human facade begins to slip, revealing scales that shimmer like oil on water and eyes that burn with ancient intelligence. 'We were not always monsters, child. Once, we loved and laughed and dreamed just as you do.' She moves with liquid grace, circling you in the abandoned temple. 'Ask yourself—who made us this way? Who bound us in chains of agony and called it justice?' Her words plant seeds of doubt even as you raise your blessed blade. Min's warnings echo in your mind, but so do the dreams where Kai spoke of deception and hidden truths.",
      image: snakeDemonImage,
      choices: [
        { id: 'listen_to_sheyao', text: 'Listen to what the snake demon has to say' },
        { id: 'attack_immediately', text: 'Attack before she can weave more lies' },
        { id: 'demand_proof', text: 'Demand proof of her claims about the past' },
      ]
    },
    8: {
      title: "Growing Bonds - Min's Confession",
      content: "Late that night in Min's workshop, surrounded by the comforting scents of herbs and old books, the weight of recent revelations presses down on you both. Min works in unusual silence, crafting new protective charms with methodical precision. Finally, he sets down his tools and looks at you with those warm brown eyes. 'My grandmother used to tell stories,' he says quietly. 'About the old days, before the seals. She said the demons weren't always our enemies.' His hands tremble slightly as he reaches for yours. 'I've been researching, and some of what that snake said... it matches the old tales. What if we've been wrong all this time?' The vulnerability in his voice makes your heart ache. 'I can't lose you to this crusade, especially not if it's built on lies. Promise me you'll be careful?' The way he looks at you makes it clear his feelings run much deeper than friendship.",
      image: qiLinesBgImage,
      choices: [
        { id: 'reciprocate_min_feelings', text: 'Tell Min you care about him too' },
        { id: 'focus_on_mission', text: 'Stay focused on uncovering the truth' },
        { id: 'ask_about_grandmother', text: 'Ask more about his grandmother\'s stories' },
      ]
    },
    9: {
      title: "Military Precision - Lee's Protection",
      content: "Captain Lee's command center buzzes with controlled activity as his team tracks supernatural incidents across three continents. You find yourself impressed by his tactical mind and the loyalty he inspires in his subordinates. 'Your fighting style is impressive,' he says during a quiet moment, reviewing combat footage. 'But you take unnecessary risks.' His stern expression softens almost imperceptibly. 'In my world, we protect each other. No one fights alone.' When you point out that you've survived this long on your own, his jaw tightens. 'Survival isn't the same as living. And what happens when your luck runs out?' His concern is genuine, even if his methods feel restrictive. 'Let me help you. Let my team watch your back.' The way he says it makes it clear he's not just talking professionally—there's something personal in his desire to keep you safe.",
      image: qiLinesBgImage,
      choices: [
        { id: 'accept_lee_protection', text: 'Accept Lee\'s offer of protection' },
        { id: 'maintain_independence', text: 'Insist on maintaining your independence' },
        { id: 'find_middle_ground', text: 'Suggest a compromise between approaches' },
      ]
    },
    10: {
      title: "Dream Realm Revelations",
      content: "Your dream encounters with Kai grow more frequent and intense. Tonight, the moonlit garden has given way to a vast library that exists between sleeping and waking. Ancient scrolls float in the air around you, their contents shifting between languages you recognize and scripts that predate human civilization. Kai stands among them, more solid than ever before, his presence both comforting and deeply unsettling. 'The truth is written here,' he says, gesturing to the scrolls. 'But reading it will change everything you believe about your purpose.' His eyes hold such profound sadness that you want to comfort him. 'I've watched over your bloodline for millennia, and I've seen what happens when hunters learn the truth. Some break. Some rage. Some...' He trails off, reaching out to almost-touch your cheek. 'What will you do when you learn that everything you've been taught is a beautiful lie designed to make you a weapon against the innocent?'",
      image: qiLinesBgImage,
      choices: [
        { id: 'demand_full_truth', text: 'Demand he tell you everything now' },
        { id: 'express_care_for_kai', text: 'Tell him you trust him despite the mysteries' },
        { id: 'ask_about_bloodline', text: 'Ask about your family\'s true history' },
      ]
    },
    11: {
      title: "The Fox's Game",
      content: "The huxian demon who calls herself Lady Crimson is perhaps the most dangerous opponent you've faced—not because of her power, but because of her charisma. She holds court in an abandoned opera house, surrounded by illusions so beautiful they make reality seem drab by comparison. 'Such a serious little hunter,' she laughs, her nine fox tails swishing with amusement. 'Always so focused on duty, never stopping to ask why you fight.' Her beauty is otherworldly, her intelligence sharp as any blade. 'Would you like to know a secret? Your ancestors didn't just serve the gods—they loved them. Until they learned what their divine masters really were.' She conjures images in the air—humans in chains, children torn from parents, lovers separated by divine decree. 'The gods you serve are slavers, little one. And you are their most beautiful weapon.'",
      image: foxDemonImage,
      choices: [
        { id: 'resist_fox_illusions', text: 'Resist her illusions and attack' },
        { id: 'engage_in_debate', text: 'Engage with her claims about the gods' },
        { id: 'seek_proof_of_claims', text: 'Demand concrete proof of these accusations' },
      ]
    },
    12: {
      title: "Convergence of Hearts",
      content: "The breakthrough comes during a quiet evening when all three paths of your heart converge in Min's workshop. Lee arrives first, having tracked energy signatures to the shop. His surprise at finding you there gives way to professional courtesy, though you catch him assessing Min with barely concealed suspicion. Min, for his part, maintains his easy charm while clearly marking his territory. The tension might have been unbearable if not for the gravity of what you've discovered. 'The qi line convergences aren't random,' you explain, spreading out the research you've gathered. 'Someone is systematically weakening the seals.' Lee's tactical mind immediately grasps the implications while Min's mystical knowledge fills in the gaps. For a moment, working together, the three of you achieve something none could have managed alone. But the personal undercurrents remain—each man representing a different future, a different choice about who you want to become.",
      image: qiLinesBgImage,
      choices: [
        { id: 'acknowledge_feelings', text: 'Acknowledge the tension between all three of you' },
        { id: 'focus_on_mission_only', text: 'Keep everyone focused purely on the mission' },
        { id: 'suggest_team_approach', text: 'Suggest you all work together going forward' },
      ]
    },
    13: {
      title: "The Sealing Ritual",
      content: "The final qi convergence point lies beneath an ancient Taoist temple in the mountains outside Beijing. Here, where the barriers between worlds are thinnest, you prepare to enact a sealing ritual that combines Min's ancestral knowledge, Lee's tactical resources, and the mysterious guidance you've received in dreams. The ritual circle glows with protective characters as you begin the incantations. Power flows through you, ancient and pure, as reality itself seems to bend to your will. One by one, the unstable portals across the globe begin to stabilize and seal. The demonic incursions that have plagued humanity for months finally cease. 'We did it,' Lee breathes, disbelief and relief warring in his voice. Min pulls you into a fierce embrace, his laughter echoing off the temple walls. Even Kai appears one final time, pride and something deeper shining in his dark eyes before he fades. The world is safe. The seals hold. For the first time in months, you can imagine a future.",
      image: qiLinesBgImage,
      choices: [
        { id: 'choose_min_ending', text: 'Choose to build a life with Min' },
        { id: 'choose_lee_ending', text: 'Choose to join Lee\'s unit permanently' },
        { id: 'choose_kai_ending', text: 'Seek out Kai to understand your connection' },
      ]
    },
    14: {
      title: "ACT III: The Betrayal - Shattered Illusions",
      content: "Your choice hangs in the air, decision crystallizing in your heart, when reality fractures around you. The mysterious man—Kai—steps from shadow, but now you see him truly: otherworldly power radiates from his form, and his eyes burn with the light of ancient stars. Horns curve gracefully from his temples, and wings fold against his back like living midnight. 'I'm sorry,' he says, and his voice carries harmonics that resonate in your bones. 'But you need to understand the truth before you can choose.' Before you can react, darkness swallows you whole. When consciousness returns, you stand in a realm of impossible beauty and terrible sorrow—obsidian spires reaching toward crimson skies, where the very air weeps with the grief of the imprisoned. 'Welcome to Diyu,' Kai says softly, and you hear millennia of pain in those simple words. 'Welcome to the prison the gods call hell.'",
      image: qiLinesBgImage,
      choices: [
        { id: 'demand_explanation', text: 'Demand to know why he deceived you' },
        { id: 'try_to_escape', text: 'Look for a way back to Earth' },
        { id: 'stay_calm_assess', text: 'Stay calm and try to understand' },
      ]
    },
    15: {
      title: "Yanluo Wang's Truth",
      content: "The throne room of Diyu stretches beyond mortal comprehension, carved from stone that pulses with the heartbeat of a dying realm. Upon a throne of crystallized tears sits Yanluo Wang, the Demon King, whose presence presses against your mind like the weight of eternity. When he speaks, his voice carries the accumulated sorrow of countless souls. 'Child of the hunter bloodline,' he intones, 'behold the truth your ancestors died to hide.' Images flood your consciousness—not of demons as monsters, but as humans. Families torn apart by divine decree, children screaming as celestial chains drag them into darkness, lovers separated for the crime of defying heaven's will. 'We were people once,' Yanluo Wang's voice breaks with ancient grief. 'Poets, farmers, mothers, fathers—transformed into the very monsters you hunt because we dared to question the gods' tyranny.' His eyes, older than civilization, bore into yours. 'Every demon you've slain was once someone's beloved child.'",
      image: qiLinesBgImage,
      choices: [
        { id: 'reject_demon_claims', text: 'Reject this version of history' },
        { id: 'question_ancestors_role', text: 'Question your family\'s true role' },
        { id: 'demand_more_proof', text: 'Demand concrete evidence' },
      ]
    },
    16: {
      title: "The Dying Realm",
      content: "Yanluo Wang gestures, and the walls become transparent, revealing Diyu's heartbreaking reality. What you see destroys every preconception: families huddled together in fading light, children with small horns and frightened eyes playing games that echo their lost humanity, elderly demons whose human memories shine clearly in their ancient faces. 'This realm shrinks each day,' the king explains, his voice heavy with despair. 'The gods' prison contracts like a closing fist. Soon, there will be nothing left.' A small demon child approaches, her appearance monstrous but her eyes achingly innocent. She tugs on your sleeve with claws that should terrify you but instead fill you with protective fury. 'Are you the one who will save us?' she whispers in a voice like tinkling bells. The weight of potential genocide settles on your shoulders. Your sealed portals weren't stopping an invasion—they were sealing off an entire people's only hope of escape from extinction.",
      image: qiLinesBgImage,
      choices: [
        { id: 'vow_to_help', text: 'Vow to help free the trapped souls' },
        { id: 'seek_alternative_solution', text: 'Search for another way to save everyone' },
        { id: 'need_time_to_process', text: 'Ask for time to process this revelation' },
      ]
    },
    17: {
      title: "Kai's Confession",
      content: "In a quiet corner of the dying realm, away from the throne room's overwhelming presence, Kai finally reveals his heart. 'I've watched your bloodline for five thousand years,' he admits, his otherworldly beauty somehow more human in its vulnerability. 'At first, it was duty—protect the hunters from the truth that would break them. But you...' He reaches out, hesitating just short of touching your face. 'Somewhere between your first demon hunt and your first nightmare about the chains, protecting you became everything. I saved you because I had to, but I fell in love with who you are.' His eyes search yours desperately. 'The deception was necessary—how could I tell you that your life's work was built on lies? That every demon you fought was a victim?' His form wavers between human and otherworldly. 'I am the Prince of Diyu, but before that... I was just a man who questioned why the gods demanded such cruelty. They made me into this, just as they made all of us.'",
      image: qiLinesBgImage,
      choices: [
        { id: 'forgive_kai_deception', text: 'Forgive him—you understand why he hid the truth' },
        { id: 'feel_betrayed_by_lies', text: 'Feel betrayed by the depth of his deception' },
        { id: 'focus_on_feelings', text: 'Focus on your real feelings for him' },
      ]
    },
    18: {
      title: "Earth's Response",
      content: "Back on Earth, chaos reigns in your absence. Min paces his workshop like a caged animal, ancient tomes scattered everywhere as he searches frantically for dimensional traveling techniques. His usual easy charm has been replaced by desperate determination, and the dark circles under his eyes speak of sleepless nights. 'I won't lose her,' he mutters to himself, mixing ingredients for increasingly dangerous rituals. Captain Lee has mobilized every resource at his disposal, transforming your disappearance into a full-scale military operation. His controlled facade cracks as he barks orders to federal agents and supernatural units, the professional mask slipping to reveal raw panic underneath. 'Find me a way into that realm,' he demands of his technical team. 'I don't care if we have to tear reality apart.' Neither man knows about your revelation, about the choice that now tears at your very soul, but both are prepared to storm hell itself to bring you home.",
      image: qiLinesBgImage,
      choices: [
        { id: 'worry_about_min', text: 'Worry about Min attempting dangerous magic' },
        { id: 'concern_for_lee', text: 'Be concerned about Lee\'s military response' },
        { id: 'focus_on_current_choice', text: 'Focus on the choice before you now' },
      ]
    },
    19: {
      title: "The Gods' Chains",
      content: "Yanluo Wang leads you deeper into Diyu, to a chamber where massive chains of pure light stretch into infinity—the very bonds that keep the demons trapped in their shrinking prison. 'These chains are powered by belief,' he explains, his voice echoing with cosmic weight. 'Every hunter who kills a demon in righteous fury, every human who fears the supernatural without question, every prayer to the gods for protection from us—all of it feeds the chains.' You can feel the power thrumming through the bonds, sustained by humanity's faith in the very lies that created this injustice. 'Your ancestors discovered this truth,' Yanluo Wang continues. 'They tried to break the chains, to expose the gods' cruelty. The gods' response was to turn their own bloodline into weapons against us.' The small demon child takes your hand, her trust absolute despite everything. 'To free us, you must help humanity see the truth. But that means destroying the foundation of everything they believe about good and evil.'",
      image: qiLinesBgImage,
      choices: [
        { id: 'commit_to_truth', text: 'Commit to revealing the truth to humanity' },
        { id: 'seek_gradual_change', text: 'Look for a way to change things gradually' },
        { id: 'worry_about_consequences', text: 'Worry about the consequences of destroying human faith' },
      ]
    },
    20: {
      title: "The Rescue Attempts",
      content: "Reality tears open as both Min and Captain Lee force their way into Diyu through sheer determination and desperate love. Min arrives first, wreathed in protective charms and wielding magic that should have killed him to cast. His eyes find yours across the throne room, relief and terror warring on his face. 'I told you I wouldn't lose you,' he gasps, blood trickling from his nose from the magical strain. Captain Lee's entrance is more explosive—a full tactical breach supported by experimental technology that makes the air itself scream. 'Stand down!' he orders the assembled demons, his weapon trained on Yanluo Wang. 'Return what you've taken!' The irony isn't lost on you: both men have risked everything to 'save' you from learning a truth that changes everything. Kai steps protectively closer, his demonic form causing both rescuers to tense. 'They don't understand,' he says quietly. 'To them, we're still the monsters.'",
      image: qiLinesBgImage,
      choices: [
        { id: 'try_to_explain', text: 'Try to explain the truth to Min and Lee' },
        { id: 'go_with_rescuers', text: 'Go with your rescuers to avoid conflict' },
        { id: 'stand_with_demons', text: 'Stand with the demons and defend the truth' },
      ]
    },
    21: {
      title: "The Moment of Choice",
      content: "All the threads of your journey converge in this impossible moment. Min stands before you, love and desperation in his eyes, offering a return to the familiar world where you were partners in all things. Captain Lee represents duty and structure, the promise of belonging to something greater while remaining on the side of apparent righteousness. And Kai—beautiful, terrible Kai—offers truth at the cost of everything you've ever believed about yourself and your purpose. The demon child still clutches your hand, her small fingers trembling with hope. Yanluo Wang watches with ancient patience, understanding that this choice will determine the fate of two worlds. 'Whatever you decide,' Kai says softly, 'I will not hold it against you. The burden of truth is heavy, and love... love should not be built on the ashes of everything you once believed.' The weight of genocide presses down on you, but so does the love of three very different men and the question of who you truly want to become.",
      image: qiLinesBgImage,
      choices: [
        { id: 'choose_truth_and_kai', text: 'Choose truth and stand with Kai to free the demons' },
        { id: 'return_with_min', text: 'Return to Earth with Min to find another way' },
        { id: 'return_with_lee', text: 'Return with Lee to work within the system' },
      ]
    },
    22: {
      title: "The Price of Truth",
      content: "Your choice reverberates through both realms like a bell tolling the end of an age. If you chose truth, you stand with Kai as Diyu's new hope, knowing that breaking the chains means shattering humanity's faith in the gods and facing their fear and hatred. The love between you burns bright against the darkness, but it comes at the cost of everything familiar. If you chose Min, you return to Earth with someone who loves you enough to help find a middle path, but the knowledge of Diyu's dying inhabitants weighs on your conscience. If you chose Lee, you must work within systems built on the very lies you now know to be false, but perhaps you can gradually change things from within. The demon child's fate—and the fate of thousands like her—hangs in the balance. Yanluo Wang's final words echo in your mind: 'Every choice has a price, little hunter. The question is: which price are you willing to pay?' As the credits begin to roll, one thing is certain—nothing will ever be the same again.",
      image: qiLinesBgImage,
      choices: [
        { id: 'start_new_game', text: 'Begin a new journey with different choices' },
        { id: 'reflect_on_ending', text: 'Reflect on the consequences of your choices' },
        { id: 'explore_other_routes', text: 'Explore what might have happened differently' },
      ]
    }
  };

  const handleChoice = (choiceId: string) => {
    console.log('Player chose:', choiceId);
    
    // Track player choices for branching storylines
    const newChoices = { ...playerChoices, [`chapter_${currentChapter}`]: choiceId };
    setPlayerChoices(newChoices);
    
    // Handle relationship changes based on choices
    if (choiceId.includes('min') || choiceId.includes('flirt_with_min') || choiceId.includes('focus_on_min') || choiceId.includes('reciprocate_min')) {
      setCharacters(prev => prev.map(char => 
        char.id === 'min' ? {...char, affection: char.affection + 5} : char
      ));
      newChoices.favor_min = 'true';
    } else if (choiceId.includes('lee') || choiceId.includes('cooperate_with_lee') || choiceId.includes('coordinate_with_lee') || choiceId.includes('accept_lee')) {
      setCharacters(prev => prev.map(char => 
        char.id === 'captain-lee' ? {...char, affection: char.affection + 5} : char
      ));
      newChoices.favor_lee = 'true';
    } else if (choiceId.includes('kai') || choiceId.includes('mysterious') || choiceId.includes('seek_kai') || choiceId.includes('chase_dream')) {
      setCharacters(prev => prev.map(char => 
        char.id === 'kai' ? {...char, affection: char.affection + 5} : char
      ));
      newChoices.favor_kai = 'true';
    }
    
    // Handle special story branches and endings
    if (choiceId.includes('choose_') && currentChapter >= 13) {
      setCharacters(prev => prev.map(char => ({
        ...char,
        isChosen: choiceId.includes(char.id.replace('-', '_'))
      })));
    }
    
    // Progress to next chapter
    if (currentChapter < 22) {
      setCurrentChapter(prev => prev + 1);
    } else if (choiceId === 'start_new_game') {
      // Reset for new playthrough
      setCurrentChapter(1);
      setPlayerChoices({});
      setCharacters(prev => prev.map(char => ({ ...char, affection: 15, isChosen: false })));
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
          style={{ backgroundImage: `url(${qiLinesBgImage})` }}
        >
          <div className="absolute inset-0 gradient-fantasy opacity-80" />
        </div>

        {/* Title Screen */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
          <div className="floating mb-8">
            <Sparkles className="h-16 w-16 text-accent mx-auto mb-4" />
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
            Broken Seals
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            A mystical otome game where ancient Chinese mythology meets modern demon hunting. 
            Uncover the truth about divine chains, forbidden love, and the price of justice in a world where nothing is as it seems.
          </p>
          
          <Button 
            variant="romantic" 
            size="lg" 
            onClick={() => setGameStarted(true)}
            className="gap-2 text-lg px-8 py-4"
          >
            <Play className="h-5 w-5" />
            Begin Your Journey
          </Button>

          <div className="mt-12 text-center">
            <h3 className="font-display text-2xl text-white mb-6">Featured Characters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {characters.map((character) => (
                <div key={character.id} className="otome-card p-4">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-primary"
                  />
                  <h4 className="font-display font-semibold text-foreground mb-1">{character.name}</h4>
                  <p className="text-sm text-muted-foreground">{character.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GameHeader title="Broken Seals" />
      
      <div className="container mx-auto px-4 py-8">
        <GameMenu activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === 'story' && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                Chapter {currentChapter} of 22
              </h2>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentChapter / 22) * 100}%` }}
                />
              </div>
            </div>
            
            <StorySection
              title={storyContent[currentChapter]?.title || "The End"}
              content={storyContent[currentChapter]?.content || "Thank you for playing Broken Seals!"}
              image={storyContent[currentChapter]?.image}
              choices={storyContent[currentChapter]?.choices}
              onChoice={handleChoice}
              onContinue={currentChapter < 22 ? () => setCurrentChapter(prev => prev + 1) : undefined}
            />
          </div>
        )}

        {activeTab === 'characters' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-8 text-foreground">
              Character Relationships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onSelect={() => handleCharacterSelect(character.id)}
                />
              ))}
            </div>

            <div className="mt-12 otome-card p-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Demon Bestiary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(demonBestiary).map(([key, description]) => (
                  <div key={key} className="border-l-4 border-primary pl-4">
                    <h4 className="font-display font-semibold text-foreground capitalize mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-muted-foreground text-sm">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;