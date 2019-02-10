##HW-3 Overview
#Alongside the video tutorials.
 I checked my accuracy via pushing the tutorial portion to
to GitHub and then viewing the live site. I noticed that because we are using an
html file without the index prefix that the live site goes to the readme.md page
instead. The full path needs to include the ending ValueDataType.html tag in order
for that webpage to be displayed. I also learned that tabbing helps match up
misspell words in the heat of the moment, and makes for more to fix in the long run
because I used misspelled variables more than once. Also: case matters.

#Homework assignment issues and how I managed them:
ISSUE GETTING AN IMAGE TO WORK WITH DOCUMENT.WRITE:
 I could not add a background image because it might cover over the document.write.
Attempting to use the hero-image format from HW-1 did the same, but looked better by
comparison to the full-screen background. At first, I could not  get the hero-image
to show up because I forgot to keep the entirety of the style.css file that I imported
from HW-1 and thus forgot to add the first few lines of code that included the text:
body and html. Re-adding those lines made the image work, BUT that is when I lost my
document.write because I thought it was hiding behind the image again. Resizing
did not work. Moving the image/ the background/ the position/ did not work.
WHAT DID WORK:
 While inspecting the live site, the console errors informed me that I was missing an
input ending. That ending was the end curly bracket in my script.js file. I was fixing
the document.write previously and must have deleted it sometime around getting the
style.css page to work.
THE TAKEAWAY:
 Now both my script.js and style.css pages are working the way they were supposed to.



#Live Site:
[HW-3](https://ewilsey.github.io/MART441/HW-3/)
