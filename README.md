## Question 1 :~ Add at least 3 Project features?

## Anser:~

-   Course Listing:
    The system displays a list of available courses, including course names, descriptions, instructors, prices, and credit hours.

-   Credit Hour Tracking:
    The system calculates and displays the total credit hours for enrolled courses. It prevents students from exceeding a maximum credit hour limit.
-   Toast Notifications:
    Toast notifications are displayed for important actions, such as exceeding credit hours or successful course enrollment.

## Question 2 :~ Discuss how you managed the state in your assignment project?

## Anser:~

### Home Component State:

-   It uses the useState hook to manage the allcard state, which holds the list of available courses fetched from a JSON file.
-   Another state, selectedCourses, is managed to keep track of the courses selected by the user.
-   When a user clicks the "Select" button for a course, the handleSelectCourse function is called.
-   This function checks if the selected course is already in the selectedCourses state to avoid duplicates etc.

### Cart Component State:

-   Inside the Cart component, there is local state to manage the total credit hours (totalCreditHours). It is updated based on the selected courses.
-   The useEffect hook in the Cart component is used to recalculate the totalCreditHours whenever the selectedCourses prop changes.
