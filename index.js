// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
// console.log(cloudinary.config());


//////////////////
//
// Main function
//
//////////////////
(async () => {


  let videoURL = cloudinary.url("docs/video_features_tutorial/hair", {
      resource_type: "video",
      transformation: [
        { aspect_ratio: "3:4", crop: "fill", gravity: "north", width: 250 },
        { duration: "5"},
        { duration: "5", flags: "splice", overlay: "video:docs:video_features_tutorial:makeup"},
        { aspect_ratio: "3:4", crop: "fill", gravity: "north", width: 250 }, 
        { flags: "layer_apply" },
        { overlay: "video:docs:video_features_tutorial:romeo_and_juliet" },
        { flags: "layer_apply"},
        { overlay: "cloudinary_icon"},
        { width: 40, x:10, y:10 },
        { flags: "layer_apply", gravity: "north_east"},
        { overlay: {resource_type: "subtitles", public_id: "docs/video_features_tutorial/captions.srt"}},
        { flag: "layer_apply" }
      ],
    });
  console.log(videoURL);


})();







