import { useState, useEffect } from "react";

const calendarData = {
  June: [
    { date: "Mon, June 1", day: 1, category: "Business Visibility", topic: "June Kickoff: Is Your Google Business Profile Working For You?", caption: "Google Business Profile optimization is one of the highest-ROI moves a Southwest Florida small business can make — and most profiles are incomplete. Your profile is the first thing customers see when they search for you. Is yours complete, accurate, and working in your favor? If you're not sure, it might be costing you customers before the conversation even starts. We help SWFL businesses get found, look credible, and convert searchers into customers.", image: "Bright split-screen: left side shows a phone with a Google search and a business pin on a map; right side shows a smiling business owner at their storefront. Warm coastal light.", cta: "Drop a comment or DM us — we'll do a quick profile audit for you.", tag: "Small Business" },
    { date: "Wed, June 3", day: 3, category: "Multifamily / Community", topic: "Summer Resident Engagement Starts Now", caption: "Southwest Florida apartment communities that invest in summer resident engagement see stronger retention — and it starts with a plan. The best communities know that resident experience doesn't happen by accident. Pools, events, vendor partnerships, and communication all need coordination. We support multifamily teams with lifestyle coordination, event planning, and resident communication so your on-site team can stay focused on operations.", image: "Aerial or wide shot of a resort-style apartment pool area with lounge chairs. Overlaid with light text and a Gulf Coast Marketing Co. logo badge.", cta: "Let's plan your summer resident engagement calendar. Reach out today.", tag: "Multifamily" },
    { date: "Fri, June 5", day: 5, category: "Educational", topic: "3 Reasons Local Businesses Struggle With Visibility (And How to Fix Them)", caption: "Local business visibility in Southwest Florida comes down to three fixable gaps we see constantly:\n\n1️⃣ Inconsistent business information across directories\n2️⃣ An incomplete or unmanaged Google Business Profile\n3️⃣ No clear strategy for staying top of mind in the local market\n\nYou built a great business — but if people can't find you, it doesn't matter. The good news? None of these require a massive budget to fix.", image: "Clean graphic with three numbered points over a soft coastal-toned background. Professional and easy to read on mobile.", cta: "Save this post if you recognized your business in any of these. Then let's talk.", tag: "Small Business" },
    { date: "Mon, June 8", day: 8, category: "Relationship Building", topic: "Spotlight: Supporting Southwest Florida's Local Business Community", caption: "Southwest Florida small businesses are built on relationships — and that's what makes this market different. From Naples to Fort Myers to Cape Coral, local business owners show up for each other in ways you don't see everywhere. We work alongside these business owners every day, and we see firsthand how much heart goes into building something in this community. Who's a local business you love? Tag them below.", image: "Collage-style graphic or lifestyle photo of a local shopping district, café, or market with a warm, sunny Southwest Florida feel.", cta: "Tag a local business you want to support this summer. 👇", tag: "Community" },
    { date: "Wed, June 10", day: 10, category: "Multifamily / Community", topic: "Vendor Coordination: The Hidden Work Behind a Great Community", caption: "Multifamily vendor coordination is the behind-the-scenes work that makes a well-run apartment community possible — and most on-site teams don't have the bandwidth to do it well. Landscapers, maintenance crews, event partners, food trucks, fitness instructors — managing those relationships takes time, communication, and follow-through. We help Southwest Florida multifamily communities coordinate vendor relationships so events happen, amenities stay sharp, and residents notice the difference.", image: "Behind-the-scenes feel: a coordinator reviewing a checklist near a community event setup. Branded tote or clipboard visible. Bright, professional.", cta: "Curious what vendor coordination support looks like? Let's connect.", tag: "Multifamily" },
    { date: "Fri, June 12", day: 12, category: "Business Growth", topic: "Your Business Communication System: Are You Building Relationships or Just Sending Messages?", caption: "Small business communication strategy is the difference between staying top of mind and getting forgotten. Most small businesses send emails or post occasionally — but without a clear approach, it's just noise. Effective business communication builds trust, keeps you relevant, and turns one-time customers into long-term relationships. We help Southwest Florida businesses develop communication systems that actually support growth — not just activity.", image: "Flat lay or clean desk setup with a laptop open to an email draft, a notepad, and a coffee. Warm tones. Professional.", cta: "Is your current communication strategy supporting your growth goals? Let's find out.", tag: "Small Business" },
    { date: "Mon, June 15", day: 15, category: "Educational", topic: "What Business Development Actually Means for a Small Business", caption: "Small business development strategy isn't just for corporations — it's the work that moves you from surviving to scaling. For a small business, it means identifying new revenue opportunities, building strategic partnerships, and creating systems for consistent growth. We support small business owners in Southwest Florida with practical business development strategy — not theory. Real plans, real actions, real results.", image: "Clean, professional graphic: upward arrow or growth chart with a coastal color palette (navy, teal, sand). Simple and authoritative.", cta: "What's your biggest business development challenge right now? Tell us below.", tag: "Business Growth" },
    { date: "Wed, June 17", day: 17, category: "Multifamily / Community", topic: "Summer Event Planning for Apartment Communities", caption: "Resident event planning for Southwest Florida apartment communities is what separates a good summer from a forgettable one. Pool parties, food truck nights, trivia evenings, fitness challenges — the best communities make these happen intentionally. But great events take planning, vendor coordination, communication, and follow-through. We specialize in multifamily resident events in SWFL — handling the details so your team doesn't have to.", image: "Bright, festive outdoor event at a community clubhouse or pool area. String lights, tables, a small crowd. Summer evening feel.", cta: "What summer events are your residents asking for? Share below or DM us to plan together.", tag: "Multifamily" },
    { date: "Thu, June 19", day: 19, category: "Observance", topic: "Juneteenth — Honoring Freedom, Community, and Progress", caption: "Juneteenth is a day of historical significance, community celebration, and reflection on the ongoing work of equity and progress. We honor the resilience and contributions of the Black community and take a moment to recognize the importance of this day. Wishing everyone a meaningful Juneteenth.", image: "Respectful, clean graphic with the Juneteenth colors (red, black, green) incorporated tastefully into a Gulf Coast Marketing Co. branded post. No stock photos — typography-forward design.", cta: "Take a moment today to connect with your local community.", tag: "Observance" },
    { date: "Mon, June 22", day: 22, category: "Business Visibility", topic: "Are You Showing Up Where Your Customers Are Looking?", caption: "Local business visibility in Southwest Florida starts before a customer ever calls or walks in — it starts with a search. They read reviews, check your profile, look at your hours, and make a decision before you know they exist. If your business isn't showing up clearly and consistently, you're losing customers you never had a chance to win. Visibility isn't about going viral. It's about being findable, credible, and present where your customers are already looking.", image: "Person on a smartphone searching for a local business, with a Google search result visible on screen. Clean, realistic lifestyle photo.", cta: "Want to know where you're showing up — and where you're not? Let's take a look.", tag: "Small Business" },
    { date: "Wed, June 24", day: 24, category: "Relationship Building", topic: "Building Business Relationships in Southwest Florida", caption: "Southwest Florida business relationships aren't just nice to have — they're a growth strategy. Referrals, partnerships, and community reputation are how businesses in this market build something that lasts. Transactional marketing fades. Relationships compound. That's why we prioritize relationship-building as part of everything we do — for our clients and in our own business. Who are you building relationships with in this market right now?", image: "Two business owners shaking hands or having a coffee meeting at an outdoor café — Florida backdrop. Warm, genuine, not staged.", cta: "Tag someone you've built a great business relationship with in SWFL. 👇", tag: "Community" },
    { date: "Fri, June 26", day: 26, category: "Multifamily / Community", topic: "Resident Communication: The Overlooked Driver of Resident Retention", caption: "Multifamily resident retention is directly tied to how well you communicate — and most communities underestimate this. Lease renewals and amenities matter, but residents who feel informed, heard, and connected are far more likely to stay. Consistent, warm, well-organized resident communication builds trust, reduces friction, and makes people feel like they're part of something worth staying for. We help Southwest Florida communities build communication systems that support retention — not just announcements.", image: "Graphic with a resident checking a community newsletter or digital communication on their phone, with a branded apartment community feel.", cta: "Is your resident communication as strong as your amenities? Let's assess it.", tag: "Multifamily" },
    { date: "Mon, June 29", day: 29, category: "Business Growth", topic: "Mid-Year Business Check-In: Where Do You Stand?", caption: "Mid-year business strategy review is one of the most valuable things you can do for your Southwest Florida business right now. We're halfway through 2026 — are you where you thought you'd be? What's working? What's stalling? What needs to change before Q4? The businesses that finish the year strong are the ones that paused at the halfway point to reset, realign, and make intentional moves. Don't just keep running — make sure you're running in the right direction.", image: "Clean, editorial graphic: split calendar showing H1 and H2 with a 'Where are you?' style question. Coastal brand colors.", cta: "What's your biggest focus for the second half of 2026? Share below.", tag: "Business Growth" },
  ],
  July: [
    { date: "Wed, July 1", day: 1, category: "Seasonal / Observance", topic: "July in Southwest Florida: What Your Business Should Be Focused On", caption: "Southwest Florida business strategy in July looks different than the rest of the year — and that's actually an advantage. Some businesses slow down, others stay steady, but the smartest ones use this month to invest in systems, visibility, and fall planning. July is one of the best months to do the work that pays off in Q4. Don't let the summer pace slow your momentum — let it create space for what matters.", image: "Bright, coastal July graphic — palm trees, blue sky, Gulf waters. Branded overlay with 'July. Stay Strategic.' type messaging.", cta: "What's your July business focus? Tell us below.", tag: "Seasonal" },
    { date: "Fri, July 3", day: 3, category: "Observance", topic: "Independence Day Weekend — Celebrating with Our Community", caption: "Fourth of July weekend in Southwest Florida — wishing everyone a safe, joyful, and relaxing holiday. Whether you're on the water, at a community cookout, or spending time with family, enjoy every moment of it. We'll be back next week ready to support your business and community goals. 🇺🇸🎆", image: "Festive, patriotic Gulf Coast-themed graphic — water, fireworks, red/white/blue tones with the GCMC logo. Clean and celebratory, not kitschy.", cta: "Have a wonderful holiday weekend! Tag us in your SWFL Fourth of July photos.", tag: "Observance" },
    { date: "Mon, July 7", day: 7, category: "Small Business", topic: "Back to Business: How to Use Slower Summer Months Strategically", caption: "Strategic small business planning in the summer off-season is one of the most underused growth tools in Southwest Florida. If your business slows down in July, that's not a problem — it's an opening. Audit your systems, refresh your visibility, develop new offerings, plan for the busy season ahead. The businesses that come out of summer stronger are the ones that used the downtime with intention.", image: "Business owner working at a bright home office or café with a summer view — relaxed but focused energy. Notebook, laptop, good light.", cta: "Share one strategic thing you're working on this summer. 👇", tag: "Small Business" },
    { date: "Wed, July 9", day: 9, category: "Multifamily / Community", topic: "Community Lifestyle Coordination: What It Is and Why It Matters", caption: "Multifamily lifestyle coordination in Southwest Florida is about more than events — it's about shaping the everyday experience of living in your community. Amenity programming, resident communications, vendor relationships, seasonal campaigns — all of it contributes to a resident experience that people want to stay for. We provide lifestyle coordination support for SWFL apartment communities, bringing structure, creativity, and follow-through to your resident experience program.", image: "Lifestyle coordinator reviewing a community events board or calendar in a well-appointed clubhouse. Bright, professional, aspirational.", cta: "Curious what a lifestyle coordination partnership looks like? Let's talk.", tag: "Multifamily" },
    { date: "Fri, July 11", day: 11, category: "Educational", topic: "5 Signs Your Business Needs a Growth Strategy (Not Just More Marketing)", caption: "Small business growth strategy is what separates businesses that scale from businesses that stay stuck — and more social posts won't fix a strategy problem. Here are 5 signs it's time to think bigger:\n\n1️⃣ Revenue is flat even when you're busy\n2️⃣ You're not sure what's actually bringing in customers\n3️⃣ You don't have a clear plan for the next 6 months\n4️⃣ You're doing everything yourself with no scalable system\n5️⃣ You're reactive instead of proactive\n\nGrowth strategy isn't about working harder — it's about working with a plan.", image: "Clean, numbered-list graphic with brand colors. Minimal, easy to read, shareable.", cta: "Save this if any of these hit close to home. Then let's have a real conversation.", tag: "Business Growth" },
    { date: "Mon, July 14", day: 14, category: "Relationship Building", topic: "The Power of Local Business Partnerships in SWFL", caption: "Local business partnerships in Southwest Florida are one of the strongest growth strategies available — and they don't require an ad budget. When local businesses collaborate, refer each other, and support each other's growth, the whole community benefits. We help SWFL businesses identify and develop strategic local partnerships as part of a broader business development approach. Who are you partnering with in this market right now?", image: "Two local business owners meeting at a local market or café — natural, warm, genuine SWFL setting.", cta: "Tag a local business partner who's made a difference for you. Let's celebrate them.", tag: "Community" },
    { date: "Wed, July 16", day: 16, category: "Multifamily / Community", topic: "Resident Events That Actually Work: A Framework for Multifamily Communities", caption: "Multifamily resident event planning in Southwest Florida works best when it follows a clear framework — not just a good idea and a flyer. A successful community event is relevant, well-communicated, easy to attend, and creates a moment residents want to share. Know your resident mix → Choose the right format → Partner with the right vendors → Communicate early and often → Follow up after. We plan and coordinate resident events for SWFL communities from concept to execution.", image: "Step-by-step graphic overlaid on a bright community event backdrop. Clean, structured, professional.", cta: "What resident event has gotten the best response at your community? Share below.", tag: "Multifamily" },
    { date: "Fri, July 18", day: 18, category: "Business Visibility", topic: "Google Business Profile Tips for Southwest Florida Businesses", caption: "Google Business Profile management for Southwest Florida businesses is one of the most impactful visibility investments you can make — and most profiles have fixable gaps. Here's what we see missing most often:\n\n📍 Incorrect or missing service area\n📸 Outdated or missing photos\n⭐ No process for collecting or responding to reviews\n🕐 Wrong hours, especially around holidays\n\nThese aren't small details — they're conversion factors. We help SWFL businesses optimize and maintain their profiles for maximum local visibility.", image: "Phone screen showing a Google Business Profile with strong photos, reviews, and complete info. Clean, credible, real.", cta: "When's the last time you reviewed your Google Business Profile? Let us take a look.", tag: "Small Business" },
    { date: "Mon, July 21", day: 21, category: "Educational", topic: "What Does a Marketing Support Partner Actually Do for a Small Business?", caption: "Small business marketing support in Southwest Florida looks different when it's done right — and Gulf Coast Marketing Co. isn't a traditional agency. We work alongside business owners as a strategic support partner: visibility, communication systems, Google Business Profile management, business development strategy, and growth planning. Think of it less like hiring a vendor and more like adding a strategic layer to your business. We meet you where you are and build from there.", image: "Side-by-side: a business owner focused on their craft next to a clean branded graphic representing support, strategy, and visibility.", cta: "Wondering what working together could look like for your business? DM us — no pitch, just a conversation.", tag: "Small Business" },
    { date: "Wed, July 23", day: 23, category: "Multifamily / Community", topic: "Fall Planning for Apartment Communities Starts Now", caption: "Multifamily fall programming planning in Southwest Florida should start in July — not September. The best communities are already booking vendors, building communication calendars, and mapping out Q4 resident events right now. If you wait until fall to plan for fall, you're already behind. We help SWFL apartment communities build 90-day resident experience plans so your team is never scrambling. July is the window. Let's use it.", image: "Split graphic: summer pool scene transitioning to a warm fall community event vibe. Planning calendar in the foreground.", cta: "Is your community's fall programming planned? Let's build your Q4 resident experience calendar.", tag: "Multifamily" },
    { date: "Fri, July 25", day: 25, category: "Business Growth", topic: "Stop Treating Marketing as an Expense. Start Treating It as Infrastructure.", caption: "Business growth infrastructure — visibility, communication, business development — is what keeps your pipeline full when you're busy and when you're not. The businesses that struggle with marketing are usually the ones treating it as a line item to cut instead of a system that supports everything else. When you invest in the right support consistently, marketing stops feeling like a cost and starts functioning like an engine for your Southwest Florida business.", image: "Strong editorial graphic: building blueprint or infrastructure visual with a business growth overlay. Navy, teal, sand tones. Bold and authoritative.", cta: "How are you investing in your business growth infrastructure this year?", tag: "Business Growth" },
    { date: "Mon, July 28", day: 28, category: "Community", topic: "Why We Work in Southwest Florida — And Who We Work For", caption: "Gulf Coast Marketing Co. was built for the Southwest Florida market — and there's a reason we stay focused here. SWFL has a unique mix of established local businesses, growing multifamily communities, seasonal dynamics, and a local culture that rewards authentic relationships over transactional marketing. We work with small business owners serious about growth and multifamily communities that want residents to love where they live. If that's you, we'd love to connect.", image: "Aerial or scenic Southwest Florida shot — Gulf waters, city skyline, or a recognizable SWFL landmark. Branded overlay with mission-oriented text.", cta: "If you're building something in Southwest Florida, we want to hear about it. 📩", tag: "Brand" },
    { date: "Wed, July 30", day: 30, category: "Educational", topic: "Building a Business Visibility Strategy That Works Year-Round", caption: "Year-round business visibility for Southwest Florida businesses isn't a campaign — it's a system. The most consistently visible businesses in this market aren't necessarily spending the most. They're showing up consistently, in the right places, with the right information and the right message — in every season. A maintained Google Business Profile, a clear local presence, consistent communication, and a strategy that doesn't stop when business picks up. We help SWFL businesses build visibility systems that work all year.", image: "Circular or continuous-loop graphic showing the 4 pillars of year-round visibility. Clean, educational, shareable.", cta: "Is your visibility strategy built to work year-round — or just when you have time? Let's build one that does.", tag: "Small Business" },
  ]
};

const categoryColors = {
  "Business Visibility": { bg: "#0e4d6e", text: "#e8f4f8" },
  "Multifamily / Community": { bg: "#2d7d6f", text: "#f0faf8" },
  "Educational": { bg: "#7c4d1e", text: "#fdf6ee" },
  "Relationship Building": { bg: "#5c3d8f", text: "#f5f0fd" },
  "Business Growth": { bg: "#1a4a7a", text: "#eef4fc" },
  "Observance": { bg: "#4a4a4a", text: "#f8f8f8" },
  "Small Business": { bg: "#b85c20", text: "#fdf4ee" },
  "Seasonal / Observance": { bg: "#2c6e49", text: "#f0faf4" },
  "Community": { bg: "#5c3d8f", text: "#f5f0fd" },
  "Brand": { bg: "#0e4d6e", text: "#e8f4f8" },
  "Seasonal": { bg: "#2c6e49", text: "#f0faf4" },
};

const tagColors = {
  "Small Business": "#b85c20",
  "Multifamily": "#2d7d6f",
  "Business Growth": "#1a4a7a",
  "Community": "#5c3d8f",
  "Observance": "#4a4a4a",
  "Seasonal": "#2c6e49",
  "Brand": "#0e4d6e",
};

const STORAGE_KEY = "gcmc-calendar-checked-v1";

export default function ContentCalendar() {
  const [activeMonth, setActiveMonth] = useState("June");
  const [expanded, setExpanded] = useState(null);
  const [filterTag, setFilterTag] = useState("All");
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(checked)); } catch {}
  }, [checked]);

  const allTags = ["All", "Small Business", "Multifamily", "Business Growth", "Community", "Observance", "Seasonal", "Brand"];
  const posts = calendarData[activeMonth].filter(p => filterTag === "All" || p.tag === filterTag);
  const totalPosts = calendarData[activeMonth].length;
  const checkedCount = Object.entries(checked).filter(([k, v]) => v && k.startsWith(activeMonth)).length;

  const toggleCheck = (e, key) => {
    e.stopPropagation();
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "linear-gradient(135deg, #f8f5f0 0%, #eef4f8 50%, #f0faf8 100%)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0a3550 0%, #0e4d6e 40%, #1a6b5c 100%)", padding: "40px 32px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
        <p style={{ color: "#7ecfbe", fontSize: 11, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 8px" }}>Social Media Content Calendar</p>
        <h1 style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: "normal", margin: "0 0 4px", letterSpacing: "-0.5px" }}>Gulf Coast Marketing Co.</h1>
        <p style={{ color: "#a8d8cc", fontSize: 16, margin: "0 0 28px", fontStyle: "italic" }}>June & July 2026 — 4 Posts Per Week — Keyword-Optimized</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["June", "July"].map(m => (
            <button key={m} onClick={() => { setActiveMonth(m); setExpanded(null); setFilterTag("All"); }}
              style={{ padding: "10px 28px", borderRadius: 3, border: "none", cursor: "pointer", fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Georgia', serif", fontWeight: activeMonth === m ? "bold" : "normal", background: activeMonth === m ? "#ffffff" : "rgba(255,255,255,0.12)", color: activeMonth === m ? "#0a3550" : "#c8e8e0", transition: "all 0.2s" }}>
              {m} 2026
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ background: "#0a3550", padding: "12px 32px", display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center", borderBottom: "2px solid #1a6b5c" }}>
        <div><span style={{ color: "#7ecfbe", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Published </span><span style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}>{checkedCount} / {totalPosts}</span></div>
        <div style={{ flex: 1, minWidth: 120, background: "rgba(255,255,255,0.1)", borderRadius: 4, height: 8, overflow: "hidden" }}>
          <div style={{ width: `${totalPosts ? (checkedCount / totalPosts) * 100 : 0}%`, background: "#7ecfbe", height: "100%", borderRadius: 4, transition: "width 0.4s ease" }} />
        </div>
        <div><span style={{ color: "#7ecfbe", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Remaining </span><span style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}>{totalPosts - checkedCount}</span></div>
      </div>

      {/* Filter Bar */}
      <div style={{ padding: "16px 32px", background: "#ffffff", borderBottom: "1px solid #dde8ec", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: 11, color: "#7a9aaa", letterSpacing: 2, textTransform: "uppercase", marginRight: 4 }}>Filter:</span>
        {allTags.map(tag => (
          <button key={tag} onClick={() => { setFilterTag(tag); setExpanded(null); }}
            style={{ padding: "5px 14px", borderRadius: 20, border: `1.5px solid ${filterTag === tag ? (tagColors[tag] || "#0e4d6e") : "#dde8ec"}`, background: filterTag === tag ? (tagColors[tag] || "#0e4d6e") : "transparent", color: filterTag === tag ? "#fff" : "#4a6a7a", fontSize: 12, cursor: "pointer", fontFamily: "Georgia, serif", transition: "all 0.15s" }}>
            {tag}
          </button>
        ))}
      </div>

      {/* Post Cards */}
      <div style={{ padding: "24px 24px 40px", maxWidth: 860, margin: "0 auto" }}>
        {posts.map((post, idx) => {
          const catColor = categoryColors[post.category] || { bg: "#0e4d6e", text: "#fff" };
          const isOpen = expanded === idx;
          const postKey = `${activeMonth}-${post.day}`;
          const isChecked = !!checked[postKey];

          return (
            <div key={idx} style={{ background: "#ffffff", borderRadius: 4, marginBottom: 14, boxShadow: isOpen ? "0 8px 32px rgba(10,53,80,0.13)" : "0 2px 8px rgba(10,53,80,0.06)", border: `1px solid ${isChecked ? "#2d7d6f" : isOpen ? "#1a6b5c" : "#dde8ec"}`, overflow: "hidden", transition: "all 0.2s", opacity: isChecked ? 0.72 : 1 }}>
              <div onClick={() => setExpanded(isOpen ? null : idx)} style={{ display: "flex", alignItems: "center", padding: "16px 20px", cursor: "pointer", gap: 14, flexWrap: "wrap" }}>
                {/* Checkbox */}
                <div onClick={(e) => toggleCheck(e, postKey)} style={{ width: 28, height: 28, borderRadius: 4, border: `2px solid ${isChecked ? "#2d7d6f" : "#b0c8d4"}`, background: isChecked ? "#2d7d6f" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, transition: "all 0.2s" }}>
                  {isChecked && <span style={{ color: "#fff", fontSize: 16, lineHeight: 1 }}>✓</span>}
                </div>
                {/* Date Badge */}
                <div style={{ minWidth: 52, textAlign: "center", background: catColor.bg, color: catColor.text, borderRadius: 3, padding: "6px 10px", flexShrink: 0 }}>
                  <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", opacity: 0.8 }}>{post.date.split(",")[0]}</div>
                  <div style={{ fontSize: 22, fontWeight: "bold", lineHeight: 1.1 }}>{post.day}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: catColor.bg, fontWeight: "bold" }}>{post.category}</span>
                    <span style={{ fontSize: 10, background: tagColors[post.tag] || "#0e4d6e", color: "#fff", borderRadius: 20, padding: "1px 9px" }}>{post.tag}</span>
                    {isChecked && <span style={{ fontSize: 10, background: "#2d7d6f", color: "#fff", borderRadius: 20, padding: "1px 9px" }}>✓ Published</span>}
                  </div>
                  <div style={{ fontSize: 15, color: "#0a2a3a", lineHeight: 1.3, fontWeight: isOpen ? "bold" : "normal", textDecoration: isChecked ? "line-through" : "none" }}>{post.topic}</div>
                </div>
                <div style={{ color: "#1a6b5c", fontSize: 20, flexShrink: 0, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "none" }}>▾</div>
              </div>

              {isOpen && (
                <div style={{ borderTop: "1px solid #eef4f8", padding: "20px 20px 24px", background: "linear-gradient(180deg, #f8fdfb 0%, #ffffff 100%)" }}>
                  {[{ label: "📝 Caption", content: post.caption }, { label: "📸 Image Concept", content: post.image }, { label: "👉 Call to Action", content: post.cta }].map(section => (
                    <div key={section.label} style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#5a8a9a", marginBottom: 6 }}>{section.label}</div>
                      <div style={{ fontSize: 14, color: "#1a3040", lineHeight: 1.7, whiteSpace: "pre-line", background: "#f2f8fc", borderLeft: "3px solid #1a6b5c", padding: "12px 16px", borderRadius: "0 3px 3px 0" }}>{section.content}</div>
                    </div>
                  ))}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
                    <button onClick={(e) => toggleCheck(e, postKey)} style={{ padding: "8px 20px", borderRadius: 3, border: "none", cursor: "pointer", fontSize: 13, fontFamily: "Georgia, serif", background: isChecked ? "#e8f5f2" : "#2d7d6f", color: isChecked ? "#2d7d6f" : "#fff", fontWeight: "bold", transition: "all 0.2s" }}>
                      {isChecked ? "✓ Mark as Unpublished" : "Mark as Published"}
                    </button>
                    <span style={{ fontSize: 11, color: "#8aaab8", fontStyle: "italic" }}>Suggested: {post.date}, 2026</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {posts.length === 0 && <div style={{ textAlign: "center", padding: "60px 20px", color: "#7a9aaa", fontStyle: "italic", fontSize: 16 }}>No posts match this filter for {activeMonth}.</div>}
      </div>

      {/* Footer */}
      <div style={{ background: "#0a3550", padding: "24px 32px", textAlign: "center", borderTop: "3px solid #1a6b5c" }}>
        <p style={{ color: "#7ecfbe", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>Gulf Coast Marketing Co. — Southwest Florida</p>
        <p style={{ color: "#4a7a8a", fontSize: 11, margin: "6px 0 0" }}>Serving small businesses &amp; multifamily communities</p>
      </div>
    </div>
  );
}
