
# Blogging App Documentation

This documentation provides an overview of the features and requirements implemented in the Blogging app built using Next.js.

 ## 1. Landing Page

Description: The Landing Page displays a list of blog posts with their titles and a short preview of the content.

Implementation: The posts are fetched from a mock API service (Json-Server) and rendered on the page. Pagination is implemented to enhance the user experience.

## 2. Post Creation Page

Description: The Post Creation Page includes a form to create a new blog post with fields for the title, content, and author name.

Implementation: Form validation is implemented for each field to ensure that users provide the necessary information when creating a new blog post.

## 3. Post Detail Page

Description: Clicking on a blog post from the Landing Page redirects the user to a detailed view of the post.

Implementation: The Post Detail Page displays the full content, title, and author of the selected post, providing users with a comprehensive view of individual blog posts.

## 4. Navigation

Description: The application includes a navigation bar that allows users to switch between the Landing Page and the Post Creation Page.

Implementation: The navigation bar provides a seamless user experience by offering easy access to the main sections of the application.

## 5. API Integration

Description: The application integrates with a mock API service (JSON Server) to fetch and display posts.

Implementation: Posts are retrieved from the API service and displayed on the Landing Page. Additionally, new post data is submitted to the API when creating a blog post.

## 6. Styling and UI Components

Description: The application utilizes Tailwind CSS framework for styling, ensuring a responsive and aesthetically pleasing user interface.

Implementation: Tailwind CSS is used for styling to achieve a modern and visually appealing design throughout the application.

## 7. SEO Optimization

Description: The application is SEO-friendly, with proper use of meta tags to enhance search engine visibility.

Implementation: Meta tags, including title and description, are appropriately set using the next/head component to optimize the application for search engines.

## 8. State Management

Description: State management is implemented using the Context API to efficiently manage the application's state.

Implementation: The Context API is used to manage and share state across components, providing a centralized way to handle data and user interactions.

## 9. Error Handling

Description: The application includes proper error handling mechanisms to ensure a smooth user experience.

Implementation: User-friendly error messages are displayed in case of errors, providing meaningful feedback and guiding users on how to proceed in case of issues.


## Getting Started and set up

1. Clone the repo using git clone https://github.com/abhinash199/Blog-app.git
2. goto **my-blog-app** folder
3. Install the dependencies using npm install or yarn install
4. Run the development server using 
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
5. Install JSON Server 
    To install JSON Server in your application, open a new terminal or command prompt and navigate to **my-blog-app** folder directory and type this command:
    ```
   npm install -g json-server.
    ```
   
6. Start the JSON Server using:
  ```
 json-server --watch db.json --port 8000
 ```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

8. Open [http://localhost:8000/posts](http://localhost:8000/posts) with your browser to see the JSON Server result.

## Deploy on Vercel

## Note:
Firstly You need to start JSON Server in your local machine to see the blog posts. Follow the **steps 5th & 6th** in order to start the json server 

[https://blog-np36i3ecg-abhinash199.vercel.app/](https://blog-np36i3ecg-abhinash199.vercel.app/)


## Screenshot
 <img width="954" alt="dev start" src="https://github.com/abhinash199/Blog-app/assets/67772367/8214b5cc-da26-4fca-bc83-8d12406ca364">
 
<img width="960" alt="json server" src="https://github.com/abhinash199/Blog-app/assets/67772367/f6603e4d-0853-4247-9dac-d32d7f835e08">

<img width="960" alt="json" src="https://github.com/abhinash199/Blog-app/assets/67772367/c30b5afc-214c-4524-85b9-7dc2e3225a8d">


<img width="960" alt="Home" src="https://github.com/abhinash199/Blog-app/assets/67772367/cfa136e0-6de2-49aa-b3a7-35ebd4520f4d">

<img width="959" alt="App Post" src="https://github.com/abhinash199/Blog-app/assets/67772367/84bb7830-7b32-4a4e-bb25-be52e5d9d310">

<img width="960" alt="post detail" src="https://github.com/abhinash199/Blog-app/assets/67772367/67c5ae99-88ab-4146-b18b-d19f8987790b">

<img width="960" alt="mob-1" src="https://github.com/abhinash199/Blog-app/assets/67772367/42545b85-d420-4688-aa62-24b027833797">

<img width="960" alt="mob-2" src="https://github.com/abhinash199/Blog-app/assets/67772367/ceadf5fb-ff64-4e29-8a21-a76e4375a753">

<img width="960" alt="mob-3" src="https://github.com/abhinash199/Blog-app/assets/67772367/087e7807-bb34-4d9b-bf29-280839d02d3a">


## Referencces

[https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
