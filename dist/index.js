import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
//import axios from 'axios';

addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    // function readExcelFromURL(url) {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', url, true);
    //     xhr.responseType = 'arraybuffer';
    
    //     xhr.onload = function (e) {
    //         if (xhr.status === 200) {
    //             const data = new Uint8Array(xhr.response);
    //             const workbook = XLSX.read(data, { type: 'array' });
    
    //             // Assuming the first sheet contains your data
    //             const sheetName = workbook.SheetNames[0];
    //             const worksheet = workbook.Sheets[sheetName];
    
    //             // Convert the worksheet to JSON
    //             const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    //             console.log(jsonData);
    //             // Do something with the JSON data
    //         } else {
    //             console.error('Failed to fetch Excel file:', xhr.statusText);
    //         }
    //     };
    
    //     xhr.onerror = function (e) {
    //         console.error('Error fetching Excel file:', xhr.statusText);
    //     };
    
    //     xhr.send();
    // }
    
    // // Example usage:
    // //readExcelFromURL('https://sample-videos.com/xls/Sample-Spreadsheet-100-rows.xls');
    // readExcelFromURL('https://storage.cloud.google.com/test-add-on-data/team-data.xlsx');
    
    //let data = fetch("http://localhost:3000/data")
    

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
    //https://www.pexels.com/api/new/
    //Z7FTQvz5qJhr2YemA97eoIzCJicHhltaQtiCADgj0JFa2rBF8HZirLhC
    //data
    
    //ends
    //https://pixabay.com/api/videos/?key=Z7FTQvz5qJhr2YemA97eoIzCJicHhltaQtiCADgj0JFa2rBF8HZirLhC&q=yellow+flowers&pretty=true
    //flip book code
    const flipBook = async (elBook) => {

        const images = await fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json());
        console.log(images.length)
        //start
        console.log('inside flipbook==>', data[0].Name)
        let excelData = data;
        for(let i = 0; i < excelData.length ; i++ ){ 
            console.log(excelData)
        
            let pageToshow = document.createElement('div');
                pageToshow.classList.add('page');

            let front = document.createElement('div');
                front.classList.add('front');
            
            let details = document.createElement('p');
                details.classList.add('details');
                details.innerHTML = `<b>${excelData[i].Name}</b>.\\n ${excelData[0].About}`
                front.appendChild(details);
                

            let back = document.createElement('div');
                back.classList.add('back');
            
            let profileImage = document.createElement('img');
                profileImage.width = 100
                profileImage.height = 100
                profileImage.src = "./images/santosh.jpeg"
                //profileImage.src = images[i].url
                back.appendChild(profileImage)

                pageToshow.appendChild(front)
                pageToshow.appendChild(back)
            let add = document.getElementById('book');
                add.appendChild(pageToshow);
        }

        //end
        elBook.style.setProperty("--c", 0); // Set current page
        elBook.querySelectorAll(".page").forEach((page, idx) => {
            // let profileImage = document.createElement('img');
            // profileImage.width = 100
            // profileImage.height = 100
            // profileImage.src = images[0].url
            // page.appendChild(profileImage);
          page.style.setProperty("--i", idx);
          page.addEventListener("click", (evt) => {
            if (evt.target.closest("a")) return;
            const curr = evt.target.closest(".back") ? idx : idx + 1;
            elBook.style.setProperty("--c", curr);
          });
        });
      };


      let data;
        fetch('http://localhost:3000/data')
            .then(res => {
            
            //console.log(res.json());
            return res.json();
            })
            .then(result => {
                // Process the JSON data
                console.log(result); // You can access the JSON data here
                data = result;
                console.log("result",result)
                console.log("data",result)
                document.querySelectorAll(".book").forEach(flipBook);
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });


    console.log(data)
  


      
      
    //ends
});

