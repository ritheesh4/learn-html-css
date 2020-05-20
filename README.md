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
     - Required attributes. Here we have used two attributes.<br>
     - src: Source attribute[path of the image]. The path of the image has to be added inside of the quotes.<br>
     - alt: Initially anything what we write in this alt attribute not going to be diplayed anywhere. But if the<br> 
       image is not displaying at the html page, the content in the alt will be displayed at the place of image.<br>
       
   `<img>` **Video reference** : https://youtu.be/mbeT8mpmtHA?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&t=620
  
                            
  
  
  
  
