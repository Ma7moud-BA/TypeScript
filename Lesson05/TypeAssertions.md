# sometimes you will have information about the type of a value that typescript can't know about.


- for example, if you're using document.getElementById, typescript knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
