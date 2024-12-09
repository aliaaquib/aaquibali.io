---
title: 'My Journey in Sudan’s Technocrats'
date: 2022-05-23
hidden: false
heroURL: ./src/site/images/emotive-conjugation/hero.png
thumbnail: /images/emotive-conjugation/social.jpg
description: 'Exploring attribution bias, GPT-3, and ancient pickling techniques'
---

<style>
    .post {
        --pickle: #959e00;
    }
    .emotive-gpt-3 {
        padding: 0;
        margin: 0;
    }
    @media all and (min-width: 430px) {
        .emotive-gpt-3 { padding-left: 3rem; }
    }
    .emotive-gpt-3 p{
        font-style: italic;
        font-size: 1.75rem;
    }
    .emotive-gpt-3-legend {
        font-style: italic;
    }
    .emotive-gpt-3 em,
    .emotive-gpt-3-legend em {
        font-weight: 600;
        color: var(--pickle);
    }
    :is(.emotive-gpt-3 em, .emotive-gpt-3-legend em):before {
        /* content: '🥒 '; */
    }
    .emotive-rant{
        transition: 1s all;
        opacity: 1;
    }
    .emotive-rant--hidden{
        display: none;
        opacity: 0;
        visibility: hidden;
    }
    .emotive-rant__cta{
        appearance: none;
        background: none;
        border: none;
        color: var(--color-text);
        font-weight: 600;
        cursor: pointer;
    font-style: italic;
    text-decoration: underline;
    }
    .emotive-rant__cta:hover,
    .emotive-rant__cta:active { color: var(--color-link); }
    @media all and (min-width: 700px) {
        .post__content .post__quote--pickled {
            position: relative;
            margin-left: 0;
            padding-left: 11rem;
        }
        .post__content .post__quote--pickled:after{
            content: '';
            background-position: 0 bottom;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url('/images/emotive-conjugation/quote-bg.png');
            bottom: 0;
            height: 100%;
            left: 0;
            position: absolute;
            width: 10rem;
            z-index: -1;
        }
    }
</style>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const el = document.querySelector('.emotive-rant__cta')
       el.onclick=()=>{
           el.remove()
           document.querySelector('.emotive-rant').classList.remove('emotive-rant--hidden')
       } 
    })
</script>

> When I was in High School , I took part in auditions of various co-curricular activities and other activities also.

ne day one of my friend told me about a Bootcamp on Web-Development which is organized by Sudan’s Technocrats , He told me to register in the Bootcamp. He also told me that they select only 100 students out of all the registration they get. When i I hear that i was slightly upstate , finally i register in the program.

On 27th April, There was an email notification — “Congratulations Web Development Scholarship Winner || Sudan’s Technocrats Foundation”. The feelings at that moment can’t be expressed in words. It was really unexpected. I read the email it has some general information regarding classes , task , projects and certificate too.

{%
    picture
    '/images/emotive-conjugation/reasons-pickles-were-forgotten.png',
    'A comic strip describing the reasons why the main character forgot to buy pickles for dinner. "I was busy" says the main character. "You were distracted". "He is just an idiot"'
%}

This was the first opportunity, I got and that I executed. The Bootcamp began from 2nd May ~ an introduction ceremony session held with our mentors( Smile Gupta , Mohit , Hack The Mountain and so on. The Bootcamp was about 15–20 days long.

| In this Bootcamp we will learn about basics of HTML , CSS and JAVASCRIPT .

The first class of Bootcamp is about basic of HTML. Our Mentor ( Smile Gupta mam ) made us familiar with that. They also told about various platform for practices suck as Codepen , replit and many more…

| The part that took me in trouble was JavaScript , but i overcome this with continuously practicing and completing the task.

### Examples improved

> Finally the day come when we have to submit our final projects.

Our mentor Smile Gupta mam give as references for projects. I was slightly trouble in selecting the final project - after taking time on each and every references which was given by our mentor , finally i select a project based on a music player . I submit my project on Git-hub .

Overall, it was a great experience. Hope , such more opportunities will come…🙃

See you soon!

---