# Pomodoro Timer

![Device Showcase](https://github.com/reidycolm/MS2-Project/blob/master/assets/img/projectdisplay.png "Pomodoro Timer Responsive")

### View the live project [here.](https://reidycolm.github.io/MS2-Project/)

For my second project as a Code Institute student, I decided to make something that I would get everyday use out of. Since being introduced to the pomodoro technique, it has become my go to way to study. It's a very simple but effective method and I thought it would be cool to make my own. The technique is to work for a set period of time and then follow it with a small break. This trains your brain to focus intensely for short periods and promotes a state of flow. The break times help ensure you don't lose concentation during your work sessions. I'm really happy with how it turned out and no longer need any pomodoro apps on my phone. As I continue to learn more Javascript going forward, I feel like this is something I will continue to upgrade and add interesting features to. 

## User Experience (UX)

- #### User Goals

    1. I want a timer that allows me to edit the duration of the work and break sessions. It's important that I'm able to customize the lengths as sometimes I prefer my work sessions to be longer or shorter than the standard 25 minutes of a typical pomodoro.

    1. I want to be able to know how many work sessions I have completed while using the timer.

    1. I want a sound to play to notify me of the timer status so i don't have to be looking at the screen while I'm working to check if it's time for a break.

    1. I want there to be functionality to pause and reset the timer If my sessions are interrupted and I need to restart. However, I don't want to lose my completed sessions count if this were to occur.

- #### Developers Goals

    1. I want the user to be able to use the timer with no previous knowledge of what a pomodoro is.

    1. I want the user the to be able to choose a light or dark mode for the application. This is something I personally like to see on all software that I use.

    1. I want a pomodoro timer that is simple to use and minimalist in its design on all devices. I would like all the information that the user requires to be in front of them at all times and doesn't require scrolling or clicking onto another page.

- #### Design

    * **Colour Scheme:** I used the Port Gore colour as the main background and Crimson for the text. When I think of a pomodoro, this crimson red type colour always comes to mind. The font awesmoe icons as well as the actual timer itself is the Snow colour (except for the moon and sun which are gamboge as I felt they looked better reflecting their natural self). For the light mode theme, I used this same Snow colour as the background, kept the text Crimson red and used a standard Black colour for the icons and buttons so they were easily visable.

    * **Font:** The font used for this project is called Shippori Mincho B1. I played around with a few different styles but kept coming back to this one. I think it's very authentic style and fits in with the minimalist type of design I was going for.

    * **Icons:** I wanted every icon that I used to be self explanatory and be able to convey its intended purpose to the user. I feel like I accomplished this as you can easily tell what every button does without the need of actual text alongside it.

    * **Audio:** Two different sounds were used to help the user distinguish between work and break sessions. When a break is earned, a pleasant and relaxing bell sound can be heard. This is contrasted by a sudden "GONG" sound that plays when it is time to get back to work.

- #### Wireframes

    * [Large screen](assets/img/desktop-sketch.jpg)
    
    * [Small screen](assets/img/mobile-sketch.jpg)

## Features

-    **Custom Break & Work Durations** 
        - Buttons allow the user to choose how long they intend their break and work sessions to last. When the user increases or decreases the work duration, they will see it immediately reflected on the main timer underneath.

-    **Session Counter**
        - Allows for the user to track how many pomodoros they have done. The counter only increases if a full work session has been completed and will not change if the timer is reset before the session has finished. I thought this was important as previous pomodoro apps I have used always counted incomplete sessions and it was quite frustrating not knowing the true number.

-    **Dark/Light Mode** 
        - Toggler button allows the user to select their preferred theme for the application. Dark mode is the default but can be changed instantly.

-    **Sound Notifications** 
        - When a work session has finished, the user will be greeted by a gentle bell sound to notify them of their well deserved break. When it's time to start working again, they will hear a different "gong" sound. This feature allows the user to not have the application taking up screen space and instead cant just leave it running in the background.

-    **Start/Pause/Reset Timer Controls**
        - Clickable icons allow for the user to have full control over the timer. They are able to decide when exactly it begins counting down. If a user is interrupted during their work sessions, they also have the option to pause and reset the countdown. When the timer is paused, the number of exact mintues and seconds left on the timer are saved and visible to the user.

-    **Information Modal:** 
        - When the information icon is selected, a Bootstrap modal will appear. This will inform the user of what exactly a pomodoro is and give a brief discription of how it was invented.


## Technologies Used

- #### Languages

    * [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    * [CSS3](https://en.wikipedia.org/wiki/CSS)
    * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- #### Frameworks, Libraries and Other Tools

    * [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction)
        - Used to style webpage and ensure it was fully reponsive

    * [JQuery](https://jquery.com)
        - I used jQuery as the primary way to select the html elements in my Javascript functions. It also helped me handle user interation with the page in the form of event methods.

    * [Gitpod](https://gitpod.io/)
        -   Gitpod was the IDE I used when making this project

    * [Git](https://git-scm.com/)
        - Used for version control and allowed me to save my changes externally by committing to GitHub

    * [Github](https://github.com/)
        -  Was used to store files of the project that I had pushed using Git & Gitpod

    * [Font Awesome](https://fontawesome.com/)   
        - Site used to soruce icons for the webpage.

    * [Google Fonts](https://fonts.google.com/)   
        - Used to select font styles       

    * [Lighthouse](https://developers.google.com/web/tools/lighthouse)   
        - Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more. 

    * [FreeSound](https://freesound.org/)   
        - Site I used to source the audio notifications for this project.


## Testing

- #### Validators

    * **HTML**
        - [The W3C Markup Validator](assets/img/ms2html.png) was used to validate the HTML file of this project. No errors were found.

    * **CSS**
        - [The W3C CSS Validator](assets/img/ms2css.png) was used to validate the CSS file of this project. No errors were found.

    * **JavaScript**
        - [JsHint](assets/img/ms2jshint.png) was used to validate the HTML file of this project. No errors were found.    

- #### Lighthouse

    * [**Large Screen Devices Results**](assets/img/lighthouse-desktop.png)

    * [**Small Screen Devices Results**](assets/img/lighthouse-mobile.png)

- #### User Stories Testing    

    1. **I want a timer that allows me to edit the duration of the work and break sessions. It's important that I'm able to customize the lengths as sometimes I prefer my work sessions to be longer or shorter than the standard 25 minutes of a typical pomodoro.**
        - [Clickable plus and minus buttons](assets/img/adjustsessions.png) allow the user to select how long they would like each work session and break time to be.
    
    1. **I want to be able to know how many work sessions I have completed while using the timer.**
        - [The Session Counter](assets/img/counter.png) feature allows for the user to keep track of how many full pomodoros they have finished entirely.

    1. **I want a sound to play to notify me of the timer status so i don't have to be looking at the screen while I'm working to check if it's time for a break.**
        - A light bell sound is played to notify a user that their work session is complete. Once the break time has then finished, a different sound will then be played. This helpes the user enjoy the benefits of the timer without having to be checking the screen constantly.

    1. **I want there to be functionality to pause and reset the timer If my sessions are interrupted and I need to restart. However, I don't want to lose my completed sessions count if this were to occur.**
        - [The Control Icons](assets/img/controls.png) allow the user to start, pause and reset the timer by clicking on them. If the user resets the countdown, the session counter will not increase and it will not be counted as the countdown did not finish.

- #### Manual Testing (Repeated on various devices and browsers)

    *   **Break/Work Input**
        -  To pass this test, I neeeded to see if clicking the +/- buttons changed the work and break time correctly. 
        -  The result was a pass.

    *   **Timer**
        - To pass this test, I needed the ensure that the timer was counting down at a correct speed. I used a stopwatch to record how long it took for different time intervals to count down to zero. If both the timer and the stopwatch were the same, I could confirm the timer was correct.
        - The result was a pass.    

    *   **Session Counter**
        -  To pass this test, I had to confirm whether or not the session counter increased by 1 every time a work session had completed a full countdown. I also needed to make sure it didn't inrease by 1 when the timer was reset during a countdown.
        -  The result was a pass.

    *   **Theme Toggler**
        -  To pass this test, I had to make sure if the theme of the application changed when the toggler was moved. I aslo needed to see if the the theme reverted back to the dark mode when the toggler was moved back to its original default position.
        -  The result was a pass.

    *   **Icon Controls**
        -  To pass this test, I had to check if clicking the start/pause/reset/info icon would initiate the correct jQuery event. When the start icon was clicked, the timer would start. When pause was clicked, the timer would pause. When the reset icon was selected, the timer would return to the selected number of work session minutes. And when the info button was clicked, the modal would activate.
        -  The result was a pass.     

- #### Bugs

    * **Timer Controls**
        - When I first made the timer, I had it so the controls could be clicked when the timer was running. I soon realised that when the play icon was clicked while the countdown was ongoing, it would cause the timer not to work correctly. The same thing happened with the reset button. To fix this, I added a new class "diabale controls" which was added to the play and reset icon whenever the timer was running. This would ensure that those buttons could only be clicked when the timer was not counting down.

    * **There are no other known bugs at this time.**
## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://reidycolm.github.io/MS2-Project/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://reidycolm.github.io/MS2-Project/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://reidycolm.github.io/MS2-Project/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://reidycolm.github.io/MS2-Project/)
2. Under the repository name, click the "Code" button and a dropdown menu will appear.
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   The toggle button was made with the help of [this](https://www.youtube.com/watch?v=xodD0nw2veQ) video tutorial by Florin Pop.

-   [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/) Library and Documentation was used throughout the html file to make site responsive on all devices.

-   [This](https://www.youtube.com/watch?v=6c_GUNWU1Lw&t=234s) Pomodoro Timer tutorial was a useful source to get an understanding as to how to go about making the timer in the beginning although no code was directly copied.

-   [This](https://www.tutorialrepublic.com/faq/how-to-check-a-checkbox-is-checked-or-not-using-jquery.php) webpage in particlar helped when I was stuck trying to target the checkbox with a jQuery Event Method.

-   [This FreeCodeCamp](https://www.freecodecamp.org/news/how-i-built-my-pomodoro-clock-app-and-the-lessons-i-learned-along-the-way-51288983f5ee/) artilce was also very useful when I was trying to go about writing the JS code for the timer.
### Content

-   All content was written by the developer.

### Media

-   All Icons used were taken from Font Awesome.

- The audio used for the sound notifications were sources from FreeSound. [The Bell Sound](https://freesound.org/people/danyourmaster/sounds/433654/) and [The Gong Sound](https://freesound.org/people/InspectorJ/sounds/411576/).