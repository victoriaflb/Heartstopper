


var type = "serie";
var imdb = "tt10638036";
var season = "1";
var episode = "1";
warezPlugin(type, imdb, season, episode);
function warezPlugin(type, imdb, season, episode){
if (type == "filme") { season="";episode="";}else{if (season !== "") { season = "/"+season; }if (episode !== "") { episode = "/"+episode; }}
var frame = document.getElementById('embedWarezCdn');
frame.innerHTML += '<iframe src="https://embed.warezcdn.com/'+type+'/'+imdb+season+episode+'" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
}

