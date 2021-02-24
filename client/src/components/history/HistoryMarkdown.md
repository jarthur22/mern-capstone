# A Brief History of Javascript

## Just Javascript

The biggest evolutions came with the dawn of frameworks, but these are technically separate from Javascript itself. First we will look at the development of Javascript itself, and then move on to the meat and potatoes.

### It Started With ... Netscape?

Yeah, remember that browser? Me neither. Netscape was one of the leading web browsers in the early Internet of the 90s. In 1995, Netscape founder Marc Andreessen posited that the web should be more dynamic. He said that a small scripting language needed to be created that could interact with the DOM, but also be relatively simple to understand and implement. Java was a huge deal at the time, and Netscape wanted something that could be a companion to the capabilities of Java applets, but be more accessible to new developers.

Brendan Eich was contracted by Netscape to create this scripting language, and he did, though he did it with the tightest of schedules due to internal pressures to pick a language fast. He created the prototype of Javascript in weeks, called Mocha.

Because of the time crunch and the pressure to make it companion to Java, Mocha ended up looking a lot liek Java on the surface, but wildly different underneath the hood.

### Jumping on the Javascript Bandwagon

As is the norm with competition, when one competitor develops a new technology and changes the game, other competitors have to catch up. Microsoft came up with their own implementation of Javascript shortly thereafter, called JScript. It was almost the same, but not quite. Netscape rewrote its Javascript engine and renamed it SpiderMonkey, which became the name of the engine on Firefox.

### Standardization: ECMAScript

Javascript became too big to avoid standardization, in order to solve compatibility issues between its different implementations. Thus, ECMAScript was born. ECMA, an association dedicated to standardizing information and communications systems, succeeded in standardizing the scripting language, but due to trademark issues, could not call the modified language Javascript, and so it became ECMAScript. ECMAScript went through a few major updates that push its capabilities to greater heights over the years.

### Growing Pains

When ECMAScript version 3.1 and 4 were being developed, a split in the community emerged. Ideas to grow Javascript into something beyond Java, that could handle large-scale applications, were not well-received by the whole community. Because of this, ECMAScript 4 was severely delayed. However, when it did get released, it contained a plethora of robust new features, such as classes, packages, types, iterators, and array comprehensions. Adobe, Mozilla, Opera, Microsoft, and Yahoo all had a hand in developing this new standard. However, Microsoft was very reluctant to support the new standard, because they felt that Javascript was becoming too big.

Many wars were waged over ES4, and eventually, in 2008, it was completely scrapped. Instead, it was decided to start afresh from ES3.1 and develop the next iteration, which would become ES5.

### The Next Big Step

There were a few more strumbling blocks, but the next big update came with ES5, which added a ton of useful features to Javascript. New Object methods, high-order Array methods, JSON, Date methods, string modification methods, binding functions, etc. This new standard was fully adopted by major browsers by 2012.

### Javascript Becomes a Big Boy

Hard to believe that only 7 years after ES4 was scrapped for making JS too big, ES6 and ES7 would make it explode in size. ES6 came in 2015, and with it brought new features that made JS much more robust, such as arrow functions, classes, promises, iterators, spread syntax, module syntax, collections such as Map, proxies, and typed arrays. These not only improved Javascript, but made it able to handle programming at large. No longer was it a little helper for Java apps(which were largely dying off at this point). ES7, the most recent version, was a small update, but included some very useful additions.

### Async/Await

If you thought Javascript was lacking, once it got the ability to perform asynchronously, it had everything it needed. Javascript is a single-threaded language, meaning that, unlike Python and the like, which are made for intensive calculations, Javascript can only run one process at a time. Async/await allowed it to not only process multiple tasks without losing anything, but force asynchronous tasks to be synchronous. Now you can take a function that just "finishes whenever it wants and catches up later" and force it to finish before any subsequent code is executed.

### jQuery and the Frameworks

Now we get into the fun stuff. https://blog.bitsrc.io/a-brief-history-of-javascript-from-netscape-to-frameworks-74bf4774eeef