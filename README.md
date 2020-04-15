NEXT:
Question 2
Question 3
Any matching functions between Questions 2 & 3 and maybe others?
Use a baseUrl if you are going to deply to Heroku

Can rest be used here:
const mapStateToProps = state => ({
        country: state.country,
        allCountries: state.allCountries,
        filteredCountries: state.filteredCountries,
    })



-Git
-All state in ReduxRedux
-Jest: prundeData
-Enzyme:
-Cypress?
-Deploy to heroku
-Mongo?
-PropTypes


## How to run the project

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

The game has a positive RTP!