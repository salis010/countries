NEXT:
mongo: https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/


Question 1:
When country is not matched, the server is printing a lot of gibberish. And the frontend does not inform the user that nothing was found

Question5: Shortcomnings:
- does not check whether the user is already registered
- password is saved in clear text

node store secret in environmental variable

-Enzyme:
-Question 1
Mock api:
https://medium.com/@manastunga/unit-testing-api-calls-in-react-enzyme-and-jest-133b87aaacb4

-Question 4: test that the correct images are being shown

-Question 5: test that the button is enabled if all fields are valid

-Cypress?
-Deploy to heroku

-Once loaded, the app needs to take the user to Question 1


## How to run the project

To run tests:

execute `npm run test` in terminal

## Redux

Actions and action-types, in a real commercial environment actions and action-types would be split in seperate files.

## Question 2

Why does typing 'z' return China? Its because 'China' in Mandarin is 'Zhong guo', in fact if you type 'zhong' or 'quo' the api will return China.

## Question 3

Question 3 does not make use of the Node backend, but uses fetch to directly get a list of all the matching countries when the component mounts, using the `useEffect` hook.

Filtering uses a `RegExp` object to dynamically construct the regex. 

If supplied with `'Li'`, an array such as `['Libya', 'Liberia', 'Italy', 'UK']` needs to match 'Libya', 'Liberia', but also 'Italy', which although does not contain the letters 'l' and 'i' in the same order as the filter it still needs to match.

The solution is to create the regex dynamically with a template literal:

```const rx = new RegExp(`${filter}`, 'i')```

Also, the function used:

- us not named 'filterCountries' but 'filterStringArray', since it could be used elsewhere
- it also does not call any other function to change the state, but rather it just returns the result and so that it is the calling function that proceeds to alter the state.


## Question 4

The reel symbols are enumerated.

During a spin, 'symbol' variables for each appearing symbol are incremented.

The win amount is estimated depending on the values of these 'symbol' variables.

This game has a positive RTP, which is not normal, so I had to check again and again.

The respective jest test ('/__tests__/slot-game/slot-game.test.js') does not make use of the same game logic, so that if there is a mistake in the logic used for the game, it is not repeated in the test.

The test:
- determines the number of unique symbols in the line
- determines the frequency of each symbol in the line
- pushes these values in an array and sorts it in descending order according to symbol frequency
- if the number of unique symbols is 3, it means all symbols are different and there is no win
- if the number of unique symbols is 2, it means that there are two matching symbols. Since the array is sorted in descending order, reading the first element of the array will tell the winning symbol
- if the number of unique symbols is 1, it means that there are three matching symbols.
- the returned win from the game is compated to the win determined during the test, and if it matches, 'true' is pushed to a 'results' array. If it does not match, 'false' is pushed into the array
- This is repeated for many times, say 1,000,000
- If all spins have had there win successfully counterchecked, then there should be no 'false' entry in the 'results' array:

```expect(results.includes(false)).toBe(false)```


## Question 6 has no validaton.