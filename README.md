# caritobd91.github.io

## Description
```
This is my personal portfolio. It contains my contact information, a brief story of myself and a link to my projects on github.
```

## Custom CSS Classes
```
.main-nav and mobile-nav
These classes style the navigation menu for desktop and mobile. Mobile-nav displays block, 100% width of the page and is activated when the hamburger menu is clicked, in desktop this navigation has diplay: none so that my main navigation shows up below the lockup.

.content-box
This is a very important class because it alows me to style all pages with just this one class so I dont have to repeat code. All pages have the same base for styling is why I created this class.

The pages itslef also have their own classes such as "contact", "work", etc. I created these to give them certain style properties that are more specific and arent shared by all content-box classes. Also, i used these classes to select the pages with jQuerry in certain instances.
```

## JavaScrip Functions
```
I created several functions.
One of them uses a variable named "width", which checks for the window width, and if the size is higher than 580 pixels, which is the threshold for mobile in css, then the mobile-nav does not show (display: none). This means that the mobile-nav will only show if the window size is only less than 580px. 

I also created a function to allow scrolling to each section on the page in mobile when the mobile-nav is clicked. This way, when  the user clicks on the hamburger icon they can click on any hyperlink and it will go straight to that section by smoothly scrolling to it. This function is on line 17. The variable stored in line 19 is for reusability. It allows the javascript to store the classname of the hyperlink that is clicked, and then navigate to the section of the page using the similarly named id.
```

