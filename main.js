// switch

const button = document.querySelector(".switch");
const circle = document.querySelector(".circle");
let container = document.getElementById("container");
const title = document.querySelector(".title");
storyContainer = document.getElementById("story-container");
toggleMessage = document.querySelector(".toggle-message");


button.addEventListener("click", () => {
    let getRandomNumber = Math.floor(Math.random()*3);
    button.classList.toggle("active");
    circle.classList.toggle("active");
    title.classList.toggle("active");
    storyContainer.classList.toggle("active");
    toggleMessage.classList.toggle("active");

    if (button.classList.contains("active")) {
        container.style.backgroundColor = 'black';
    } else {
        container.style.backgroundColor = 'lightgray';
    };

    if (getRandomNumber === 0) {
        document.getElementById("story").innerHTML = storyOne;
        document.getElementById("story-title").innerHTML = storyOneTitle;
        document.getElementById("author").innerHTML = storyOneAuthor;
    } else if (getRandomNumber === 1){
        document.getElementById("story").innerHTML = storyTwo;
        document.getElementById("story-title").innerHTML = storyTwoTitle;
        document.getElementById("author").innerHTML = storyTwoAuthor;
    } else if (getRandomNumber === 2) {
        document.getElementById("story").innerHTML = storyThree;
        document.getElementById("story-title").innerHTML = storyThreeTitle;
        document.getElementById("author").innerHTML = storyThreeAuthor;
    }

});

// stories

let storyOne = `I was driving home after a long day at work.<br><br>

I blinked, and the next thing I knew, I was at home having dinner with my wife and 2 daughters.<br><br>

"What's wrong honey" she asked me.<br><br>

"I don't know. I just feel like I've forgotten something" I replied, confused.<br><br>

Forgot something? It was much worse than that, I had no memory of going home.<br><br>

I reassured her and spent the rest of the evening as normal, re-watching one of my favorite movies.<br><br>

Eventually, I dozed off in front of the sofa.<br><br>

I dreamt strange things.<br><br>

I saw myself at the age of 11, having a picnic with my parents. Except they weren't smiling and happy like I remembered them.<br><br>

Instead, they were sitting on the picnic blanket, staring into space, their faces closed and expressionless.<br><br>

No matter how much I shouted at them in my dream, I couldn't see any life left in them; it was as if they were there, without being there.<br><br>

I woke up in my bed, alone.<br><br>

I looked all over the house, but not only was my wife gone, so were my children.<br><br>

My cell phone line was dead, no service.<br><br>

I went outside to get my car and drive to work, thinking I'd try to call my wife a little later.<br><br>

There was no one on the road but me.<br><br>

It was as if the whole Earth had emptied out.<br><br>

I'd dismissed my amnesia last night, but I was seriously beginning to wonder if I was losing my mind.<br><br>

I was lost.<br><br>

I decided to go to my work to see if anyone was still in town, if a national evacuation drill was underway and could explain everything.<br><br>

Once there, I rushed back into the building, hoping to find someone who could explain what was going on.<br><br>

And when I opened the door, I was relieved to see that all my colleagues were there.<br><br>

At last, I could find out what was going on.<br><br>

I walked over to David, a colleague who over the years had become my best friend.<br><br>

"Hey David, what's going on? My family's disappeared and there's nobody left in town," I asked him.<br><br>

He didn't answer.<br><br>

"David?" I insisted.<br><br>

I stepped forward to face him, and discovered to my horror that his face and expression were exactly the same as my parents' in my dream.<br><br>

It couldn't be, was I trapped in a nightmare?<br><br>

I tried to talk to everyone, but they were all in the same state.<br><br>

My head hurt, my eyes hurt.<br><br>

I saw lights, and sounds filled my ears even though there was nothing here.<br><br>

Nothing alive.<br><br>

My vision began to narrow.<br><br>

Sounds began to blend together.<br><br>

Blackness.<br><br>

Emptiness.<br><br>

And finally, words I didn't have time to understand came to me for the last time.<br><br>

"My God, the other driver is dead for sure, his head was torn off by the impact."`;
let storyOneTitle = "I think I'm Losing My Head";
let storyOneAuthor = "Posted by S_G_Woodhouse";

let storyTwo = `I love my job but it's getting more difficult as hospitals close or as they shutter their maternity wards; it means long drives and nights out in the rural areas. Eastern Washington State is huge - it’s a 3 hour drive to tiny Garfield County from my home in Yakima.<br><br>

My husband and I have worked out a system for my “long deliveries” as we call them. If he’s not home when I dash out the door, I leave him both a handwritten note and a text, telling him exactly where I’m going and what time I’m leaving. Cell service is sketchy or nonexistent in places, and it’s a safety check for us.<br><br>

Tonight I got a call from a rancher in a very rural area; his wife was comfortable but progressing steadily, so I bundled into the car, despite the blowing snow. These long drives push me into introspection; I think about successful deliveries with healthy mothers and babies, and I think about the two that I’ve lost in my twenty years. Those two always live in my mind, mother and child. I still had nightmares.<br><br>

Three hours later, I knew I was lost. The phone was no help and kept steering me back to the interstate even though the ranch house was at least 20 miles off the highway. I peered through the blowing snow, desperately looking for road signs or landmarks. As I crept along, a herd of cattle materialized on the icy road, and I slammed on the brakes to avoid crashing into 30,000 pounds of bovine stupidity. The car skidded out of control and suddenly I found myself upside down off the roadside. The car must have rolled. I was dangling in my seatbelt and my now-cold coffee was dripping down my face.<br><br>

I panicked: phone! Phone! Where’s my phone?! How long had I been here? The car ticked as it cooled and my breath fogged from my mouth as I struggled to unsnap the seatbelt. It wouldn’t budge. I was stuck and getting cold. A cow peered in at me, its wet nose shining in the icy moonlight. Finally I spied my phone, wedged between the passenger seat and the console. I scrabbled for it, then called 911 but got no response. I must be out of range. I called my husband. No answer. Why would I get an answer from him if 911 didn’t answer? I didn’t know. Didn’t care. I kept calling. Kept getting no answer.<br><br>

An hour passed. Two. I was so cold. The phone battery was draining. My fingers were numb and thick with cold. My nose was an icicle. I could feel my body shutting down, trying to protect the core.<br><br>

Ice inside the car. Ice inside my body. Phone battery red. I dial 911 again without hope. And then I hear, glory of glories, “Nine one one, what’s your emergency?” I nearly sobbed as I stammered out my predicament. The young woman on the line was bright and calm, and reassuring. A wave of relief washed over me. She asked my name, and responded cheerfully, “Oh Mrs. Nelson? Beth Nelson? This is Jessie Mae Baxter! You remember me, don’t you? Well don’t you worry, Beth, we’re coming for you.”<br><br>

I closed my eyes and moaned. Jessie May Baxter. The mother I had lost.`;
let storyTwoTitle = "Doula";
let storyTwoAuthor = "Posted by OryxTempel";

let storyThree = `It was the first time I spent a night in the hospital. I was so stressed about my thesis that my gastritis got me hospitalised. I was assigned to a rather quiet 8-bed room, with only 2 other patients staying here. Both of them were at the end of the room, so I can enjoy my silence bother-free. After a nice shower, I took my sleeping pills, and waited for the effect.<br><br>

I am sensitive to sounds and noises, so when I was half asleep and heard clear footsteps by someone wearing heels over and over again, I was really irritated. I had no idea who’s walking around at this time in heels, and did not appreciate whatever was going on outside. So I jumped off my bed and pulled the curtain. The moment I saw the room and the corridor, I instantly regretted my decision.<br><br>

There was nobody out there walking around.<br><br>

Click, clack. Click, clack. CLICK, CLACK.<br><br>

The footsteps seemed to have stopped in front of me.<br><br>

I had no idea what’s going on. My instinct told me to pull back the curtain and pretend nothing had ever happened, so I immediately did so. I curled up in my bed, blanket covering my head, my eyes closed, quietly mumbling “please don’t”. I didn’t even know whom, or what, I was repeating to.<br><br>

CLICK, CLACK. Click, clack. Click, clack…<br><br>

After some time, maybe a minute, maybe an hour, the footsteps finally went away and vanished in the air.<br><br>

I had no idea what happened afterwards, since the sleeping pills cut off my mind and I fell asleep. But I do remember in the middle of the night, a nurse came to check my blood measure. I was too sleepy to talk, but I did say “thank you”. She didn’t reply, just giggled.<br><br>

Click, clack…<br><br>

In the morning after I woke up, a nurse came to check my status again. It’s a bit awkward to not say anything, so I just randomly asked, “who measured my blood pressure earlier? At maybe 2 or 3 in the morning?”<br><br>

The nurse looked at me, very confused, “we don’t measure patients’ at this period of time, coz they’re usually asleep. We don’t want to really bother them.”<br><br>

Click, clack…<br><br>

I heard a giggle.`;
let storyThreeTitle = "Who Measured My Blood Pressure?";
let storyThreeAuthor = "Posted by CaramelisedCamel";