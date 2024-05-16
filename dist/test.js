import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    // const clickMeButton = document.getElementById("clickMe");
    // clickMeButton.addEventListener("click", () => {
    //     clickMeButton.innerHTML = "Clicked";
    // });

    

    // const fetchImage = document.getElementById("get-image");

    // fetchImage.addEventListener("click", () => {
    //     addImageFromURL("https://jsonplaceholder.typicode.com/photos")
    // });
    // let imageContainer = document.getElementById('image-container');
    // console.log("=====>",imageContainer)
    // async function addImageFromURL(url) {
    //     //try {
    //         const images = await fetch(url).then(response => response.json());
    //         console.log(images[0])
    //         for(let i = 0; i < images.length ; i++){
    //             console.log(images[i])
    //             let divImage = document.createElement('div');
    //             divImage.classList.add('imageDiv');
    //             let img = document.createElement('img');
    //             img.src = images[i].url
    //             img.width = 200; // Set your desired width
    //             img.height = 150;
    //             divImage.appendChild(img);
    //             imageContainer.appendChild(divImage);
    //         }
    //     //}
    //     //catch(error) {
    //        // console.log("Failed to add the image to the page.");
    //     //}
    //   }

    // // Enable the button only when:
    // // 1. `addOnUISdk` is ready, and
    // // 2. `click` event listener is registered.
    // clickMeButton.disabled = false;

    //flip book code
    const flipBook = (elBook) => {
        elBook.style.setProperty("--c", 0); // Set current page
        elBook.querySelectorAll(".page").forEach((page, idx) => {
          page.style.setProperty("--i", idx);
          page.addEventListener("click", (evt) => {
            if (evt.target.closest("a")) return;
            const curr = evt.target.closest(".back") ? idx : idx + 1;
            elBook.style.setProperty("--c", curr);
          });
        });
      };
      
      document.querySelectorAll(".book").forEach(flipBook);
    //ends
});


