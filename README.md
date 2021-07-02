GA#6 Prep Exercise - Chattanooga Airport Flight Status Board

You are going to create a page with Arrivals and Departures boards that list all the flights scheduled to come and go at the Chattanooga Metropolitan Airport. Users will be able to switch back and forth between the boards and will also be able to filter the lists of flights by airline, flight number, city, or status. You will take advantage of Angular's component-based architecture to set up dynamic functionality on a single-page app. Ready?


GETTING STARTED

Start on GitHub - FORK and then copy the url you need to clone this repo to your local computer. Open a terminal and navigate to the location on your computer where you want your A6-Prep-Chattanooga-Airport folder to be. Make sure the folder you are in does NOT also have a repo. Use git clone, then navigate inside the project folder it created. You should see this README file!

You can stay in the main branch to build your project or use git checkout -b branch-name to create a branch of your own. 

If at any time you get really stuck and need to peek at my solution, use git checkout to switch to the solution branch. If you have changes you aren't ready to stage and commit yet, use git stash to temporarily store them while you switch to solution. Then when you switch back to your branch, use git stash apply to bring back the changes you had made.


INSTRUCTIONS

Open your A6-Prep-Chattanooga-Airport folder in your IDE (e.g., VSCode). From either the terminal you already used or from a terminal inside your IDE, make sure you are in that folder, then use the command ng new flight-status-board to create a new Angular project. In the file tree in VSCode, expand the flight-status-board project folder and then /src and /app. You can now see all the Angular files that make up your application.

Back in your terminal, cd into the flight-status-board project folder. Run the app using ng serve. Go to localhost://4200 in your browser and you'll see the default content for a new angular application. You don't need any of that, so the next step will be to get rid of it.

Look in the folder called starter-code. Copy all the HTML from code-for-index.html and replace everything that is in /src/index.html. Then copy all the CSS from code-for-stylesheet.css and replace everything that is in /src/styles.css.

Move the images folder (which has all the images you need) inside /src/assets. Do the same with the data folder.

!!! Stop and make a commit to your branch using the terminal:
    git status to view files that need to be staged
    git add . to stage both tracked and untracked files 
    git status again, if you want to verify that everything you want has been staged
    git commit -m "generated new Angular project; replaced default code with new starter code; added images and data"

Back in a terminal (perhaps a different one than where you've served your app), use ng g class to create a class called Flight. Declare variables of type string that will mirror all the properties of each object in /assets/data/flights.json. Set up your constructor to take in everything as a parameter except the last two properties (gate and status). Inside the constructor, set the first 6 properties equal to whatever is passed in through the parameters, then set gate and status as empty strings. You will add some methods to this class later.

Back in a terminal again, use ng g c to create a component called board, and then create another called header. Take a look at src/app/app.module.ts. Notice that your components are already registered there because you created them through the CLI and Angular did a lot of the necessary work for you.

Now you should get your new components filled out a little. Delete the default messages out of header.component.html and board.component.html. Replace it with the appropriate code from their respective files in the starter-code folder. Switch over to app.component.html. Place one instance of the header component and two instances of the board component as indicated by the TODOs. 

Now open the app component TS file. Create two new properties called allArrivals and allDepartures. Set them to type Flight[] and initialize them as empty arrays.

!!! Stop to stage your new files and make a commit to your branch using the steps outlined above: 
    Write a short but descriptive message about what's been added/changed. 
    Now use git push (or git push -u origin branch-name if not main) to send your first two commits up to your GitHub repo.

TODO: Add allArrivals and allDepartures to app TS file ('splain)

Time to fetch some JSON. Write a function called getFlights() that is typed as void since it will not return any values. Fetch from assets/data/flights.json. Loop through the array of json objects and create a new Flight object that saves all the properties from the json object to their respective property in the Flight object. Remember that the gate and status properties must be set separately since they are not parameters in the constructor. Once all 8 properties have been set, determine if the flight is an arrival or departure (hint: either the origin or the destination will be "Chattanooga") and then push it to either this.allArrivals or this.allDepartures. Go up to ngOnInit() and call getFlights() inside there so that it will happen before the page displays.

!!! Stop to stage your files and make a commit! 

<!-- TODO: Set up data rows, modeled after TS file -->

<!-- TODO: In the board TS file, add flights -->

On each of the board component tags in app.component.html, add an attribute directive called flights. Set the first one equal to "allArrivals" and the second equal to "allDepartures". 

<!-- TODO: add type with @Input() decorator  -->

Switch over to the app TS file and create two new properties called arrivalText and departure text and initialize them to the strings "arrival" and "departure" respectively. Then go back to the app HTML file add a second attribute directive to both board component instances called type; set them equal to "arrivalTExt" and "departureText".

Now check the page. You should now see all the arrivals listed!

<!-- TODO: deal with show toggle above -->

<!-- TODO: Create showArrival boolean -->


These will be changed to hold subsets each time the user submits a keyword for filtering. That way you can send only the flights that need to be displayed to the board component.

<!-- TODO:  -->

