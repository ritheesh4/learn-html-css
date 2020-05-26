# HTML and CSS
## 1. Introduction
### What is HTML?
- HTML is a Hypertext Markup Language used to structure content on a web page(images, text,forms etc).
- We structure content using HTML tags.
- Example:
```html
          <html>
            <body>
              <p> Content </P>
              <a> link </a>
            </body>
          </html>
 ```
  ### Basic HTML Tags
  ------------------
  - `<!DOCTYPE>`  	Defines the document type.
  - `<html>` 	Defines an HTML document.
  - `<head>` 	Contains metadata/information for the document.
  - `<body>` 	Defines the document's body.
  - `<h1> to <h6>` 	Defines HTML headings.
  - `<p>` 	Defines a paragraph.
  - `<br>` 	Inserts a single line break.
  - `<hr>` 	Defines a thematic change in the content.
  - `<!--...-->` 	Defines a comment.
  ### Formatting Tags
  --------------------
  - `<blockquote>` 	Defines a section that is quoted from another source.
  - `<a>`	Defines a hyperlink.
  - `<em>` 	Defines emphasized text. 
  ### Forms and Input Tags
  ------------------------
  - `<form>` 	Defines an HTML form for user input.
  - `<input>` 	Defines an input control.
  - `<button>` 	Defines a clickable button.
  - `<select>`	Defines a drop-down list.
  - `<label>` 	Defines a label for an <input> element.
  ### Images
  ------------------------
  - `<img>`	Defines an image.
  - `<svg>`	Defines a container for SVG graphics.
  ### Links
  ------------------------
  - `<a>`	Defines a hyperlink.
  - `<link>` 	Defines the relationship between a document and an external resource (most used to link to style sheets)
  - `<nav>` 	Defines navigation links.
  ### List
  ------------------------
  - `<ul>` 	Defines an unordered list.
  - `<ol>` 	Defines an ordered list.
  ### Styles and Semantics
  ------------------------
  - `<style>`	Defines style information for a document.
  - `<div>`	Defines a section in a document.
  - `<span>` 	Defines a section in a document.
  - `<header>` 	Defines a header for a document or section.
  - `<footer>` 	Defines a footer for a document or section.
  - `<main>` 	Specifies the main content of a document.
  - `<section>` 	Defines a section in a document.
  
  For more reference https://www.w3schools.com/tags/default.asp
  <br>Video:https://youtu.be/hu-q2zYwEYs
  
  ## 2. HTML Basics
  
  ### HTML elements and syntax
  ----------------------------
  - `<Title>` : This tag is used to add title for the page. If we open the page in a browser, this title will be there in the tab.
  - `<p>` : This tag is used for paragraph
  - `<small>` : It reduces the size of the text.
  - `<em>` :emphasises the text.
  - `<h1>` to `<h6>` chagnes the size of th text from high to low.
  - `<strong/>` : Makes the text bold.
  - `<ul/>` : Unordered list. It has a different syntax than above tags.
  ```html
          <html>
            <body>
              <ul>
                  <li>Ritheesh</li>
                  <li>Tony</li>
                  <li>Emmanuel</li>
              </ul>              
            </body>
          </html>
 
```  
 Result:  <ul>
                  <li>Ritheesh</li>
                  <li>Tony</li>
                  <li>Emmanuel</li>
              </ul>   
   `<ul>`**Video reference** : https://youtu.be/mbeT8mpmtHA?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&t=259
   
  - `<ol>` : Ordered list. Syntax is same like unordered list. use ol in the place of ul.
  ```html
          <html>
            <body>
              <ol>
                  <li>Ritheesh</li>
                  <li>Tony</li>
                  <li>Emmanuel</li>
              </ol>              
            </body>
          </html>
 
```   
 Result:  <ol>
                  <li>Ritheesh</li>
                  <li>Tony</li>
                  <li>Emmanuel</li>
              </ol>              
  `<ol>` **Video reference** : https://youtu.be/mbeT8mpmtHA?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&t=310
  
  - `<div>` : Defines a division or a section in an HTML.
  ```html
          <html>
            <body>
              <div>
                  <div>Hi </div>
                  <div>Hello</div>
                  <div>Welcome</div>
              </div>              
            </body>
          </html>
 
```   
  `<div>` **Video reference** : https://youtu.be/mbeT8mpmtHA?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&t=372
  - `<span>` : Used for grouping and applying styles to inline elements. The `<span>` tag is used with inline elements whilst
               the `<div>` tag is used with block-level content.
  - `<br>`   : Used for line breaks. If our content should go to the next line, use `<br>` tag.
  - `<img>`  : Used to place images.
  ```html
          <img src ="image.jpg" alt ="a picture for testing" > 
 ```
 **Syntax**:<br>
     -- Required attributes. Here we have used two attributes.<br>
     -- src: Source attribute[path of the image]. The path of the image has to be added inside of the quotes.<br>
     -- alt: Initially anything what we write in this alt attribute not going to be diplayed anywhere. But if the<br> 
       image is not displaying at the html page, the content in the alt will be displayed at the place of image.<br>
       
   `<img>` **Video reference** - https://youtu.be/mbeT8mpmtHA?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&t=620
  
                            
  
  
  
  
  
  
  
  
  
  # CSS FLEX BOX
  ----------------
  
  - FLexbox is a CSS display type designed to help us craft CSS layouts much easier
  - Controls the position, size and spcing of each other 
  - Works great responsively
  ## INTRODUCTION
  ----------------
  ### FLEXBOX BASICS
  -----------------
  
  - Apply adisplay type of  flex to the parent continer. The children element in that parent directly become flex items.
  - There is how we can maked them to grow and shrink accordance with our need.
 
 ###  BENEFITS of using FLEX BOX
 -------------------------------
 - Navigation bars & menus
 - Grid laouts
 - Bar charts
 - Equal height columns
 - Modernizr should use for those browsers do not support flex box.
 
 ## FLEX CONTAINERS
 ------------------
   `display:flex`
 - When using display as flex, the all children get stacked from left to right.
 
 ### FLEX GROW property
 ----------------------
 `flex-grow: 1` or `flex-grow: 100`
 - This means the the children grow the full space of the parent.
 - Each element can assign different frow values. So based on that each one take different space on the screeen.
   video reference: https://youtu.be/yPK8cwBEOmg?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&t=126
 - Adding flex-grow value is like a ratio how to grow the childre with the parent.
 
 ### FLEX SHRINK property
 ------------------------
 `flex-shrtink: 1`
 - Just opposite of flex-grow.
 - As browser gets smaller, the shrinking rate of the child based on the value set for each. Bigger the number of flex-shrink
   shrinks more than others.
   
  video referece: https://youtu.be/tSdq8amjMso?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&t=93
  
 ### FLEX WRAP property
 ----------------------
 
 `flex-wrap: wrap`
 
 - If in the css we have specified a minimum-width for the parent or any other part, we can see that while we reduce the    
   browser's width, after reduced the minimum-width, there will be a scroll bar appear at the bottom to preserve the width of   
   that body.
 - Instead of appearing the bottom scroll bar, we need to wrap the end element in the flex to the next line. So the remaining 
   elements can take the remaining space and can avoid bottom scrolling.
   
  -  video referece: https://youtu.be/rlZ-fC5eWWk?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG
   
 - The size of the remaning children will be based on how the flex-grow property assigned to each one.
 - Without even using the media query, we can change the position of the children based on the availble space.
   
 `flex wrap: wrap-reverse`
   
 - Wrap reverse does opposit of flex wrap. When the width of the browser goes down to the minimum width, instead of going the 
     last element of the flex to the next line, it will go the upper line and remaining elements will become under the last 
     element.
     
  -   video reference: https://youtu.be/rlZ-fC5eWWk?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&t=202
     
 `flex wrap: nowarp`
     
 -Using this, we can avoid the wrapping. By setting the value of flex wrap into nowrap, it will not wrap when size reduced.
   
   
