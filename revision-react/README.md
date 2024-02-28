# React mostly asked Interview question

# What is React?
- React is the open source javascript libary for building user interfaces,  it was developed and maintained by facebook.
-React is commanly used for building web applications and user interfaces but it can also used for mobile app developement.
- it allows developers to create and reusable and interactive user interface component, making it easier to build complex and dynamic frontend applications

# What are the features of react?
-  1. component based: 
      - React is built around the concept fo reusable ui components, making it easier to managed and maintain code.

    2. Virtual dom: 
       - React vitrual dom effeciently updates the actual dom imrpoving rendering performance.

    3. JSX: 
       - jsx allows developers to write html like code inside js file for defiing component structures
    4. unidirectional flow:
       - data flows in one direction , simlifying data management and updates.

    5. Reusability: 
       - react component can be reuse across the application.

    6. Declarative: 
       - React allows you to describe what your ui should look like and it takes care of updating dom accordingly

    7. Community and ecosystem: 
       - React has a large and active developer community and rich ecosystem of libraries and tools

    8. Performance optimization:
       - React provies tool for optimizing performance such as memoization and code spliiting, lazy loading

    9. Support for server side rending:
       - React can render on the html server side before it sent to client browser to render ui, improving seo and initial load time.

    10. developer tools:
       - React offers browser extensions and tools for debugging and inspecting components.

3. What is difference between react and js framework?
- React is js library for building user interface of single page application
- it is declarative, resuablo, flexible and efficient.
- react is used by componaies such as facebook, insta, netfix

4. What is JSX?
- jsx stands for js xml it is syntax extension fo rjs that allows you to write html like code in your js file
- jsx is not eequired to used react but it is highly recommended jsx makes it easier to write and understand your code as you dont have to switch between two separte languages

5. What is virtul dom?
- virtual dom is lightweight reperesntation of real dom. it is js object that describes the current state of the ui.
- when the state ui changes react updates the virtual dom thenn react compares the virtual dom to the real dom and effeciently updates the real dom only with the changes that are needed.

6. how does the virtual dom works?
- the virtual dom is js object that describes the  current state of ui.it is tree structure with each node in tree represntating an element in the ui.
- to updates the real dom react uses a process called reconciliation.reconciliation compares the virtual dom to real dom and determines the minimal set,
- reconciliation is very efficient process react users a diffing algorithm to compare the previous virtual dom to current virtual dom and indtify the smalaest possible changes needed to update the real dom

7. What are the benefits of using virtual dom?
-  imporved performance by reducing direcly manipulating of the real dom
- efficent updates throught the batched and optimized changes
- cross platform compatibility in various env
- easier abstraction as it abstract browser differences
- declarative programming for more predictable code
- fine grained control over rendering for optimized performance
- integration with third party librarues
- simplifying testing debugging
- encouragment of component reusability for modular devlopment

8. Lifecycycle method in react?
- constructor
- render
- componentdidmount() (api call)
- render
- componenentDidupdate()
- componentwillunmount() (clenar function)

9. what is useMemo?
- useMemo hook is used to memoize the value
- when the same task repeat again and again it caches the value of particular task

10. what is useRef?
- useref is used to create mutable reference in the dom element or any other value that persiists across re-renderd of component

 - use:
   1. accessing dom elements:
    you can use useref to get direct access elements and interact with the imperatively, like focusing the input field, mesaureing the dimentsions
   2. preserving the value between renders without casuing re-redneres:
    unlike usestate changing the value of useref doesnt riggers re-render that value should persisit between renderes without afftecting rendering
   3. storing the mutable values: you can use useref to store mutable values that you want to persist between renders but you dont trigger re-renders when changed

useRef should be used when you need to maintain a reference value that persisits between the renderes without causing re-renders. 


11. What is useContext?
- useContext is hook provded by react a js library for building user interfaces.
- it allows you to access a context object that has been created by react.createContext(function)
- context in react is way to pass data through the component tree without having to pass props down manually at every level.
- it is useful to sharing values like theme user authentication status or preferred language across many components without explicitly passing them through each components props

- works:
1. Create context: you first create a context object using React.createContext() this function returns providers and consumer
2. Provide context: you wrap the part of component tree  that needs access to the context with provider the provider compoenen takes a value prop which is data you want to share
3. consume the context: to access to context value within a component you use the useContext hook this hook takes the context object as an arg and return current context value

- Debounce: debounce is useful when you want to ensure that a function is only executed once after a series of rapid inputs. this is particularly helpful when dealing with user input events that may trigger multiple times in a short period 

- throtting : throttline is usefull when you want to ensure that a function is called at a limited o=rate or frequency without missing any important inputs or events



React Revision Topics:

React Hooks
1.useState - update the state
2.useEffect - use to rerender the value
3.useContext - state mangemenet create context object using react.createcontext
4.useReducer - same work as redux
5.useMemo - memoize the value
6.useCallback - memoizie the function
7.useRef - current value - create mutable reference in dom element
8. customHook

React lifecycle method:
custructor()
render() -- with dummy data
componentdidMount() - api called with api data
componentdidupdate()
componentwillunmount() -clear function

what is react
react is javascript is library which is used to create a single page application
react is created and maintained by facebook developers
its follows component based architchture
there are some advantages of react:
1.react follows component based articture
2. jsx : react support jsx where we can write html like structure inside the js file it is easy 
to write the component
3. react is having declarative syntax: react is declarative which means what should render
 on ui on basis on react update the dom
4. react is having virtual dom:
 it is nothing but the memory reperesentation of real dom whenver the any changes happend 
in react component the current vitrual dom compoare which the previous virtal dom and this 
process is known as reconcilation process. reconsicilation process is very effect
it is followes the diffing algorithm on the basis of algorithm react see the minimal 
update changes in the dom and they are batch the changes and update the real dom 
5. raect also having code splitting: where js bundle divided into smaller chuncks and 
only load when it needed it improve the initial loading time
6. lazy loading: react also follows the lazy and loading where component can only load when it 
neccessary to render it improve the performance
7. server side rendering: react follows server side rendering where html page run on the server 
and it send to the client to render the ui on browser
8. having rich ecosystm: we have large eco system of react developers
9. unidirectonal flow: in react the data flow is unidireactional
10. reausablity: react component can be reusae across the application
11. developer tool react having dev tool to easy to debug the application


hydration
performance optimization techniquie 
debugging techniquie
redux, advantage disadvantages, middleware
advantage of redux over context api
monitoring tools
analytics tool- google anaytics , firebase
testing libraries - react testing library, jest, enzyme

debounce
pagination
infinite scroll
virtual list
form with validations- formik, yup, custom form also create
throtlling
nested api call
react router
authentication flow
social login
erro 

deployment process



# Namaste react interview questions

1. Hooks
- useState
- useEffect
- useContext
- useReducer
- useMemo
- useCallback
- useRef

2. Higher order component (machine coding component)
- what 
- why 
- when 
- how

3. Life cycle method of components
- constructor
- render with dummy data
- componentdidmount (api call)
- render with api data
- component did update
- component will unmount

4. state management (all about data)
- state/props
- props drilling
- context
- redux/zustand (toolkit rtk)

5. custom hooks
- when to use it write a code for custom hooks

6. lazy loading
 - code splitting
 - chucking
 - suspense

7. virtual dom:
   - why should we use react
   - reconciliation process and react fiber
   - diffing algorithm 

8. SSR VS CSR (hot interview question)
  - server side rendering 
  - client side rendering
  - seo and performance

9. Routing (RBAC):
  - react router
  - protected route
  - dynamic routing

10. Testing
  - react testing library


11. Async tasks
   - api calls
   - events
   - promises

12. Performance
    - shimmer ui (user experience)
    - assest optimization
    - write optimizie code 
    - bundler level - code splitting
    - cdn / server level
    - redering the components

13. Styling
    - tailwind css
    - style x - facebook
    - material ui
    - bootstrap
    - ant ui
    - chakra ui
    - basic css (inline/external/internal)

# system design concept
14. accessbility
15. perfomance
16. security
17. testability




























































































