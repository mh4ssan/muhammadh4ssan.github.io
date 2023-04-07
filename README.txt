Purpose:

The purpose of this assignment was to display my current career aspirations through a website. In order to this, a total of 4 webpages will be
reused from assignment 1, which are index.html,photography.html,music.html and education.html. Additionally, 5 CSS files were made called index.css,
photography.css, music.css, education.css and global.css. I will now walk through the key functions of each webpage. After the functions are explained,
I will give the location for the different types of selectors that were used.


On all webpages, on lines 14-21, four anchor tags(<a></a>) were used to create a styled functioning navigation bar, which was centered to the top middle of the website using the 
following css code in global.css, which results in a light blue navigation bar with white buttons and a logo at the top left of the page:

* {
    color: #253237;
    font-family: Calibri;
}

body {
    margin: 0;
    padding: 0;
    background: #C2DFE3;
}

.top {
    margin: 0;
    height:80px;
    background-color: #253237 ;
    display: flex;
    justify-content: flex-end;
}

#navbar {
    margin-top:0;
    display: flex;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    background-color:#9DB4C0;
}

#navtext {
    word-spacing: 70px;
    font-size: 30px;
}

h1 > a {
    color: whitesmoke;
    text-decoration: none;
}

a:hover {
    color: black;
}

a:active {
    color: lightblue;
}

#logo {
    height: 150px;
    width: 150px;
    position: absolute;
    margin-bottom: 450px;
}

	


index.html:

- On line 34, an anchor tag was used to make the text 'Dalhousie University' open a external link, that was of Dalhousie Univerity's offical website. 
  The colour of the text was changed using the following css code in index.css:

a[target="_blank"] {
    color:lightseagreen;
    text-decoration: none;
}
	
- On line 29, the <img> tag was used to implement a picture of myself in the website, which was positioned slightly away from left margin of the webpage 
  using the following css code in index.css:

.lake {
    position: absolute;
    margin-right: 60%;
    padding: 0;
    border: 2px solid black;
}

- On lines 41 and 45, two anchor tags were used with images in them so that they could be clickable images that can lead users to my contact information.
  These tags were positioned to be under the main paragraph using the follow css code:

.insta {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 420px;
    margin-left: 18%;
}

.mail {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 420px;
    margin-left: 30%;
}




photography.html:


-On lines 32-39, an unordered list was implemented to list off a series of locations that were relevant to the webpage. This list was styled
using the following css code from photography.css:

ul{
    list-style: none;
    padding: 0;
    margin-left:480px;
    margin-top: 600px;
    color: #253237;
    font-size: 20px;
}

ul > li{
    padding: 10px;
    margin-bottom: 5px;
    background-color: #9DB4C0;
    border-radius: 5px;
    box-shadow: 1px 1px 5px black;
}


-On line 44-62, 6 images and 2 videos were implemented using the <img> tag and <video> tag. Each image and video was centered on the webpage, 
and both videos had the controls option and were muted automatically, to prevent unwanted noise (wind) which were in the videos. These 
files were positioned using a grid with the following css code:

.grid{
    margin-top: 500px;
    justify-items: center;
    align-items: center;
    align-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
}

.grid img, video{
    border:2px solid black;
    height: 378px;
    width: 504px;
    margin-bottom: 50px;
}




music.html:


- On line 29, an image of a musical note is implemented using <img>, as well as positioned and styled using the following css code from music.css:

.interest img{
    margin-top:0;
    margin-right: 60%;
    padding: 1px;
    border: 2px solid black;
}



- On line 38, an image of a musician is implemented and centered using <img> and positioned using the following css code:

.jcole-image-cell + .jcole-cell p{
    font-size: 22px;
}


- On line 47, an youtube video that showcased a musicans song is implemented and centered using <iframe> tag and <center>. The video has a width of 560 pixels and 
a height of 315 pixels.The video has control options, and was implemented so that users could get to know the musician in question. This video was styled
and positioned using the following css code:

.jcole-cell iframe{
    border:4px solid black;
    display: block;
    margin: 0 auto;
}




- On line 68, an image of a second musician is implemented using <img> and positioned/styled using the following css code:

.metro-image-cell{
    border:4px solid black;
    padding: 1px;
}



- On line 75, an youtube video that showcased a video of a tutorial on producing by a producer is implemented and centered using <iframe> tag and <center>. The video has a width of 521 pixels and 
a height of 400 pixels.The video has control options, and was implemented so that users could get an idea of how I got into producing and learned it. This video was positioned and styled using 
the following css code:

.metro-cell iframe{
    border:4px solid black;
    display: block;
    margin: 0 auto;
}



- On line 89, an audio file is implemented using the <audio> tag. This audio is a short clip of a beat I have produced, and it was implemented on the website 
in order to allow users to familiarize themselves with my style. The audio file is positioned and styled by the following css code:

.experience audio{
    padding: 20px;
    width: 500px;
    position: absolute;
    margin-left: 5%;
    margin-top:320px;
}


- On lines 90-94, a form was created to get user feedback about the audio file. The form has two input tags, one for the user to type in their answer, and the other one for
  the submit button. The form was positioned and styled using the following code:

.experience form{
    font-size: 30px;
    position: absolute;
    margin-left: 150px;
    margin-top: 470px;
}




education.html:

-On line 27, an image of Halifax West High School is implemented using <img> tag, and this was done so that users can get an idea of what the high school I went to looked like.
 This image was positioned and styled using the following css code from education.css:

.west {
    position: absolute;
    margin-bottom:0;
    margin-right: 60%;
    padding: 1px;
    border: 2px solid black;
    width: 600px;
    height: 500px;
}

- On lines 30-53, an ordered list with a nested ordered list is implemented. This is done so that users can see which courses I took in both grade 11 and grade 12, with the courses 
  being in exact order. This list wast styled and positioned in such a way that the list items are displayed horizontally with colour using the following css code:

.list ol {
    margin-left: 350px;

}

.list ol li {
    margin-bottom: 5px;
    background-color: #9DB4C0;
    box-shadow: 1px 1px 5px black;
    position: relative;
    border-radius: 5px;
    padding: 10px;
    display: inline-block;
    vertical-align: top;
}



- On line 60, an image of Dalhousie University is implemented using <img> tag, and this was done so that users can see a visual representation of my University. This image
was positioned and styled with border and padding using the following code:

.university img {
    padding: 2px;
    border: 2px solid black;
    height: 500px;
    width:600px;
    position: absolute;
    margin-left:70px;
}


- On lines 62-79, an unordered list with a nested unordered list is implemented so that users can see the courses I have taken in both my Fall and Winter semesters during my 
  first year of university in no particular order. This list was styled and positioned in such a way that the list items are displayed horizontally with colour using the 
following code:

.list2 {
    list-style: none;
    font-size: 20px;
    position: absolute;
    margin-top: 150px;
    margin-left: 800px;
    padding-bottom: 200px;
}

.list2 ul li {
    margin-bottom: 5px;
    background-color: #9DB4C0;
    box-shadow: 1px 1px 5px black;
    position: relative;
    border-radius: 5px;
    padding: 10px;
    display: inline-block;
    vertical-align: top;
}


Location of selectors that were used:

- Universal selector: The universal selector can be found at the top of every stylesheet used, the 
  universal selector was used to keep the font and color of the web pages consistent. This is the
  snippet used for the universal selector
* {
   color: #253237;
   font-family: Calibri;
}

- Multiple selector: The multiple selector was used for the photography.css stylesheet to format
  the images and videos in a consistent format. This is the code snippet: 

.grid img, video{
    border:2px solid black;
    height: 378px;
    width: 504px;
    margin-bottom: 50px;
}

- Child selector: The child selector was used for the global.css stylesheet to ensure that the text colour
  for the <a> tags in the navigation bar was changed to the colour white, and no other <a> tags are affected.
  This is the code snippet:

h1 > a {
    color: whitesmoke;
    text-decoration: none;
}


- Sibling selector: The sibling selector was used for the index.css stylesheet to ensure that the styling done
  to one of the paragraphs was changed as it shared the same parent element. This is the code snippet:

h1 ~ p {
    font-size: 25px;
    margin-left: 600px;
    max-width: 50%;
    position: absolute;
    text-align: left;
}


- Adjacent sibling selector: The adjacent sibling selector was used for the music.css stylesheet to ensure 
  that the paragraph in the <td> tag had a certain font. This is the code snippet:

.metro-title + .metro-cell p{
    font-size: 25px;
}


- Attribute selector: The attribute selector was used for the index.css stylesheet to ensure that all <a> tags
  with the "_blank" target value were changed to a certain colour. This is the code snippet:

a[target="_blank"] {
    color:lightseagreen;
    text-decoration: none;
}

- Pseudo element selector: The pseudo element selector was used in the index.css stylesheet to ensure that the
  first letter of the paragraph was bolded. This is the code snippet:

p::first-letter {
    font-weight: bolder;
}

 




























References:

- [1] J. Cole. 2021. Apparently. Video. (14 Dec, 2021). Retrieved February 7, 2023 from https://www.youtube.com/watch?v=98j39T5mrAk
- [2] FL STUDIO by Image-Line Software. METRO BOOMIN | Beats Tutorial | FL Studio & Razer Music. 2015. Video. (9 Oct, 2015). Retrieved February 7, 2023 from https://www.youtube.com/watch?v=Av4NhUWQ-24
- [3] Dewayne Spangler. 2021. Pinterest. Retrieved February 7, 2023 from https://www.pinterest.ca/pin/841188036625842594/
- [4] Zoe Haylock. 2021. J. Cole’s New Album The Off-Season Features 21 Savage, Lil Baby, and More. Vulture. Retrieved February 7, 2023 from https://www.vulture.com/2021/05/j-cole-drops-new-album-the-off-season-listen.html
- [5] Fact. 2015. Watch Metro Boomin show you how to make a massive 808 drum track. Factmag. Retrieved February 7, 2023 from https://www.factmag.com/2015/10/05/watch-metro-boomin-make-a-beat/
- [6] Chris Stoodly. 2021. Teachers' union calls out province, Halifax education centre on staff changes at local schools. CityNews. Retrieved February 7, 2023 from https://halifax.citynews.ca/local-news/teachers-union-calls-out-province-halifax-education-centre-on-staff-changes-at-local-schools-3805205
- [7] Maryanne McLarty. 2022. Dalhousie University confirms Jan. 31 resumption of in-person classes. The Signal. Retrieved February 7, 2023 from https://signalhfx.ca/dalhousie-university-confirms-jan-31-resumption-of-in-person-classes/
