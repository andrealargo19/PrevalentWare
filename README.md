# PrevalentWare-project
Company web page sample using Next.js, Prisma, and SQLite stack with Tailwind styles.

## Description

This project was designed using the Next.js, Prisma, SQLite stack with styling using tailwind. The Prisma and SQLite combination was used to store data from 5 companies to
be later consulted by the frontend using the next and back buttons. Additionally, we created an API that updates the status of each company with the reject and approves controls. 
The only current way to read changes on the database (company status) is through Prisma studio or a similar tool directly on the database stored in the file Prisma/database.db.

On the other hand, by clicking the card section there are two different interactions depending on whether we use the app on desktop or mobile. 
In mobile, the section card click will scroll until the form section. On desktop, the app will display the form and hide the cards section according to what it 
was specified in the test requirements. 

The documents attached button will control a modal that contains the downloadable documents. Note: In the mobile version, these documents are shown at the end
of the forms section. 

Styles were implemented with a combination between tailwind and native CSS styling. Most of the responsible features of the platform were implemented with tailwind by creating three views: mobile, tablet, and desktop. Mobile will support devices from 375px as specified in the test design provided by the Figma version. 

Finally, the deployment was performed in Heroku considering that Vercel does not support SQL lite. The build stage was successful in Vercel but the app is not deploying as Vercel does not support dynamic file writing as Heroku does. Vercel deployment is possible once the database provider is 
changed to other providers (Mongo Atlas, Dynamodb, etc.)

Some assumptions were done in addition to the design materials given by the test requirements. Especially in tablet devices and the update of the database which is not visible in the UI. The aforementioned issue was implemented considering that the UI design does not include any verification of the company status 
by the user, which is something to be included in future versions.

The app can be consulted in the following URL: https://boiling-spire-28255.herokuapp.com/
