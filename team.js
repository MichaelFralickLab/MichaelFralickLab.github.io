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
                class="u-image u-image-circle team-card-image"
                style="background-image: url('images/team/${member.image}.png')"
                data-image-width="750"
                data-image-height="1125">
            </div>
            <h5 class="u-align-center u-custom-font u-text u-text-5">
                ${member.name}
                <span style="font-size: 0.875rem">(${member.pronouns})</span>
            </h5>
            <p class="u-align-center u-custom-font u-text u-text-6">
                ${member.position}
            </p>
            <p class="u-align-center u-custom-font u-text u-text-7">
                ${member.education}
            </p>
            <p class="u-align-center u-custom-font u-text u-text-8">
                <span style="font-weight: 700">Aspirations:&nbsp;</span>
                ${member.aspirations}
                <br />
            </p>
          </div>
          `;
}

let usersContainer = document.getElementById('team-container');

fetch('/public/team.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('data', data);
    const cards = data.map((member, index) => TeamMemberCard(member, index));
    console.log(cards);
    usersContainer.innerHTML = cards;
    return;
  });
