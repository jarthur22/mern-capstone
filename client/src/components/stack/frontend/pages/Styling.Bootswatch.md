### Bootswatch

Bootswatch is a series of custom Bootstrap themes. Using a Bootswatch theme via CDN in your `index.html` file allows you to apply a Bootswatch theme to your entire application. Implementing these themes makes it easier to quickly build a React frontend.

#### Implementing a Bootswatch Theme

Using a Bootswatch theme in a React app is relatively simple and straightforward. First you have to get the HTML link for the CDN, which will get pasted into your root file, usually located at `/public/index.html` in the frontend directory(in this case, `/client`).

To get the CDN link, go to [https://www.bootstrapcdn.com/bootswatch/](https://www.bootstrapcdn.com/bootswatch/). Pick a theme, and click on the dropdown button next to the link. Then copy the HTML link element.

![image](../images/bootswatch_tut_1.png)

After that, just paste the code in the <head> tag of the `/public/index.html` file, with the rest of the <link> tags. And that's it!