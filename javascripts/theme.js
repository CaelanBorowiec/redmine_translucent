 if (window.jQuery) {
   $(document).ready(function () {
     wallpaperPicker();
     var logo_img = $("#header > h1").css("background-image").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')
     $("#header > h1").addClass('linklogo').before(`<a href="/"><img src="${logo_img}"></a>`)

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
     $("a").each(function () {
       var a = new RegExp("/" + window.location.host + "/");
       if (!a.test(this.href)) {
         $(this).attr("target", "_blank");
       }
     });
   });
 } else {
   document.observe("dom:loaded", function () {
     document.getElementById("wrapper").style.backgroundImage = "url(/themes/redmine_translucent/images/wallpapers/fall_lake.avif)";
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
   (function () {
     const wallpapers = {
       "backgrounds": [{
           "name": "Antelope Canyon",
           "file": "antelope_canyon.avif",
           "creator": "Vlad D",
           "credit_url": "https://unsplash.com/photos/hEFQnP_i1eY",
           "theme_subclass": ""
         },
         {
           "name": "Cumulus Clouds",
           "file": "cumulus_clouds.avif",
           "creator": "Zbynek Burival",
           "credit_url": "https://unsplash.com/photos/8iZG31eXkks",
           "theme_subclass": ""
         },
         {
           "name": "",
           "file": "fall_lake.avif",
           "creator": "Aaron Burden",
           "credit_url": "https://unsplash.com/photos/aj_NElqhu6Q",
           "theme_subclass": ""
         },
         {
           "name": "Yellow Wave",
           "file": "yellow_wave.avif",
           "creator": "Texco Kwok",
           "credit_url": "https://unsplash.com/photos/Otz-5OfAiA4",
           "theme_subclass": "sand"
         },
         {
           "name": "",
           "file": "greece_clouds.avif",
           "creator": "Jason Blackeye",
           "credit_url": "https://unsplash.com/photos/ap3LXI0fPJY",
           "theme_subclass": ""
         },
         {
           "name": "Forest Heat",
           "file": "forest_heat.avif",
           "creator": "Johannes Plenio",
           "credit_url": "https://unsplash.com/photos/RwHv7LgeC7s",
           "theme_subclass": ""
         }
       ]
     };

     // Get a "random" number that changes hourly wrapped to the number of backgrounds
     let i = function (max = wallpapers.backgrounds.length) {
       let date = new Date();
       const mod = function (x, m) {
         return (x % m + m) % m;
       }
       let pos = Math.abs(date.getDate() - date.getHours());
       return mod(pos, max);
     }()

     let current = wallpapers.backgrounds[i];
     $("#wrapper").css("background-image", `url(/themes/redmine_translucent/images/wallpapers/${current.file})`);
     $('<span>').addClass('footernote').html(`<a href="https://github.com/CaelanBorowiec/redmine_translucent" target="_blank">Redmine Translucent</a> Theme by <a href="https://caelanb.me/" target="_blank">Caelan Borowiec</a>`).appendTo('#footer');
     $('<span>').addClass('footernote').html(`Photo ${current.name} by <a href="${current.credit_url}" target="_blank">${current.creator}</a>`).appendTo('#footer');
     if (current.theme_subclass)
       $("body").addClass(current.theme_subclass);
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