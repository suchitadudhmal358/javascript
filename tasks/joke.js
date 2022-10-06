let joke = document.getElementById("joke");
let btn = document.getElementById("btn");

let arOfJokes = [
  `टीचर- एक औरत एक घंटे मे 50 रोटी बना लेती है, तो तीन औरतें एक घंटे में कितनी रोटी बनाएंगी
.बच्चा- एक भी नही, क्योंकि तीनों मिलकर सिर्फ चुगली करेंगी...!
.बच्चे की बात सुनकर टीचर अभी तक बेहोश है...`,
  `वकील - हत्या की रात तुम्हारे पति के अंतिम शब्द?
  .
  पत्नी - मेरा चश्मा कहां है संगीता...?
  .
  वकील - तो इसमें मारने वाली क्या बात थी...?
  .
  पत्नी - मेरा नाम रंजना है!
  .
  पूरा कोर्ट खामोश...`,
  `
  यमराज (औरत से) - चलो, मैं तुम्हें लेने आया हूं।
  .
  औरत - बस दो मिनट दे दो।
  .
  यमराज - दो मिनट में ऐसा क्या कर लोगी...?
  .
  औरत - फेसबुक पर स्टेटस डालना है, 'Traveling to yamlok'!
  .
  यह सुनकर यमराज ही हो गए बेहोश...!!!`,
  `लडका : मैं उस लडकी से शादी करुंगा,
  जो मेहनती हो,
  सादगी से रहती हो,
  घर को संवारकर रखती हो,
  आज्ञाकारी हो।
  प्रेमिका: मेरे घर आ जाना,
  ये सारे गुण मेरी नौकरानी में है`,
  `एक भिखारी को 100 का नोट मिला
  वो फाइव स्टार होटेल में गया और भरपेट खाना खाया
  1500 रुपये का बिल आया, उसने मेनेजर से कहा, पैसे तो नहीं है
  मैनेजर ने पुलिस के हवाले कर दिया
  भिखारी ने पुलिस को 100 का नोट दिया, और छूट गया
  इसे कहते हैं...
  फाइनेन्सियल मैनेजमेन्ट विदाउट एमबीए इन इंडिया`,
  `ये वो दौर है जनाब
  जहां इंसान गिर जाये तो
  हँसी निकल जाती है
  और मोबाईल गिर जाये तो
  जान निकल जाती है`,
  `One of the oddities of Wall Street is that it is the dealer and not the customer who is called broker`,
  `Two Hollywood stars ran into each other at the door of their psychiatrist’s office.

  “Hello, there,” said one. “Are you coming or going?”
  
  “If I knew that,” said the other, “I wouldn’t be here.”`,
  `At a party, a young wife admonished her husband, “That’s the fourth time you’ve gone back for ice cream and cake. Doesn’t it embarrass you?”

  “Why should it?” answered her spouse. “I keep telling them it’s for you.”
  
  `,
  `A grasshopper walks into a bar. The bartender looks at him and says, “Hey, they named a drink after you!”

  “Really?” replies the grasshopper. “There’s a drink named Stan?”`,
];

btn.addEventListener("click", function (e) {
  let i = Math.floor(Math.random() * 10);

  let getJoke = arOfJokes[i];

  joke.innerHTML = getJoke;
});
//   let getJoke = a[i];
//   joke.innerHTML = getJoke;
