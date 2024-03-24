export default function update(elementUpdate){
    const data = JSON.parse(localStorage.getItem("users"))

    const currentId = new URLSearchParams(location.search).get('id');
    
    const info = data.reduce((accum, element, indx) => 
        element.id == currentId ? {index: indx, post: element} : accum
    , false)   
    
    data[info.index] = elementUpdate
    
    
    localStorage.setItem("users", JSON.stringify(data))
}

