function TwitterIcon(link) {
  return `<a href=${link} class="team-card-icon">
            <img
                src='/images/icon/twitter.png'
                height='30px'
                style='fill: rgb(14, 123, 247); opacity: 50%'
            />
          </a>`;
}
function LinkedInIcon(link) {
  return `<a href=${link} class="team-card-icon">
            <img
                src='/images/icon/linkedin.png'
                height='30px'
                style='fill: rgb(14, 123, 247); opacity: 50%'
            />
          </a>`;
}
function GithubIcon(link) {
  return `<a href=${link} class="team-card-icon">
            <img
                src='/images/icon/github.png'
                height='30px'
                style='fill: rgb(14, 123, 247); opacity: 50%'
            />
          </a>`;
}
function WebIcon(link) {
  return `<a href=${link} class="team-card-icon">
            <img
                src='/images/icon/website.png'
                height='30px'
                style='fill: rgb(14, 123, 247); opacity: 50%'
            />
          </a>`;
}
function DocIcon(link) {
  return `<a href=${link} class="team-card-icon">
            <img
                src='/images/icon/publication.png'
                height='30px'
                style='fill: rgb(14, 123, 247); opacity: 50%'
            />
          </a>`;
}

// template for team member card
function TeamMemberCard(member, index) {
  let socialLinks = '';
  if (member.social) {
    const socialNames = Object.keys(member.social);
    socialLinks = socialNames
      .map((type) => {
        let linkURL = member.social[type];
        console.log('linkURL', linkURL);
        let linkIcon;
        switch (type) {
          case 'twitter':
            linkIcon = TwitterIcon(type);
            break;
          case 'github':
            linkIcon = GithubIcon(type);
            break;
          case 'linkedin':
            linkIcon = LinkedInIcon(type);
            break;
          case 'website':
            linkIcon = WebIcon(type);
            break;
          default:
            linkIcon = DocIcon(type);
        }
        return linkIcon;
      })
      .join();
    console.log(socialLinks);
  }

  //* string-interpolate data into an html-template with styling from team.css
  return `
        <div class="team-card" key=${index}>
            <div
                class="team-card-image"
                style="background-image: url('images/team/${member.image}')"
                data-image-width="750"
                data-image-height="1125">
            </div>
            <h5 class="team-card-name u-text-variant">
                ${member.name}
                <span class="team-card-pronouns">(${member.pronouns})</span>
            </h5>
            <p class="team-card-text team-card-position u-text-variant">
                ${member.position}
            </p>
            <p class="team-card-text u-text-variant">
                ${member.education}
            </p>
            <p class="team-card-text u-text-variant">
                <b>Aspirations:&nbsp;</b>
                ${member.aspirations}
                <br />
            </p>
            <div class='team-card-links'>
                ${socialLinks}
            </div>
        </div>
        `;
}

//* get DOM node of container for team member list
let usersContainer = document.getElementById('team-container');

//* Gets data, makes cards, adds to team page; script runs in team.html file
// read data from file
fetch('/public/team.json')
  // wait for read to finish, then parse the file
  .then((response) => response.json())
  .then((data) => {
    // wait for, then use the data from the file
    console.log('here is data', data);
    // map team data to cards
    const cards = data.map((member, index) => TeamMemberCard(member, index));
    // add js-generated cards into DOM
    usersContainer.innerHTML = cards;
    return;
  });
