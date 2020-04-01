/**
 * JavaScript: Blog Exercise.
 * @author  TECHCareers by Manpower
 * @date    2020.03.31
 * @summary Iterates through blog articles and outputs an HTML representation of each.
 *
 * Goals:
 * ======
 * - Output into the DOM.
 * - Use a template literal.
 * - Use a for...of loop.
 * - Instantiate an object or object(s) of a class.
 * - Add an element to an array.
 * - Loop through (iterate through) an array.
 * - If you are adding functions or using methods, use ES6 standard.
 */

class Article {
  constructor(title = "Blog Title", content = "Lorem ipsum...") {
    this.title = title;
    this.content = content;
  }

  output(
    element = null // Void method (no return.)
  ) {
    // Make sure something was passed in.
    if (element !== null) {
      // Populate the element. in Section element because we call this output in section element .
      element.innerHTML += `  
            <h3>${this.title}</h3> 
            <p>${this.content}</p>             
        `;
    }
  }
}

/*  This we can do in if we call inner html into body directly . I put code bottom for if we want to call bodt of html.
  output ( element = null )
    {
        if ( element !== null) {
      // TODO: Prepare output to the browser...
      // TODO: Use template literals.
      element.innerHTML += `
      <dl><!-- This is dynamic HTML! Wow! -->
        <dt>Title:</dt>
        <dd>${this.title}</dd><!-- Template literal: output JS variable value in a multi-line string (\`\`). -->
        <!-- Otherwise we need to do concatenation! -->
        <dt>Content:</dt>
        <dd>${this.content}</dd>
      </dl> `; }
    }
  } */

var blogArticles = [
  new Article(
    "First Day of Class (C#)",
    "Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!"
  ),
  new Article(
    "How to Build Websites! (HTML)",
    "What a great day! We learned all about HTML, or, HyperText Markup Language. It is the content and skeleton of the website."
  ),
  new Article(
    "Brand new Topic (CSS)",
    "Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look pretty, we get to define the styles."
  ),
  new Article(
    "Another New Topic!? (JS)",
    "Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage."
  ),
  new Article(
    "Adding on to our JS (TS)",
    "Who knew we could use something to check our code for errors and offer additional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!"
  ),
  new Article(
    "Time to React",
    "Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of a learning curve but so useful now that we're getting the hang of it!"
  )
];


// TODO: Add a new article to the array (add "SASS" inbetween the "CSS" and "JS" articles.)
//splice method which we can add data into an array.
blogArticles.splice(3,0,new Article(
    "Adding SASS to our Article",
    "SASS is new and added by Soham and practiced from tutorial done in class march 31 "
  )
);
const myArticle = document.querySelector("section"); //select section part where
for (let article of blogArticles) {
  // TODO: Loop through articles and output each of them to the browser.
  console.log(article); // Output each product in console.
  article.output(myArticle);
}

/*//we can add element directly into body
  const myElement = document.body;
  for ( let article of blogArticles )
  {    // TODO: Loop through articles and output each of them to the browser.
    console.log( article ); // Output each product in console.
    article.output(myArticle);
  } */
