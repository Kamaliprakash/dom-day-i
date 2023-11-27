
// *const divison = document.createElement("div")
// divison.innerHTML="<span > Hi this is dynamic span </span>"
// document.body.append(divison);
//  ....>>>>>>>......


// creating multiple elements

// const divison = document.createElement("div");
// const span = document.createElement("span");
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello is this heading tag"
// span.innerHTML="Hi is this dynamic span";
// divison.append(heading);
// divison.append(span);
// document.body.append(divison);


// const div = document.createElement("div");
// const heading = document.createElement("heading");
// const section = document.createElement("section");
// const h1= document.createElement("h1");
// const span = document.createElement("span");
// const article= document.createElement("article");
// const p = document.createElement("p");

// adding content
// h1.innerText = "This is heading tag";
// span.innerText= "Hi is this dynamic span";
// p.innerText="Hi is this dynamic paragraph";

// adding class and id for styles
//  div.id="container";
// heading.setAttribute("style","background-color: black; color: white")
// h1.setAttribute("class","heading")
// section.setAttribute("style","background-color:black; color: white")
// article.setAttribute("style","background-color:black; color: white")
// section.classList=("section","section")

// appending elements
// heading.appendChild(h1);
// section.appendChild(span);
// article.appendChild(p);
// div.append(heading,section,article);
// document.body.append(div);

//multiple elements creation dynamically
/*function elements(tagname,content,attrname,attrvalue){
    const ele = document.createElement(tagname);
    ele.innerHTML = content;
    ele.setAttribute(attrname,attrvalue);
    return ele;
}
const ele1 = elements("div","hi this is dynamic div","class","container")
const span = elements("span","<h1>hi this is heading</h1>","class","span")
ele1.append(span);
document.body.append(ele1);
*/