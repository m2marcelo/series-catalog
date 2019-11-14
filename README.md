# Series Catalog

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The basic idea is show a list of series.

As bonus, use the keyboard to navigate between them.

Also was told not to spend a lot of time developing this.

## Check dependencies

Check the dependencies, you will need NodeJs and NPM installed in your environment.

You can download NodeJS here: [https://nodejs.org/en/download/]

To install npm, follow the instructions detailed here: [https://www.npmjs.com/get-npm]

As an alternative for npm, you can install yarn, check it here: [https://yarnpkg.com/en/]

## Cloning and installing project dependencies

After clone this project, go to the project folder and install the dependencies, you can do this running the install command from npm or yarn, like this:

### `npm install`
or
### `yarn install`

## Running the project

After downloading and installin the dependencies, run the project, you can use npm or yarn as well.
Use the command:

### `yarn start`
or
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Design/project decisions

I took the following decisions to develop this:

1 - Use react framework.

2 - List the series in a carousel
  Just to look better and more customizable, if the series API return a lot of series, with a carousel will be easier to display it and will avoid a lot of scrolling, we keep all in one single element.

3 - Create a details page for each series
  As a bonus, it was asked to navigate using key arrows and back key, so to be able to go back from somewhere, I decided to create a details page.

4 - I had the idea to deploy a copy of the project working running in my github page, but due the CORS, I had to provide a proxy to set up the requests and that affected the deploy script, I would need to fix it using the proxy as well, didn't continued this because it was out of the scop, but you can find some info about this the package.json file.

All the rest of the decisions are commented in the code.

## Know issues

As the test is to check mainly the programming skills, the visual part may not be the most attractive part, as I am not a designer, I tried to keep it simple, but some CSS definetly needs improvement. The other issue is part of bonus task described below.

## Bonus task

I made the bonus task, you can navigate in the carousel using left and the right arrows in the keyboard. If you hit ENTER key, you will navigate to the details page, if you hit ESC or b key, you will return to the main page.

As you can see, the ENTER is pointing only to one serie, this is a bug that came from the carousel component, the component has a bug when listing various elements at the same time, the function to get the current slide or item will only work if the carousel shows one item at the time only, which is not our case.

You can check the bug adding the following code to the carousel, in catalog.js file, add this code as parameter to the carousel element:

### Add the code between additionalTransfrom={0} and arrows, in the <Carousel element.

        afterChange={(previousSlide, { currentSlide, onMove }) =>
            console.log(
              "previous slide is ",
                previousSlide,
                " currentSlide is ",
                currentSlide
              )
            }

This code will provide you the current and previous slide, you will see that is not correct, check the console log. It looks like the current and the previous presents values bigger than the list inside the carousel.

But if you change the follwing code inside <Carousel> element:

          responsive={{
            desktop: {
                breakpoint: {
                max: 3000,
                min: 1024
                },
                items: 5,
                partialVisibilityGutter: 40
            },
            }}

to:

          responsive={{
            desktop: {
                breakpoint: {
                max: 3000,
                min: 1024
                },
                items: 1,
                partialVisibilityGutter: 40
            },
            }}

This will make the carousel show only one element at the time instead of five, then the current and previous values from the function will present the right value.

This bug not only caused me problems to use the ENTER key to navigate to the proper serie, but also caused problems to create a custom CSS effect as we have using the mouse.

Of course I could use another element or create another carousel from scratch, this would be the solution, I didn't made it because the time, but I believe that shows that I can check and do the task. :)




