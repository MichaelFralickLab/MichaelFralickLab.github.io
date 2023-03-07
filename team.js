// get DOM node for team member list

// template for team member card
function TeamMemberCard(member, index) {
  let social = [];
  //   if (member.social.keys().includes('twitter'))
  //     social.push(
  //       `<img
  //               class='u-image u-image-default u-preserve-proportions u-image-10'
  //               src='images/icon/twitter.png'
  //               alt=''
  //               data-image-width='128'
  //               data-image-height='128'
  //               data-href='https://twitter.com/johnlapp_'
  //               data-target='_blank'
  //             />`
  //     );

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
            <p class="team-card-text u-text-variant">
               <b> ${member.position}</b>
            </p>
            <p class="team-card-text u-text-variant">
                ${member.education}
            </p>
            <p class="team-card-text u-text-variant">
                <b>Aspirations:&nbsp;</b>
                ${member.aspirations}
                <br />
            </p>
          </div>
          `;
}

let usersContainer = document.getElementById('team-container');

// read data from file asynchronously...
fetch('/public/team.json')
  .then((response) => response.json())
  .then((data) => {
    console.log('data', data);
    const cards = data.map((member, index) => TeamMemberCard(member, index));
    console.log(cards);
    usersContainer.innerHTML = cards;
    return;
  });
