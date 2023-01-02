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
    // Set the srcObject of the video element to the stream from the camera
    videoElement.srcObject = stream;
    videoElement.style.height = "100%";
    videoElement.style.width = "100%";
  });
