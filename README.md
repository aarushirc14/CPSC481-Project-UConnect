# User Guide

#### DISCLAIMER:  As this course is focused on human computer interaction and prototyping, this website is front-end only and focuses on the user interface and usability. There is no backend or database, so your views will not update dynamically based on your user inputs. Some of the functionality is hard-coded. Use the sample data provided for best/most logical results. You can also enter any other inputs, if it meets the site's validation/error checking rules. However any inputs that are not listed below, will not dynamically appear on the site.

### The website is published here: https://aarushirc14.github.io/UConnect/
If the deployed site is not working, follow the steps [here](#How-to-Run-on-Localhost) to run on localhost instead.

1.  If you want to simply login enter:

    -   Email: sofia.martinez@ucalgary.ca

    -   Password: P@ssword1

2.  If you want to sign up (demonstrates account creation functionality) enter:

    -   Email: sofia.martinez@ucalgary.ca

    -   Password: P@ssword1

    -   Image: Any image file (photo of Sofia available in src/assets/profilePics/sofiaMartinez)

    -   First Name: Sofia

    -   Last Name: Martinez

    -   Bio: I love field research, learning about climate change solutions, and volunteering in conservation efforts. In my free time, you'll find me hiking, attending eco-workshops, or experimenting with DIY eco-friendly projects.

    -   Year: 1st

    -   Major: Environmental Science

    -   Courses: BIOL 241, CHEM 201, MATH 211, PHYS 211, ENSC 201

    -   Interests: Camping, Hiking, Photography, Reading

3.  You will now arrive on the home page. 

4.  Click on Rashida's profile to view more. You can click the Follow/Unfollow or Chat buttons.

5.  Return to the home page and click on Tracy's post to view more. You can like the post, write a new comment, send emojis and reply to an existing comment.

6.  To demonstrate the search functionality, enter: MATH 211 on the search bar on the home page.

7.  Click on the Posts filter button.

8. Click on Leo's post to see more.

9. Return to the search results with the back button.

10. Click on the People button.

11. In the Majors filter enter: Environmental Science

12. Click the Apply Filter button.

13. In the Interests filter enter: Drawing, Skiing.

14. Click the Apply Filter button.

15. Click on the Chat button for Tenzin

16. You are now on a private chat page with Tenzin. You can type messages, add emojis and attachments.

17. Click on the New Message button on the chat page side navigation bar. Add multiple people to the chat.

18. Edit the name of the chat, add/remove members, leave/delete chat.

19. You can click through the rest of chats with a conversation history and search a keyword in the Search Chat bar.

20. Using the site's main side navigation bar, go to Create Post. Enter in the following sample post:

    " SUMMER INTERNSHIPS AVAILABLE
    
    I found several internships for 2025, related to environment/research/engineering:
    
    -   Trace Associates - Environmental Project Planning Intern
    
    -   Stantec - Materials Engineering Intern
    
    -   ECO Canada - Summer Research Analyst
    
    -   S&P Global - Emissions Researcher
    
    -   Planet Alpha - Environment Strategy Intern
    
    -   Cenovus Energy - Facilities Engineering Intern
    
    -   Raw Earth Foundation - Marketing Intern
    
    -   Greenify - Operations Intern
    
    -   TerraLogix Solutions - Carbon Capture Planning Summer Student
    
    Hope you guys found these helpful and good luck with your apps! "

21.  Click the Create Post button.

22.  Using the site's main side navigation bar, go to Notifications. The notifications are clickable. Click on Rashida's notification to view her profile.

23.  Using the site's main side navigation bar, go to My Profile.
    
25.  Click the Edit Profile button. In the courses field remove ENSC 201 and PHYS 211. Add Chem 203. Click the Save Changes button.

    
NOTE: Clicking on any Profiles will show you Rashida’s profile as this is a hard coded page. Clicking on any Posts will show you Tracy’s post about Photography. There is no database, so these pages do not dynamically change, as it would on a normal website. The purpose here is to focus on the user interface and usability.

## How to Run on Localhost
1. create a project directory on your machine 
2. cd into project directory and ```git clone https://github.com/aarushirc14/UConnect.git```
3. cd into UConnect root directory
4. install Node.js, if you don't already have it. This project runs on v20.18.0. https://nodejs.org/en/download/package-manager
5. check installs:
    - ```node -v```
    - ```npm -v``` if missing run ```npm install```
6. ```npm install vite --save-dev``` to install vite
7. ```npm run dev``` to run app on localhost
8. Copy localhost link and paste the link to a Web Browser to see and interact with the app
