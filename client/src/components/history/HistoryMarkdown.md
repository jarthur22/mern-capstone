# A Brief History of Javascript
##### by [Jacob Arthur](/about)

## Just Javascript

The biggest evolutions came with the dawn of frameworks, but these are technically separate from Javascript itself. First we will look at the development of Javascript itself, and then move on to the meat and potatoes.

#### It Started With ... Netscape?

Yeah, remember that browser? Me neither. Netscape was one of the leading web browsers in the early Internet of the 90s. In 1995, Netscape founder Marc Andreessen posited that the web should be more dynamic. He said that a small scripting language needed to be created that could interact with the DOM, but also be relatively simple to understand and implement. Java was a huge deal at the time, and Netscape wanted something that could be a companion to the capabilities of Java applets, but be more accessible to new developers.

Brendan Eich was contracted by Netscape to create this scripting language, and he did, though he did it with the tightest of schedules due to internal pressures to pick a language fast. He created the prototype of Javascript in weeks, called Mocha.

Because of the time crunch and the pressure to make it companion to Java, Mocha ended up looking a lot liek Java on the surface, but wildly different underneath the hood.

#### Jumping on the Javascript Bandwagon

As is the norm with competition, when one competitor develops a new technology and changes the game, other competitors have to catch up. Microsoft came up with their own implementation of Javascript shortly thereafter, called JScript. It was almost the same, but not quite. Netscape rewrote its Javascript engine and renamed it SpiderMonkey, which became the name of the engine on Firefox.

#### Standardization: ECMAScript

Javascript became too big to avoid standardization, in order to solve compatibility issues between its different implementations. Thus, ECMAScript was born. ECMA, an association dedicated to standardizing information and communications systems, succeeded in standardizing the scripting language, but due to trademark issues, could not call the modified language Javascript, and so it became ECMAScript. ECMAScript went through a few major updates that push its capabilities to greater heights over the years.

#### Growing Pains

When ECMAScript version 3.1 and 4 were being developed, a split in the community emerged. Ideas to grow Javascript into something beyond Java, that could handle large-scale applications, were not well-received by the whole community. Because of this, ECMAScript 4 was severely delayed. However, when it did get released, it contained a plethora of robust new features, such as classes, packages, types, iterators, and array comprehensions. Adobe, Mozilla, Opera, Microsoft, and Yahoo all had a hand in developing this new standard. However, Microsoft was very reluctant to support the new standard, because they felt that Javascript was becoming too big.

Many wars were waged over ES4, and eventually, in 2008, it was completely scrapped. Instead, it was decided to start afresh from ES3.1 and develop the next iteration, which would become ES5.

#### The Next Big Step

There were a few more strumbling blocks, but the next big update came with ES5, which added a ton of useful features to Javascript. New Object methods, high-order Array methods, JSON, Date methods, string modification methods, binding functions, etc. This new standard was fully adopted by major browsers by 2012.

#### Javascript Becomes a Big Boy

Hard to believe that only 7 years after ES4 was scrapped for making JS too big, ES6 and ES7 would make it explode in size. ES6 came in 2015, and with it brought new features that made JS much more robust, such as arrow functions, classes, promises, iterators, spread syntax, module syntax, collections such as Map, proxies, and typed arrays. These not only improved Javascript, but made it able to handle programming at large. No longer was it a little helper for Java apps(which were largely dying off at this point). ES7, the most recent version, was a small update, but included some very useful additions.

#### Async/Await

If you thought Javascript was lacking, once it got the ability to perform asynchronously, it had everything it needed. Javascript is a single-threaded language, meaning that, unlike Python and the like, which are made for intensive calculations, Javascript can only run one process at a time. Async/await allowed it to not only process multiple tasks without losing anything, but force asynchronous tasks to be synchronous. Now you can take a function that just "finishes whenever it wants and catches up later" and force it to finish before any subsequent code is executed.

## jQuery, Frameworks, Libraries

Now we get into the fun stuff. Modern Javascript web development is way more than just plain old JS... its all about the frameworks and libraries! After all, it takes a huge community with near infinite ideas to make such a small fish in the programming world turn into a giant whale of production.

#### jQuery

jQuery was created in 2006 to enhance the usability of Javascript. Javascript was initially designed to interact with the Document Object Model (DOM) of a website and make it more dynamic and interactive. jQuery took that goal by the horns and made JS way easier to use for this purpose. Common tasks were watered down into single functions and made code easier to write and understand.

#### Server-Side Javascript

Server-side JS actually started way back with Netscape itself-- those engines that we mentioned before, including SpiderMonkey, were made to run on servers. The first of these was Livewire, created by Netscape. Netscape eventually morphed into Mozilla and created Rhino later on down the line, which is the current engine for Firefox. V8 is used by Google, and Microsoft uses Jscript.

The funny thing is, since JS is actually a scripting language and not a programming language, technically, the engines are actually written in other languages. Rhino is written in Java, SpiderMonkey was in C, and V8 is written in C++.

In 2008, the most popular server-side JS framework to date was created: Node JS. It was based on the V8 engine by Google and allowed anyone to spin up a virtual web server via the Node runtime environment and a package manager like NPM (Node Package Manager).

#### Oh How Far They Have Come

After some time, the web development community developed a "Javascript everywhere" paradigm. We could run JS on the client side... and on the server side... why not run it everywhere? Cross-compatibility is a very important goal for technologies, and it was already standardized, so bringing everything towards Javascript would only increase productivity and efficiency.

Thus, frameworks exploded into the world of web development. React, Vue, and Angular became the top three contenders for running client-side Javascript. And not just alongside HTML and CSS-- EVERYTHING in Javascript. Since Javascript could write directly to the DOM, and styles can be implemented this way as well as HTML, all frameworks really need is a "root" element to write to, and they can take over from there. This eliminated the need for splitting frontend sites into 3 different technologies, though it is still fairly necessary to be proficient in all of them before moving on to a framework.

#### Even More Streamlined Applications

Want to eliminate the need to write CSS styles at all? Bootstrap. With Bootstrap, JS is used to apply styles via classes assigned to individual elements by reading and writing to the DOM.

Want to use Javascript as your database too? Who needs SQL, use NOSQL. MongoDB and Firestore are the leading users of JSON document-centric databases, which fuse the ideals of proper data storage with the paradigm of Javascript to create even more cross-compatilibity in your web stack.

Heck, you want to make desktop applications but you only know Javascript? This is a relatively young field, but NW.js and Electron are the pioneers of this application. When it comes down to it, a desktop app is just code running behind a window, right? And that sounds a lot like a broswer running javascript code. These technologies used this paradigm to bring Javascript to the desktop (though technically still running through a browser).

#### Speaking of Stacks

You've probably heard of LAMP stack, the old-school web technology stack, which stands for Linux Apache MySQL and PHP. But with the advent of JS frameworks that all fit together like Lego pieces, a plethora of stacks have emerged. MEAN, MERN, FERN, Django, and the list keeps growing. Most use Node and Express as the backend, MongoDB/GraphQL/Firebase as the database, and either React, Vue, or Node as the frontend. All of them work fairly well together and are essentially interchangeable because they are all based on the same language (except Django, which is technically Python that serves up Javascript-- that's a weirdo). Other stacks such as Ruby on Rails and Java+String exist that use other languages, but teh Javascript ones are by far the most popular.


This web app runs on the MERN Stack, and [you can check out exactly how it all fits together here!](/stack)