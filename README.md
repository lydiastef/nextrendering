In this Next.js project I show different methods of rendering.

The Home Page uses Static Site Generation (SSG). That means the content of the page is generated when it's built, not on each request.
When a user visits the Home Page, they get the pre-generated HTML, which loads quickly because it's already been built and stored as a static file. This method is good for content that doesn't change frequently because it provides fast load times and better performance. The home pages are often static.
Here I used the async function that generates the HTML content when building the project and the message is a static string ('Welcome to the Home Page!').

The Profile Page uses Server-Side Rendering (SSR).
Server-Side Rendering (SSR) means that the HTML is generated on the server for every request, so the content is always up-to-date for each user.
Here I also use the async function but this one generates the HTML content each time the page is requested.
user: A hardcoded string ('Margrét Jóhannsdóttir') representing user-specific data, which usually is fetched from a database or API.

The Dashboard Page uses Client-Side Rendering (CSR).
Client-Side Rendering (CSR) means the data is fetched and rendered in the browser after the initial HTML is loaded.
The DashboardPage Component: A React component that fetches data on the client side.
Here I also use the js hooks useState and useEffect.
useState: Manages the state of the data.
useEffect: Runs a fetch request to get dashboard data from an API when the component mounts.
fetchData: Fetches the data from /api/dashboard-data and updates the state.
The component returns HTML that displays a "Dashboard" heading and the fetched data (or a loading message).

The Product Page uses Incremental Static Regeneration (ISR).
This allows you to dynamically render product pages based on the product ID in the URL.
Dynamic Route: [id] in the file name makes it handle URLs like /product/1 and /product/2.
fetchProductData: A function that simulates fetching product details based on the id.
ProductPage Component: Uses the params.id to get the product data and displays it.
# nextrendering

Since Github only deploys static websites, I use Vercel for deployment on this one with various rendering methods.
