# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*


### Screenshot

![Mobile-View](./screenshots/Mobile-View.png)

![Desktop-View](./screenshots/Desktop-View.png)

![Desktop-View-Activd](./screenshots/Desktop-View-Active.png)


### Links

- Solution URL: (https://github.com/Jack-OC/Intro-Component-SignUp-Form)
- Live Site URL: (https://jack-oc.github.io/Intro-Component-SignUp-Form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

This was another good challenge to learn more about building webpages based on pre-made designs using HTML and CSS. To complete this challenge I hade to learn more about using HTML forms to collect the users input information and then to use Javascript to verify that the inputs weren't empty and that a correctly formatted email adress was submitted by the user. A form is an element that collects input data using various input types such as text, numbers, email, password and buttons. As this challenge is about a company asking users to sign up for a free trial of their service, the input type was a first and last name, their email and a password. In JS I used a regular expression (Regex) to reify the inputted email. A Regex is an expresion used to find and or locate patterns in a string. I used a Regex to verify a correctly formatted email address which if was false would display a error message and icon to let the user know what they have inputted to the form is incorrect. Learning about forms and Regex was very useful and I will learn more about their uses in other challenges.
