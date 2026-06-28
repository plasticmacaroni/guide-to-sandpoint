/* =====================================================================
   SEASON OF GHOSTS — the story data
   ---------------------------------------------------------------------
   This is the single source of truth for the narrative. Prose is kept
   deliberately terse and factual; the emotional weight is carried by
   verbatim lines from the table (marked as quotes) and by the art.
   Image keys are the 14-digit timestamps of the original files.
   ===================================================================== */

const IMG = (key) => `assets/img/img-${key}.png`;

const STORY = {
  meta: {
    title: "Season of Ghosts",
    subtitle: "A chronicle of Willowshore",
    kicker: "A Pathfinder campaign · 43 sessions · one year and one hundred and fifteen",
    intro:
      "A small logging town in the misted hinterlands of Shenmen. A festival where the heroes are " +
      "kidnapped into the woods for tradition's sake. They went to sleep on an ordinary night. " +
      "They woke beneath a blood moon, and nothing was ever ordinary again.",
  },

  /* ---- THE PARTY ----------------------------------------------------- */
  party: [
    {
      id: "aeson",
      name: "Aeson Virandr",
      player: "Bryan",
      role: "Ranger · Hunter of the Silver Mist",
      sigil: "弓",
      tint: "var(--lantern)",
      blurb:
        "Older, salt-and-pepper, a kama in one hand and a galeblade in the other. Spent his life guiding " +
        "rich lumberlords on hunts and doing the real work while they drank. Lives on the town's edge with " +
        "his wife Belinda — more familiar with the ghosts out there than with people.",
      creed: "“Once you're dead you're DEAD.”",
    },
    {
      id: "cormag",
      name: "Cormag",
      player: "Jeff",
      role: "Occultist · Scholar of ghosts",
      sigil: "書",
      tint: "var(--spirit)",
      blurb:
        "Blonde, of quiet celestial descent, raised at the Mother's Coil monastery by the outsider Anjal " +
        "and beside his sister Jubei. Keeps an occult-trinket booth and a head full of ghost-lore. A town " +
        "pariah to the old ladies who talk — and the one who remembers every monster's name.",
      creed: "“The dead resist the truth.”",
    },
    {
      id: "rui",
      name: "Rui Shuchirch",
      player: "Hayden",
      role: "Alchemist · Maker of bombs",
      sigil: "火",
      tint: "var(--blood-bright)",
      blurb:
        "A carpenter's son who loved fire more than fences. Anti-establishment, a little feral with a " +
        "fuse — “more Junkrat than Oppenheimer.” His mother died when he was thirteen, and the town " +
        "still whispers that he had something to do with it.",
      creed: "“More Junkrat than Oppenheimer.”",
    },
    {
      id: "orlen",
      name: "Orlen Tsai",
      player: "Josh",
      role: "Bard · The wandering elf",
      sigil: "琴",
      tint: "var(--mist-blue)",
      blurb:
        "A hundred and twenty years old and tired of most of them. Carries a lute he believes holds the " +
        "souls of his dead bandmates — when he plays, he swears he hears them singing beside him. The " +
        "locals think he brings bad luck.",
      creed: "“You can't be friends with the dead.”",
    },
    {
      id: "jnan",
      name: "J'nan",
      player: "Adam",
      role: "Animist · Keeper of the tea house",
      sigil: "茶",
      tint: "var(--spirit-warm)",
      blurb:
        "A kindly old Samsaran who gives candy to children and wants nothing more than to pour tea at the " +
        "Cerulean Tea House. For thirty-three years he has carried the negative karma of a past life — " +
        "spirits that cling to him, that he switches between and quietly resents.",
      creed: "“It's your job to provide the tea; it's mine to savor every last drop.”",
    },
  ],

  /* ---- CHAPTERS ------------------------------------------------------ */
  chapters: [
    /* ====== PROLOGUE ====== */
    {
      id: "prologue",
      numeral: "序",
      label: "Prologue",
      title: "The Reenactment Festival",
      mood: "dusk",
      dek:
        "Once a year Willowshore plays out its own founding: guards in blue oni masks carry off a chosen " +
        "few into the eastern woods, the way the first settlers were once taken. It is a game. It has " +
        "always been a game.",
      sections: [
        {
          type: "duet",
          img: "20250622203914",
          caption:
            "The carved stone spider that guards Willowshore's gate — the town's oldest protector, watching the festival crowd.",
          heading: "An ordinary night",
          body:
            "Aeson and Belinda bicker affectionately. Captain Zheng Peng walks with his daughter. The governor " +
            "buys a painting of crimson butterflies bursting from a charred tree. Cormag and Jubei sprint in " +
            "late to set up their booth — “We're late!” / “No, you're late!” Old Matsuki, standing in for the " +
            "absent governor, toasts “the fools who think we can't outdrink them.” Then the masked guards come " +
            "for the chosen and carry them into the woods — gently, taking care not to bruise them, or get them wet.",
        },
        {
          type: "quote",
          text:
            "May the lights that guide our nights never grow dim, and may this next winter never grow cold.",
          attribution: "Old Matsuki, blessing the festival in the governor's absence",
        },
        {
          type: "duet",
          img: "20250720191843",
          focus: "0%",
          caption:
            "A noppera-bo — a face-stealer. By the time it wears yours, your own is a smooth, eyeless blank.",
          heading: "Time to go back to sleep",
          body:
            "They are carried east and bedded down in a glade. On watch, Rui wakes to Aeson standing over " +
            "him, expressionless — “Time to go back to sleep…” — Aeson's face melting into Rui's own. They " +
            "wake somewhere else. Fog everywhere. The birds have stopped.",
          quote: "“Time to go back to sleep…”",
        },
      ],
    },

    /* ====== CHAPTER I ====== */
    {
      id: "ch1",
      numeral: "一",
      label: "Chapter One",
      title: "The Summer That Never Was",
      mood: "blood",
      dek:
        "Willowshore is overrun. The governor's mansion is simply gone. A blood moon hangs where the sun " +
        "should be, and the fog will not lift. House by house, the heroes take their town back.",
      sections: [
        {
          type: "full",
          img: "20250629220720",
          caption: "The blood moon over the skeletal forest, the river running red toward the town.",
          line: "He is a great evil one.",
        },
        {
          type: "duet",
          img: "20250622220105",
          caption:
            "A one-eyed buso on the bridge altar, a gourd of stolen wine in hand, a dozen jinkin gremlins in blood-stained white robes worshipping at its feet.",
          heading: "The thing on the bridge",
          body:
            "The spider-gate's guardian statue is gone and its lantern is dark. They relight it — the town has " +
            "a rhyme for what happens when no one does: “Lazy Ladue took a break and did not light the lamp " +
            "that day… as the ghost came out to play.” Past the dead guards and dead gremlins, at the Eternal " +
            "Lantern, a gaunt one-eyed creature sits enthroned — Gurglegut, a buso, drinking while its jinkin pray.",
        },
        {
          type: "gallery",
          heading: "The monsters of the first days",
          images: [
            { img: "20250622204942", caption: "A jinkin — fanged, ear-flapped, gripping a notched blade." },
            { img: "20250706203701", caption: "The Grey Butcher: a haunted apron hung with clattering silverware." },
            { img: "20250629221216", caption: "A green phantom wolf, risen early from the River of Souls — vulnerable to kindness." },
            { img: "20250713203939", caption: "Mo Do Qyo, the rokurokubi tyrant of the tea house, neck looped over a teacup." },
          ],
        },
        {
          type: "duet",
          img: "20250622205320",
          caption:
            "Ha-Er Hah, barricaded in the watchtower with blood on her cheek — one of the first survivors found alive.",
          heading: "Survivors",
          body:
            "Houses stand empty, or full of the slaughtered. At the walled Matsuki estate, a hundred wounded " +
            "shelter. Old Matsuki goes pale at the news of the governor's vanished mansion, and teaches the " +
            "ritual to relight the Eternal Lantern: three deities' blessings, on three coins, as the founder " +
            "once did. Nobody remembers anything from 3am the night of the attack. Aeson goes to check his own " +
            "house and nearly takes a crossbow bolt for it — Belinda had sat up for hours, certain she'd seen " +
            "“a big bug” at the windows, and very nearly shot her husband.",
        },
        {
          type: "duet",
          img: "20250713210239",
          caption:
            "“Sting-y” — the cave scorpion that drops from the tea-house ceiling, all eyes and stone.",
          heading: "Tea house, bath house, armory",
          body:
            "They poison the buso and put it down. In the tea house the rokurokubi tyrant breaks off mid-fight, " +
            "fretting over its pets — a toad named Warty (two of Aeson's swings) and a scorpion named Sting-y " +
            "that drops from the ceiling (one of Cormag's). Behind a locked door: chained, blindfolded children, " +
            "flown there by something with wings. They free them. At the bath house, a few cucumbers buy the " +
            "kappa's cooperation and the hypochondriac owner tumbles out of the locker he'd hidden in. In a " +
            "banquet room of flayed bodies, the will of Qing Mai-Lai promises the tea house to whoever recovers " +
            "two pearls thrown into Fumeiyoshi's Eyes.",
        },
        {
          type: "full",
          img: "20250720210144",
          caption:
            "The screaming ghost in the prison — a white knight pierced with arrows, a sword in each hand. It looks like Kimiko Heren, the priestess killed resisting the dam.",
          line: "You will not let him go!",
        },
        {
          type: "duet",
          img: "20250727212721",
          caption:
            "The merchant Asahino Shinzo's raven — a nosoi psychopomp — the one thing that seems to pass the fog freely.",
          heading: "Liberation, and a cage",
          body:
            "After three days of careful fighting the town is retaken. But no road leads out. Every route " +
            "doubles back to Gourd Lake; a supernatural fog turns them around no matter what they try. The " +
            "land itself is a cage — and behind the blood moon, the Great Willow warns, is a “Him.”",
          quote: "“It seems we've ended up back where we just were, at the lake.”",
        },
      ],
    },

    /* ====== CHAPTER II ====== */
    {
      id: "ch2",
      numeral: "二",
      label: "Chapter Two",
      title: "The Cage",
      mood: "fog",
      dek:
        "The town is safe and the town is sealed. While Willowshore reorganizes for winter, the heroes hunt " +
        "the shape of the curse — the missing nature spirits, the crimson-butterfly omens, and a wall at the " +
        "western edge of the world.",
      sections: [
        {
          type: "duet",
          img: "20250803201130",
          caption:
            "The Great Willow's kodama, emerging hollow-eyed from its tree — infected to the roots with grey fungus.",
          heading: "The spirits are gone",
          body:
            "The land's guardians are vanishing without leaving corpses. The Great Willow has brought a " +
            "myceloid plague back from a friend-grove; its fungus-priest is grotesquely courteous — J'nan " +
            "greets it, “hello, my good mushroom!”, and it answers, “hello there, my good man,” before trying " +
            "to eat him. Once it is killed the roots heal, and the kodama confirms it: the town is “in a cage " +
            "now,” and it last saw Ugly-Cute fighting “with honor and duty” to the east.",
        },
        {
          type: "gallery",
          heading: "Errands among the haunted",
          images: [
            { img: "20250810182822", caption: "Kahoshi, an eight-inch shikigami guarding an abandoned shrine." },
            { img: "20250803202634", caption: "The myceloid — courteous, mushroom-crowned, eyeing old J'nan's flesh." },
            { img: "20251012204446", caption: "Hinode Akari's ghost, weaving her own plucked hair into a baker's buns." },
            { img: "20250928190253", caption: "Yami, a cat grown old past her years — and past death." },
          ],
        },
        {
          type: "quote",
          text:
            "They were kind. They used to feed Yami all the time… so she brought them back.",
          attribution: "On the bakeneko who animated the dead to watch them dance",
        },
        {
          type: "duet",
          img: "20250831213011",
          caption:
            "Not the usual wall of mist — a wall of roiling, screaming souls, as high as the eye can climb.",
          heading: "The Wall of Ghosts",
          body:
            "Tracking face-stealers to an old lumber camp, the party meets a noppera-bo trickster who barters " +
            "rather than fights and gives them a name: Kugaptee, the lord beyond the mists. At the western " +
            "edge they find the zealot Zoudou mid-sacrifice — and behind her, instead of fog, a towering wall " +
            "of tortured souls. Cormag kills her with a single bolt.",
          quote:
            "“Beyond them is not the wall of mist we've grown used to… but a wall of roiling, tortured souls, mingling and screaming in anguish.”",
        },
        {
          type: "full",
          img: "20250831223327",
          caption:
            "What crawls out of Zoudou's corpse: a clawed thing with a woven golden birdcage for a head, trailing red butterflies.",
          line: "All those who serve Lung Wa will soon know how it feels to lose it all.",
        },
        {
          type: "duet",
          img: "20250928190429",
          caption:
            "J'nan — the tengu — finally pours tea at the reopened Cerulean Tea House, for a table of painted clay figures.",
          heading: "A council, and a quiet life",
          body:
            "Winter is coming and the town nearly tears itself apart: Old Matsuki moves to seize rulership by " +
            "trial-by-combat. The heroes broker a five-person council instead — J'nan settling one bitter " +
            "dispute the only way he knows, with a big pot of tea and an armful of political-theory books. " +
            "Between horrors, the ordinary town goes on: Rui sumo-wrestles a kappa and knocks the water clean " +
            "out of its head; the Reverend Mother plays matchmaker for him from behind the bar; and the winter " +
            "haunts stay humble — a baker's buns stuffed with a ghost's plucked hair, a farmer's outhouse " +
            "boiling with vipers, a fisherman sure his drowned brother has him by the ankles (he doesn't). " +
            "J'nan recovers his two pearls and his tea house, where the resident cat, Yami, takes to leaving " +
            "odd gifts on the porch — a potato, a pair of spectacles, two platinum coins. And Cormag turns the " +
            "captured cult notes into a ritual — a way to open the Wall of Ghosts.",
        },
      ],
    },

    /* ====== CHAPTER III ====== */
    {
      id: "ch3",
      numeral: "三",
      label: "Chapter Three",
      title: "The Pilgrim's Path",
      mood: "night",
      dek:
        "The ritual tears a year-long hole in the Wall — and the fog seals shut behind them. On the far side " +
        "the forest is a thousand years younger, and the only way on is a haunted pilgrim road to a ruined " +
        "mountain monastery.",
      sections: [
        {
          type: "duet",
          img: "20251019205311",
          caption:
            "The Pilgrim's Path: an ancient, blue-grey spectrewood where the dead still walk their old routes.",
          heading: "Find the seed",
          body:
            "At the trailhead, a corpse points north with the word “Kugaptee” written beneath her in Aklo. She " +
            "is Tan Sui Jing — the hero who first bound the demon, reincarnated long ago into the monastery's " +
            "great Sugi tree. The party recovers her stolen heart from a heart-eating vulture and returns it; " +
            "her tree erupts a hundred feet skyward and drives back the fog.",
          quote: "“find the seed”",
        },
        {
          type: "gallery",
          heading: "The road's tormentors",
          images: [
            { img: "20251026193219", caption: "A rope-bridge clutched from below by the pale hands of a drowned monk." },
            { img: "20251102202700", caption: "The Storm Mother — a storm hag who weaves lightning between her hands, until Aeson drags her into a lake she can't swim and she, per the notes, “successfully dies.”" },
            { img: "20251026201232", caption: "A man-dragora, root-fleshed and watered with demon blood." },
            { img: "20251102202937", pos: "left center", caption: "One of her bats, becoming a bolt of lightning in flight." },
          ],
        },
        {
          type: "quote",
          text: "I will pick you up and drop you at the edge of the world.",
          attribution: "The wind, to Enko the kappa",
        },
        {
          type: "duet",
          img: "20251109213224",
          caption:
            "Ji Hui, the monastery's founder, appearing as a sorrowful ghost of branching blue light.",
          heading: "The Tan Sugi Monastery",
          body:
            "On the approach a floating skull keeps insisting it's friendly and trying to warn them about the " +
            "place; Cormag attacks it relentlessly anyway. Inside the ruin, undead monks who broke their vows " +
            "feed on the breath of sleepers. The founder's ghost asks the party to cleanse her desecrated " +
            "shrines — Pharasma beheaded and bound, the kodama drowned in black mold, the Stag choked in " +
            "vines. Even the horrors keep their manners: a bloated Gugdi asks to hear a story first, so Orlen " +
            "tells one about a bear who taught him music — and then they kill it. Beneath it all, her " +
            "corrupted student labors at Kugaptee's grave to bring him back.",
          quote: "“Do you realize what a pleasure it is to be able to eat?”",
        },
        {
          type: "gallery",
          heading: "The cleansing",
          images: [
            { img: "20251116184144", caption: "The headless, rope-bound shrine to Pharasma, offerings given to Kugaptee instead." },
            { img: "20251109205217", caption: "A fifty-foot tree-statue animating into a moaning, fanged maw." },
            { img: "20251109212516", caption: "A special corobozu gnawing at the base of the living Sugi tree." },
            { img: "20251123203111", caption: "An enormous spider bursting from the Sugi tree's trunk, dwarfing Aeson." },
          ],
        },
        {
          type: "full",
          img: "20251207192242",
          focus: "0%",
          caption:
            "Jin Yui — the deathless acolyte who reincarnates into a sojiru when slain, scattering crimson butterflies.",
          line: "She's Jin Yui, and she shall bleed us yet again.",
        },
      ],
    },

    /* ====== CHAPTER IV ====== */
    {
      id: "ch4",
      numeral: "四",
      label: "Chapter Four",
      title: "Hungry Ghosts",
      mood: "haunt",
      dek:
        "With the monastery restored, Ji Hui tells them the truth — and it unmakes everything they thought " +
        "they had survived.",
      sections: [
        {
          type: "quote",
          text:
            "The attack on the town has never happened before. Willowshore lies in ruins, as it has for one hundred and fifteen years.",
          attribution: "The truth, at last",
        },
        {
          type: "duet",
          img: "20251214190406",
          caption:
            "Shinzo's true form — a skeletal psychopomp in a conical hat, a reaper of those who subvert the celestial order.",
          heading: "What the governor did",
          body:
            "The governor's sealing ritual did not bind Kugaptee. It sealed the whole town in with him, and " +
            "fed him. Everyone died on the first day of summer; their souls have been trapped in a year that " +
            "repeats, dreaming the same blood-moon attack again and again. The merchant Shinzo has been " +
            "watching across every loop.",
        },
        {
          type: "duet",
          img: "20260111192412",
          focus: "0%",
          caption:
            "Governor Haitian Bao — haggard, unkempt, dragging a sword, sealed alone in his own separate mindscape.",
          heading: "We're all hungry ghosts",
          body:
            "In the governor's broken mindscape they find him begging a doctor for something to keep him " +
            "awake. He sets five pairs of ebony chopsticks upright in the rice — the way you feed the dead — " +
            "hands over his journal and the transmigration ritual, asks them to be kind to his cat, Blackbean — " +
            "“who didn't choose its master” — and dissolves into crimson butterflies.",
          quote: "“We're all nothing more than hungry ghosts.”",
        },
        {
          type: "gallery",
          heading: "Born of the curse",
          images: [
            { img: "20251214202917", caption: "A voldgeist, born of a felled tree, merciless to loggers." },
            { img: "20251214220211", caption: "A shadow that rises beside each of them — they have all been killed before." },
            { img: "20260118204053", pos: "center top", caption: "A Sill Psyche kami, its head a lantern-shrine, begging them to stay." },
            { img: "20260201213421", caption: "A nosoi — one of Pharasma's bird-masked psychopomp auditors." },
          ],
        },
        {
          type: "duet",
          img: "20250817205726",
          caption:
            "A soul at the threshold — a traveler's hat, a string of prayer beads, the long patience of the dead.",
          heading: "The kiln",
          body:
            "To leave, they must die properly. Across the winter they gather sakaki slats, heron feathers, " +
            "and rare incense; they kill a psychic copy of the jorogumo princess Ren Mae Lee — who slaps Orlen " +
            "for offering a chair unbidden and calls their hundred-gold gift “perfectly acceptable for such a " +
            "low-born town” — and host the bird-masked psychopomps auditing Shinzo, who, compelling J'nan to " +
            "give up the party's names, get them recited back in a deliberately spooky voice. Then they seal " +
            "themselves in clay kilns and burn for five days — three crits and two successes, a wild success — " +
            "and wake in the dark, hearing the governor's voice.",
          quote: "“rip ourselves free from death and give in to our desires”",
        },
      ],
    },

    /* ====== CHAPTER V ====== */
    {
      id: "ch5",
      numeral: "五",
      label: "Chapter Five",
      title: "The Bell and the Flame",
      mood: "ember",
      dek:
        "They wake as ghosts in the real Willowshore — rotted, ruined, a hundred and fifteen years dead. The " +
        "Eternal Lantern lies cold at their feet, its flame stolen and inverted into a bell that keeps the " +
        "dead trapped.",
      sections: [
        {
          type: "duet",
          img: "20260209204346",
          caption:
            "The warding bell of Karahai, wreathed in the pale blue flame of Willowshore's own Eternal Lantern — turned against the dead it once protected.",
          heading: "Ectoplasmic",
          body:
            "Seeing their reflections, they understand: they are phantoms now, living but half-undead. A tug " +
            "pulls them east, to the great coastal fortress of Karahai, where shrine maidens and exorcists " +
            "forged the bell from the stolen flame. It can be silenced — struck eight times, in succession, " +
            "with its own ringer.",
          quote: "“we're ectoplasmic forms given temporary shape — ghosts”",
        },
        {
          type: "gallery",
          heading: "The road east",
          images: [
            { img: "20260215220317", caption: "Mago Kai, the jubilant lumber lord — exasperated that the dead won't just “move along with your afterlives” — leaping with a buzzsaw battleaxe." },
            { img: "20260209220001", caption: "A Kagekuma — a nindaru that lurks at the edge of the eye, weak to silver." },
            { img: "20260222214937", caption: "Pan PhenPhong, the exorcist who secretly serves Kugaptee, splitting open." },
            { img: "20260111212928", caption: "Shinzo again, ferrying knowledge across the cycles of the dead." },
          ],
        },
        {
          type: "full",
          img: "20260301211119",
          caption:
            "Amai, the four-eyed messenger cat of the Jorogumo Princess, arriving to announce that the terms have changed.",
          line: "We awaken to life for the first time in one hundred and fifteen years.",
        },
        {
          type: "duet",
          img: "20260301214112",
          caption:
            "Beneath an illusion, the governor's manor is revealed for what it truly is — decayed, fungal, waiting.",
          heading: "Reborn",
          body:
            "They strike the bell eight times, return to Willowshore, and reactivate the lantern. They die — " +
            "and are reborn, truly alive for the first time in over a century, free to re-choose who they " +
            "are. Orlen's three dead bandmates come back with him. And the town's stewardship settles onto " +
            "their shoulders.",
        },
      ],
    },

    /* ====== CHAPTER VI ====== */
    {
      id: "ch6",
      numeral: "六",
      label: "Chapter Six",
      title: "Five Seasons",
      mood: "dusk",
      dek:
        "To keep Willowshore free in a land ruled by spider-queens, the heroes must bind themselves to the " +
        "Jorogumo Princess Ren Mae Lee — and complete her ritual of the Five-Season Treasures. Something is " +
        "killing the people they need, one by one.",
      sections: [
        {
          type: "duet",
          img: "20260329203739",
          caption:
            "Ren Mae Lee, the Jorogumo Princess — spider-pinned hair, a paint-splattered kimono, dark legs splayed behind her.",
          heading: "The bargain",
          body:
            "This time she comes in person, and she can teleport anywhere in Shenmen; she does not negotiate " +
            "so much as inform. Vain and exacting, she names the price of Willowshore's peace — five offerings: " +
            "a bright bird of spring, fiery flowers of summer, sweet fruits of autumn, spiced winter tea, and a " +
            "blessing of ancestors. Asked whether the fealty is owed to her personally rather than to the realm, " +
            "she only smiles: “is that what I said?” (The spring offering is a performance at the Opera House, " +
            "where Orlen promptly gets himself banned.)",
        },
        {
          type: "gallery",
          heading: "Gathering the seasons",
          images: [
            { img: "20260329212907", caption: "Kazuma Uranu, the kitsune of the Opera House — soon found murdered." },
            { img: "20260412184836", caption: "Isori, the Lunar Naga guardian of the Moon Marsh." },
            { img: "20260329220351", caption: "Hei Feng's horn-blossoms, the fiery flowers of summer." },
            { img: "20260412205125", pos: "left center", caption: "A grabgodon — a giant possum gorging on the apple-grove spiders." },
          ],
        },
        {
          type: "duet",
          img: "20260412215301",
          caption:
            "Elizeth, the Pharasman priestess who once soothed J'nan with her flute, found dead at a friend's grave — her eyes harvested.",
          heading: "Eyes taken, souls claimed",
          body:
            "The deaths are not random. Kazuma's soul is claimed before he can be raised; Elizeth's flute is " +
            "shattered and her eyes gouged out; the herbalist Yu So Jin is murdered for the last formula they " +
            "need. A divination mirror finally names the pattern's source.",
          quote:
            "“A man becomes a monster. A monster becomes a gateway. A village becomes a feast… only a rightful ruler shall carry the key to my domain.”",
        },
        {
          type: "full",
          img: "20260419212250",
          caption:
            "The divination mirror — a golden, fanged, red-eyed lock — that names Haitian Bao as the gateway to Kugaptee.",
          line: "Only a rightful ruler shall carry the key.",
        },
      ],
    },

    /* ====== CHAPTER VII ====== */
    {
      id: "ch7",
      numeral: "七",
      label: "Chapter Seven",
      title: "The Last Sliver",
      mood: "blood",
      dek:
        "Fealty sworn, golden key in hand, the heroes open the true governor's manor — the last surviving " +
        "fragment of the hundred-and-fifteen-year nightmare. Everything inside is built to break them.",
      sections: [
        {
          type: "gallery",
          heading: "Down through the manor",
          images: [
            { img: "20260426195933", caption: "An Onidoshi ogre-mage, blue-skinned and spike-clubbed." },
            { img: "20260426200137", caption: "A Quintessivore — a spider-thing that feasts on souls." },
            { img: "20260426214642", pos: "right center", caption: "An Unlived Life: an undead born from a botched resurrection." },
            { img: "20260503202711", caption: "Ithiniak, a curse-eating fey freed after decades in the governor's vault." },
          ],
        },
        {
          type: "duet",
          img: "20260503211417",
          caption:
            "A bigger, crueler Gurglegut on a recreated Dawnstep Bridge — the first day of summer, staged again to torment them.",
          heading: "All pay some, and none pays all",
          body:
            "Deeper in, Cormag is certain the first claw-marks mean a werewolf; he is, as often, wrong. The " +
            "manor recreates their first morning: the bridge, the jinkin, the buso, rebuilt at greater scale. " +
            "The governor's diary lays him bare — a vain man who modified Tan Sui Jing's binding ritual to " +
            "spare himself, and called it justice. They kill the buso again, “just like the first day of " +
            "Summer we originally had together.”",
          quote: "“all pay some, and none pays all.”",
        },
        {
          type: "gallery",
          heading: "The deepest rooms",
          images: [
            { img: "20260315213318", caption: "A Jiang Shi vampire, talisman on its brow, wreathed in lightning — held off, of all things, by a feast Aeson's son cooks so well it fascinates everyone else." },
            { img: "20260509185117", caption: "A corpse-root tree, screaming, spreading blight through the snow." },
            { img: "20260509195645", caption: "Mago Kai's true form: an argurzai nindaru, head crowned in a ring of swords." },
            { img: "20260517194307", caption: "A shisagishin — a corpse with a glowing paper-lantern for a face." },
          ],
        },
        {
          type: "full",
          img: "20260308205756",
          focus: "0%",
          caption:
            "A dread wraith in the rotting manor, a skeletal hand reaching from tattered robes around a red core.",
          line: "I shall make a great sacrifice of you to our lord Kugaptee — and with your eyes, he shall be free.",
        },
      ],
    },

    /* ====== FINALE ====== */
    {
      id: "finale",
      numeral: "終",
      label: "Finale",
      title: "It Appears Tan Sui Jing Has Been Found",
      mood: "gold",
      dek:
        "A corrupted Willowshore under a sky of red eyes. A root-burl of the Tan Sugi tree, hung with " +
        "harvested eyes — Elizeth's bright blue among them. And the governor, waiting, to make the heroes " +
        "the final offering.",
      sections: [
        {
          type: "full",
          img: "20260527210727",
          caption:
            "Kugaptee — gaunt and many-limbed, a torso of crimson butterflies, horned skulls rising on serpent necks.",
          line: "The demon, almost free.",
        },
        {
          type: "duet",
          img: "20260527203059",
          caption:
            "Tan Sui Jing returns — wreathed in golden light, hair streaming into feathered plumes, a guisarme in her hands.",
          heading: "Golden light",
          body:
            "Rui's silversoul bombs bring the governor down. Kugaptee's giant arm tears up through the " +
            "collapsing world in red lightning — and then a soft flute plays, a yellow-gold light rises from " +
            "the splitting plane, and the hero who first bound him heaves her weapon through the demon and " +
            "sunders it. She gives them back their wounds, their breath, their home. She looks to Orlen and " +
            "smiles.",
          quote: "“It appears Tan Sugi Jing has been found.”",
        },
        {
          type: "quote",
          text:
            "There was always some sense of dread nestled deep in our psyches. Now we feel the weight lifted, and our home feels like home.",
          attribution: "After the sealing",
        },
      ],
    },
  ],

  /* ---- EPILOGUES ----------------------------------------------------- */
  epilogues: {
    intro:
      "Kugaptee is sealed. The nindaru menace is ended. Willowshore goes on being the small, rural town " +
      "they all loved. They have a great deal of life left to live.",
    cards: [
      {
        name: "Orlen",
        sigil: "琴",
        text:
          "He sets a stool by his bandmates' grave, plays a gentle tune, and pours out a sack of ceramic " +
          "shards beside them. Then the wandering bard goes back to wandering, never seen again — until " +
          "years later, on a city stage, fronting a five-member band, each wearing a bracelet of leather " +
          "and a shard of broken pottery, truly happy at last.",
        quote: "“Don't forget us! We're the Broken Pitchers!”",
        source: "Called from a city stage, years later",
      },
      {
        name: "Cormag",
        sigil: "書",
        text:
          "He forgives Anjal and takes up his strange inheritance, learning his tower shares the shape of " +
          "ancient serpent-folk temples. Ten years on, Shinzo appears in his study on official business: " +
          "the ghost queen of Tsei has laid claim to Willowshore, and that will not stand. The start of a " +
          "long working relationship.",
        quote: "“I'm sure you're aware of the ghost queen of Tsei.”",
        source: "Shinzo, in Cormag's study a decade on",
      },
      {
        name: "Rui",
        sigil: "火",
        text:
          "Reminded of building birdhouses with his father, he embraces the family carpentry trade. The " +
          "Shuchirch company grows into the most prosperous in the region; Rui retires wealthy and famous " +
          "for his carvings, writes a book on the importance of small things, and finds his joy building " +
          "cradles as his family grows.",
        quote: "A book extolling the importance of the little things.",
        source: "The memoir he wrote in retirement",
      },
      {
        name: "Aeson",
        sigil: "弓",
        text:
          "He walks back through the portal, falls to his knees, and finally lets himself go home. He takes " +
          "off his boots. He compartmentalizes the horrors and lives fully — father, husband, leader, " +
          "hunter, good man — chuckling each night at the godforsaken tablecloths, grateful for the small " +
          "problems of an ordinary life.",
        quote: "“Once you're dead you're DEAD.”",
        source: "The rule he lived by, from the first session to the last",
      },
      {
        name: "J'nan",
        sigil: "茶",
        text:
          "He raises the town's dead with the resurrect ritual, then runs his tea house in peace for twenty " +
          "years. One day Aeson finds the doors unlocked, the limeade out, and a note. Made peace with his " +
          "spirits at last, J'nan reincarnates and travels far — selling tea, boldly, into his next life.",
        quote: "“Going traveling, be back maybe. Love J'nan.”",
        source: "The note left on the tea house door",
      },
    ],
    closer: "Son of a bitch — he stole my line.",
    closerSource: "Aeson, reading the note — twenty years on",
  },

  /* ---- LIMEADE (a running matter of grave importance) --------------- */
  limeade: [
    {
      id: "limeade-1",
      after: "ch2",
      numeral: "I",
      title: "The Pitcher",
      body:
        "Cum Soon Chung was a humble man with a single heirloom from his wife. Orlen lifts the heirloom " +
        "pitcher from Cum Soon Chung's house. Cum Soon notices it is gone and spends several days sobbing " +
        "and heartbroken. He asks the party to please do whatever they can to find it.",
    },
    {
      id: "limeade-2",
      after: "ch3",
      numeral: "II",
      title: "Orlen's Tell-Tale Pitcher",
      body:
        "Orlen's guilt builds as Cum Soon spends his time weeping, frantically searching, and having " +
        "meltdowns. Orlen decides to do the right thing, and smashes the pitcher, creates a fake purchase " +
        "receipt, and spends time “consoling” Cum Soon about whatever thief would do such a thing to a man " +
        "with a tale as tragic as his.",
    },
    {
      id: "limeade-3",
      after: "ch5",
      numeral: "III",
      title: "A Bag of Limeade",
      body:
        "A hundred and fifteen years on, in the ruined real world, Cormag lifts an ornate pitcher from the " +
        "same house and carries it back across death — handing Cum Soon the future's own version of it. Cum " +
        "Soon pays one hundred platinum, and a bag of limeade. No one present questions how he had 100 " +
        "platinum lying around.",
    },
  ],

  /* ---- GRIMOIRE (closing gallery of the season's faces) -------------- */
  grimoire: {
    title: "The Grimoire of Willowshore",
    dek:
      "A year and a hundred and fifteen of things that should not have been. Every face the heroes met, " +
      "feared, fought, or mourned.",
    images: [
      { img: "20251123183220", caption: "The Gugdi — a buffalo-sized toad nindaru, a human face lodged in its lips." },
      { img: "20250622200815", caption: "Something that used to be a centipede — “meat… flesh… bones… fingers…”" },
      { img: "20250629203809", caption: "A giant talking cockroach on the road to the lodges." },
      { img: "20250706215648", caption: "The ghostly gecko guardian of the Hand of the Spring." },
      { img: "20250810204904", caption: "A cobbleswarm — geodes that split into fanged mouths." },
      { img: "20251019183636", caption: "A Dalgyal Gwishin, envious of the well-connected dead." },
      { img: "20251019211433", caption: "The heart-eating vulture of the deadfall." },
      { img: "20251019211444", caption: "A cacodaemon, spawned from Abaddon's mists." },
      { img: "20251109192532", caption: "A corobozu — a monk who broke his vows and now eats breath." },
      { img: "20251109214258", caption: "A ghost-woman freed with a dead twin's prayer beads." },
      { img: "20251116184300", caption: "A sojiruh, stitch-mouthed, kneeling before a beheaded god." },
      { img: "20251116201613", caption: "A library-thing sifting broken katanas and rotting books." },
      { img: "20251123183311", caption: "A Mayokdon, long-limbed and drooling, mid-leap." },
      { img: "20251123201947", caption: "A horned fiend with a rune-etched cleaver, biting the great tree." },
      { img: "20251123213850", caption: "A husk zombie, dry-cured and clawed, standing in the mist." },
      { img: "20251214211808", caption: "A voldgeist of bark and flame, risen from a felled tree." },
      { img: "20251214210538", caption: "A hozuki doll, hung with little red flame-charms." },
      { img: "20260201191254", caption: "Wren — a wispy two-tailed kitsune spirit, cradling a kit." },
      { img: "20260201202237", caption: "A grieving woman who only wanted to be killed." },
      { img: "20260315195444", caption: "A Silkwasp Bandit archer, brooch at her throat." },
      { img: "20260419194954", caption: "The Allgriever, guardian-spider of the Whisperweb Shrine." },
      { img: "20260419212019", caption: "A Path Maiden — tattered robes and skeletal claws, no body within." },
      { img: "20251012190838", caption: "And a farmer's outhouse, heaving with jinkin-trained vipers." },
      { img: "20260527204246", caption: "Shinzo, returning to Cormag's study ten years on — official business." },
    ],
  },
};
