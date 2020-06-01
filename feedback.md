# Feedback

Overall, you've made a very nice project. I'm really pleased to see you paying attention to accessibility with things like `alt` tags and generally very good semantic HTML tag choices - there's just a few places I've mentioned below regarding accessibility to improve. I like the nice detail with the loading spinner, although the rest of the styling needs a bit of TLC to make it look professional. You've written very readable code and I like that your patchVotesById api function is reusable. Well done!

## Things you've done well

- [x] Some indication of who is logged in
- [x] Serves all articles / top articles
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Can sort articles by date created / comment_count / votes
- [x] Individual articles are served with comments
- [x] Can post new comments, which are persistent
- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh
- [x] Error handling: Bad url
- [x] Error handling: Invalid article id in url
- [x] Error handling: Nonexistent article id in url
- [x] Error handling: Post comment: (No text in comment body / Can you post without logging in?)
- [x] Well named components
- [x] Functional components used where possible
- [x] Components reused where possible (`Articles` / `Voter`...)
- [x] Minimal state - don't hold derivable data in state
- [x] Set state correctly, using previous state where possible
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [x] `node_modules` git ignored

## Things you could improve

### Chores

- [ ] **Need:** README: has a link to the deployed version
- [ ] **Need:** README: provides general info about your app
- [ ] **Need:** README: includes links to your back end repo
- [ ] **Need:** README: specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] **Need:** README: has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)
- [ ] **Need:** Remove all comments/console.logs when finished
- [ ] Remove unnecessary files (e.g. App.test.js)
- [ ] Be consistent at destructuring etc - e.g. can destructure from state in App.js

### Styling

- [ ] **Need:** Basic styling added - make sure to change the default font, link colour, pay more attention to width of each section etc
- [ ] **Need:** Responsive design - it's currently super bunched up on mobile, so use media queries to change the layout etc
- [ ] **Need:** Make sure background takes up full height of screen - finishes early when on short article/error page etc

### Votes

- [ ] **Need:** In hosted version voting on articles or comments not working :( But locally it does so maybe need to update hosted version?
- [ ] **Need:** In the voting catch, if it goes wrong your setState isn't doing quite what you want it to - have another look and see why (we can go through it later)
- [ ] Feels a bit bold to not let them undo their vote - your call tho :)

### Error handling

- [ ] **Need:** You've handled bad topic slug in url, but navigating back to another topic does not work atm - the error persists
- [ ] **Need:** Make sure to add catches to _any_ api request - e.g in Nav for getting topics, CommentsList getting comments, deleting comments, posting a comment

### Accessibility/Semantic HTML tags

- [ ] **Need:** In CommentAdder, your p tag is acting like a label but your label property is empty - move the text out of a p tag and add it into the label :)
- [ ] **Need:** In Header, the user section isn't really a list so shouldn't use a `ul` just to make it in one column - use styling for that and have these are p tags or spans within p tags :)

### Articles

- [ ] In ArticlesList, you can use 'or' operator `||` in if condition in componentDidUpdate to tidy this up? Not urgent tho
- [ ] Sorting with the buttons does not feel very DRY at the moment - I'd recommend doing either or both of the following:
  - Using some form elements like select or radio buttons?
  - Extract out this sorting form into its own component
