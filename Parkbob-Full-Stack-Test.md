[rfc-http-url]: https://www.ietf.org/rfc/rfc2616.txt
[jwt-url]: http://jwt.io

# Full Stack Developer Test Project

Your task is to implement a simple todo list app.
The app will be composed by a RESTful API and a web single page application (SPA).

Detailed specifications for the test project are provided below. We estimate that you will not need more than a single weekend at relaxed coding speed to implement it.

## Project description

The todo list app will be used by your users to perform the following tasks:

- Register / delete accounts
- Login / Logout
- Create and view their todos

## Technical details

Your backend should be able to serve all kinds of clients (you only have to implement a basic browser client  - both mobile apps and websites using a RESTful API. The following technical requirements are placed on your implementation:

** API **

- Use Node.js
- Use a well-known framework like Express for the API
- Use a database like MongoDB or PostgreSQL
- HTTP responses should follow best practices in the industry (especially with regard to status code definitions and request/response headers' usage - you may consult [RFC 2616][rfc-http-url] for more information)
- API should communicate with their clients using JSON data structures
- Use stateless authentication - once your users successfully log in, your backend should not need to make queries to any kind of "session store" - nor database, nor in-memory for a pre-determined amount of time (ie. 1 hour). After that, the session should expire and clients should renew their session. You can use [JSON Web Tokens][jwt-url].
- The API should be capable of performing:
    - User Registration
    - User Login/Logout
    - Todo creation
    - Todo retrieval


** Frontend App **

- Use Javascript (No coffeescript, typescript, etc for an easier evaluation on our side)
- You can use a framework like AngularJS
- The app should be capable of performing:
    - User Registration
    - User Login/Logout
    - Todo creation (you don't need to implement todo delete or update)
    - Todo visualization
- As long as you provide these features, you are free to structure the app in the way you prefer.

### User accounts

- User registration should be done with email+password

## Review process

There are a few technical restrictions so we can see how you fare with the technologies and processes we use on a daily basis, but in general, the actual implementation is quite open-ended.

The following should help you determine where to put your focus, since these are the things we will be looking for while reviewing your project.

** Code quality **

Is your code well-structured? Do you keep your coding style consistent across your codebase?

** Security **

How do you store your customers' passwords? What about security of your customers' data?

** Testability **

Is your code tested? How do you write tests? Do you even write them?

** API structure and usability **

How do you structure API endpoints? Do you follow REST principles? Do you make use of proper response codes and HTTP headers where it makes sense?

** Development and deployment **

How hard is it to run your project locally? And how hard is it to deploy it?

Remember we will need to setup and launch your app for testing it, so making the process easy and fast will surely increase your chances.

** New language features **

We love ES 2015! Do you use new language features, too?

** Documentation **

Is your API documented? Is the documentation sufficient for at least basic needs in multi-platform development team?

> That's it. Good luck and we look forward to seeing your submission!
