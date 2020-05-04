const ratio = .5
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .5
}
const handleIntersect = function (entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
     
            entry.target.classList.replace('reveal','reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
var observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
});


const handleIntersect2 = function (entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
           
            entry.target.classList.replace('reveal-2','reveal-visible-2')
            observer.unobserve(entry.target)
        }
    })
}
var observer = new IntersectionObserver(handleIntersect2, options);
document.querySelectorAll('.reveal-2').forEach(function(r){
    observer.observe(r)
});