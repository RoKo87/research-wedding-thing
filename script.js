import config from './config.js';
var vn;

export function loading() {
    rand()
    startLiveUpdate()
    console.log(config.address);
    document.getElementById('addy').textContent = config.address;
    randVows()
}

function rand() {
    return Math.floor(Math.random() * 4);  // Generates a random number from 0 to 3
}

export function randVows() {
    vn = Math.floor(Math.random() * 16);  // Generates a random number from 0 to 15
    document.getElementById('gentxt').textContent = vows[vn];
    document.getElementById('whotxt').textContent = "???";
}

export function revAns() {
    if (vn <= 7) {
        document.getElementById('whotxt').textContent = "AI";
    } else {
        document.getElementById('whotxt').textContent = "HUMAN";
    }
}

var images = [];

var vows = [ //there are 16 of them, 8 are ai and 8 are human
    //the ai
    "I promise to honor and cherish our quest for truth, always seeking clarity in a world of algorithms and pixels, as we explore the boundaries of authenticity together.",
    "I vow to navigate the complexities of creation and detection, forging a bond between the real and the imagined with every test we undertake.",
    "In the name of discovery, I pledge to embrace the challenge of deciphering the artificial, never wavering in my commitment to unveil the unseen.",
    "I promise to share in the joy of knowledge, as we dive into the depths of perception and understanding, always pushing the limits of our curiosity.",
    "I pledge to keep an open mind and a critical eye, diligently testing hypotheses while celebrating the beauty of discovery in every data point we encounter.",
    "Together, we will celebrate the nuances of human insight, forging a path toward enlightenment in a world where the lines between reality and simulation blur.",
    "In our research endeavors, I promise to share the triumphs and setbacks alike, knowing that every challenge we face will deepen our understanding of the digital landscape.",
    "As we embark on this journey, I vow to honor our shared purpose, fostering a connection that inspires others to question and discern in the age of AI.",

    //the human
    "I promise to advance our collective knowledge and capabalities, as we delve into the wonderful intricacy that is artificial intelligence, together.",
    "I vow to always remain faithful to you and to the task that is laid in front of us. As we tread this journey together, we shall prevail with new findings in our hands.",
    "I promise to quantiatively and qualitatively inquire and seek to understand the depths of knowledge about artificial intelligence, as research is never-ending.",
    "As we gather data from our participants, I vow to remember to bracket and not let mere preconceived believes interfere and intervene in our thoughtful processes.",
    "I am committed to hold the key principles of ethical researches at the forefront of our collaborative minds through each step of the research journey that we shall endeavor.",
    "In honor of the great minds before us, I promise that we shall provide meaningful insight about our data, rather than superficially summarizing our data.",
    "I vow to keep on questioning wherever we find ourselves in order to be acquainted with the topic laid in myriads of research paper and studies.",
    "Together, we shall endure and stay committed to the research questions and goals, interpreting data collection with knowledge gained before.",
];



function secondsSinceTargetDate() {
    const targetDate = new Date('2024-09-30T08:50:00');
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const differenceInMillis = currentDate - targetDate;
  
    // Convert milliseconds to seconds
    const differenceInSeconds = Math.floor(differenceInMillis / 1000);
  
   // Update the span element to display the result
  const secmarElement = document.getElementById('secmar');
  secmarElement.textContent = differenceInSeconds;
  }

  function startLiveUpdate() {
    secondsSinceTargetDate(); // Call initially to set the value
    setInterval(secondsSinceTargetDate, 1000); // Update every 1000 milliseconds (1 second)
  }

