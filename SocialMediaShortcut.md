# One Click to open all your Social Media Feeds

### [Watch it on YouTube](https://youtube.com/shorts/8CsQZFo_TNI?si=2ZKPdWNOkQdE8Zwt)

Here's a quick setup to make a shortcut to open all your social media feeds at one place, in one click, on your Windows PC:

> Create a SocialMedia.bat file on your Desktop

Note: You can do so directly or using terminal or using an IDE such as VS Code.

> In this file, add the following code:

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --new-window "SocialMediaURL_1" --new-tab "SocialMediaURL2" --new-tab "SocialMediaURL_3"
exit
```

Note:

-   The first string is address of the Google Chrome Application.
-   Replace SocialMediaURL_1, SocialMediaURL_2, etc with actual URL
-   You can add as many URLs as you want.

> Save the file and close it.

> On the desktop (or wherever you have created your file), double click on this file.

and you shall see all your Social Feeds open at once!
