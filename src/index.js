// fetch ('https://dog.ceo/api/breeds/image/random/4')
// .then (response => response.json())
// .then (data => {
//     const imgContainer = document.querySelector('#dog-image-container')

//     const imgArray = data.message
//     imgArray.forEach(image => {
//         const img = document.createElement('img')
//         img.src = image
//         imgContainer.append(img)
//     })

// }

// )    
const imgContainer = document.querySelector('#dog-image-container')
const dogBreeds = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')


function oneImage (container){
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then (response => response.json())
    .then (data => {
        // const imgContainer = document.querySelector('#dog-image-container')
        const imgArray = data.message
        // because data is an object we can't use forEach, we first need to access the image array first,  then we can iterate over that to display all images
        imgArray.forEach((img) => {
        const image = document.createElement('img')
        image.src = img
        imgContainer.append(image)
    
    })
})
}

oneImage(imgContainer)


// displayImage()

function fetchBreed(){
    fetch ("https://dog.ceo/api/breeds/list/all")
    .then (response => response.json())
    .then (data => {
        // console.log(data)

        const breedList = data.message
        for (const key in breedList){
            if (breedList.hasOwnProperty(key)){
                // console.log(key)
                const newListItem = document.createElement('li')
                newListItem.className = 'breed'
                newListItem.append( key, breedList[key])
                dogBreeds.append(newListItem)
            
                // const breed = document.querySelector('.breed')
                newListItem.addEventListener('click', ()=> {
                    if (newListItem.style.color === ''){
                        newListItem.style.color = "green"
                    }
                    else if (newListItem.style.color === 'green'){
                        newListItem.style.color = 'blue'
                    }
                    else if (newListItem.style.color === 'blue') {
                        newListItem.style.color = 'pink'
                    }
                    else {
                        newListItem.style.color = 'green'
                    }
                })
            dropDown.addEventListener('change', (e) => {

                // const selectedValue = e.target.value.toLowercase()

                
                if (e.target.value === 'a'){
                    // console.log(newListItem.textContent[0])
                    if (newListItem.textContent[0].toLowerCase()  === "a"){
                        dogBreeds.innerHTML('')
                        dogBreeds.append(newListItem.textContent)
                    }
                }
                // else if (e.target.value === 'b'){
                //     if  (newListItem.textContent[0].toLowerCase()=== 'b'){
                //         dogBreeds.innerHTML('')
                //         dogBreeds.append(newListItem.textContent)
                //     }
                // }
                // else if (e.target.value === 'c'){
                //     if (newListItem.textContent[0].toLowerCase() === 'c'){
                //         dogBreeds.innerHTML('')
                //         dogBreeds.append(newListItem.textContent)
                //     }
                // }
                // else {
                //     dogBreeds.innerHTML('')
                //     dogBreeds.append(newListItem.textContent)
                // }
            })
            
            
            }}
        })
    }

    
    
    fetchBreed()
    


