# QuickLit

QuickLit is a preemptive solution to a future problem this generation will face...
 There is, simply, a distinct lack of a dedicated medium for discussing books. 
 Such a simple idea as reading for entertainment has been forgotten in an age of technology for many young adults, 
 however soon the trend will come full circle for that exact reason - the simplicity of a good novel is its attraction.
 
 Described as the lovechild between Goodreads and Instagram, QuickLit will offer a social media platform for 
 the new generation of readers and non-readers alike. A devoted platform for sharing thoughts, reviews, or just your personality.

 QuickLit is a simple, sweet, and shareable social media dedicated to reviews, discussions, and profiles where you can show your 
 reading interests and habits.

 ##Running this package:

- To run this package, run `npm start`, this will enable hot reload so you don't have to reload after each change.
- To produce a production build, run `npm run build`
- To clean current build artifacts, run `npm run clean`
- Currently, we have no tests, but in the future we'll use `npm run test`

General guidelines (you can change them as you see fit):
1. No wildcard imports
2. git amend > git commit
3. write unit tests for every change you make and include them in the same commit
4. There's no loader configured for CSS files, this is by design, use SCSS files for styling
5. follow current structure of the package:
    src-----html   = contains the base html in which we inject the js file webpack produces
       |____styles = contains .scss files for styling
       |____js     = contains everything else
6. styling and test files should have the same path as their respective file in "src/js". For example, the file "src/js/components/home/NavBar.tsx" should have its styling in "src/styles/components/home/navBar.scss" and its tests in "test/components/home/NavBar.ts"

 
