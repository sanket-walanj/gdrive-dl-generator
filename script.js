const gLink = document.getElementById('glink');
const btn = document.getElementById('btn');
const downloadLink = document.getElementById('download-link');

btn.addEventListener('click', generateLink);

function generateLink(e) {
  e.preventDefault();
  // console.log(gLink.value);

  const gLinkValue = gLink.value;
  const confirmLink = gLink.value.includes('https://drive.google.com/file/d/');
  // console.log(gLink.value);

  if (confirmLink === true) {
    const getDownloadLink = gLink.value
      .replace(
        'https://drive.google.com/file/d/',
        'https://drive.google.com/uc?export=download$id='
      )
      .replace('/view?usp=sharing', '');
    // console.log(getDownloadLink);

    downloadLink.value = getDownloadLink;

    function copyText(target) {
      if (target.value === '') {
        alert('Please generate the link first');
      } else {
        target.select();
        document.execCommand('copy');
        alert('Link is copied to clipboard');
      }
    }
    const copy = document.querySelector('.copy');
    copy.addEventListener('click', () => {
      return copyText(downloadLink);
    });

    // EMBED AUDIO

    const audio1 = '<audio width="300" height="32" controls="controls" src="';
    const audio2 = '" type="audio/mp3"></audio>';
    const embedAudio = document.getElementById('embed-audio');
    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
    // console.log(embedAudio.value);

    // COPY Audio Embed

    const copyAudio = document.querySelector('.copy-audio');
    copyAudio.addEventListener('click', () => {
      return copyText(embedAudio);
    });

    //EMBED Video

    const getVideoLink = gLink.value.replace('/view?usp=sharing', '');
    const video1 = '<iframe src="';
    const video2 = '/preview" width="560" height="315"></iframe>';
    const embedVideo = document.getElementById('embed-video');
    embedVideo.value = `${video1}${getVideoLink}${video2}`;
    // console.log(embedVideo.value);

    const copyVideo = document.querySelector('.copy-video');
    copyVideo.addEventListener('click', () => {
      return copyText(embedVideo);
    });
  } else {
    alert('Please enter a Google Drive file link');
  }
}
