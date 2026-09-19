const marineAnimals = [
    {
        id: 1,
        name: "Sea Turtle",
        scientificName: "Chelonioidea",
        description: "Graceful navigators of the ocean currents, known for their beautifully patterned shells and long migratory journeys.",
        imageSrc: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Chelonia_mydas_is_going_for_the_air_edit.jpg/1280px-Chelonia_mydas_is_going_for_the_air_edit.jpg?utm_source=en.wikipedia.org&amp;utm_campaign=index&amp;utm_content=thumbnail", 
        videoProvider: "youtube",
        videoId: "5Rmv3nliwCs",
        videoStart: 11,
        tags: ["Reptile", "Endangered"]
    },
    {
        id: 2,
        name: "Great White Shark",
        scientificName: "Carcharodon carcharias",
        description: "The ocean's apex predator, featuring a highly streamlined body built for incredible bursts of speed.",
        imageSrc: "https://media.gettyimages.com/id/515325592/photo/great-white-shark-surfacing.jpg?s=612x612&w=0&k=20&c=p5gX88tTiVSTDt7IUrffTX4Y93amRBfxvH1Ggfvs_bY=",
        videoProvider: "youtube",
        videoId: "t82m6vPhsEA",
        videoStart: 5,
        tags: ["Fish", "Predator"]
    },
    {
        id: 3,
        name: "Moon Jellyfish",
        scientificName: "Aurelia aurita",
        description: "Translucent and mesmerizing, these gentle creatures pulse through the water like living ghosts.",
        imageSrc: "https://study.com/cimages/multimages/16/320px-aurelia-aurita-46738178996405110312.jpg",
        videoProvider: "youtube",
        videoId: "8sO3XJY1hro",
        videoStart: 0,
        tags: ["Invertebrate", "Bioluminescent"]
    },
    {
        id: 4,
        name: "Giant Pacific Octopus",
        scientificName: "Enteroctopus dofleini",
        description: "A highly intelligent, shapeshifting master of camouflage capable of solving complex puzzles.",
        imageSrc: "https://biologydictionary.net/wp-content/uploads/2020/11/shutterstock_1646973997-1.jpg",
        videoProvider: "youtube",
        videoId: "abRSNK1i7tk", 
        videoStart: 1000, 
        tags: ["Cephalopod", "Highly Intelligent"]
    },
    {
        id: 5,
        name: "Orca",
        scientificName: "Orcinus orca",
        description: "The undisputed apex predator of the ocean, hunting in highly coordinated, matriarchal family pods.",
        imageSrc: "https://t4.ftcdn.net/jpg/20/65/37/09/360_F_2065370997_lfWmJNseQJ8wxLLG13lSmoPOX8swVnkx.jpg",
        videoProvider: "youtube",
        videoId: "YpxhAJzuyJM", 
        videoStart: 120, 
        tags: ["Mammal", "Apex Predator"]
    },
    {
        id: 6,
        name: "Comb Jelly",
        scientificName: "Ctenophora",
        description: "Alien-like deep sea drifters that scatter light across their cilia to create pulsing neon rainbows.",
        imageSrc: "https://media.istockphoto.com/id/1190931109/photo/comb-jelly.jpg?s=612x612&w=0&k=20&c=ebyuR2pE8mgBJrJWpBA4tEQSiop8oq0ylMQLqltsc5c=",
        videoProvider: "youtube",
        videoId: "LPu1juezWeg", 
        videoStart: 0, 
        tags: ["Bioluminescent", "Deep Sea"]
    },
    {
        id: 7,
        name: "Manta Ray",
        scientificName: "Manta birostris",
        description: "Gliding through the ocean like phantom wings, these gentle giants filter feed plankton from the currents.",
        imageSrc: "https://media.gettyimages.com/id/612103318/photo/giant-manta-ray-feeding.jpg?s=612x612&w=0&k=20&c=Vv8PxM7C_WI7bBPFQbmlnx-foxmI-xMqhINmQBu9nOQ=",
        videoProvider: "youtube",
        videoId: "jUxObdjZNxE", 
        videoStart: 0, 
        tags: ["Cartilaginous", "Filter Feeder"]
    },
    {
        id: 8,
        name: "Lionfish",
        scientificName: "Pterois volitans",
        description: "A stunningly venomous predator that herds its prey using an array of fan-like, feathered quills.",
        imageSrc: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Red_lionfish_near_Gilli_Banta_Island.JPG/1280px-Red_lionfish_near_Gilli_Banta_Island.JPG?utm_source=en.wikipedia.org&amp;utm_campaign=index&amp;utm_content=thumbnail",
        videoProvider: "youtube",
        videoId: "1w9e7-bcT84", 
        videoStart: 1680, 
        tags: ["Venomous", "Invasive"]
    },
    {
        id: 9,
        name: "Whale Shark",
        scientificName: "Rhincodon typus",
        description: "The largest fish in the sea, adorned with a constellation of pale spots across its massive back.",
        imageSrc: "https://media.istockphoto.com/id/1077209132/photo/huge-whale-shark-with-in-deep-blue-water-with-unknown-snorkelers-showing-just-how-big-the.jpg?s=612x612&w=0&k=20&c=4-U-AVUGPN_YIrjDX6gdVnmd_TSfqxalYAh4PQEXyfk=",
        videoProvider: "youtube",
        videoId: "wX20GDCWMpo", 
        videoStart: 57, 
        tags: ["Shark", "Filter Feeder"]
    },  
    {
        id: 10,
        name: "Vampire Squid",
        scientificName: "Vampyroteuthis infernalis",
        description: "A relic from the deep, wrapping itself in a dark, webbed cloak studded with glowing photophores.",
        imageSrc: "https://i.pinimg.com/originals/33/f0/39/33f039c6800c157c2602855688df34c1.jpg",
        videoProvider: "youtube",
        videoId: "Y_IrMZhNOaY", 
        videoStart: 50, 
        tags: ["Deep Sea", "Cephalopod"]
    },
    {
        id: 11,
        name: "Blue Dragon",
        scientificName: "Glaucus atlanticus",
        description: "A tiny, electric-blue sea slug that floats upside down and steals venom from the Portuguese man o' war.",
        imageSrc: "https://www.australiangeographic.com.au/wp-content/uploads/2024/11/1000829-100-e1732750379469-1800x1270.jpg",
        videoProvider: "youtube",
        videoId: "0Ako_XDx2-U", 
        videoStart: 6600, 
        tags: ["Mollusk", "Venomous"]
    },
    {
        id: 12,
        name: "Chambered Nautilus",
        scientificName: "Nautilidae",
        description: "A living fossil that navigates the dark using a mathematically perfect spiral shell filled with gas.",
        imageSrc: "https://ask-nature.sfo3.digitaloceanspaces.com/wp-content/uploads/2016/04/31134408/Nautilus_pompilius_detail-1440x960.jpg",
        videoProvider: "youtube",
        videoId: "YBCsF8hQK1M", 
        videoStart: 0, 
        tags: ["Living Fossil", "Cephalopod"]
    },
    {
        id: 13,
        name: "Mediterranean Moray",
        scientificName: "Muraena helena",
        description: "A muscular, serpentine ambush predator that strikes rapidly from the dark crevices of the reef.",
        imageSrc: "https://media.gettyimages.com/id/2226959400/photo/mediterranean-moray-eel-with-open-mouth-in-a-dark-rocky-hideaway-under-water-in-the.jpg?s=612x612&w=0&k=20&c=zZWcbq0__O0XbwbHyZMx-KxelvAVWpD7BYIDId48tp0=",
        videoProvider: "youtube",
        videoId: "wskmVwQb9VQ", 
        videoStart: 18, 
        tags: ["Fish", "Ambush Predator"]
    },
    {
        id: 14,
        name: "Leafy Seadragon",
        scientificName: "Phycodurus eques",
        description: "An intricate marvel of evolution, perfectly disguised as drifting seaweed in the southern ocean currents.",
        imageSrc: "https://media.istockphoto.com/id/1793483896/photo/leafy-seadragon-phycodurus-eques-from-western-australia.jpg?s=612x612&w=0&k=20&c=VbIkeaemhTVMgn1WxBPPYTsldnu73sqxuUsPYSSEBKg=",
        videoProvider: "youtube",
        videoId: "NsGK7cUdelM", 
        videoStart: 18, 
        tags: ["Fish", "Camouflage"]
    },
    {
        id: 15,
        name: "Humpback Anglerfish",
        scientificName: "Melanocetus johnsonii",
        description: "The ultimate nightmare of the abyss, luring prey into its massive jaws using a bioluminescent beacon.",
        imageSrc: "https://preview.redd.it/a-photo-of-an-anglerfishs-actual-size-v0-sxkcj2q17osf1.jpeg?width=1024&format=pjpg&auto=webp&s=b56d8d18ea9b5f45107ad0fdd6ce6e49c50f443f",
        videoProvider: "youtube",
        videoId: "UXl8F-eIoiM", 
        videoStart: 25, 
        tags: ["Deep Sea", "Bioluminescent"]
    }
];