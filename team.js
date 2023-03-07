// creates an icon of a given type for a given url; relies on icon image files!!
const CurriedIcon = (type) => {
  const icon = `<img
                    src='/images/icon/${type}.png'
                    height='30px'
                    style='fill: rgb(14, 123, 247); opacity: 50%'
                  />`;

  return (link) => {
    return `<a href=${link} class="team-card-icon">${icon}</a>`;
  };
};

// template for team member card
function TeamMemberCard(member, index) {
  let socialLinks = '';
  if (member.social) {
    const socialNames = Object.keys(member.social);
    socialLinks = socialNames
      .map((type) => {
        const linkURL = member.social[type];
        const linkIcon = CurriedIcon(type)(linkURL);
        return linkIcon;
      })
      .join('');
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
                <span style="color: #7b7b7b;">Aspirations:&nbsp;</span>
                ${member.aspirations}
            </p>
            <div class='team-card-links'>${socialLinks}</div>
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
