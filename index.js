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
        transformation: [
          { overlay: "video:docs:video_features_tutorial:romeo_and_juliet"},
          { flags: "layer_apply"},
          { overlay: "cloudinary_icon"},
          { width: 400, x:10, y:10 },
          { flags: "layer_apply", gravity: "north_east"},
          { crop: "fill", width: 250, aspect_ratio: "3:4", gravity: "north" },
          { duration: "5"},
          { duration: "5", flags: "splice", overlay: "video:docs:video_features_tutorial:makeup"},
          { crop: "fill", width: 250, aspect_ratio: "3:4", gravity: "north" }, 
          { overlay: "video:docs:video_features_tutorial:romeo_and_juliet"},
          {start_offset:"05"},
          { flags: "layer_apply"},
          { overlay: "cloudinary_icon"},
          { width: 40, x:10,y:10 },
          { flags: "layer_apply", gravity: "north_east"},
          { flags: "layer_apply" },
          { overlay: {resource_type: "subtitles", public_id: "docs/video_features_tutorial/captions.srt"}},
          { flag:"layer_apply" }
        ],
      });
    console.log(videoURL);

})();
