# responsive-overlay-menu
Framework for making responsive cross-browser overlay menus. 

# Features
- works in all browsers
- works on all device
- tiny, < 600bytes
- responsive
- super fast 
- uses jquery animations
- framework not a template
- easy to use
- free to use and abuse (MIT licence)

# Demos
All demos are in examples folder **or:**
## Live Demo
Live demos are avaliable on codepen 
[Responsive overlay menu framework examples](http://codepen.io/collection/ANqMpL/)

# Basic usage
## Basic HTML

Put basic HTML somewhere in body section of your web

```
<div class="menu-btn">
    <a class="btn-open" href="javascript:void(0)"></a>
</div>
<div class="overlay">
</div>
```
Class _menu-btn_ opens and closes your menu while class _overlay_ is space for your menu (or anything else).

## Basic CSS
Styles are stored in **style.css**. Also this plugin is using **ionicons** for hamburger menu open and close so please include in `<head>` (also you will need fonts folder for that) or use other methods for icons (images, any other icon font). 

```
<link rel="stylesheet" href="css/ionicons.min.css">
```
### Styling menu button (hambureger) 
```
.menu-btn {
    position: absolute;
    top: 6px;
    right: 20px;
    z-index: 999;
    display: inline;
    font-size: 32px;
}

.menu-btn a {
    display: inline-block;
    text-decoration: none;
    /* safari hack */
}

.btn-open:after {
    color: #333;
    content: "\f394";
    font-family: "Ionicons";
    -webkit-transition: all .2s linear 0s;
    -moz-transition: all .2s linear 0s;
    -o-transition: all .2s linear 0s;
    transition-property: all .2s linear 0s;
}

.btn-open:hover:after {
    color: #34B484;
}

.btn-close:after {
    color: #fff;
    content: "\f2d7";
    font-family: "Ionicons";
    -webkit-transition: all .2s linear 0s;
    -moz-transition: all .2s linear 0s;
    -o-transition: all .2s linear 0s;
    transition-property: all .2s linear 0s;
}

.btn-close:hover:after {
    color: #34B484;
}
```

### Styling the overlay

```
.overlay {
    position: fixed;
    top: 0;
    z-index: 99;
    display: none;
    overflow: auto;
    width: 100%;
    height: 100%;
    background: #333;
}
```
### Responsive styles
```
@media screen and (max-width: 768px) {
    .menu-btn {
        right: 25px;
    }
}
```

## Jquery

Include **latest jquery** and **responsive-overlay-menu.js** just before closing `</body>` tag or in `<head>`

```<script src="js/jquery-1.11.3.min.js"></script>```

```<script src="js/responsive-overlay-menu.js"></script>```

**or:**

You can also initiate the plugin with `<script> </script>` tags just before closing `</body>` tag

```
$(document).ready(function () {

    $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.menu a').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });

});
```

**In both ways jquery must be called on document ready**

# Advanced Usage and jquery explanation

## Usage #1: Basic menu:
```
$(document).ready(function () {
    $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
```
targets hamburger button and opens overlay class. That means that you can open and close overlay when clicking on hamburer menu. Your menu will work with just that part.

## Usage #2: Closing menu when clicking anywhere on overlay

```
$(document).ready(function () {
    $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });
});
```
First part is requred code for opening and closing menu, while the second part enables closing the menu when clicking anywhere on your overlay. That means that you dont have to click on close button to close the overlay. 

## Usage #3: Using menu with anchor links

This will give you possibility to use this menu with one page websites

```
$(document).ready(function () {
    $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.menu a').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });
});
```

This will enable closing when clicking on link which points on section on the same page so menu will close it self on click. 

# Jqury animations

You can use any jquery animation as explained in [Jquery api](https://api.jquery.com/category/effects/) .

# Browser compatibility

This plugin is tested with all options and is working on **ALL browsers** including IE 8+ . 

# Made with (thanks)
- [Jquery](http://jquery.com/)
- [Ionicons](http://ionicons.com/)
