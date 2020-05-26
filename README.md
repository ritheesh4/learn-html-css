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
 
  
  - FLexbox is a CSS display type designed to help us craft CSS layouts much easier
  - Controls the position, size and spcing of each other 
  - Works great responsively
 
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
 
 ### FLEX CONTAINERS
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
     
 - Using this, we can avoid the wrapping. By setting the value of flex wrap into nowrap, it will not wrap when size reduced.
   
 ### FLEX BASIS
 --------------
 
 `flex-basis: 500px`
 - Flex basis is like minimum width of the flex box.
 - The application of use of flex basis is, even the size of the children become reduced below the minimum pixel value, intead  
   of displaying bottom scroll bar, it will shrink again.
 - We can add the value of felx grow, flex shrink and flex basis together like below.
 
 `flex: 1 0 200px`
 
 `flex: 1` Basically what happens here is, the flex grow property is 1, flex shrink property is 1 and flex basis is zero.
 
   - Video reference: https://youtu.be/j5RxNRFWMwo?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&t=232
   
   ### OTHER PROPERTIES OF FLEX
   ---------------
   `justify-content: center`
   
   - This property is used to align the all children to the center of the main body.
   
   `justify-content: flex-end`
   
   - This property is used to align the all children into the end, probably the right side of the main body.
   
   `justify-content: flex-start`
   
   - This is the default behaviour of flex box. Items get arranged to the left side of the main body.
   
   `justify-content: space-around`
   
   - Each side of each element gets spaced.
   
  ### FLOW & AXIS
  ---------------
   `flex-flow: column` and `flex-flow: row`
   
   - When we use flex box, there are two axis.
   - Main axis(x) and
   - Cross axis(y)
   - When we change the value of the flex flow, we are chagning the direction of the axis. 
   - `flex-flow:row` main axis is the horizontal axis. The children line-up on the main axis. The down vertical axis will be  
                     the cross axis.
   - `flex-flow: column` main axis is the vertical axis. The children line-up on the main axis. The horizontal axis will be 
                     the cross.
   
   - If we use `flex-flow: column` and sets the value of `justify-content:center`, the items wil be aligned to the center 
     horizontally. The reason is, main axis is horizontal.
   - If we use `flex-flow: row` and sets the value of `justify-content: center`, the items will be aligned to the center 
     vertically. The reason is, main axis is vertical.
   - `justify-content` always works on the main axis. When we change the flex flow into column and row, we change the main axis.
   
   `flex-flow: row-reverse` and `flex-flow: column-reverse`
   - As per the names, they can be used to reverse the order of the rows and columns. The items order will be reverse. Not only   
     just the position.
     
 ### ALIGN ITEMS ON THE CROSS AXIS
 ---------------------------------
   `align-items: center`
   - Here the `align-items: center` aligns the items center to the cross axis instead of main axis.
   `justify-content: center`
   - Here the `justify-content: center` align the itesm center to the main axis. So using align-items and justify-content, we  
     can position the items perfectly center inside of the parent space.
     
     - Video reference: https://youtu.be/WY2itpeUK7Q?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&t=17
     
     
 ### New tags learned
 --------------------
 `<article>` Tag: This tag contains independent content that doesn’t require any other context. So the <article> tag can be   
                  placed inside the main content. But each of the articles will contain independent content within it.
          
`<section>` Tag: This tag is used to split a page into sections like Introduction, Contact Information, Details, etc and each of  
                 these sections can be in a different <section> tag. The <section> tag is introduced to wrap-up the things in a 
                 particular section.
          
 `transition: flex-basis 0.2s` : This is used to make transitions very soomthly. The time mentioned will be taken to happen from   
                                 one transition to another.
 
  ### Element Order
  -----------------
  `order:0` `order:1` : By assigning orders, the position can be shuffled based on the order values of the elements.
  
  
  
  # CSS GRID
  
  - CSS GRID just read the web page as a grid. Box of rows and columns.
  
  ### Columns
  ------------
  `display:gird` is used to select the grid display.
  
  - `grid-templated-columns: 30% 30% 30%` : Using this, the columns width are begin set to 30%. If there any other elements are 
    present more than column numbers, here that is 3, the nex items will be moved into the next row and each column will get  
    30%.
    
    - Video reference: https://youtu.be/d-MHl_Q_hp8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=190
  
  - `grid-template-columns: 1fr 1fr 1fr` : We are making the columns into the same fraction width.
  
    - Video reference: https://youtu.be/d-MHl_Q_hp8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=315
   
   
  - `grid-template-columns: repeat(5, 1fr)` : Here we are delcaring 5 columns with fraction of width as 1fr.
    - Video reference: https://youtu.be/d-MHl_Q_hp8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=381
    
  ### Rows
  --------
   - `grid-auto-rows: minmax(200px. auto);` : If the row is not detecting a height, take the minimum height of 200px. If it  
                                           detects more thatn 200px of height, then automatically set the height.                                              
    - Video reference :https://youtu.be/MDQG6LSS8l8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=112
   
   - ` gird-template-rows: 200px 300px 400px 200px` : As the value is being assigned, each row will have each height of pixels.  
    - Video reference :https://youtu.be/MDQG6LSS8l8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=249
  
   
  - `grid-template-row: repeat(3, minmax(200px,auto)` : Repeat 200px and auto three times for each row.
  
  - `grid-column-gap: 10px` : Adding 10px gap between the columns.
     - Video reference: https://youtu.be/MDQG6LSS8l8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=418
  
  - `grid-row-gap :10px` : Adding 10 gap between the rows.
     - Video reference : https://youtu.be/MDQG6LSS8l8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=444
   
  - To combine both the row and column gap property,
   `grid-gap :10px` : This makes gap around so combined gap of column and row formed.
     - Video reference: https://youtu.be/MDQG6LSS8l8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=460
     
 ### Grid Lines
 -------------
  - `grid-template-columns: repear(6, 1fr);`
    `grid-template- rows :repear(4, minmax(150px,auto));`
     
     
     `.one{ grid-column-start:1; grid-column-end: 3}`
     - Here, the each box width and position can be adjusted. The grid column start of the element one is beign set as 1 and the 
       width will extent till the coloumn line 3. So the starting and ending position can be set.
     - It can be simply written as 
     `grid-column: 1/3;` : 1 sets the starting point and 3 sets the ending ponit of the column.
      
     - Video reference: https://youtu.be/J5GWyiWU2H8?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=322
     
 ### Nested Grids
 ---------------
 
  - We can create a grid inside of anothe grid. Create a new div like wrapper inside side of the parent grid and add the items  
    to make as the child grid.
    - Example.
    `display: gird;`
    `grid-template-columns: 1fr 1fr;
    `grid-gap:10px`
  - `grid-column: span 3:`
    We can increase the width of the child.
    
 ### Aligning & Justifying Items
 ------------------------------
 
  - `align-items: start` - All go to the top of the row along with the height of the element and padding.
   - Video reference : https://youtu.be/X2-x-4wA9V4?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=109
   
  - `align-items: end` - All go the bottom of the each row along with the height and padding of the element.
   - Video reference: https://youtu.be/X2-x-4wA9V4?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=133
   
  - `align-items: stetch` - This is what actually the default value. The element gets streteched with the flex box.
   - Video reference: https://youtu.be/X2-x-4wA9V4?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=142
   
  - `justify-itmes: start` - We get the content with the width of the element and positioned at the start of each column.
   - Video reference: https://youtu.be/X2-x-4wA9V4?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=163
   
  - `justify-items: end` - We ge the content with the width of the element and positioned at the end of each column.
   - Video reference: https://youtu.be/X2-x-4wA9V4?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=179
   
  - `align-items: start;`
    `justify-items: end;`- Start of the actual rows top and end of each column.
   - Video reference: https://youtu.be/X2-x-4wA9V4?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=186
   
  - `align-self: center`
    `justify-self: center` - Put the element right in the center.
   - Video reference: https://youtu.be/X2-x-4wA9V4?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=255
   
 ### column grid
 ---------------
  - `grid-template-columns: repeat(12, 1fr)` - 12 times , each column with 1 fraction.
   - Video reference: https://youtu.be/WmwGpjg580o?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=96
   
 ### Grid Areas
 --------------
  - `grid-template-areas:`
    `"header header header header"`
    `"aside aside aside aside"`
    `"nav nav main nav"` - Here, visually we are placing the tages. The grids will be formed exactly like this order of that  
                           particular tags.
    - Video referece:https://youtu.be/tPosqmwIx0w?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&t=147
    
    
 
    
   
    
  
   
  
  
