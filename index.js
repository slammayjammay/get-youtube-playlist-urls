const request = require('request');
const { JSDOM } = require('jsdom');

const PLAYLIST_SELECTOR = '#playlist-autoscroll-list';

module.exports = async function(url) {
	return new Promise((resolve, reject) => {
		getHrefs(url)
			.then(urls => resolve(urls))
			.catch(err => reject(err));
	});
};

async function getHrefs(url) {
	return new Promise((resolve, reject) => {
		request.get(url, (err, response, body) => {
			if (err) {
				return reject(err);
			}

			const DOM = new JSDOM(body);
			const playlist = DOM.window.document.querySelector(PLAYLIST_SELECTOR);

			if (!playlist) {
				reject(new Error('The given URL does not contain a YouTube playlist.'));
			}

			const hrefs = [].slice.call(playlist.querySelectorAll('li a')).map(a => {
				return a.getAttribute('href');
			});

			resolve(hrefs);
		});
	});
}
