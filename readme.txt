--Readme document for Athena Bui, athenanb@uci.edu--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.


1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Readme
- 2/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 2/2 Embraces spirit of the assignment

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

(a) Basic features
My portfolio includes headings and paragraphs describing my background and work at Hyundai Motor America, Calix, and Wooshin Labottach. 
It includes external links to LinkedIn and the validation tools, along with email and telephone links. I used semantic HTML elements, 
including header, nav, main, section, article, aside, footer, and address. The navigation provides access to About Me, Projects, Skills, 
and Contact. These are four views within one HTML document rather than separate HTML pages.


(b) CSS features
I customized padding, margins, line spacing, borders, and rounded corners to organize the content and improve readability. 
I used a lilac and grape color palette for backgrounds, text, navigation, buttons, and project labels. CSS Grid creates the 
two-column introduction, while Flexbox arranges the navigation and homepage buttons. Media queries stack the introduction 
and adjust spacing for smaller screens. Relative widths and text wrapping help the content fit different window sizes.
The stylesheet includes hover effects, visible keyboard focus outlines, an underline for the active navigation link, and 
reduced-motion support. Font declarations include fallback fonts.

(c) Advanced features

The portfolio includes a skills data table with multiple rows and columns. Its caption identifies its purpose, and row and column 
headers use scope, id, and headers attributes to associate the data with the relevant headings. It also includes a navigation bar 
and an aside containing my experience summary. Nested selectors, such as .project-card .tag, style specific elements within components.
JavaScript displays the selected view, updates the active navigation link and document title, supports browser history, and moves keyboard 
focus to the main content when navigating.


3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.
AChecker reported 50 potential problems requiring manual review. I retained the relevant content and markup for the reasons below. These notices were 
not confirmed errors, and several repeated the same concern for different headings or links.

Text direction, language, and quotations:
The portfolio uses English and reads left to right. It contains no passages requiring a change in text direction or language, and no long quotations 
requiring blockquote markup.

Lists, headings, and link purpose:
The main navigation uses ul and li elements inside a labeled nav element. Headings identify sections, companies, and project topics rather than being 
used only to change text size. Links describe their destinations through their text and context, including Projects, My Skills, Contact Me, the email 
address, and LinkedIn.

Table structure:
The skills table presents data, not page layout. It includes a caption, thead, tbody, and explicit row and column header associations. Because it has 
a simple structure without grouped columns or footer rows, I did not add colgroup, col, tfoot, or a separate table summary.

Navigation and titles:
The code includes a “Skip to main content” link and a focusable main element. The navigation stays in the same order across views, and the script updates 
the document title to identify the portfolio and selected view. I did not add a separate sitemap because the persistent navigation provides direct access 
to every view, with additional links on the homepage.

JavaScript, color, and flashing:
Navigation uses standard links, and the script includes focus handling when switching views. CSS provides visible keyboard focus and identifies the active 
navigation link with an underline as well as color. The content does not direct visitors using only shape, color, or position. There is no intentionally 
flashing content, and the stylesheet respects reduced-motion preferences.

WAVE reported zero errors, zero contrast errors, and one redundant-link alert in the check I captured. The alert concerned the LinkedIn links in my Contact Me 
section and footer, which lead to the same profile. I kept both so visitors can access LinkedIn from either location. Both links identify their destination.

These explanations address the markup and design choices behind the notices.

4. How long, in hours, did it take you to complete this assignment?

Approximately 12-13 hours, including developing the portfolio, revising its design and content, learning how the code works, performing validation checks, 
and preparing for submission.

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)
https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using
Reference for understanding media queries and how layouts adjust to different screen sizes.

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Reference for understanding JavaScript event listeners used in the portfolio navigation.

https://www.w3.org/WAI/WCAG21/Techniques/html/H43
Reference for connecting table cells to their row and column headers using id and headers attributes.

https://validator.w3.org/
Used to check HTML validity.

https://jigsaw.w3.org/css-validator/
Used to check CSS validity.

https://achecks.org/achecker/
Used to identify accessibility errors and potential problems requiring manual review.

https://wave.webaim.org/
Used to check accessibility errors, color contrast, and alerts.

https://chatgpt.com/
I used ChatGPT for help restructuring and explaining my code, troubleshooting small errors, interpreting accessibility reports, and revising portfolio wording. 
Example requests included organizing the code around lecture concepts, fixing stylesheet issues, and addressing AChecker’s table-header error. ChatGPT also provided 
code revisions that I incorporated into the portfolio.


6. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
I did not consult classmates or other individuals for this assignment.


7. Is there anything special we need to know in order to run your code?
Open index.html directly in a web browser. Keep index.html, style.css, and script.js in the same folder so the relative file links work. JavaScript should be enabled 
for the section switching navigation.

