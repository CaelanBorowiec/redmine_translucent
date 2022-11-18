 if (window.jQuery) {
   $(document).ready(function() {
     wallpaperPicker();
     if (window.devicePixelRatio > 1) {
       var images = findImagesByRegexp('contacts_thumbnail', document);

       for (var i = 0; i < images.length; i++) {
         var lowres = images[i].src;
         old_size = lowres.match(/\/(\d*)$/)[1]
         var highres = lowres.replace(/\/(\d*)$/, "/" + String(old_size * 2));
         images[i].src = highres;
       }

       var images = findImagesByRegexp(/gravatar.com\/avatar.*size=\d+x\d+/, document)

       for (var i = 0; i < images.length; i++) {
         var lowres = images[i].src;
         old_size = lowres.match(/size=(\d+)x\d+/)[1]
         var highres = lowres.replace(/size=(\d+)x(\d+)/, "size=" + String(old_size * 2));
         images[i].src = highres;
       }
     }
   });
 } else {
   document.observe("dom:loaded", function() {
     wallpaperPicker();
     if (window.devicePixelRatio > 1) {
       var images = findImagesByRegexp('thumbnail', document);

       for (var i = 0; i < images.length; i++) {
         var lowres = images[i].src;
         old_size = lowres.match(/size=(\d*)$/)[1]
         var highres = lowres.replace(/size=(\d*)$/, "size=" + String(old_size * 2));
         images[i].src = highres;
       }

       var images = findImagesByRegexp(/gravatar.com\/avatar.*size=\d+x\d+/, document)

       for (var i = 0; i < images.length; i++) {
         var lowres = images[i].src;
         old_size = lowres.match(/size=(\d+)x\d+/)[1]
         var highres = lowres.replace(/size=(\d+)x(\d+)/, "size=" + String(old_size * 2));
         images[i].src = highres;
       }
     }

   });
 }

 function wallpaperPicker() {
   (function() {
     const wallpapers = {
       "backgrounds": [{
           "name": "antelope_canyon",
           "file": "antelope_canyon.avif",
           "creator": "",
           "credit_url": "",
           "theme_subclass": ""
         },
         {
           "name": "fall_lake",
           "file": "fall_lake.avif",
           "creator": "",
           "credit_url": "",
           "theme_subclass": ""
         }
       ]
     };

     // Get a "random" number that changes hourly wrapped to the number of backgrounds
     let i = function(max = wallpapers.backgrounds.length) {
       let date = new Date();
       const mod = function(x, m) {
         return (x % m + m) % m;
       }
       let pos = Math.abs(date.getDate() - date.getHours());
       return mod(pos, max);
     }()

     let current = wallpapers.backgrounds[i];
     $("#wrapper").css("background-image", `url(/themes/redmine_translucent/images/wallpapers/${current.file})`);
     $('<span>').addClass('footernote').html(`<a href="https://github.com/CaelanBorowiec/redmine_translucent" target="_blank">Redmine Translucent</a> Theme by <a href="https://caelanb.me/" target="_blank">Caelan Borowiec</a>`).appendTo('#footer');
     $('<span>').addClass('footernote').html(`Photo "${current.name}" by <a href="${current.credit_url}" target="_blank">${current.creator}</a>`).appendTo('#footer');
   })();
 }

 function findImagesByRegexp(regexp, parentNode) {
   var images = Array.prototype.slice.call((parentNode || document).getElementsByTagName('img'));
   var length = images.length;
   var ret = [];
   for (var i = 0; i < length; ++i) {
     if (images[i].src.search(regexp) != -1) {
       ret.push(images[i]);
     }
   }
   return ret;
 };
