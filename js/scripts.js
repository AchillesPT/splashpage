/*Created by Robby Brosman, March 2015*/

$(function() {
	// $('#fullpage').fullpage({
	// 	autoScrolling: false,
	// 	anchors: ["home", "why", "problem", "solution", "team"],
	// 	navigation: true,
	// 	navigationPosition: 'right',
	// 	navigationTooltips: ['Home', 'The \'Why\'', 'Problem', 'Solution', 'Team']
	// });

    // $('.team-member').hover(function() {
    //     var key = $(this).data("teamMember");
    //     console.log('member: ' + member);
    //     var member = team[key];
    //     var name = member[MEMBER_NAME];
    //     var role = member[MEMBER_ROLE];
    //     var email = member[MEMBER_EMAIL];
    //     console.log(name + ', ' + role + ' ' + email);
    //     $('.team-member-info').text(name + ', ' + role + ' ' + email);
    // });

	$('.team-member').on('click', function() {
        setTeamInfo($(this).data("teamMember"));
    }).hover(function() {
        setTeamInfo($(this).data("teamMember"));
    });

    // $('.team-member').on('click', function() {
    //     setTeamInfo($(this).data("teamMember"))
    // });

    setTeamPicHeight();
    $(window).on('resize', setTeamPicHeight);

});

function setTeamPicHeight() {
    var wh = $(window).height();
    var th = wh - 110;
    console.log(th);
    $('.team').css('height', th + 'px');
}

function setTeamInfo(key) {
    // var key = $(this).data("teamMember");
    console.log('member: ' + member);
    var member = team[key];
    var name = member[MEMBER_NAME];
    var role = member[MEMBER_ROLE];
    var email = member[MEMBER_EMAIL];
    console.log(name + ', ' + role + ' ' + email);
    $('.team-member-info').text(name + ', ' + role);
    $('.team-member-email').attr('href', 'mailto:' + email).text(email);
}

// function getObjects(obj, key, val) {
//     var objects = [];
//     for (var i in obj) {
//         if (!obj.hasOwnProperty(i)) continue;
//         if (typeof obj[i] == 'object') {
//             objects = objects.concat(getObjects(obj[i], key, val));
//         } else if (i == key && obj[key] == val) {
//             objects.push(obj);
//         }
//     }
//     return objects[0];
// }

// member : [name, role, email]
var MEMBER_NAME = 0;
var MEMBER_ROLE = 1;
var MEMBER_EMAIL = 2;
var team = {
    "robby": ["Robby Brosman", "PM", "robbybro@uw.edu"],
    "caleb": ["Caleb Thorsteinson", "Developer", "caleb.thorsteinson@gmail.com"],
    "staffan": ["Staffan Hellman", "Developer", "hellmans@uw.edu"],
    "amber": ["Amber Amin", "Designer", "amberaa3@uw.edu"],
    "xavier": ["Xavier Byrd", "UX", "xavierbyrd@live.com"]
};