const newsData = [
  // === Playoffs ===
  {
    id: 1,
    title: "Bulls Bounce Back: Rose Leads Chicago to Even Series Against Miami",
    summary: "Derrick Rose scores 30 as the Bulls defeat the Heat 2-2 in a thrilling playoff battle.",
    content: `In a pivotal Game 4 at the United Center, the Chicago Bulls showcased grit and determination, led by none other than Derrick Rose. With their season hanging in the balance, Rose delivered a vintage performance, pouring in 30 points, dishing out 8 assists, and grabbing 4 rebounds. His aggressive drives to the basket and control of the game's tempo set the tone early on.

Joakim Noah added a crucial double-double with 16 points and 13 rebounds, anchoring the defense and battling Miami's Chris Bosh in the paint. Luol Deng chipped in 18 points, keeping LeBron James in check for much of the contest.

Miami Heat, led by LeBron’s 27 points and Wade’s 21, kept the game competitive through three quarters. However, a late third-quarter surge by the Bulls, capped by Rose’s buzzer-beating floater, sparked a 12-2 run that pushed Chicago into the lead for good.

The physicality of the matchup highlighted the intensity of the series. Technical fouls were handed out to both sides during heated moments, and both benches were vocal throughout. Coach Tom Thibodeau emphasized defensive intensity and second-chance points — the Bulls out-rebounded the Heat 45 to 33.

"We responded like champions tonight," Rose told reporters postgame. "This is our house, and we’re not giving up easy."

The series now heads back to Miami tied at 2-2, and all eyes will be on Game 5.`,
    category: "Playoffs",
    image: "./resources/img/bullsheatgame4.jpg"
  },
  {
    id: 2,
    title: "Thunder Outlast Lakers in Double Overtime Thriller",
    summary: "Kevin Durant’s 40 points lift OKC past Los Angeles in an instant classic.",
    content: `In one of the most thrilling games of the 2012 postseason, the Oklahoma City Thunder edged out the Los Angeles Lakers in double overtime, 118-115. Kevin Durant erupted for 40 points, including 12 in the two overtime periods, showcasing his trademark mid-range efficiency and clutch shot-making.

Russell Westbrook added 26 points and 9 assists, while James Harden delivered key baskets down the stretch, finishing with 17 off the bench. The Thunder's youth and energy overwhelmed the Lakers in the second overtime, as OKC capitalized on turnovers and fast breaks.

Kobe Bryant led the Lakers with 38 points, hitting several late-game jumpers to force extra time, but a critical missed three with under 10 seconds left in the second overtime sealed the fate for L.A. Pau Gasol contributed 22 points and 11 rebounds, while Andrew Bynum struggled with foul trouble.

Coach Scott Brooks praised his team's resilience. "We stayed composed and executed on both ends. That’s what playoff basketball is all about."

With the win, the Thunder take a 3-1 lead in the Western Conference Semifinals. Game 5 shifts back to Oklahoma City, where the young Thunder will look to close the series.`,
    category: "Playoffs",
    image: "./resources/img/thunderlakers.jpg"
  },
  {
    id: 3,
    title: "Celtics Hold Off 76ers in Gritty Game 5 Battle",
    summary: "Paul Pierce leads Boston with 24 points as Celtics go up 3-2 in the series.",
    content: `In a defensive slugfest at TD Garden, the Boston Celtics pulled away late to defeat the Philadelphia 76ers 85-79, taking a 3-2 lead in their Eastern Conference Semifinals matchup. Paul Pierce paced the Celtics with 24 points and 6 rebounds, hitting timely shots in the fourth quarter to preserve the lead.

Kevin Garnett added 20 points and 11 boards, while Rajon Rondo orchestrated the offense with 12 assists. Boston's defense clamped down in the final five minutes, holding the Sixers scoreless over a crucial three-minute stretch.

Philadelphia was led by Jrue Holiday with 18 points, but the Sixers’ shooting woes — just 39% from the field — cost them dearly. Andre Iguodala managed only 10 points and struggled to create offense against Pierce.

Doc Rivers credited the win to experience. "We've been in these situations before. We know how to finish strong, and tonight we did just that."

Game 6 returns to Philadelphia, where the 76ers face elimination and will need a breakout performance to force a Game 7.`,
    category: "Playoffs",
    image: "./resources/img/celticssixers.jpg"
  },

  // === Trades ===
  {
    id: 4,
    title: "Rockets Land Harden in Blockbuster Deal with Thunder",
    summary: "OKC parts ways with James Harden, receiving Kevin Martin and picks in return.",
    content: `In one of the most shocking trades in recent memory, the Oklahoma City Thunder have traded reigning Sixth Man of the Year James Harden to the Houston Rockets. The Thunder receive Kevin Martin, Jeremy Lamb, and multiple draft picks in return.

Harden, who averaged 16.8 PPG last season and was crucial in OKC’s Finals run, was unable to come to terms on a contract extension with the Thunder. The Rockets now get a 23-year-old star to build around.

Houston GM Daryl Morey called Harden "a foundational player with elite playmaking ability." Harden is expected to start immediately and become the face of the Rockets franchise.`,
    category: "Trades",
    image: "./resources/img/harden.jpg"
  },
  {
    id: 5,
    title: "Steve Nash Joins Kobe in Purple and Gold",
    summary: "Lakers trade for two-time MVP Steve Nash in surprise offseason move.",
    content: `In a stunning Western Conference shakeup, the Los Angeles Lakers have acquired point guard Steve Nash from the Phoenix Suns in a sign-and-trade deal. The Lakers gave up future draft picks and cash considerations to land the 38-year-old veteran.

Nash, known for his elite court vision and high basketball IQ, joins a Lakers squad already led by Kobe Bryant, Pau Gasol, and Andrew Bynum. “I never thought I’d wear purple and gold,” Nash admitted. “But the chance to compete for a title with this group was too good to pass up.”

With Nash running the offense, expectations in L.A. are now sky-high heading into the 2012-2013 season.`,
    category: "Trades",
    image: "./resources/img/nash.jpg"
  },
  {
    id: 6,
    title: "Clippers Acquire Lamar Odom in 4-Team Trade",
    summary: "Odom returns to LA as the Clippers look to bolster their bench depth.",
    content: `In a complicated four-team deal, the Los Angeles Clippers brought back veteran forward Lamar Odom. The trade sends Mo Williams to Utah, while the Rockets and Mavericks round out the rest of the asset shuffle. Odom, who struggled with Dallas after a falling out with the Lakers, now gets a chance to rejuvenate his career with the upstart Clippers.

Odom averaged just 6.6 points last season but brings playoff experience and versatility. Coach Vinny Del Negro said, "Lamar gives us length, ball-handling, and a veteran presence. He’s excited to be back in L.A. and ready to contribute."

The Clippers are looking to build on their strong core of Chris Paul, Blake Griffin, and DeAndre Jordan, aiming for deeper postseason success in 2013.`,
    category: "Trades",
    image: "./resources/img/odom.jpg"
  },

  // === Injuries ===
  {
    id: 7,
    title: "Iman Shumpert Suffers ACL Tear in Knicks’ Game 1 Loss",
    summary: "Rookie guard's season ends abruptly as New York faces a tough road ahead.",
    content: `In a devastating turn of events during his first-ever playoff appearance, New York Knicks rookie Iman Shumpert tore his ACL while bringing the ball up the court in Game 1 against the Miami Heat. The injury occurred just hours after Derrick Rose suffered a similar fate in Chicago, sending shockwaves through the NBA.

Shumpert collapsed without contact, clutching his left knee, and had to be helped off the court. An MRI confirmed a torn ACL and lateral meniscus, ending his rookie campaign and initiating a long road to recovery.

Before the injury, Shumpert had earned praise for his perimeter defense and versatility. He was expected to be a key contributor in New York’s effort to contain Miami’s dynamic backcourt. With Shumpert now sidelined, the Knicks will look to veterans like J.R. Smith and Mike Bibby to fill the void.

Coach Mike Woodson said, “We’ve seen what Iman brings to the table all season long. His energy, defense, and heart will be sorely missed.”

The Knicks ultimately fell to the Heat 100-67 in Game 1 and now face a daunting task in the remaining games without one of their brightest young stars.`,
    category: "Injuries",
    image: "./resources/img/shumpert.jpg"
  },
  {
    id: 8,
    title: "Dwight Howard to Undergo Back Surgery, Out Indefinitely",
    summary: "Magic center's season ends with spinal surgery looming.",
    content: `Orlando Magic center Dwight Howard will undergo surgery to repair a herniated disk in his back, the team confirmed Friday. Howard, who has battled the injury for weeks, will miss the rest of the postseason and is expected to begin rehab immediately after surgery.

The absence of Howard, a three-time Defensive Player of the Year, is a massive blow to Orlando’s playoff campaign. Glen Davis and Ryan Anderson will be expected to step up in his absence.

Howard’s camp has been cautious about his timeline, but early estimates suggest he could return in time for the 2012-2013 opener. Coach Stan Van Gundy remained optimistic, saying, "We’ll fight with what we’ve got. Dwight’s presence will still be felt in spirit."

Howard was averaging 20.6 points and 14.5 rebounds before the injury shut him down.`,
    category: "Injuries",
    image: "./resources/img/d12.jpg"
  },
  {
    id: 9,
    title: "Baron Davis Suffers Gruesome Knee Injury in Knicks Playoff Run",
    summary: "Veteran guard's postseason ends abruptly after dislocating knee.",
    content: `New York Knicks guard Baron Davis suffered a devastating knee injury in Game 4 against the Miami Heat. Davis fell awkwardly on a fast break and was stretchered off the court with what doctors later confirmed as a torn ACL, MCL, and patellar tendon.

The injury ends Davis’s season — and possibly his career — as the 33-year-old was in the twilight of his playing days. Teammates and fans stood in silence as Davis was taken off the court.

“Baron has been a warrior for us,” said Knicks interim coach Mike Woodson. “It’s incredibly tough to see him go down like that.”

The Knicks now turn to Mike Bibby and rookie Iman Shumpert to fill the backcourt void left by Davis’ absence as they try to stay alive in the series.`,
    category: "Injuries",
    image: "./resources/img/bdavis.jpg"
  },

  // === Rumors ===
  {
    id: 10,
    title: "Dwight Howard Reportedly Frustrated With Magic Front Office",
    summary: "Tension grows between Howard and Orlando as playoff pressure mounts.",
    content: `Despite being sidelined due to injury, Dwight Howard continues to dominate headlines — and not just for his back surgery. Reports from multiple league insiders suggest Howard is growing increasingly discontent with the Orlando Magic’s front office.

Sources close to the situation say Howard is frustrated with what he perceives as a lack of urgency in building a championship-caliber team around him. Earlier this season, he requested a trade but later waived his opt-out clause — a move many now believe was made under pressure.

Although Magic GM Otis Smith and coach Stan Van Gundy have both publicly supported Howard, recent locker room tensions have raised eyebrows. Insiders claim Howard has distanced himself from teammates and has not been actively involved with the team since stepping away to undergo back surgery.

The timing couldn’t be worse for the Magic, who are struggling to compete without their franchise cornerstone. Many around the league believe the relationship is beyond repair.`,
    category: "Rumors",
    image: "./resources/img/dh12.jpg"
  },
  {
    id: 11,
    title: "Chris Paul, Dwight Howard Could Team Up in 2013, Sources Say",
    summary: "Buzz grows around superteam scenario in LA — but not with the Lakers.",
    content: `With Dwight Howard and Chris Paul both facing uncertain futures with their respective teams, league chatter has intensified around a potential team-up next season. Sources within the Clippers and Magic camps suggest a growing interest in pairing the two All-Stars.

While the Lakers were long seen as the ideal superteam destination, insiders are pointing to the Los Angeles Clippers — led by Blake Griffin and a youthful core — as a more realistic option. CP3 has been thriving in his first season with the Clippers, and if Howard becomes a free agent or pushes for a trade, he could find LA’s other team a welcoming landing spot.`,
    category: "Rumors",
    image: "./resources/img/paulhoward.jpg"
  },
  {
    id: 12,
    title: "Phil Jackson to Return? Rumors Swirl Around Lakers' Coaching Future",
    summary: "Lakers fans call for the Zen Master after disappointing playoff exit.",
    content: `After a turbulent playoff performance and growing concerns about Mike Brown’s rotations, rumors are swirling that the Lakers could be preparing for a reunion with legendary coach Phil Jackson.

Jackson, who retired after the 2010–2011 season, has remained relatively quiet, but several prominent reporters claim the Lakers’ front office has reached out privately. With Kobe Bryant still pushing for a sixth ring, many believe Jackson is the only coach capable of managing the star-studded — and aging — roster.`,
    category: "Rumors",
    image: "./resources/img/phil.jpg"
  }
];