#  Fralick Lab Website


## Add a new team member

1. Open the file `public/team.json`:
  - Decide where in the ordering of teammates you want to insert the new member.
  - Copy/paste an existing member and change the data for your update.
  - Everything should be pretty easy to understand...
  - The `image` attribute links the filename of the profile image to the website.
  - The `social` attribute is itself an object (create with {}) with key:value pairs. Add links icons to a team member's section by adding pairs that have "type_of_link": "https://URL...."
  - Commit your changes with an explanatory message.
    

2. Add the profile image to 'images/team/'
  - The image should be a centered headshot. Crop the image beforehand if the head is not nearly centered.
  - Just drop the file in and make sure it's name matches what you entered into the team.json file.
  - Commit your changes with an explanatory message.


## Remove a team member 

Open the file `public/team.json`:

1. Find the appropriate lines containing the object of interest (ie. look at the name).
2. Delete the object data between the curly braces {name: ...., }
3. Commit changes

## Add a publication ...

