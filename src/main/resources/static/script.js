let mediaRecorder;
let audioSections = [];

const startRec = document.getElementById('startRec');
const stopRec = document.getElementById('stopRec');
const statusId = document.getElementById('status');

startRec.addEventListener('click', async () => {
	
	const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
	
	mediaRecorder = new MediaRecorder(stream);
	audioSections = [];
	
	mediaRecorder.addEventListener('dataavailable', (event) => {
	  audioSections.push(event.data);
	});
	
	mediaRecorder.addEventListener('stop', () => {
	    const audioBlob = new Blob(audioSections, { type: 'audio/webm' });
		// console.log('Recorded Blob:', audioBlob);
		// console.log('Size in bytes:', audioBlob.size);

		statusId.textContent = 'Idle';
		statusId.classList.remove('recording');
	});
	
	mediaRecorder.start();
	statusId.textContent = 'Recording';
	statusId.classList.add('recording');

	startRec.disabled = true;
	stopRec.disabled = false;
});

stopRec.addEventListener('click', () => {
	mediaRecorder.stop();
	startRec.disabled = false;
	stopRec.disabled = true;
	  
	statusId.textContent = 'Uploading';
	// UPLOAD AUDIO TO TranscriptController
	
});


