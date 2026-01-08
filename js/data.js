// News Data with Reusable Component Architecture
// This demonstrates company-standard component patterns and diverse content types
// ContentBuilder provides reusable templates for different article structures

// ============================================================================
// REUSABLE CONTENT BUILDER - Company Standard Components
// ============================================================================

const ContentBuilder = {
  // Basic paragraph
  paragraph: (text) => `<p>${text}</p>`,

  // Heading with flexible level
  heading: (level, text) => `<h${level}>${text}</h${level}>`,

  // Structured section with title and content
  section: (title, content) => `
    <h3>${title}</h3>
    ${Array.isArray(content) ? content.join("\n") : content}
  `,

  // Unordered or ordered list
  list: (items, ordered = false) => {
    const tag = ordered ? "ol" : "ul";
    const itemsHtml = items.map((item) => `<li>${item}</li>`).join("\n");
    return `<${tag}>\n${itemsHtml}\n</${tag}>`;
  },

  // Blockquote for interviews or testimonials
  quote: (text, author = null) => `
    <blockquote style="padding: 20px; background: #f5f5f5; border-left: 4px solid #0066cc; margin: 20px 0;">
      <p><em>"${text}"</em></p>
      ${author ? `<p><strong>— ${author}</strong></p>` : ""}
    </blockquote>
  `,

  // Highlighted text box
  highlight: (title, text) => `
    <div style="background: #fffbea; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h4>${title}</h4>
      <p>${text}</p>
    </div>
  `,

  // Two-column comparison
  comparison: (label1, items1, label2, items2) => `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
      <div>
        <h4>${label1}</h4>
        ${ContentBuilder.list(items1)}
      </div>
      <div>
        <h4>${label2}</h4>
        ${ContentBuilder.list(items2)}
      </div>
    </div>
  `,
};

// ============================================================================
// ARTICLE FACTORY FUNCTION - Creates consistent article structure
// ============================================================================

function createArticle({
  id,
  title,
  subtitle,
  description,
  category,
  image,
  date,
  author,
  readTime,
  source,
  content,
  tags = [],
  views = 0,
  featured = false,
}) {
  return {
    id,
    title,
    subtitle,
    description,
    category,
    image: getValidImageURL(image),
    date,
    author,
    readTime,
    source,
    content,
    tags,
    views,
    featured,
  };
}

// ============================================================================
// IMAGE URL FALLBACK MAP - Verified working Unsplash URLs
// ============================================================================
const ImageURLMap = {
  // Technology images
  "photo-1677442d019cecf4d0f6f25f57b8b9a1":
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
  "photo-1517694712202-14dd9538aa97":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",

  // National/Government images
  "photo-1427504494785-cdbbdb55db6b":
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=400&fit=crop",

  // International images
  "photo-1532996122724-8f3c2cd83c5d":
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop",

  // Sports images
  "photo-1518611505868-d7984d57e6ca":
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",

  // Business images
  "photo-1552664730-d307ca884978":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",

  // Tech/Cybersecurity images
  "photo-1576091160399-112ba8d25d1d":
    "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=400&fit=crop",

  // Environment images
  "photo-1581092163562-40038e57e0bb":
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",

  // Finance/Trading images
  "photo-1611974789855-9c2a0a7236a3":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",

  // Arts/Culture images
  "photo-1514525253161-7a46d19cd819":
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
};

// Function to validate and fix image URLs
function getValidImageURL(imageURL) {
  if (!imageURL) {
    // Return a default placeholder image
    return "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop";
  }

  // Check if URL exists in fallback map and use verified version if needed
  for (const [key, fallback] of Object.entries(ImageURLMap)) {
    if (imageURL.includes(key)) {
      return fallback;
    }
  }

  return imageURL;
}

// ============================================================================
// ARTICLE DATABASE - Diverse, Realistic News with Different Content Patterns
// Expanded to 72 articles across all categories for better filtering results
// ============================================================================

const newsArticles = [
  // TECHNOLOGY ARTICLES (18 articles)
  createArticle({
    id: 1,
    title: "Breaking: Tech Giant Unveils Advanced AI Assistant",
    subtitle: "Industry analysts call it a 'game-changing' technology",
    description:
      "In rapid-fire announcements this morning, leading tech company launches AI system with breakthrough capabilities.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
    date: "2026-01-06",
    author: "Sarah Mitchell",
    readTime: "6 min read",
    source: "Tech Daily News",
    content: `
      ${ContentBuilder.paragraph(
        "SAN FRANCISCO — A major technology company announced this morning the launch of an advanced artificial intelligence assistant that it claims represents a significant breakthrough in AI capabilities. The product was unveiled during an unexpected press conference at the company's headquarters."
      )}

      ${ContentBuilder.heading(3, "Live Reactions from the Announcement")}
      ${ContentBuilder.quote(
        "This is fundamentally different from everything that came before. The efficiency gains are staggering.",
        "Dr. James Chen, AI Researcher"
      )}

      ${ContentBuilder.heading(3, "What This Means for the Industry")}
      ${ContentBuilder.list([
        "Potential disruption across multiple sectors within 2 years",
        "Stock prices of rival companies fell immediately after announcement",
        "Regulatory agencies already discussing framework adjustments",
        "Enterprise sector showing strong interest in integration",
      ])}

      ${ContentBuilder.paragraph(
        "The technology uses a novel architecture that combines transformer models with new inference techniques. Technical specifications remain partially under wraps, but industry observers say the practical improvements are immediately visible in benchmark tests."
      )}

      ${ContentBuilder.highlight(
        "Key Advantage",
        "The system processes information 40% faster than competitors while maintaining accuracy improvements of 15-20% across standard benchmarks."
      )}

      ${ContentBuilder.paragraph(
        "Stock analysts are already projecting the technology could generate billions in revenue. The company's CEO emphasized during the announcement that safety measures are built into the system from the ground up, addressing previous concerns about AI deployment."
      )}
    `,
    tags: ["AI", "Technology", "Breaking", "Innovation"],
    views: 8640,
    featured: true,
  }),
  createArticle({
    id: 2,
    title: "Government Announces Major Education Overhaul for Digital Age",
    subtitle:
      "New curriculum standards to include mandatory AI literacy and coding",
    description:
      "National education ministry unveils comprehensive modernization plan affecting 50 million students.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=400&fit=crop",
    date: "2026-01-05",
    author: "Michael Rahman",
    readTime: "5 min read",
    source: "Government News Network",
    content: `
      ${ContentBuilder.paragraph(
        "CAPITAL CITY — In what education officials are calling the most significant policy shift in three decades, the government education ministry unveiled a comprehensive modernization initiative today. The plan aims to transform 150,000 schools across the country with new infrastructure, training programs, and digital resources."
      )}

      ${ContentBuilder.heading(3, "Implementation Timeline")}
      ${ContentBuilder.list(
        [
          "Q2 2026: Pilot programs in 500 schools across all provinces",
          "Q4 2026: Full training rollout for 100,000 teachers",
          "2027: Nationwide curriculum transition begins",
          "2029: Target for complete implementation",
        ],
        true
      )}

      ${ContentBuilder.comparison(
        "Old Approach",
        [
          "Textbook-based learning",
          "Limited technology integration",
          "Standardized testing focus",
          "Limited teacher training",
        ],
        "New Approach",
        [
          "Interactive digital platforms",
          "Hands-on project-based learning",
          "Competency-based assessment",
          "Continuous professional development",
        ]
      )}

      ${ContentBuilder.paragraph(
        "The education minister stated during a parliamentary session that the initiative represents an investment of approximately $8 billion in infrastructure and training. 'Our students deserve an education system that prepares them for 21st-century challenges,' the minister explained."
      )}

      ${ContentBuilder.highlight(
        "Budget Allocation",
        "Hardware and infrastructure: $3.2B | Teacher training: $2.1B | Digital content development: $1.8B | Administrative support: $900M"
      )}
    `,
    tags: ["Education", "Government", "Policy", "National"],
    views: 5240,
    featured: false,
  }),
  createArticle({
    id: 3,
    title:
      "Climate Summit Deadlock: Nations Struggle to Agree on Emissions Targets",
    subtitle:
      "Developing countries demand more funding; developed nations push for stricter individual quotas",
    description:
      "Day 4 of international negotiations shows deep divides despite progress on climate finance mechanisms.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=400&fit=crop",
    date: "2026-01-04",
    author: "Elena Kovács",
    readTime: "7 min read",
    source: "Global Affairs Weekly",
    content: `
      ${ContentBuilder.paragraph(
        "GENEVA — Climate negotiations that began optimistically Monday have hit significant roadblocks as fundamental disagreements resurface between developed and developing nations. The 194-country summit has been extended by two days as delegates work to find common ground."
      )}

      ${ContentBuilder.quote(
        "Our citizens face rising sea levels and extreme weather today. We cannot accept vague promises about funding that may arrive in 2030.",
        "Ambassador Rajesh Patel, representing island nations coalition"
      )}

      ${ContentBuilder.heading(3, "Key Points of Contention")}
      ${ContentBuilder.list([
        "Climate finance: Developed nations offer $50B annually; developing nations demand $200B",
        "Emission reduction timeline: Range from 2040 to 2070 for carbon neutrality",
        "Technology transfer mechanisms: Disagreement on intellectual property handling",
        "Liability frameworks: No consensus on climate disaster compensation",
      ])}

      ${ContentBuilder.paragraph(
        "Despite the tensions, delegates report genuine progress on technical aspects, particularly in monitoring and reporting mechanisms. A breakthrough on renewable energy financing framework may provide the foundation for broader agreements."
      )}

      ${ContentBuilder.highlight(
        "Observer Assessment",
        "Environmental organizations describe the situation as 'stalled but not deadlocked,' noting that recent climate summits have typically broken deadlock on Day 5-6 through compromise packages."
      )}

      ${ContentBuilder.paragraph(
        "Negotiations are scheduled to continue tonight and through the weekend. Observers expect a final agreement by Monday, though it's unclear whether it will satisfy all parties or represent a compromise that leaves everyone partially disappointed."
      )}
    `,
    tags: ["Climate", "International", "Diplomacy", "Environment"],
    views: 6734,
    featured: true,
  }),
  createArticle({
    id: 4,
    title: "CHAMPIONSHIP FINAL: Home Team Defeats Rivals 3-2 in Thriller",
    subtitle:
      "Late goals secure historic title; crowd erupts as final whistle confirms victory",
    description:
      "In an intense 90-minute match, home team claims first championship in eight years with dramatic comeback.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=400&fit=crop",
    date: "2026-01-03",
    author: "David Patterson",
    readTime: "4 min read",
    source: "Sports Central",
    content: `
      ${ContentBuilder.highlight(
        "FINAL SCORE",
        "HOME TEAM 3 - 2 RIVALS | Stadium: 82,000 attendance | Referee decisions controversial in second half"
      )}

      ${ContentBuilder.paragraph(
        "The stadium erupted into pandemonium as the final whistle sounded at the 92-minute mark. In one of the most dramatic championship finals in recent history, the home team mounted a stunning comeback from a 2-1 deficit to claim their first title in eight years."
      )}

      ${ContentBuilder.heading(3, "Match Summary: Quarter by Quarter")}
      ${ContentBuilder.list(
        [
          "Minutes 0-20: Rivals dominate, HOME TEAM struggling with pace",
          "Minute 23: RIVALS score opening goal - crowd stunned",
          "Minute 41: HOME TEAM equalizes with brilliant counter-attack goal",
          "Minute 58: RIVALS retake lead on controversial penalty decision",
          "Minute 75: HOME TEAM star player scores stunning individual goal - crowd roaring",
          "Minute 88: HOME TEAM secures winner from set piece",
          "Minutes 88-92: Rivals pressure mounts; HOME TEAM defense holds firm",
        ],
        true
      )}

      ${ContentBuilder.quote(
        "This is the greatest moment of my career. The team never gave up, never believed we were beaten. This is for our fans.",
        "Captain James Morrison, MVP of the Match"
      )}

      ${ContentBuilder.paragraph(
        "The championship win secures Home Team's participation in next year's continental tournament and triggers celebrations across the city. The team's turnaround this season - from mid-table last year to champions - represents one of the most impressive transformations in recent sports history."
      )}
    `,
    tags: ["Sports", "Championship", "Football", "Drama"],
    views: 12450,
    featured: true,
  }),
  createArticle({
    id: 5,
    title: "Major Merger: Tech Company Acquires AI Startup for $2.5 Billion",
    subtitle:
      "Strategic acquisition aims to accelerate product development; startup co-founders remain as leadership",
    description:
      "In one of the largest tech acquisitions this year, a Fortune 500 company purchases innovative AI research firm.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2026-01-02",
    author: "Victoria Thompson",
    readTime: "5 min read",
    source: "Business Insider",
    content: `
      ${ContentBuilder.paragraph(
        "NEW YORK — In a blockbuster acquisition announced after market close, a major technology conglomerate has agreed to purchase an innovative AI startup for $2.5 billion in cash and stock. The deal represents one of the largest acquisitions in the artificial intelligence sector this year."
      )}

      ${ContentBuilder.heading(3, "Deal Structure and Terms")}
      ${ContentBuilder.list([
        "$2.5B total acquisition price: $1.8B cash + $700M stock consideration",
        "All 450 employees of acquired startup retain positions",
        "Startup CEO appointed as VP of AI Research & Development",
        "Acquisition closes in Q3 2026 pending regulatory approval",
        "Earnout provisions if AI products hit specified revenue targets by 2029",
      ])}

      ${ContentBuilder.quote(
        "This acquisition allows us to accelerate our AI roadmap by 18 months. The startup's research is genuinely cutting-edge.",
        "CEO of Acquiring Company"
      )}

      ${ContentBuilder.paragraph(
        "Analysts note that the $2.5B valuation, while substantial, represents a reasonable entry point given the startup's growth trajectory and technological capabilities. The company was previously valued at $700M in its Series C funding round just 16 months ago."
      )}

      ${ContentBuilder.highlight(
        "Strategic Rationale",
        "The acquiring company seeks to strengthen its position against rivals in the AI market. Competitors have been investing heavily in AI research, making this acquisition a defensive and offensive move simultaneously."
      )}

      ${ContentBuilder.paragraph(
        "Market observers expect additional consolidation in the AI sector as larger technology companies acquire specialized research firms and startups with breakthrough technologies."
      )}
    `,
    tags: ["Business", "M&A", "Technology", "Investment"],
    views: 4320,
    featured: false,
  }),
  createArticle({
    id: 6,
    title:
      "Breakthrough Study: New Cancer Treatment Shows 78% Success Rate in Clinical Trials",
    subtitle:
      "Phase 3 trials exceed expectations; drug approval expected within 12-18 months",
    description:
      "International research team publishes results of groundbreaking immunotherapy treatment for previously untreatable cancer types.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    date: "2026-01-01",
    author: "Dr. Priya Sharma",
    readTime: "6 min read",
    source: "Medical Research Today",
    content: `
      ${ContentBuilder.paragraph(
        "LONDON — In findings that could transform cancer treatment, an international research consortium published results today from Phase 3 clinical trials of a novel immunotherapy treatment. The results, presented simultaneously at medical conferences in London, New York, and Geneva, show unprecedented success rates in patients with previously untreatable cancer types."
      )}

      ${ContentBuilder.heading(3, "Clinical Trial Results (N=1,247 patients)")}
      ${ContentBuilder.comparison(
        "Treatment Group Results",
        [
          "78% complete response rate",
          "19% partial response rate",
          "3% no response",
          "Average survival gain: 14 months",
        ],
        "Historical Standard Care",
        [
          "12% complete response rate",
          "34% partial response rate",
          "54% no response",
          "Average survival gain: 3 months",
        ]
      )}

      ${ContentBuilder.paragraph(
        "The treatment, designated as HT-2847, works through a novel mechanism that enables the immune system to recognize and attack cancer cells that typically evade immune detection. The therapy is administered through periodic infusions with minimal side effects compared to traditional chemotherapy."
      )}

      ${ContentBuilder.quote(
        "These results represent a genuine paradigm shift in how we can treat this disease. We're potentially talking about long-term remission for patients who previously had no viable options.",
        "Dr. Geoffrey Harrison, Lead Researcher"
      )}

      ${ContentBuilder.highlight(
        "Approval Timeline",
        "Regulatory submissions to FDA and EMA expected Q2 2026 | Expedited review granted based on breakthrough designation | Conditional approval anticipated Q4 2026 | Full approval by mid-2027"
      )}

      ${ContentBuilder.paragraph(
        "Stock prices of the pharmaceutical company developing the treatment surged 24% on the news. The company has already announced plans to scale manufacturing capacity to meet expected global demand. Treatment cost is estimated at $150,000-200,000 per patient annually, though discussions about insurance coverage and patient assistance programs are already underway."
      )}
    `,
    tags: ["Medicine", "Research", "Healthcare", "Breakthrough"],
    views: 7890,
    featured: true,
  }),
  createArticle({
    id: 7,
    title:
      "New Metro System Opens Three Days Early; Initial Ridership Exceeds Projections",
    subtitle:
      "Modern transit infrastructure transforms city connectivity; commute times reduced by average 40%",
    description:
      "Major infrastructure project completes ahead of schedule after four years of construction; city celebrates with ceremonial opening.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1581092163562-40038e57e0bb?w=800&h=400&fit=crop",
    date: "2025-12-31",
    author: "Robert Chen",
    readTime: "5 min read",
    source: "City News Network",
    content: `
      ${ContentBuilder.paragraph(
        "In a rare example of a major infrastructure project completing early, the new metro system opened to the public three days ahead of schedule. The 47-station network, which connects the city's major business districts and residential areas, recorded over 800,000 trips on its opening day."
      )}

      ${ContentBuilder.heading(3, "System Specifications")}
      ${ContentBuilder.list([
        "Total track length: 156 kilometers across 4 major lines",
        "47 stations with 340 trains in operation",
        "Average commute time reduction: 40% from previous methods",
        "Daily capacity: 3.2 million passengers",
        "Construction cost: $18.9 billion (came in 4% under budget)",
        "Project timeline: 4 years, 2 months (3 months ahead of schedule)",
      ])}

      ${ContentBuilder.paragraph(
        "The early opening was achieved through efficient project management, optimal resource allocation, and favorable weather conditions during the final construction phases. The project employed over 50,000 workers at peak construction."
      )}

      ${ContentBuilder.quote(
        "This metro system will serve as the backbone of urban transportation for the next 40 years. It's a point of pride for our entire city.",
        "Mayor Patricia Wong, at Opening Ceremony"
      )}

      ${ContentBuilder.highlight(
        "Ridership Impact",
        "Opening day: 800,000 trips | Projected daily ridership stabilized: 2.1-2.4 million passengers | Expected to reduce daily traffic congestion by 22% | Annual economic benefit estimated at $3.2 billion"
      )}

      ${ContentBuilder.paragraph(
        "The project's success has drawn attention from other cities planning similar transportation infrastructure. International delegations have already requested tours and technical briefings on the project's engineering and management approach."
      )}
    `,
    tags: ["Infrastructure", "Transportation", "Development", "Urban"],
    views: 5432,
    featured: false,
  }),
  createArticle({
    id: 8,
    title:
      "EXCLUSIVE INTERVIEW: Olympic Champion on Comeback, Overcoming Injury, and Setting New Goals",
    subtitle:
      "First in-depth interview since returning to competitive training six months ago",
    description:
      "Star athlete discusses injury recovery journey, upcoming competitions, and influence on next generation of athletes.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2025-12-30",
    author: "Lisa Anderson",
    readTime: "8 min read",
    source: "Sports Illustrated",
    content: `
      ${ContentBuilder.paragraph(
        "In an exclusive interview conducted at the Olympic training facility, we speak with the recently returned Olympic champion about recovery from a career-threatening injury, the grueling rehabilitation process, and what lies ahead for one of the sport's greatest athletes."
      )}

      ${ContentBuilder.quote(
        "There were days I wasn't sure I'd ever compete again. But my team believed in me, and gradually, physically and mentally, I believed too.",
        "Olympic Champion"
      )}

      ${ContentBuilder.heading(3, "On the Injury and Recovery")}
      ${ContentBuilder.paragraph(
        "'The injury happened during a routine training session. I felt something tear immediately, and honestly, I knew it was serious. The first six weeks were the hardest—not physically, but mentally. You're dealing with pain, uncertainty about your future, and all the doubt that comes with it.'"
      )},

      ${ContentBuilder.paragraph(
        "'My physiotherapy team was exceptional. We developed a 14-stage recovery protocol that pushed my limits but also prevented re-injury. It was months of unglamorous work—ice baths, repetitive exercises, careful progression.'"
      )},

      ${ContentBuilder.heading(3, "Looking Ahead to Competition")}
      ${ContentBuilder.list([
        "First competition scheduled for March 2026 (selective events only)",
        "Target Olympic qualification by July 2026",
        "Long-term goal: medal contention in 2028 Olympics",
        "Considering retirement timeline: 'I'll know when it's time to step aside'",
      ])}

      ${ContentBuilder.quote(
        "I've learned that vulnerability isn't weakness. Sharing this journey has inspired messages from thousands of people facing their own challenges.",
        "Olympic Champion"
      )}

      ${ContentBuilder.paragraph(
        "When asked about pressures and expectations, the athlete remains philosophical: 'I'm competing for different reasons now. The medals were always nice, but this comeback is about proving something to myself. It's about resilience and never accepting limitations that others place on you.'"
      )}
    `,
    tags: ["Sports", "Interview", "Athletics", "Inspiration"],
    views: 9876,
    featured: true,
  }),
  createArticle({
    id: 9,
    title:
      "Global Stock Markets Surge on Positive Economic Data; Fed Signals Rate Hold",
    subtitle:
      "S&P 500 rises 3.2% on unemployment figures; investors reassess inflation outlook",
    description:
      "Major indices reach new highs following stronger-than-expected jobs report and dovish Federal Reserve commentary.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    date: "2025-12-29",
    author: "Marco Giordano",
    readTime: "5 min read",
    source: "Financial Times",
    content: `
      ${ContentBuilder.paragraph(
        "Global stock markets experienced a broad-based rally today following the release of stronger-than-expected economic data and reassuring comments from Federal Reserve officials. The S&P 500 closed up 3.2%, while international indices also posted significant gains."
      )}

      ${ContentBuilder.heading(3, "Market Data Summary")}
      ${ContentBuilder.comparison(
        "Equity Markets",
        [
          "S&P 500: +3.2% ($4,287 close)",
          "NASDAQ: +4.1% ($14,892 close)",
          "International indices +2.8% average",
          "Volume: 23% above average",
        ],
        "Economic Indicators",
        [
          "Unemployment: 3.9% (better than forecast 4.1%)",
          "Jobs added: 412,000 (expected: 320,000)",
          "Inflation reading: 3.2% YoY (down from 3.5%)",
          "Wage growth: +0.3% monthly",
        ]
      )}

      ${ContentBuilder.paragraph(
        "The jobs report, released this morning, showed stronger-than-expected employment gains across sectors, with particular strength in technology, healthcare, and professional services. The unexpected strength in hiring is forcing analysts to reconsider recession probability estimates."
      )}

      ${ContentBuilder.quote(
        "This data changes the calculus for the Fed. We're likely to see a more cautious approach rather than aggressive rate cuts.",
        "Chief Economist, Morgan Stanley"
      )}

      ${ContentBuilder.highlight(
        "Market Implications",
        "Recession probability decreased from 35% to 22% in investor surveys | Bond yields rose 8 basis points | Cryptocurrency markets also rallied, with Bitcoin reaching new annual highs | Sector rotation away from defensive stocks into cyclicals accelerated"
      )}

      ${ContentBuilder.paragraph(
        "However, analysts caution that recent gains may have overshot fundamentals. 'We've had a significant rally already this quarter,' notes a market strategist. 'Some profit-taking could be normal, but the underlying economic trend remains positive.' Oil prices rose $2.15/barrel on growth expectations, while the dollar strengthened against most major currencies."
      )}
    `,
    tags: ["Business", "Finance", "Markets", "Economics"],
    views: 3621,
    featured: false,
  }),
  createArticle({
    id: 10,
    title:
      "International Research Consortium Launches $500M Global Initiative on Emerging Diseases",
    subtitle:
      "15 universities collaborate on early detection systems; partnership includes developing nations",
    description:
      "Ambitious five-year program aims to establish disease surveillance networks across Africa, Southeast Asia, and South America.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    date: "2025-12-28",
    author: "Dr. Kwame Osei",
    readTime: "6 min read",
    source: "Global Research Network",
    content: `
      ${ContentBuilder.paragraph(
        "Leading research institutions from 12 countries announced the formation of the Global Emerging Diseases Consortium today, committing $500 million over five years to establish an unprecedented international disease surveillance and response network. The initiative aims to detect and respond to disease outbreaks before they become global emergencies."
      )}

      ${ContentBuilder.heading(3, "Consortium Structure and Funding")}
      ${ContentBuilder.list([
        "15 research institutions (4 from developing nations, 7 from developed nations, 4 international organizations)",
        "$500M total funding: $250M from government pledges, $200M from foundations, $50M from corporate partners",
        "Network spans 42 countries across Africa, Southeast Asia, South America, and Europe",
        "Target: 150 surveillance sites operational by 2027",
        "Emphasis on capacity building in lower-resourced regions (40% of funding directed to developing nations)",
      ])}

      ${ContentBuilder.paragraph(
        "The consortium aims to address the critical gap in disease surveillance that has been exposed by recent pandemics. Early detection systems in developing nations remain fragmented and underfunded despite these regions hosting significant wildlife-human interfaces where novel diseases emerge."
      )}

      ${ContentBuilder.quote(
        "This partnership demonstrates what's possible when the global research community commits to sharing knowledge and resources. No single nation can monitor emerging diseases alone.",
        "Director of World Health Research Institute"
      )}

      ${ContentBuilder.highlight(
        "Key Deliverables",
        "Real-time pathogen database accessible to all participating nations | Training programs for 500+ local epidemiologists | Development of rapid diagnostic tools | Predictive modeling system for outbreak probability assessment"
      )}

      ${ContentBuilder.paragraph(
        "This collaboration represents a significant shift toward genuinely global scientific partnerships that acknowledge the expertise and critical role of research institutions in developing nations. Dr. Chen, lead coordinator, emphasized that success depends on equitable partnerships where all members contribute expertise and benefit from discoveries."
      )}
    `,
    tags: ["Research", "International", "Health", "Collaboration"],
    views: 2847,
    featured: false,
  }),
  createArticle({
    id: 11,
    title:
      "Cybersecurity Alert: Government Issues Emergency Warning About Active Malware Campaign",
    subtitle:
      "Coordinated attacks targeting critical infrastructure across three continents",
    description:
      "International law enforcement agencies investigate sophisticated state-sponsored malware; users urged to update systems immediately.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2025-12-27",
    author: "Nathan Clarke",
    readTime: "5 min read",
    source: "Cybersecurity Today",
    content: `
      ${ContentBuilder.highlight(
        "⚠️ URGENT ALERT",
        "Active malware campaign detected affecting 140+ organizations globally. All users should update systems immediately. Emergency patches released by major vendors."
      )}

      ${ContentBuilder.paragraph(
        "Government cybersecurity agencies and private security firms are coordinating an emergency response to a sophisticated malware campaign that has targeted critical infrastructure operators, financial institutions, and government agencies across three continents. The attack represents one of the most significant cybersecurity incidents of the past three years."
      )}

      ${ContentBuilder.heading(3, "Attack Details")}
      ${ContentBuilder.list([
        "Malware name: 'Phantom Zero' (identified by security researchers)",
        "First detected: December 23 (now confirmed active since November)",
        "Confirmed victims: 140+ organizations across US, Europe, and Asia-Pacific",
        "Attack vector: Compromised software supply chain plus targeted phishing",
        "Estimated cost of incident response and remediation: $2.3+ billion",
        "No evidence of data breach in majority of incidents (primarily reconnaissance)",
      ])}

      ${ContentBuilder.paragraph(
        "The malware appears designed for espionage and system reconnaissance rather than immediate data theft or destruction. Security analysts believe this indicates state-sponsored activity, with initial attribution pointing toward a specific nation-state, though intelligence agencies have not made formal accusations."
      )}

      ${ContentBuilder.quote(
        "This campaign is sophisticated and patient. The attackers spent weeks conducting reconnaissance before any attempt to move laterally. This is professional-grade tradecraft.",
        "Chief Threat Officer, Major Cybersecurity Firm"
      )}

      ${ContentBuilder.highlight(
        "Immediate Actions Required",
        "Install available patches immediately for Windows, Linux, and macOS systems | Review access logs for suspicious activity dating back 60 days | Enable multi-factor authentication on all critical systems | Contact cybersecurity professionals if compromise suspected"
      )}

      ${ContentBuilder.paragraph(
        "Major software vendors have released emergency security updates. Microsoft released patches for all supported Windows versions, while Apple and Linux distributors followed with their own updates. Organizations are advised to prioritize these updates as the malware actively exploits the vulnerabilities these patches address."
      )}
    `,
    tags: ["Technology", "Security", "Alert", "Cybersecurity"],
    views: 8234,
    featured: true,
  }),
  createArticle({
    id: 12,
    title:
      "FESTIVAL COVERAGE: Three-Day Cultural Celebration Draws 500,000 Visitors; Traditional Arts Take Center Stage",
    subtitle:
      "Record attendance; organizers announce expanded programming for next year",
    description:
      "Annual cultural festival celebrates diverse artistic traditions with performances, exhibitions, and community engagement.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
    date: "2025-12-26",
    author: "Amelia Rodriguez",
    readTime: "5 min read",
    source: "Culture & Arts Magazine",
    content: `
      ${ContentBuilder.paragraph(
        "The annual national cultural festival concluded last night after three days of performances, exhibitions, workshops, and community celebrations. This year's event, themed 'Heritage in Harmony,' attracted an unprecedented 500,000 visitors, surpassing last year's attendance by 18%."
      )}

      ${ContentBuilder.heading(3, "Festival by the Numbers")}
      ${ContentBuilder.comparison(
        "2025 Festival Stats",
        [
          "500,000 total visitors (record)",
          "340 performances across 8 stages",
          "45 nations represented",
          "2,400 volunteer staff members",
        ],
        "Visitor Experience",
        [
          "89% satisfaction rating",
          "71% were repeat attendees",
          "42% attended 2+ events",
          "Average visit duration: 7.2 hours",
        ]
      )}

      ${ContentBuilder.paragraph(
        "This year featured an expanded focus on endangered traditional art forms. The festival designated three stage areas specifically for preservation performances, where master artisans demonstrated techniques and trained young apprentices in real-time."
      )}

      ${ContentBuilder.quote(
        "Seeing a young child learn traditional dance from a 80-year-old master—that's what this festival is about. Keeping culture alive and passing it to the next generation.",
        "Festival Director"
      )}

      ${ContentBuilder.heading(3, "Highlights from the Festival")}
      ${ContentBuilder.list([
        "Classical music marathon: 48-hour continuous performance",
        "Street art installation: 12 murals created by international artists",
        "Culinary showcase: 200+ vendors from different ethnic communities",
        "Documentary screenings: 87 films highlighting cultural traditions",
        "Interactive workshops: Digital citizenship training to youth",
      ])}

      ${ContentBuilder.paragraph(
        "Economic impact assessments estimate the festival generated approximately $28 million in local economic activity through hotel stays, restaurant dining, and merchandise sales. Local artisans reported strong sales, with many traditional craft vendors selling out of inventory."
      )}

      ${ContentBuilder.paragraph(
        "Organizers have already announced plans for next year's festival, including expanded venue space, increased international partnerships, and dedicated funding for emerging artists. The festival's success has prompted discussions about making it a permanent annual institution with dedicated government support."
      )}
    `,
    tags: ["Culture", "Festival", "Arts", "Community"],
    views: 4156,
    featured: false,
  }),

  // ADDITIONAL TECHNOLOGY ARTICLES (13 more)
  createArticle({
    id: 13,
    title:
      "Quantum Computing Breakthrough: New Processor Achieves Million Qubit Milestone",
    subtitle: "Scientists demonstrate unprecedented computational power",
    description:
      "Revolutionary quantum processor marks major leap in quantum computing advancement.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    date: "2026-01-05",
    author: "Dr. Alice Wong",
    readTime: "7 min read",
    source: "Science Daily",
    content: `${ContentBuilder.paragraph(
      "Quantum computing enters new era with million-qubit processor breakthrough."
    )}`,
    tags: ["Quantum", "Technology", "Computing"],
    views: 7230,
    featured: true,
  }),
  createArticle({
    id: 14,
    title: "5G Networks Expand to 150 Countries Globally",
    subtitle: "Telecommunications infrastructure reaches milestone deployment",
    description:
      "Global 5G rollout accelerates with unprecedented coverage expansion.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1581092163562-40038e57e0bb?w=800&h=400&fit=crop",
    date: "2026-01-05",
    author: "James Chen",
    readTime: "5 min read",
    source: "Tech News Network",
    content: `${ContentBuilder.paragraph(
      "5G network expansion reaches new milestone across developing nations."
    )}`,
    tags: ["5G", "Networking", "Technology"],
    views: 5640,
    featured: false,
  }),
  createArticle({
    id: 15,
    title: "Cybersecurity Firms Report 40% Increase in Ransomware Attacks",
    subtitle: "Critical infrastructure targets are primary focus of attackers",
    description:
      "2026 begins with unprecedented cybersecurity threats across sectors.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2026-01-04",
    author: "Sarah Adams",
    readTime: "6 min read",
    source: "Cybersecurity Weekly",
    content: `${ContentBuilder.paragraph(
      "Ransomware attacks surge to record levels threatening global infrastructure."
    )}`,
    tags: ["Cybersecurity", "Threat", "Technology"],
    views: 8920,
    featured: true,
  }),
  createArticle({
    id: 16,
    title: "Apple Launches Revolutionary AR Glasses with Holographic Display",
    subtitle:
      "Next-generation wearable technology introduces holographic interfaces",
    description:
      "Tech giant enters augmented reality market with highly anticipated product.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    date: "2026-01-03",
    author: "Mike Johnson",
    readTime: "8 min read",
    source: "Apple News",
    content: `${ContentBuilder.paragraph(
      "Revolutionary AR glasses transform digital interaction experience."
    )}`,
    tags: ["AR", "Wearables", "Technology"],
    views: 12450,
    featured: true,
  }),
  createArticle({
    id: 17,
    title: "Google Announces New Search Algorithm with AI Integration",
    subtitle: "Search results become more personalized and contextual",
    description:
      "Tech giant revolutionizes web search with advanced AI capabilities.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    date: "2026-01-02",
    author: "Emily Rodriguez",
    readTime: "5 min read",
    source: "Search Engine Journal",
    content: `${ContentBuilder.paragraph(
      "Google's new AI-powered search algorithm delivers unprecedented accuracy."
    )}`,
    tags: ["Search", "AI", "Google"],
    views: 6780,
    featured: false,
  }),
  createArticle({
    id: 18,
    title: "Microsoft Reaches $4 Trillion Market Valuation",
    subtitle: "Tech giant becomes most valuable publicly traded company",
    description: "Microsoft stock soars as AI investments pay dividends.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2026-01-01",
    author: "Robert Taylor",
    readTime: "4 min read",
    source: "Business Insider",
    content: `${ContentBuilder.paragraph(
      "Microsoft crosses historic $4 trillion market value milestone."
    )}`,
    tags: ["Microsoft", "Market", "Technology"],
    views: 9340,
    featured: false,
  }),
  createArticle({
    id: 19,
    title: "Tesla Announces 200 New Gigafactory Locations",
    subtitle:
      "Electric vehicle manufacturer expands production capacity globally",
    description:
      "Tesla commits to massive expansion to meet growing EV demand.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1581092163562-40038e57e0bb?w=800&h=400&fit=crop",
    date: "2025-12-31",
    author: "Jennifer Lee",
    readTime: "6 min read",
    source: "Electric Vehicle News",
    content: `${ContentBuilder.paragraph(
      "Tesla's ambitious expansion plans signal confidence in EV market."
    )}`,
    tags: ["Tesla", "Manufacturing", "EV"],
    views: 5820,
    featured: false,
  }),
  createArticle({
    id: 20,
    title: "Blockchain Technology Adoption Hits 500 Million Users",
    subtitle: "Cryptocurrency and blockchain reach mainstream acceptance",
    description:
      "Digital currency adoption accelerates across developed nations.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf4d0f6f25f57b8b9a1?w=800&h=400&fit=crop",
    date: "2025-12-30",
    author: "David Martinez",
    readTime: "5 min read",
    source: "Crypto News Daily",
    content: `${ContentBuilder.paragraph(
      "Blockchain technology crosses 500 million user milestone globally."
    )}`,
    tags: ["Blockchain", "Cryptocurrency", "Technology"],
    views: 7650,
    featured: false,
  }),
  createArticle({
    id: 21,
    title: "Artificial Intelligence Passes Medical Licensing Exam",
    subtitle: "AI system demonstrates clinical knowledge competency",
    description: "Artificial intelligence achieves major healthcare milestone.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    date: "2025-12-29",
    author: "Dr. Alan Chen",
    readTime: "6 min read",
    source: "Medical AI News",
    content: `${ContentBuilder.paragraph(
      "AI system successfully passes comprehensive medical licensing examination."
    )}`,
    tags: ["AI", "Healthcare", "Technology"],
    views: 8900,
    featured: true,
  }),
  createArticle({
    id: 22,
    title: "Cryptocurrency Market Stabilizes with New Regulations",
    subtitle: "Government oversight brings clarity to digital assets",
    description: "Regulatory framework provides crypto market stability.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf4d0f6f25f57b8b9a1?w=800&h=400&fit=crop",
    date: "2025-12-28",
    author: "David Crypto",
    readTime: "5 min read",
    source: "Crypto News",
    content: `${ContentBuilder.paragraph(
      "New cryptocurrency regulations stabilize digital asset markets."
    )}`,
    tags: ["Crypto", "Technology", "Finance"],
    views: 6340,
    featured: false,
  }),
  createArticle({
    id: 23,
    title: "Space Tourism Company Completes First Commercial Flight",
    subtitle: "Private space travel becomes commercially viable",
    description:
      "Space tourism enters new era with successful commercial mission.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2025-12-27",
    author: "Captain Space",
    readTime: "5 min read",
    source: "Space Tourism News",
    content: `${ContentBuilder.paragraph(
      "Private space tourism company completes first commercial flight."
    )}`,
    tags: ["Space", "Tourism", "Technology"],
    views: 8910,
    featured: true,
  }),
  createArticle({
    id: 24,
    title: "Tech Giants Partner on Quantum Computing Initiative",
    subtitle: "Industry collaboration accelerates quantum research",
    description:
      "Major technology companies form quantum computing partnership.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf4d0f6f25f57b8b9a1?w=800&h=400&fit=crop",
    date: "2025-12-26",
    author: "Prof. Quantum",
    readTime: "5 min read",
    source: "Quantum News",
    content: `${ContentBuilder.paragraph(
      "Technology companies collaborate on quantum computing advancement."
    )}`,
    tags: ["Quantum", "Technology", "Partnership"],
    views: 7230,
    featured: true,
  }),
  createArticle({
    id: 25,
    title: "Pharmaceutical Company Receives FDA Approval for New Drug",
    subtitle: "Medication offers breakthrough treatment",
    description: "New pharmaceutical treatment gains regulatory approval.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    date: "2025-12-25",
    author: "Dr. Pharma",
    readTime: "5 min read",
    source: "Pharma News",
    content: `${ContentBuilder.paragraph(
      "Pharmaceutical company receives approval for groundbreaking medication."
    )}`,
    tags: ["Pharma", "Medicine", "Healthcare"],
    views: 7120,
    featured: false,
  }),

  // BUSINESS ARTICLES (15 articles)
  createArticle({
    id: 26,
    title: "S&P 500 Reaches All-Time High of 6,500",
    subtitle: "Stock market surge driven by technology sector gains",
    description: "Major indices celebrate record-breaking performance.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    date: "2026-01-05",
    author: "Paul Anderson",
    readTime: "4 min read",
    source: "Wall Street Journal",
    content: `${ContentBuilder.paragraph(
      "Stock market reaches historic highs amid economic optimism."
    )}`,
    tags: ["Market", "Stocks", "Business"],
    views: 8320,
    featured: true,
  }),
  createArticle({
    id: 27,
    title: "Amazon Acquires AI Startup for $15 Billion",
    subtitle: "Major acquisition signals tech giant's AI strategy expansion",
    description: "Amazon continues aggressive AI company acquisition spree.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2026-01-04",
    author: "Lisa Chen",
    readTime: "5 min read",
    source: "Business News Daily",
    content: `${ContentBuilder.paragraph(
      "Amazon invests heavily in AI startup acquisition."
    )}`,
    tags: ["M&A", "Amazon", "Business"],
    views: 6540,
    featured: false,
  }),
  createArticle({
    id: 28,
    title: "JPMorgan Predicts Economic Growth of 3.2% in 2026",
    subtitle: "Major bank forecasts strong economic performance",
    description:
      "Financial institutions remain optimistic about economic outlook.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    date: "2026-01-03",
    author: "Mark Thompson",
    readTime: "4 min read",
    source: "Financial Times",
    content: `${ContentBuilder.paragraph(
      "JPMorgan forecasts robust economic growth for 2026."
    )}`,
    tags: ["Economy", "Finance", "Business"],
    views: 4230,
    featured: false,
  }),
  createArticle({
    id: 29,
    title: "Luxury Brand Merger Creates $200 Billion Conglomerate",
    subtitle: "Fashion industry consolidation accelerates",
    description:
      "Major luxury goods companies merge to strengthen market position.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2026-01-02",
    author: "Victoria Stewart",
    readTime: "5 min read",
    source: "Luxury Goods News",
    content: `${ContentBuilder.paragraph(
      "Major luxury brands merge in historic $200 billion deal."
    )}`,
    tags: ["Luxury", "M&A", "Business"],
    views: 5670,
    featured: false,
  }),
  createArticle({
    id: 30,
    title: "Oil Prices Drop Below $50 Per Barrel",
    subtitle: "Energy market reflects demand concerns",
    description: "Crude oil prices hit new lows amid global energy transition.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    date: "2026-01-01",
    author: "Kevin Park",
    readTime: "3 min read",
    source: "Energy News",
    content: `${ContentBuilder.paragraph(
      "Oil market sees significant price decline."
    )}`,
    tags: ["Energy", "Commodities", "Business"],
    views: 3450,
    featured: false,
  }),
  createArticle({
    id: 31,
    title: "Startup Funding Reaches $500 Billion Annually",
    subtitle: "Venture capital investment hits record high",
    description: "Startup ecosystem experiences unprecedented growth.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2025-12-31",
    author: "Jessica Wong",
    readTime: "5 min read",
    source: "Startup News",
    content: `${ContentBuilder.paragraph(
      "Venture capital investments reach record levels."
    )}`,
    tags: ["Startups", "Funding", "Business"],
    views: 6890,
    featured: true,
  }),
  createArticle({
    id: 32,
    title: "Real Estate Market Shows Signs of Recovery",
    subtitle: "Housing prices stabilize in major markets",
    description:
      "Real estate sector shows resilience with price stabilization.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1581092163562-40038e57e0bb?w=800&h=400&fit=crop",
    date: "2025-12-30",
    author: "Tom Bradley",
    readTime: "4 min read",
    source: "Real Estate Times",
    content: `${ContentBuilder.paragraph(
      "Real estate market stabilizes after volatile period."
    )}`,
    tags: ["Real Estate", "Housing", "Business"],
    views: 4560,
    featured: false,
  }),
  createArticle({
    id: 33,
    title: "Retail E-Commerce Growth Accelerates to 25% Annually",
    subtitle: "Digital retail continues to outpace brick-and-mortar",
    description: "Online shopping drives retail sector transformation.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2025-12-29",
    author: "Patricia Zhang",
    readTime: "4 min read",
    source: "Retail News Network",
    content: `${ContentBuilder.paragraph(
      "E-commerce sector grows faster than traditional retail."
    )}`,
    tags: ["Retail", "E-commerce", "Business"],
    views: 5230,
    featured: false,
  }),
  createArticle({
    id: 34,
    title: "Electric Vehicle Sales Surpass Gasoline Cars Globally",
    subtitle: "Transportation sector undergoes historic transformation",
    description: "EV adoption reaches tipping point in global market.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1581092163562-40038e57e0bb?w=800&h=400&fit=crop",
    date: "2025-12-28",
    author: "Jennifer Green",
    readTime: "5 min read",
    source: "Auto News",
    content: `${ContentBuilder.paragraph(
      "Electric vehicles surpass internal combustion engines in global sales."
    )}`,
    tags: ["EV", "Automotive", "Business"],
    views: 7340,
    featured: true,
  }),
  createArticle({
    id: 35,
    title: "Tech Industry Reports Record Hiring Numbers",
    subtitle: "Talent shortage drives competitive compensation packages",
    description:
      "Technology sector experiences unprecedented employment growth.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf4d0f6f25f57b8b9a1?w=800&h=400&fit=crop",
    date: "2025-12-27",
    author: "Kevin Jobs",
    readTime: "4 min read",
    source: "Tech Jobs News",
    content: `${ContentBuilder.paragraph(
      "Technology sector reports record job creation and hiring."
    )}`,
    tags: ["Technology", "Employment", "Business"],
    views: 6540,
    featured: false,
  }),
  createArticle({
    id: 36,
    title: "Stock Market Volatility Causes Market Correction",
    subtitle: "Investors adjust portfolios amid economic uncertainty",
    description: "Major indices experience significant pullback.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    date: "2025-12-26",
    author: "Mark Market",
    readTime: "5 min read",
    source: "Market News",
    content: `${ContentBuilder.paragraph(
      "Stock market experiences significant correction amid volatility."
    )}`,
    tags: ["Markets", "Finance", "Business"],
    views: 7890,
    featured: false,
  }),
  createArticle({
    id: 37,
    title: "Global GDP Growth Forecast Raised to 3.8%",
    subtitle: "Economic outlook improves amid trade normalization",
    description: "International economic projections become more optimistic.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    date: "2025-12-25",
    author: "Dr. Economic",
    readTime: "4 min read",
    source: "Economics Daily",
    content: `${ContentBuilder.paragraph(
      "Global economic growth projections raised amid positive outlook."
    )}`,
    tags: ["Economy", "Finance", "Business"],
    views: 5120,
    featured: false,
  }),
  createArticle({
    id: 38,
    title: "Luxury Hotel Chain Expands to 500 Global Properties",
    subtitle: "Hospitality industry sees record expansion",
    description: "Hotel operator achieves major international growth.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2025-12-24",
    author: "Sophie Hospitality",
    readTime: "4 min read",
    source: "Hospitality News",
    content: `${ContentBuilder.paragraph(
      "Luxury hotel chain reaches 500 property milestone globally."
    )}`,
    tags: ["Hospitality", "Business", "Tourism"],
    views: 5340,
    featured: false,
  }),
  createArticle({
    id: 39,
    title: "Tech Startup Becomes Unicorn in Record Time",
    subtitle: "Company reaches $1 billion valuation in 18 months",
    description: "Fast-growing startup achieves prestigious milestone.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    date: "2025-12-23",
    author: "Samuel Startup",
    readTime: "4 min read",
    source: "Startup News",
    content: `${ContentBuilder.paragraph(
      "Innovative startup achieves unicorn status in record time."
    )}`,
    tags: ["Startups", "Funding", "Business"],
    views: 6780,
    featured: false,
  }),
  createArticle({
    id: 40,
    title: "Banking Sector Consolidation Reaches New Milestone",
    subtitle: "Mergers reshape financial industry landscape",
    description: "Financial institutions combine operations for efficiency.",
    category: "business",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    date: "2025-12-22",
    author: "James Finance",
    readTime: "4 min read",
    source: "Banking News",
    content: `${ContentBuilder.paragraph(
      "Major banking consolidation reshapes financial industry."
    )}`,
    tags: ["Banking", "Finance", "Business"],
    views: 4890,
    featured: false,
  }),

  // NATIONAL ARTICLES (15 articles)
  createArticle({
    id: 41,
    title: "Parliament Passes Major Healthcare Reform Bill",
    subtitle: "New legislation expands coverage to 95% of population",
    description:
      "Government enacts sweeping changes to national healthcare system.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1427504494785-cdbbdb55db6b?w=800&h=400&fit=crop",
    date: "2026-01-05",
    author: "John Wilson",
    readTime: "6 min read",
    source: "National News",
    content: `${ContentBuilder.paragraph(
      "Parliament approves historic healthcare reform legislation."
    )}`,
    tags: ["Healthcare", "Government", "National"],
    views: 7820,
    featured: true,
  }),
  createArticle({
    id: 42,
    title: "New Environmental Protection Act Signed Into Law",
    subtitle: "Government commits to 50% carbon reduction by 2030",
    description:
      "Major environmental legislation aims to combat climate change.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2026-01-04",
    author: "Margaret Green",
    readTime: "5 min read",
    source: "Environmental News",
    content: `${ContentBuilder.paragraph(
      "Government enacts ambitious environmental protection measures."
    )}`,
    tags: ["Environment", "Government", "National"],
    views: 6340,
    featured: false,
  }),
  createArticle({
    id: 43,
    title: "National Unemployment Rate Falls to 3.5%",
    subtitle: "Job market remains robust despite economic headwinds",
    description: "Employment figures exceed economist projections.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1427504494785-cdbbdb55db6b?w=800&h=400&fit=crop",
    date: "2026-01-03",
    author: "David Lee",
    readTime: "3 min read",
    source: "Labor News",
    content: `${ContentBuilder.paragraph(
      "Unemployment reaches historically low levels."
    )}`,
    tags: ["Employment", "Economy", "National"],
    views: 5120,
    featured: false,
  }),
  createArticle({
    id: 44,
    title: "National Museum Opens New Wing with Revolutionary Architecture",
    subtitle: "Cultural institution adds world-class exhibition space",
    description: "Museum expansion celebrates national heritage.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
    date: "2026-01-02",
    author: "Susan White",
    readTime: "4 min read",
    source: "Cultural News",
    content: `${ContentBuilder.paragraph(
      "National museum celebrates opening of new exhibition wing."
    )}`,
    tags: ["Culture", "Museum", "National"],
    views: 3890,
    featured: false,
  }),
  createArticle({
    id: 45,
    title: "Government Announces $100 Billion Infrastructure Investment",
    subtitle: "Major roads, bridges, and transit systems planned",
    description:
      "National infrastructure modernization initiative gets green light.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1581092163562-40038e57e0bb?w=800&h=400&fit=crop",
    date: "2026-01-01",
    author: "Robert King",
    readTime: "5 min read",
    source: "Government News",
    content: `${ContentBuilder.paragraph(
      "Government commits massive resources to infrastructure modernization."
    )}`,
    tags: ["Infrastructure", "Government", "National"],
    views: 7650,
    featured: true,
  }),
  createArticle({
    id: 46,
    title: "National Education Rankings Show Improvement",
    subtitle: "Test scores rise as educational reforms take effect",
    description: "Students demonstrate improved academic performance.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1427504494785-cdbbdb55db6b?w=800&h=400&fit=crop",
    date: "2025-12-31",
    author: "Emma Davis",
    readTime: "4 min read",
    source: "Education Times",
    content: `${ContentBuilder.paragraph(
      "National education system shows significant improvement metrics."
    )}`,
    tags: ["Education", "Schools", "National"],
    views: 4570,
    featured: false,
  }),
  createArticle({
    id: 47,
    title: "National Railway Network Completes Electrification",
    subtitle: "Country transitions to sustainable rail transportation",
    description: "Entire rail infrastructure converted to electric power.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1581092163562-40038e57e0bb?w=800&h=400&fit=crop",
    date: "2025-12-30",
    author: "Thomas Rail",
    readTime: "4 min read",
    source: "Transport News",
    content: `${ContentBuilder.paragraph(
      "National rail network completes full electrification conversion."
    )}`,
    tags: ["Transportation", "Energy", "National"],
    views: 5120,
    featured: false,
  }),
  createArticle({
    id: 48,
    title: "National Parks Receive Record Visitor Numbers",
    subtitle: "Tourism surge highlights environmental appreciation",
    description: "Protected natural areas attract unprecedented crowds.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1581092163562-40038e57e0bb?w=800&h=400&fit=crop",
    date: "2025-12-29",
    author: "Nancy Nature",
    readTime: "3 min read",
    source: "Tourism News",
    content: `${ContentBuilder.paragraph(
      "National parks experience record-breaking visitor attendance."
    )}`,
    tags: ["Tourism", "Environment", "National"],
    views: 4560,
    featured: false,
  }),
  createArticle({
    id: 49,
    title: "National Literacy Rate Reaches 98%",
    subtitle: "Education initiatives successfully boost literacy",
    description: "Country achieves near-universal literacy milestone.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1427504494785-cdbbdb55db6b?w=800&h=400&fit=crop",
    date: "2025-12-28",
    author: "Emma Education",
    readTime: "3 min read",
    source: "Education News",
    content: `${ContentBuilder.paragraph(
      "National literacy rate reaches near-universal achievement level."
    )}`,
    tags: ["Education", "Literacy", "National"],
    views: 4890,
    featured: false,
  }),
  createArticle({
    id: 50,
    title: "National Orchestra Wins International Competition",
    subtitle: "Artistic excellence recognized on global stage",
    description: "Cultural institution gains international recognition.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
    date: "2025-12-27",
    author: "Maestro Music",
    readTime: "3 min read",
    source: "Arts News",
    content: `${ContentBuilder.paragraph(
      "National orchestra wins prestigious international music competition."
    )}`,
    tags: ["Music", "Arts", "National"],
    views: 4670,
    featured: false,
  }),
  createArticle({
    id: 51,
    title: "National Soccer League Expands to 24 Teams",
    subtitle: "Professional sports league grows with new franchises",
    description: "Sports organization announces major expansion plans.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2025-12-26",
    author: "Carlos Soccer",
    readTime: "4 min read",
    source: "Soccer News",
    content: `${ContentBuilder.paragraph(
      "Professional soccer league announces major expansion."
    )}`,
    tags: ["Soccer", "Sports", "National"],
    views: 5670,
    featured: false,
  }),
  createArticle({
    id: 52,
    title: "National University Rankings Released for 2026",
    subtitle: "Educational institutions compete for top positions",
    description:
      "National university rankings reflect institutional excellence.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1427504494785-cdbbdb55db6b?w=800&h=400&fit=crop",
    date: "2025-12-25",
    author: "Dr. Academic",
    readTime: "4 min read",
    source: "Education Rankings",
    content: `${ContentBuilder.paragraph(
      "National university rankings released for year 2026."
    )}`,
    tags: ["Education", "Universities", "National"],
    views: 5340,
    featured: false,
  }),
  createArticle({
    id: 53,
    title: "National Health Crisis Averted with New Protocol",
    subtitle: "Public health measures successfully prevent outbreak",
    description: "Government health initiatives prevent potential crisis.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1427504494785-cdbbdb55db6b?w=800&h=400&fit=crop",
    date: "2025-12-24",
    author: "Dr. Health",
    readTime: "5 min read",
    source: "Health News",
    content: `${ContentBuilder.paragraph(
      "National health crisis prevented through coordinated efforts."
    )}`,
    tags: ["Health", "Government", "National"],
    views: 6780,
    featured: false,
  }),

  // INTERNATIONAL ARTICLES (14 articles)
  createArticle({
    id: 54,
    title: "UN Security Council Votes on New Middle East Peace Plan",
    subtitle: "International community works toward regional stability",
    description: "Global leaders debate controversial peace proposal.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2026-01-05",
    author: "Alexander Petrov",
    readTime: "6 min read",
    source: "UN News",
    content: `${ContentBuilder.paragraph(
      "UN Security Council debates historic Middle East peace plan."
    )}`,
    tags: ["International", "Politics", "Peace"],
    views: 7230,
    featured: true,
  }),
  createArticle({
    id: 55,
    title: "Global Trade Summit Reaches Historic Agreement",
    subtitle: "Nations commit to reducing tariffs across sectors",
    description:
      "International trade negotiations produce breakthrough results.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2026-01-04",
    author: "Elena Rodriguez",
    readTime: "5 min read",
    source: "Trade News",
    content: `${ContentBuilder.paragraph(
      "Global trade summit produces landmark agreements."
    )}`,
    tags: ["International", "Trade", "Economy"],
    views: 5640,
    featured: false,
  }),
  createArticle({
    id: 56,
    title: "European Union Expands to Include Three New Members",
    subtitle: "Regional integration continues with strategic expansion",
    description: "Three nations join European Union in historic expansion.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2026-01-03",
    author: "Hans Mueller",
    readTime: "5 min read",
    source: "EU News",
    content: `${ContentBuilder.paragraph(
      "European Union expands with admission of new member states."
    )}`,
    tags: ["International", "EU", "Politics"],
    views: 4890,
    featured: false,
  }),
  createArticle({
    id: 57,
    title: "World Health Organization Declares Infectious Disease Eradicated",
    subtitle: "Global public health milestone achieved through vaccination",
    description:
      "International health initiative successfully eliminates disease.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    date: "2026-01-02",
    author: "Dr. Jennifer Wong",
    readTime: "4 min read",
    source: "WHO News",
    content: `${ContentBuilder.paragraph(
      "World Health Organization celebrates disease eradication milestone."
    )}`,
    tags: ["International", "Health", "WHO"],
    views: 6780,
    featured: true,
  }),
  createArticle({
    id: 58,
    title: "International Space Agency Announces Mars Mission Launch Date",
    subtitle: "Historic space exploration mission scheduled for 2027",
    description: "Humanity takes next step in space exploration.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2026-01-01",
    author: "Dr. Robert Space",
    readTime: "5 min read",
    source: "Space News",
    content: `${ContentBuilder.paragraph(
      "International space agencies announce ambitious Mars mission."
    )}`,
    tags: ["International", "Space", "Science"],
    views: 8340,
    featured: true,
  }),
  createArticle({
    id: 59,
    title: "G20 Leaders Commit to Climate Action Initiative",
    subtitle: "Major economies pledge $1 trillion for renewable energy",
    description: "Global leaders announce unprecedented climate investment.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2025-12-31",
    author: "Lisa Green",
    readTime: "4 min read",
    source: "Climate News",
    content: `${ContentBuilder.paragraph(
      "G20 nations commit massive resources to climate action."
    )}`,
    tags: ["International", "Climate", "Environment"],
    views: 7120,
    featured: false,
  }),
  createArticle({
    id: 60,
    title: "UNESCO Designates Five New World Heritage Sites",
    subtitle: "Cultural and natural treasures receive international protection",
    description: "UNESCO expands world heritage protection.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
    date: "2025-12-30",
    author: "Maria Santos",
    readTime: "4 min read",
    source: "UNESCO News",
    content: `${ContentBuilder.paragraph(
      "UNESCO recognizes new world heritage sites globally."
    )}`,
    tags: ["International", "Culture", "Heritage"],
    views: 3890,
    featured: false,
  }),
  createArticle({
    id: 61,
    title: "International Climate Summit Breaks All Records",
    subtitle: "Highest attendance and broadest participation ever",
    description: "Record-breaking climate conference produces commitments.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2025-12-29",
    author: "Dr. Sarah Climate",
    readTime: "5 min read",
    source: "Climate Summit News",
    content: `${ContentBuilder.paragraph(
      "International climate summit attracts record participation."
    )}`,
    tags: ["Climate", "International", "Environment"],
    views: 8760,
    featured: true,
  }),
  createArticle({
    id: 62,
    title: "Renewable Energy Sources Hit 60% of Global Supply",
    subtitle: "Clean energy transition accelerates worldwide",
    description: "Global energy mix shifts decisively toward renewables.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2025-12-28",
    author: "Dr. Green Energy",
    readTime: "5 min read",
    source: "Energy News",
    content: `${ContentBuilder.paragraph(
      "Global renewable energy capacity surpasses 60 percent threshold."
    )}`,
    tags: ["Energy", "Environment", "International"],
    views: 7230,
    featured: true,
  }),
  createArticle({
    id: 63,
    title: "International Water Scarcity Conference Proposes Solutions",
    subtitle: "Global initiative addresses critical freshwater shortage",
    description: "World leaders discuss water security challenges.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2025-12-27",
    author: "Dr. Water",
    readTime: "5 min read",
    source: "Water News",
    content: `${ContentBuilder.paragraph(
      "International conference addresses global water scarcity crisis."
    )}`,
    tags: ["Water", "Environment", "International"],
    views: 6780,
    featured: false,
  }),
  createArticle({
    id: 64,
    title: "Climate Action Initiative Achieves Carbon Neutrality Goal",
    subtitle: "Global coalition reaches renewable energy milestone",
    description: "International environmental effort achieves major target.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=400&fit=crop",
    date: "2025-12-26",
    author: "Dr. Climate",
    readTime: "5 min read",
    source: "Climate Action News",
    content: `${ContentBuilder.paragraph(
      "Global climate action coalition achieves carbon neutrality goal."
    )}`,
    tags: ["Climate", "Environment", "International"],
    views: 8340,
    featured: true,
  }),
  createArticle({
    id: 65,
    title: "International Film Festival Celebrates 75th Anniversary",
    subtitle: "Cinema industry gathers for prestigious event",
    description: "Major film festival honors seven decades of cinema.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
    date: "2025-12-25",
    author: "Alberto Cinema",
    readTime: "4 min read",
    source: "Film Festival News",
    content: `${ContentBuilder.paragraph(
      "Prestigious international film festival celebrates historic anniversary."
    )}`,
    tags: ["Cinema", "Arts", "International"],
    views: 5890,
    featured: false,
  }),
  createArticle({
    id: 66,
    title: "Fashion Week Showcases Sustainable Design Trends",
    subtitle: "Industry embraces eco-conscious fashion",
    description: "Major fashion event highlights sustainable clothing.",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
    date: "2025-12-24",
    author: "Victoria Fashion",
    readTime: "4 min read",
    source: "Fashion News",
    content: `${ContentBuilder.paragraph(
      "Fashion industry embraces sustainable and eco-conscious designs."
    )}`,
    tags: ["Fashion", "Sustainability", "International"],
    views: 5670,
    featured: false,
  }),

  // SPORTS ARTICLES (10 articles)
  createArticle({
    id: 67,
    title: "Olympic Games Host City Announced: Sydney 2032",
    subtitle: "Australia to showcase global sporting excellence",
    description: "International Olympic Committee confirms host city.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1518611505868-d7984d57e6ca?w=800&h=400&fit=crop",
    date: "2026-01-05",
    author: "Sarah Jones",
    readTime: "4 min read",
    source: "Olympic News",
    content: `${ContentBuilder.paragraph(
      "Sydney selected to host 2032 Olympic Games."
    )}`,
    tags: ["Olympics", "Sports", "International"],
    views: 9870,
    featured: true,
  }),
  createArticle({
    id: 68,
    title: "World Cup Qualifiers Begin with Major Upsets",
    subtitle: "Underdog teams challenge favorites in qualifying matches",
    description:
      "International football competition produces surprising results.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1518611505868-d7984d57e6ca?w=800&h=400&fit=crop",
    date: "2026-01-04",
    author: "James Premier",
    readTime: "5 min read",
    source: "World Cup News",
    content: `${ContentBuilder.paragraph(
      "World Cup qualifiers produce surprising match results."
    )}`,
    tags: ["World Cup", "Football", "Sports"],
    views: 8760,
    featured: false,
  }),
  createArticle({
    id: 69,
    title: "Tennis Legend Announces Retirement from Professional Sports",
    subtitle: "Athletic icon ends illustrious multi-decade career",
    description: "Tennis champion concludes legendary playing career.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2026-01-03",
    author: "Robert Tennis",
    readTime: "5 min read",
    source: "Tennis News",
    content: `${ContentBuilder.paragraph(
      "Tennis legend announces retirement from professional competition."
    )}`,
    tags: ["Tennis", "Sports", "Retirement"],
    views: 6540,
    featured: false,
  }),
  createArticle({
    id: 70,
    title: "Basketball Player Sets New Scoring Record",
    subtitle: "Historic individual performance marks sports milestone",
    description: "Athlete surpasses legendary all-time scoring mark.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2026-01-02",
    author: "Marcus Hall",
    readTime: "4 min read",
    source: "Basketball News",
    content: `${ContentBuilder.paragraph(
      "Basketball star breaks historic scoring record."
    )}`,
    tags: ["Basketball", "Sports", "Record"],
    views: 7890,
    featured: true,
  }),
  createArticle({
    id: 71,
    title: "Winter Sports Season Kicks Off with Olympic Trials",
    subtitle: "Athletes compete for spots on national teams",
    description: "Winter sports athletes fight for Olympic selection.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1518611505868-d7984d57e6ca?w=800&h=400&fit=crop",
    date: "2026-01-01",
    author: "Patricia Snow",
    readTime: "4 min read",
    source: "Winter Sports News",
    content: `${ContentBuilder.paragraph(
      "Olympic winter trials commence with elite athlete competition."
    )}`,
    tags: ["Olympics", "Winter Sports", "Sports"],
    views: 5670,
    featured: false,
  }),
  createArticle({
    id: 72,
    title: "Championship Cricket Match Draws 2 Billion Viewers",
    subtitle: "Historic sporting event breaks viewership records",
    description: "Cricket championship attracts unprecedented global audience.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2025-12-31",
    author: "Rajesh Cricket",
    readTime: "4 min read",
    source: "Cricket News",
    content: `${ContentBuilder.paragraph(
      "Cricket championship match achieves record global viewership."
    )}`,
    tags: ["Cricket", "Sports", "Records"],
    views: 10200,
    featured: true,
  }),
  createArticle({
    id: 73,
    title: "Boxing Champion Retains Title in Spectacular Match",
    subtitle: "Dominant performance keeps championship belt",
    description: "Boxer successfully defends against challenger.",
    category: "sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2025-12-30",
    author: "Ray Boxing",
    readTime: "4 min read",
    source: "Boxing News",
    content: `${ContentBuilder.paragraph(
      "Boxing champion successfully retains title belt."
    )}`,
    tags: ["Boxing", "Sports", "Championship"],
    views: 6890,
    featured: false,
  }),
  createArticle({
    id: 74,
    title: "National Sports Team Wins International Championship",
    subtitle: "Historic victory brings national pride and celebration",
    description: "Athletes capture prestigious international competition.",
    category: "national",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    date: "2025-12-29",
    author: "Michael Brown",
    readTime: "4 min read",
    source: "Sports News",
    content: `${ContentBuilder.paragraph(
      "National team captures international championship title."
    )}`,
    tags: ["Sports", "National", "Championship"],
    views: 8920,
    featured: true,
  }),
  createArticle({
    id: 75,
    title: "University Discovers New Cancer Treatment",
    subtitle: "Research breakthrough offers hope to patients",
    description: "Medical institution announces promising treatment results.",
    category: "technology",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    date: "2025-12-28",
    author: "Dr. Medical",
    readTime: "6 min read",
    source: "Medical News",
    content: `${ContentBuilder.paragraph(
      "University research team announces cancer treatment breakthrough."
    )}`,
    tags: ["Medicine", "Research", "Healthcare"],
    views: 9340,
    featured: true,
  }),
];

// ============================================================================
// UTILITY FUNCTIONS - Enhanced for better data querying
// ============================================================================

// Get all articles
function getAllArticles() {
  return newsArticles;
}

// Get article by ID
function getArticleById(id) {
  return newsArticles.find((article) => article.id === parseInt(id));
}

// Get articles by category
function getArticlesByCategory(category) {
  if (category === "all" || !category) {
    return newsArticles;
  }
  return newsArticles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}

// Enhanced search - includes subtitle, tags, and author
function searchArticles(query) {
  const lowerQuery = query.toLowerCase();
  return newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.subtitle.toLowerCase().includes(lowerQuery) ||
      article.description.toLowerCase().includes(lowerQuery) ||
      article.author.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      article.category.toLowerCase().includes(lowerQuery)
  );
}

// Get trending articles (sorted by views)
function getTrendingArticles(limit = 5, category = "all") {
  let articlesToTrend = newsArticles;
  if (category && category !== "all") {
    articlesToTrend = newsArticles.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
  }
  return [...articlesToTrend].sort((a, b) => b.views - a.views).slice(0, limit);
}

// Get featured articles
function getFeaturedArticles(limit = 3) {
  return newsArticles.filter((article) => article.featured).slice(0, limit);
}

// Get single featured article (highest views among featured)
function getFeaturedArticle(category = "all") {
  let articlesToSearch = newsArticles;
  if (category && category !== "all") {
    articlesToSearch = newsArticles.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
  }

  const featured = articlesToSearch.filter((article) => article.featured);
  return featured.length > 0
    ? featured.reduce((max, article) =>
        article.views > max.views ? article : max
      )
    : articlesToSearch[0];
}

// Get articles by author
function getArticlesByAuthor(authorName) {
  return newsArticles.filter(
    (article) => article.author.toLowerCase() === authorName.toLowerCase()
  );
}

// Get latest articles
function getLatestArticles(limit = 5) {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

// Get related articles by category
function getRelatedArticles(articleId, limit = 3) {
  const currentArticle = getArticleById(articleId);
  if (!currentArticle) return [];

  return newsArticles
    .filter(
      (article) =>
        article.category === currentArticle.category && article.id !== articleId
    )
    .slice(0, limit);
}

// Get all unique categories
function getAllCategories() {
  const categories = [
    ...new Set(newsArticles.map((article) => article.category)),
  ];
  return categories.sort();
}

// Get articles with specific tag
function getArticlesByTag(tagName) {
  return newsArticles.filter((article) =>
    article.tags.some((tag) => tag.toLowerCase() === tagName.toLowerCase())
  );
}
