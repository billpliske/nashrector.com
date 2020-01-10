# Website for NashRector.com

-   Hooks/carousel idea: https://codesandbox.io/s/31228l0rnm?from-embed
-   -   Need a skip to invitation button

## animating slides

-   http://css3.bradshawenterprises.com/cfimg/
- https://codesandbox.io/s/carousel-using-usestep-in-alpha3-rhh-demo-b446k

For "n" images You must define:
a=presentation time for one image
b=duration for cross fading
Total animation-duration is of course t=(a+b)\*n

animation-delay = t/n or = a+b

Percentage for keyframes:

0%
a/t*100%
(a+b)/t*100% = 1/n*100%
100%-(b/t*100%)
100%

---

#cf3 img {
animation-name: fadeInOut;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
animation-duration: 10s;
animation-direction: alternate;
}

@keyframes fadeInOut {
0% {
opacity:1;
}
17% {
opacity:1;
}
25% {
opacity:0;
}
92% {
opacity:0;
}
100% {
opacity:1;
}
}

#cf4a img:nth-of-type(1) {
animation-delay: 6s;
}
#cf4a img:nth-of-type(2) {
animation-delay: 4s;
}
#cf4a img:nth-of-type(3) {
animation-delay: 2s;
}
#cf4a img:nth-of-type(4) {
animation-delay: 0;
}
