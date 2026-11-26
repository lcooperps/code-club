/*
  ============================================================
  CODE CLUB CONTENT
  This is the only file you need to edit to update the site.
  Copy an existing entry, paste it below, and change the words.
  Keep the commas between entries, and the quote marks around text.
  ============================================================
*/

const CLUB = {
  name: "Code Club",
  tagline: "Make games, stories, art, AI and music with code. No experience needed.",
  sessions: [
    { day: "Monday", time: "1pm", room: "ICT08", who: "Years 7 to 9" },
    { day: "Thursday", time: "1pm", room: "ICT08", who: "Years 10 to 13" }
  ],
  contact: "Ask Mr Cooper or just turn up.",

  // ---------- NEWS: newest first ----------
  news: [
    { date: "2026-11-23", text: "Code Club is open! Pick a flavour below and give it a go." }
  ],

  // ---------- LEVELS: the tabs above the flavours ----------
  levels: [
    { id: "ks3", label: "Years 7 to 9", lead: "Try a few, then choose one and make it your own. Each one gets you to something that works in about 15 minutes. After that, it's up to you." },
    { id: "ks45", label: "Years 10 to 13", lead: "Something working in 15 minutes, then as deep as you want to go. Every card links to GCSE and A Level topics, and good ideas can grow into an NEA project." }
  ],

  // ---------- FLAVOURS: the taster menu (about five or six per level) ----------
  // level: "ks3" or "ks45" decides which tab it appears under.
  // code: optional starter code, shown in a copyable box.
  // Each flavour has a colour that matches its printed cards.
  // A new flavour needs a new colour, e.g. colour: "#0891b2", colourName: "cyan".
  flavours: [
    {
      id: "games",
      colour: "#ea580c",   // card colour: orange
      colourName: "orange",
      level: "ks3",
      emoji: "🎮",
      title: "Games",
      hook: "Make a retro arcade game you can actually play.",
      tool: "MakeCode Arcade",
      link: "https://arcade.makecode.com",
      make: "A character you steer around the screen, collecting things before time runs out.",
      steps: [
        "Open MakeCode Arcade and click <b>New Project</b>.",
        "From <b>Sprites</b>, drag <code>set mySprite to sprite of kind Player</code> into <code>on start</code>. Draw your player.",
        "From <b>Controller</b>, add <code>move mySprite with buttons</code>. Press play: arrow keys move you.",
        "Add a second sprite of kind <b>Food</b>.",
        "Add <code>on sprite of kind Player overlaps otherSprite of kind Food</code>. Inside it, change score by 1 and move the food somewhere random.",
        "From <b>Info</b>, add <code>start countdown 10 (s)</code>. You have a game!"
      ],
      ideas: [
        "Add an enemy that chases you.",
        "Build a level with walls using the tilemap editor.",
        "Change everything so it becomes a totally different game."
      ],
      stuck: "Try the Tutorials on the home page, or open a gallery game and click Edit to see how it works.",
      further: "Flip the toggle at the top to JavaScript or Python. Your blocks become real code."
    },
    {
      id: "stories",
      colour: "#2563eb",   // card colour: blue
      colourName: "blue",
      level: "ks3",
      emoji: "📖",
      title: "Stories",
      hook: "Write a choose-your-own-adventure where every choice matters.",
      tool: "Twine",
      link: "https://twinery.org",
      make: "A story where the reader makes choices that lead to different places.",
      steps: [
        "Go to twinery.org, click <b>Use online</b>, then <b>+ New</b>.",
        "Double-click the first box and write an opening scene.",
        "Type two choices in double square brackets, like <code>[[Try the door]]</code> and <code>[[Climb out the window]]</code>.",
        "Open each new passage and write what happens next.",
        "Click <b>Play</b> to read it as a player would."
      ],
      ideas: [
        "Give it three endings: good, bad and weird.",
        "Keep score with <code>(set: $gold to 0)</code> and show it with <code>$gold</code>.",
        "Hide a choice unless the player found a key earlier: <code>(if: $hasKey is true)[ ... ]</code>."
      ],
      stuck: "Map it on paper first: boxes for scenes, arrows for choices.",
      further: "Your work saves in this browser only. Use Library then Archive to download a copy."
    },
    {
      id: "art",
      colour: "#db2777",   // card colour: pink
      colourName: "pink",
      level: "ks3",
      emoji: "🎨",
      title: "Art",
      hook: "Draw spirals and patterns with Python code.",
      tool: "Raspberry Pi Editor",
      link: "https://editor.raspberrypi.org",
      make: "Colourful patterns drawn by a turtle that follows your code.",
      steps: [
        "Open the Code Editor and start a new <b>Python</b> project.",
        "Type: <code>import turtle</code>, <code>t = turtle.Turtle()</code>, then a loop: <code>for i in range(4):</code> with <code>t.forward(100)</code> and <code>t.right(90)</code> indented under it.",
        "Click <b>Run</b>. You drew a square. Now try <code>5</code> and <code>72</code>.",
        "Put your shape inside another loop that does <code>t.right(10)</code> each time round, 36 times.",
        "Add <code>t.speed(0)</code> to make it fast."
      ],
      ideas: [
        "Make a spiral where each line is a bit longer.",
        "Change colour every loop from a list like <code>[\"red\", \"orange\", \"gold\"]</code>.",
        "Draw a picture: a house, a flower, your initials."
      ],
      stuck: "Change one number at a time and run it again.",
      further: "Free projects at projects.raspberrypi.org."
    },
    {
      id: "ai",
      colour: "#16a34a",   // card colour: green
      colourName: "green",
      level: "ks3",
      emoji: "🤖",
      title: "AI",
      hook: "Train your own AI to recognise things on camera.",
      tool: "Teachable Machine",
      link: "https://teachablemachine.withgoogle.com",
      make: "An AI model that tells rock, paper and scissors apart, live.",
      steps: [
        "Click <b>Get Started</b>, <b>Image Project</b>, <b>Standard image model</b>.",
        "Name the classes Rock, Paper and Scissors (use <b>Add a class</b>).",
        "For each one, <b>Hold to Record</b> about 50 webcam pictures of that hand shape.",
        "Click <b>Train Model</b> and keep the tab open.",
        "Test it in <b>Preview</b>. How confident is it?"
      ],
      ideas: [
        "Try to fool it, then retrain it so it can't be fooled.",
        "Teach it something new: faces, objects, thumbs up or down.",
        "Make an Audio Project that hears claps or whistles."
      ],
      stuck: "More pictures with more variety (light, angle, background) almost always helps.",
      further: "Does it work on a friend's hand? Why might that matter for real AI?"
    },
    {
      id: "animation",
      colour: "#ca8a04",   // card colour: yellow
      colourName: "yellow",
      level: "ks3",
      emoji: "🎵",
      title: "Animation & music",
      hook: "Make a character dance to a beat you program.",
      tool: "Scratch",
      link: "https://scratch.mit.edu",
      make: "An animated dancer with a drum beat.",
      steps: [
        "Click <b>Create</b> and choose a sprite with several costumes (try the dancers).",
        "Add <code>when green flag clicked</code>, then <code>forever</code> with <code>next costume</code> and <code>wait 0.3 seconds</code>.",
        "Click the green flag: it dances!",
        "Add the <b>Music</b> extension (bottom left).",
        "In a second script, play drums in a <code>forever</code> loop to build a beat."
      ],
      ideas: [
        "Add a backdrop and a second dancer.",
        "Make it react to keys or clicks.",
        "Add <b>Video Sensing</b> and make it dance when you wave."
      ],
      stuck: "Click See inside on any Scratch project to see how it was built.",
      further: "No account? Use File then Save to your computer."
    },
    // ================= YEARS 10 TO 13 =================
    {
      id: "flappy",
      level: "ks45",
      emoji: "🎮",
      colour: "#ea580c",   // card colour: orange
      colourName: "orange",
      title: "Games",
      hook: "Build Flappy Bird in real JavaScript.",
      tool: "p5.js",
      link: "https://editor.p5js.org",
      make: "A bird with gravity that flaps on space and dodges pipes.",
      code: "let y = 200, vy = 0;\nlet pipeX = 400, gapY = 150, score = 0;\n\nfunction setup() { createCanvas(400, 400); }\n\nfunction draw() {\n  background(135, 206, 235);\n  vy += 0.5;            // gravity\n  y += vy;\n  circle(100, y, 30);   // the bird\n\n  pipeX -= 3;           // pipes move left\n  rect(pipeX, 0, 50, gapY);\n  rect(pipeX, gapY + 120, 50, height);\n  if (pipeX < -50) { pipeX = 400; gapY = random(50, 230); score++; }\n\n  text(\"Score: \" + score, 10, 20);\n}\n\nfunction keyPressed() { if (key === \" \") vy = -8; }",
      steps: [
        "Open the p5.js editor and paste in the starter code below. Press <b>Play</b>.",
        "Click the canvas and tap space. Gravity pulls the bird down, space pushes it up.",
        "The bird flies through pipes. Add a collision check that shows \"Game over\" and calls <code>noLoop()</code>."
      ],
      ideas: [
        "Add a restart key, a high score and rising speed.",
        "Draw your own sprite and add sound.",
        "Reskin it: a rocket in a cave, a fish in a reef."
      ],
      stuck: "The Reference page at p5js.org explains every function with an example.",
      further: "Rewrite the bird and pipes as classes, with the pipes in an array. OOP and data structures."
    },
    {
      id: "adventure",
      level: "ks45",
      emoji: "🗺️",
      colour: "#2563eb",   // card colour: blue
      colourName: "blue",
      title: "Stories",
      hook: "Build a text adventure engine driven by data.",
      tool: "Raspberry Pi Editor",
      link: "https://editor.raspberrypi.org",
      make: "A world you explore by typing, with the map stored in a dictionary.",
      code: "rooms = {\n    \"hall\": {\"desc\": \"A dusty hall. Doors lead north and east.\",\n             \"exits\": {\"north\": \"library\", \"east\": \"kitchen\"}},\n    \"library\": {\"desc\": \"Shelves of old books. A door leads south.\",\n                \"exits\": {\"south\": \"hall\"}},\n    \"kitchen\": {\"desc\": \"It smells of burnt toast. A door leads west.\",\n                \"exits\": {\"west\": \"hall\"}},\n}\n\ncurrent = \"hall\"\nwhile True:\n    print(rooms[current][\"desc\"])\n    move = input(\"> \").lower().strip()\n    if move == \"quit\":\n        break\n    if move in rooms[current][\"exits\"]:\n        current = rooms[current][\"exits\"][move]\n    else:\n        print(\"You can't go that way.\")",
      steps: [
        "Start a Python project and type in the starter code below.",
        "Run it and type <code>north</code>, <code>south</code>, <code>east</code> to explore.",
        "Add three rooms by changing only the data, not the loop."
      ],
      ideas: [
        "Add items, an inventory, and <code>take</code> / <code>drop</code> commands.",
        "Lock a door until the player finds the key.",
        "Add a goal, a move limit, or a wandering monster."
      ],
      stuck: "Print <code>rooms[current]</code> to see exactly what your program can see.",
      further: "Save and load games to a file, or load the map from JSON. A great NEA prototype."
    },
    {
      id: "fractals",
      level: "ks45",
      emoji: "🌳",
      colour: "#db2777",   // card colour: pink
      colourName: "pink",
      title: "Art",
      hook: "Grow a fractal tree with one recursive function.",
      tool: "Raspberry Pi Editor",
      link: "https://editor.raspberrypi.org",
      make: "A whole tree drawn by a function that calls itself.",
      code: "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.left(90)\nt.penup(); t.goto(0, -150); t.pendown()\n\ndef tree(length):\n    if length < 10:          # base case: stop\n        return\n    t.forward(length)\n    t.left(30)\n    tree(length * 0.7)       # left branch\n    t.right(60)\n    tree(length * 0.7)       # right branch\n    t.left(30)\n    t.backward(length)\n\ntree(100)",
      steps: [
        "Start a Python project and type in the starter code below.",
        "Change the angle, the <code>0.7</code> and the base case. Predict each change first.",
        "Remove the base case. What happens, and why?"
      ],
      ideas: [
        "Thinner, greener branches as they get shorter.",
        "Random angles so every tree is unique, then a forest.",
        "Try a Koch snowflake or Sierpinski triangle."
      ],
      stuck: "Trace it on paper with a length of 20. Only a few calls happen.",
      further: "Count the calls for different lengths: recursion and the call stack from H446. Then add Perlin noise in p5.js."
    },
    {
      id: "neural",
      level: "ks45",
      emoji: "🧠",
      colour: "#16a34a",   // card colour: green
      colourName: "green",
      title: "AI",
      hook: "Train a neural network, then trick a chatbot.",
      tool: "TensorFlow Playground",
      link: "https://playground.tensorflow.org",
      make: "A neural network you can watch learning, live.",
      steps: [
        "Pick the <b>circle</b> dataset and press <b>Play</b>. Watch the test loss fall.",
        "Switch to the <b>spiral</b>. It fails.",
        "Get the test loss under 0.1 by adding layers, neurons and input features."
      ],
      ideas: [
        "Find the smallest network that solves the spiral.",
        "Push the learning rate very high, then very low.",
        "Add noise and a huge network. Spot the overfitting.",
        "Then trick Gandalf into revealing a password at <a href=\"https://gandalf.lakera.ai\" target=\"_blank\" rel=\"noopener\">gandalf.lakera.ai</a>."
      ],
      stuck: "On the spiral, tick the sin(X1) and sin(X2) features.",
      further: "Why can't one layer solve XOR? Why is it so hard to make a chatbot keep a secret?"
    },
    {
      id: "strudel",
      level: "ks45",
      emoji: "🎧",
      colour: "#ca8a04",   // card colour: yellow
      colourName: "yellow",
      title: "Music",
      hook: "Live-code a beat and change it while it plays.",
      tool: "Strudel",
      link: "https://strudel.cc",
      make: "A drum beat and bassline you perform live. Headphones on.",
      steps: [
        "Delete the example and type <code>sound(\"bd sd [- bd] sd\")</code>.",
        "Press <b>Ctrl+Enter</b> to play. Change it and press Ctrl+Enter again. <b>Ctrl+.</b> stops it.",
        "Try <code>sound(\"bd*2, hh*8\")</code>, then add <code>.bank(\"RolandTR909\")</code> and <code>.cpm(40)</code>."
      ],
      ideas: [
        "Alternate bars with <code>sound(\"bd &lt;sd cp&gt;\")</code>.",
        "Add a melody with <code>note(\"c3 e3 g3 b3\").sound(\"sawtooth\")</code> and combine with <code>stack(...)</code>.",
        "Build a full track and perform it."
      ],
      stuck: "The Workshop on strudel.cc has examples you can play and edit.",
      further: "Every <code>.bank()</code> and <code>.cpm()</code> returns a new pattern. You're chaining functions."
    },
    {
      id: "ciphers",
      level: "ks45",
      emoji: "🔐",
      colour: "#27272a",   // card colour: black
      colourName: "black",
      title: "Puzzles & hacking",
      hook: "Crack secret messages and solve coding puzzles.",
      tool: "Raspberry Pi Editor",
      link: "https://editor.raspberrypi.org",
      make: "A program that cracks this message: ESP ECPLDFCP TD FYOPC ESP HSTEPMZLCO",
      code: "def shift_text(text, k):\n    out = \"\"\n    for ch in text.upper():\n        if ch.isalpha():\n            out += chr((ord(ch) - 65 + k) % 26 + 65)\n        else:\n            out += ch\n    return out\n\nsecret = \"ESP ECPLDFCP TD FYOPC ESP HSTEPMZLCO\"\nfor k in range(26):\n    print(k, shift_text(secret, -k))",
      steps: [
        "Start a Python project and type in the starter code below.",
        "Run the brute-force loop on the mystery message. Which shift gives English?",
        "Encrypt your own message and swap with a friend."
      ],
      ideas: [
        "Auto-crack it with frequency analysis: the most common letter is probably E.",
        "Crack a Vigenère cipher.",
        "Daily puzzles from 1 December at <a href=\"https://adventofcode.com\" target=\"_blank\" rel=\"noopener\">Advent of Code</a>.",
        "Hacking challenges at <a href=\"https://picoctf.org\" target=\"_blank\" rel=\"noopener\">picoCTF</a> (free account)."
      ],
      stuck: "<code>ord(\"A\")</code> is 65. Try <code>print(ord(\"C\") - 65)</code>.",
      further: "Why does frequency analysis beat Caesar but struggle with Vigenère? Encryption in J277 and H446."
    }
  ],

  // ---------- SHOWCASE: things members have made ----------
  // Use first names or initials only. Link is optional.
  showcase: [
    // { title: "Space Dodger", by: "Amira, Y8", flavour: "games", link: "https://arcade.makecode.com/...", note: "Dodge asteroids for 30 seconds." }
  ],

  // ---------- CHALLENGES: optional, for competitions ----------
  challenges: [
    { title: "Show & tell", text: "Bring anything you've made, finished or not, to our next show and tell.", due: "" }
  ]
};
