# About

<p class="lead">This style guide is intended for the CoE department child theme: Innovation. It is generated and maintained by the <a href="https://cm.engin.umich.edu/" target="_blank">Michigan Engineering Office of Communications &amp; Marketing</a>.</p>



# Accessibility

<p class="lead">In addition to the accessibility features built into the theme's components, be sure to follow best practices for making your site more accessible. <i>this will be added to in more detail as they're worked out</i></p> 

* Structure your document properly. Use the right HTML tags for the job when marking up navigation, lists, links, controls, and so on.
* Label everything. If a control or form element has no text label, add one. You can use the visibility classes to hide labels visually while maintaining accessibility. Use the alt attribute on all images to describe what they are.
* Don't rely on purely visual cues. The content of a page should make sense even if page is being read to the user, or if the user is colorblind and can't make use of color-based labeling.
* Make everything usable on a keyboard and mouse. All of our components work with keyboards, mice, and touch screens out of the box.

* http://webaccess.hr.umich.edu/
* https://www.w3.org/TR/2008/REC-WCAG20-20081211/



# Breadcrumbs

```html_example
<nav aria-label="You are here:" role="navigation">
  <ul class="breadcrumbs">
    <li><a class="home" href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li><span class="show-for-sr">Current: </span> Cloning</li>
  </ul>
</nav>
```



# Buttons

<p class="lead">Buttons are tied to an action of some kind.</p>

---

### Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

### Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```

--

### Other Button Colors

```html_example
<a href="#" class="success large button">Large button</a>
<a href="#" class="alert button">Regular button</a>
<a href="#" class="warning small button">Small button</a>
```



# Callouts

```html_example
<div class="callout">
    <h5>This is a default callout.</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout primary">
    <h5>This is a primary callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout secondary">
    <h5>This is a secondary callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout success">
    <h5>This is a success callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout warning">
    <h5>This is a warning callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
<div class="callout alert">
    <h5>This is an alert callout</h5>
    <p>It has an easy to override visual style, and is appropriately subdued.</p>
    <a href="#">It's dangerous to go alone, take this.</a>
</div>
```



# Cards

```html_example
<div class="row small-up-1 medium-up-3 large-up-3">
    <div class="column">
        <div class="card">
            <img src="assets/img/aud-01.jpg">
            <div class="card-section">
                <h4>Dreams feel real</h4>
                <p>I'm going to improvise. Listen, there's something you should know about me... about inception.</p>
                <small>Last updated 1 minute ago</small>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="assets/img/aud-02.jpg">
            <div class="card-section">
                <h4>Menus</h4>
                <p>Cards play nicely with menus too! Give them a try.</p>
                <ul class="menu simple">
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <div class="card-divider">
                <p>Featured</p>
            </div>
            <div class="card-section">
                <h4>Your title here!</h4>
                <p>An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="assets/img/aud-03.jpg">
            <div class="card-section">
                <h4>Buttons!</h4>
                <p>Who doesn't love a good button? Buttons work in all of their forms too.</p>
                <a class="button" href="#">I'm a button</a>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="assets/img/aud-04.jpg">
            <div class="card-section">
                <h4>And button groups...</h4>
                <p>Button groups also work great!</p>
                <div class="button-group">
                    <a class="button">One</a>
                    <a class="button">Two</a>
                    <a class="button">Three</a>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card text-center">
            <div class="card-divider">
                <p>Centered</p>
            </div>
            <img src="assets/img/aud-01.jpg">
            <div class="card-section">
                <p>The utility classes like .text-center work great too.</p>
                <a class="button" href="#">Click me</a>
            </div>
        </div>
    </div>
</div>
```



# Colors

<p class="lead">Below you can find the different values used for the theme.</p>

---
<h3>Primary Colors</h3>
<div class="row up-1 medium-up-3 large-up-6">
  <div class="columns">
    <div class="color-block">
      <div class="color-name">michigan blue</div>
      <span style="background: #00274c;"></span>
      #00274c
</div>
</div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">michigan maize</div>
      <span style="background: #ffcb05"></span>
      #ffcb05
    </div>
  </div>
</div>
<h3>Secondary Colors</h3>
  <div class="row up-1 small-up-1 medium-up-3 large-up-6">
  <div class="columns">
    <div class="color-block">
      <div class="color-name">tappan red</div>
      <span style="background: #9a3324"></span>
      #9a3324
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">arboretum blue</div>
      <span style="background: #407ec9"></span>
      #407ec9
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">ross orange</div>
      <span style="background: #d86018"></span>
      #d86018
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">a2 amethyst</div>
      <span style="background: #702082"></span>
      #702082
    </div>
  </div>
  </div>
  <h3>Supporting Values</h3>
  <div class="row up-1 small-up-1 medium-up-3 large-up-6">
   <div class="columns">
    <div class="color-block">
      <div class="color-name">black 100</div>
      <span style="background: #000"></span>
      #000000
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 8</div>
      <span style="background: #202020"></span>
      #202020
    </div>
  </div>
   <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 24</div>
      <span style="background: #3d3d3d"></span>
      #3d3d3d
    </div>
  </div>
   <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 54</div>
      <span style="background: #8a8a8a"></span>
      #8a8a8a
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 77</div>
      <span style="background: #c4c4c4"></span>
      #c4c4c4
    </div>
  </div>
   <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 93</div>
      <span style="background: #ededed"></span>
      #ededed
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">gray 98</div>
      <span style="background: #fafafa"></span>
      #fafafa
    </div>
  </div>
  <div class="columns">
    <div class="color-block">
      <div class="color-name">white 100</div>
      <span style="background: #fff"></span>
      #ffffff
    </div>
  </div>
</div>


--

### Contrast

We must conform to WCAG AA. Use <a href="https://webaim.org/resources/contrastchecker/" target="_blank">this contrast checker</a> when using custom color combinations in the WYSIWYG.



# The Grid

<p class="lead">This is just an explanation of the grid we're using. Most likely you won't need to add it to any page templates. The Grid is powered by Flexbox. For more in-depth details regarding The Grid, please see [Foundation's documentation](https://foundation.zurb.com/sites/docs/flex-grid.html).</p>

---

### Overview

The grid is built around two key elements: row and columns. `.row` creates a max-width and contain the grid, and `.columns` create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or columns.

---

### Details on Gutters, Margins, and Padding

Here are the <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover='false' tabindex=1 title="A scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.">SASS</span> variables regarding the maximum width of the theme, breakpoints, columns, and block grid.

```html
$global-width: rem-calc(1300);
$breakpoints: (
  small: 0,
  medium: 640px,
  large: 1024px,
  xlarge: 1300px,
  xxlarge: 1440px,
);
$breakpoint-classes: (small medium large xlarge xxlarge);
$grid-row-width: $global-width;
$grid-column-count: 12;
$grid-column-gutter: (
  small: 20px,
  medium: 30px,
);
$grid-column-align-edge: true;
$grid-column-alias: 'columns';
$block-grid-max: 8;
```

---

### Nesting

In the Grid you can nest columnss down as far as you'd like. Just embed row inside columnss and go from there. Each embedded row can contain up to 12 columnss.

---

### How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create columnss.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 columns">4</div>
<div class="small-12 large-4 columns">4</div>
<div class="small-12 large-4 columns">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

### Nesting row

In the Grid you can nest columnss down as far as you'd like. Just embed row inside columnss and go from there. Each embedded row can contain up to 12 columnss.

```html
<div class="row">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>
```

<div class="row display">
  <div class="small-8 columns">8
    <div class="row align-center display">
      <div class="small-8 columns">8 Nested
        <div class="row align-center display">
          <div class="small-8 columns">8 Nested Again</div>
<div class="small-4 columns">4</div>
</div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>

---

### Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row display">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>



# Iconography

<p class="lead">This theme uses a combination of [Font Awesome](http://fontawesome.io/cheatsheet/) icon fonts and custom SVGs.</p>

### Font Awesome
<div class="icon-fonts"><i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i> <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>  <i class="fa fa-instagram fa-lg" aria-hidden="true"></i> <i class="fa fa-flickr fa-lg" aria-hidden="true"></i> <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i> <i class="fa fa-youtube fa-lg" aria-hidden="true"></i> <i class="fa fa-snapchat-ghost fa-lg" aria-hidden="true"></i> <i class="fa fa-tumblr fa-lg" aria-hidden="true"></i></div>
<div class="icon-fonts"><i class="fa fa-caret-left fa-lg" aria-hidden="true"></i> <i class="fa fa-caret-right fa-lg" aria-hidden="true"></i> <i class="fa fa-angle-double-left fa-lg" aria-hidden="true"></i> <i class="fa fa-angle-double-right fa-lg" aria-hidden="true"></i> <i class="fa fa-external-link" aria-hidden="true"></i> <i class="fa fa-envelope-o" aria-hidden="true"></i> <i class="fa fa-close" aria-hidden="true"></i> <i class="fa fa-camera" aria-hidden="true"></i>
</div>


---


### SVGs
We're currently offering a limited number, but will add more on an as-needed basis.
<div class="row small-up-3 large-up-8 text-center">
    <div class="icon column">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
        </div>
        <div class="word">Award</div>
    </div>
    <div class="icon column">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        </div>
        <div class="word">Globe</div>
    </div>
    <div class="icon column">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
        </div>
        <div class="word">Briefcase</div>
    </div>
    <div class="icon column">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        </div>
        <div class="word">Eye</div>
    </div>
    <div class="icon column">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain">
                <line x1="16" y1="13" x2="16" y2="21"></line>
                <line x1="8" y1="13" x2="8" y2="21"></line>
                <line x1="12" y1="15" x2="12" y2="23"></line>
                <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
            </svg>
        </div>
        <div class="word">Rain cloud</div>
    </div>
    <div class="icon column">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
        </div>
        <div class="word">CPU</div>
    </div>
    <div class="icon column">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        </div>
        <div class="word">Users</div>
    </div>
</div>



# Images

<p class="lead">Images appear on the site in four different aspect ratios: 20:9, 3:2, 3:4, and 1:1.</p>


### Large featured image (for sliders or pages)
<div class="image">
  <img src="assets/img/orbit-bg-2.jpg" alt="">
  <span class="secondary label overlay">16:9 ratio, 2830 × 1274 pixels upload size</span>
</div>

---

### Card images
<div class="image">
  <img src="assets/img/aud-01.jpg" alt="">
  <span class="secondary label overlay">3:2 ratio, 1200 × 800 pixels upload size</span>
</div>

---

### Statistics and promo images

<p class="lead">The theme will take care of the border radius, no need to create it in a photo editor.</p>

<div class="image">
  <img src="assets/img/stats.jpg" alt="">
  <span class="secondary label overlay">1:1 ratio, 600 × 600 pixels upload size</span>
</div>

---

### Research row images
<div class="image">
  <img src="assets/img/research-img-02.jpg" alt="">
  <span class="secondary label overlay">3:4 ratio, 1278 × 1500 pixels upload size</span>
</div>

---

## Image treatments

<p class="lead">The theme will take care of the duotones. Within certain fields in the backend, you will have a selection of duotones you can use over uploaded images. Please note that not every image will work. Use your best judgement on what works and does not. However, desaturated images tend to work best with duotones.</p>

<div class="row collapse small-up-1 medium-up-3 large-up-3">
    <div class="image duotones columns">
        <div class="blue-duotone" style="background-image: url('assets/img/duotone-src.jpg');"></div>
        <span class="secondary label overlay">Blue Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="dark-blue-duotone" style="background-image: url('assets/img/duotone-src.jpg');"></div>
        <span class="secondary label overlay">Dark Blue Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="red-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Red Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="yellow-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Yellow Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="purple-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Purple Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="green-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Green Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="orange-duotone" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Orange Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="blend-red-blue-dark" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Blue Red Blend Duotone</span>
    </div>
    <div class="image duotones columns">
        <div class="blend-blue-yellow-light" style="background-image: url('assets/img/duotone-src.jpg');">asdf</div>
        <span class="secondary label overlay">Yellow Blue Blend Duotone</span>
    </div>
</div>



# Labels

```html_example
<span class="secondary label">Secondary Label</span>
<span class="success label">Success Label</span>
<span class="alert label">Alert Label</span>
<span class="warning label">Warning Label</span>
```



# Links

<p class="lead"><a href="#">Internal links</a> and <a href="#" target="_blank">external links</a> get their own treatments. Adding the `target="_blank"` attribute will trigger the theme to place an indicator at the end of the link.</p>
```
<a href="#">Internal links</a>
<a href="#" target="_blank">External links</a>
```



# Tooltips

<p class="lead">Tooltips are for displaying extended information for a term or action on a page.</p>

The <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover='false' tabindex=1 title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand immediately took the scythe, and cleared with it a circular space, three or four yards in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to let go the string and come down from the tree.

By default, clicking on a tooltip will leave it open until you click somewhere else. However, you can disable that by adding `data-click-open="false"`

```html_example
<p>
this
<span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex="2" title="You see?  I'm open!">tooltip will stay open</span>

while
<span data-tooltip aria-haspopup="true" class="has-tip top" data-click-open="false" data-disable-hover="false" tabindex="2" title="I don't stay open">this one will only be open when hovered</span>
</p>
```

You can also position the tooltips to the right and left of the word by adding the classes `.right` or `.left` to the `<span>` element.

```html_example
<p>
Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.
<span data-tooltip aria-haspopup="true" class="has-tip right" data-disable-hover="false" tabindex="3" title="Yes.">Do androids dream of electric sheep?</span> Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
<span data-tooltip aria-haspopup="true" class="has-tip left" data-disable-hover="false" tabindex="4" title="Star">Wars</span> onec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
```



# Tables

<p class="lead">To stack a table on small screens, add the class `.stack`. Add the class `.hover` to lightly darken the table rows on hover.</p>

```html_example
<table class="hover stack">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
      </tr>
  </tbody>
</table>
```



# Typography

<p class="lead">This design uses <a href="https://fonts.google.com/specimen/Pathway+Gothic+One" target="_blank">Pathway Gothic One</a> for super-headings, <a href="https://fonts.google.com/specimen/Montserrat" target="_blank">Montserrat</a> for headings and subheadings, and <a href="https://fonts.google.com/specimen/Cardo" target="_blank">Cardo</a> paragraph text.  Base type is set at 100%(16 px).</p>

---

### Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest). Whenever possible try not to skip heading levels.

#### Header Styles

The theme includes two typographic scales—one uses a narrow range of sizes for small-sized screens, and the other uses a wider range of sizes for medium- and larger-sized screens.

```html
small: (
    'h1': ('font-size': 24),
    'h2': ('font-size': 20),
    'h3': ('font-size': 19),
    'h4': ('font-size': 18),
    'h5': ('font-size': 17),
    'h6': ('font-size': 16),
  ),
  medium: (
    'h1': ('font-size': 48),
    'h2': ('font-size': 40),
    'h3': ('font-size': 31),
    'h4': ('font-size': 25),
    'h5': ('font-size': 20),
    'h6': ('font-size': 16),
)
```

<h1 class="super-headings">Super Heading h1</h1>

<h2 class="super-headings">Super Heading h2</h2>

<h3 class="super-headings">Super Heading h3</h3>

<h4 class="super-headings">Super Heading h4</h4>

<h5 class="super-headings">Super Heading h5</h5>

<h6 class="super-headings">Super Heading h6</h6>

---

<h1>Heading h1</h1>

<h2>Heading h2</h2>

<h3>Heading h3</h3>

<h4>Heading h4</h4>

<h5>Heading h5</h5>

<h6>Heading h6</h6>

---

### Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such. Line heights are set at 1.6 times the font size. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo.

---

### Eyebrows
<p class="lead">Eyebrows appear atop headlines in certain cases. They usually denote a category the item appears in.</p>

<div class="hed">
  <div class="eyebrow">Eyebrow</div>
  <h3>This is a headline</h3>
</div>