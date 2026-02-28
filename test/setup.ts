// Suppress AbortError from HTMLAudioElement.play() interrupted by pause().
// Must run via setupFiles (before Vitest registers its own rejection handler).
window.addEventListener('unhandledrejection', (event) => {
	if (event.reason instanceof DOMException && event.reason.name === 'AbortError') {
		event.preventDefault();
	}
});
