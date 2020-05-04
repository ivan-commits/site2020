const ratio = .5
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .5
}
const handleIntersect = function (entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            console.log('visible')
            entry.target.classList.replace('reveal','reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
var observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
});

const handleIntersect1 = function (entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            console.log('visible 1')
            entry.target.classList.replace('reveal-1','reveal-visible-1')
            observer.unobserve(entry.target)
        }
    })
}
var observer = new IntersectionObserver(handleIntersect1, options);
document.querySelectorAll('.reveal-1').forEach(function(r){
    observer.observe(r)
});

const handleIntersect2 = function (entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            console.log('visible 2')
            entry.target.classList.replace('reveal-2','reveal-visible-2')
            observer.unobserve(entry.target)
        }
    })
}
var observer = new IntersectionObserver(handleIntersect2, options);
document.querySelectorAll('.reveal-2').forEach(function(r){
    observer.observe(r)
});

const handleIntersect3 = function (entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            console.log('visible 3')
            entry.target.classList.replace('reveal-3','reveal-visible-3')
            observer.unobserve(entry.target)
        }
    })
}
var observer = new IntersectionObserver(handleIntersect3, options);
document.querySelectorAll('.reveal-3').forEach(function(r){
    observer.observe(r)
});