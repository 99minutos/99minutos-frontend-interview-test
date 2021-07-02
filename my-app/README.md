# Apollo Launches



### Setup instructions

First: *you need a estable version of Node.js*

* install all from package.json
  ```sh
  cd my-app
  ```
  ```sh
  npm install
  ```
* then
  ```sh
  npm run start
  ```

### How did you decide which technologies to use as part of your solution

I decided to use React because I think it has a better control over everything since it uses native javascript.

I use Sass as it simplifies a lot when adding styles.

### Are there any improvements you could make to your submission

Improve the contrast between elements such as the button (UX), I would also have liked to adapt the interface in a responsive way (mobile) and experiment more with the styles.

I would change the style of the buttons and the card where the information is displayed, if there is no image to display I would have put something more user-friendly for those cases and added maybe the universe background only in the panel with the blank background.

It is the first time I use Apollo for GraphQL, something happened with that, I could get information from https://api.spacex.land/graphql/ with simple querys, but with the query to try I got an error #400 (bad request), I lost a lot of time in this part because I did not find information that solved the problem (the same call to the url and using postman with the same query worked perfectly).

I ended up using the JSON locally.


![App](/screenshots/app.PNG?raw=true "The App")

![Postman](/screenshots/app.PNG?raw=true "Thests with Postman to the Api")