# udemy-horas-count
v 1.0.2

Chrome extension used to inform user the amount of hours and minutes of any Udemy course he/she is undertaking.

Still needs to implement: 
- proper trigger to event handling (page does not load every time user interacts with it, 
marking checkboxes and signaling completed lessons, therefore it is mandatory to handle 
the event of changing window.location.pathname in order to update the amout of hours watched);
-  micro the minutes/lesson (right now, the script is only precise when calculating the full length of the section, for instance,
if Section 1 has 4 lessons, and the user watched the 4 lessons, this wil compute perfectly the amout of hours, but if the user is
in the middle of said section, the script contemplates evenly each lesson.)

Installing Chrome Extensions:
- To enable every Chrome extension, you'll need to enable Developer Mode in chrome://extensions/. Just drag the folder containing
the source code and manifest.json to the chrome://extensions/ and reload the page.
