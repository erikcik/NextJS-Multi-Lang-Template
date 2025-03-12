this is example of how language provider can be used for an app

- copy the files of i18n
- create a new file called [locale] and put every possible page inside of it.
- create new root layout outside of the app to handle 404 errors, not found requires a root layout and gives error so this is a solution
- create messages at the very root of the project for both tr and en, just copy the directiory
- create middleware.ts
- add the utils folder
- change the layout file
- change the nextjs config file
- thats it i guess see t3-example-2 for real life example, or in other words vizilio project.# NextJS-Multi-Lang-Template

- ## Problems arised from implementation
- for complex Projects that already have lots of codes in their middleware ts file, the existing implementation of and merging them became a bit hard.
- The messages folder is not properly specified. In my first try I have put the messages in the app folder instead of the root folder because in the guide it is not properly specified.
- Do not add the utils file because you can see the current local of the user by toggling local detection attribute in the routing file.
- For implementing changing password component, just make it on your own when i made it to the ai, it fucked up so bad
- 
