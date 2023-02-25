# Link: https://nextstore-topaz.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## APIS

Data Fetched from : https://dummyjson.com/docs/products
NEXT JS
TYPESCRIPT
EMOTION/STYLED COMPONENT
REACT-ICONS
REDUX TOOLKIT

## About N$xt Store

Next Store is an E-commerce web application that provides users with a list of purchasable fashion products including clothing, fragrances and skincare . Next store was built for my portfolio and ##Learning Purpose.

## Funtionality:

Navigating to specific products
Filtering products
Adding products to cart and updating cart
Calculating products total price based of amount in cart
Removing products from cart

Website link can be found here https://nextstore-topaz.vercel.app/

## Planning

The goal of N$xt Store is to have a full understanding of how NextJs works with react, I wanted any web app that I build in the future to not only be super fast but have great SEO also, hense that was the reason why I chosee nextjs because it offers server side rendering out of the box meaning the page contents are already pre rendered on the srver side and made available to thee client and google crawler as soon as possible.

I also wanted the images to load very fast but also only load when they are required to improve loading spead and better user experience.

## Design

In this phase it was important to visualise and have some understanding of how the page will look like and also the functionality.
When a user visits the page they will be brought to the index page which will have a list of some of the products . The navigation and Ui needed to be clean and easy to access other pages.

## Routes

Home

Home > Mens

Home > Womens

Home > SkinCare

Home > Fagrances

Home > ProductParams > Chekout

## Problems and Solution

Problem 1

Understanding how the get static props and static paths works was difficult at first, but reading through the nextjs documention and understanding the best practices helped mee appreciate what they do. they were veery important for Pre rendering the data that was fetched.

Problem 2

Loading the images using the Image tag instead of the img tag was very frustrating at first because the images wernt been loaded but i was able to eventually resolve this issue by using the documentation and most importantly as weel as google and how other developers fixed the issues.

Problem 3

Because I use Styled components, I came accross a big problem it had with Next js which is that the styles weree only been loaded on the client side which ended up leading to massive Cummulative Layout Shift because the styles wearn't. The first solution was writing additional boiler plate code and more complicated set ups but it wasnt efficient.

That was when I came accross Emotion.Js, Emotion.Js renders all the styling in the server just like next Js does leading to a perfectly styled and smooth application without any additional code and set up neccessary.
