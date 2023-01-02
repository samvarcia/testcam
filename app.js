let videoElement = document.getElementById("videoElemento");
navigator.mediaDevices
  .getUserMedia({
    video: {
      facingMode: "environment",
      width: 1080,
      height: 1920,
    },
  })
  .then(function (stream) {
    // Get a reference to a video element on the page

    // Set the srcObject of the video element to the stream from the camera
    videoElement.srcObject = stream;
  });
