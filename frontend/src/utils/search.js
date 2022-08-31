export const searchArray = () => {
    document.querySelectorAll('.search').forEach(input => input.addEventListener('keyup', function(e) {
        let search = this.value.toLowerCase()
        let elements = document.querySelectorAll('.user-info')
            Array.prototype.forEach.call(elements, function(element) {
                if(element.textContent.toLowerCase().indexOf(search) > 1) {
                    element.style.display = "flex"
                }else {
                    element.style.display = "none"
                }
            })
    }))
}

export const selectedPages = (array, number) => {
    

}