export const sortByAsc = (e, array) => {
   
    let btn = e.target.className
    console.log( "filtré by asc")
    if(btn === "btn-up 1") {
    
      array.sort(function(a, b){
        return a.firstname.localeCompare(b.firstname) 
      })
    }
    else if (btn ==="btn-up 2") {
      array.sort(function(a, b){
        return a.lastname.localeCompare(b.lastname) 
      })
    }
    else if (btn ==="btn-up 3") {
      array.sort(function(a, b){
        return new Date(a.startDate) - new Date(b.startDate) 
      })
    }
    else if (btn ==="btn-up 4") {
      array.sort(function(a, b){
        return a.department.localeCompare(b.department) 
      })
    }
    else if (btn ==="btn-up 5") {
      array.sort(function(a, b){
        return new Date(a.dateOfBirth) - new Date(b.dateOfBirth) 
      })
    }
    else if (btn ==="btn-up 6") {
      array.sort(function(a, b){
        return a.street.localeCompare(b.street) 
      })
    }
    else if (btn ==="btn-up 7") {
      array.sort(function(a, b){
        return a.city.localeCompare(b.city) 
      })
    }
    else if (btn ==="btn-up 8") {
      array.sort(function(a, b){
        return a.state.localeCompare(b.state) 
      })
    }
    else if (btn ==="btn-up 9") {
      array.sort(function(a, b){
        return a.zip.localeCompare(b.zip) 
      })
    }    
   // e.target.disabled = true
  //  e.target.nextSibling.disabled = false
   // setToggle(false)
  }

 export const sortByDesc = (e, array) => {
    console.log("filtré par ordre décroissant")
    console.log(e.target.previousSibling)
   // e.target.disabled = true
   // e.target.previousSibling.disabled = false
   let btn = e.target.className
   // setToggle(true)

    if(btn === "btn-down 1") {
      array.sort(function(a, b){
        return b.firstname.localeCompare(a.firstname) 
      })
    }
    else if (btn ==="btn-down 2") {
      array.sort(function(a, b){
        return b.lastname.localeCompare(a.lastname) 
      })
    }
    else if (btn ==="btn-down 3") {
      array.sort(function(a, b){
        return new Date(b.startDate) - new Date(a.startDate) 
      })
    }
    else if (btn ==="btn-down 4") {
      array.sort(function(a, b){
        return b.department.localeCompare(a.department) 
      })
    }
    else if (btn ==="btn-down 5") {
      array.sort(function(a, b){
        return new Date(b.dateOfBirth) - new Date(a.dateOfBirth)
      })
    }
    else if (btn ==="btn-down 6") {
      array.sort(function(a, b){
        return b.street.localeCompare(a.street) 
      })
    }
    else if (btn ==="btn-down 7") {
      array.sort(function(a, b){
        return b.city.localeCompare(a.city) 
      })
    }
    else if (btn ==="btn-down 8") {
      array.sort(function(a, b){
        return b.state.localeCompare(a.state) 
      })
    }
    else if (btn ==="btn-down 9") {
      array.sort(function(a, b){
        return b.zip.localeCompare(a.zip) 
      })
    }
  }