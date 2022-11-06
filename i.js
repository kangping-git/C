let mojis
fetch("./mojis.csv")
.then(json => json.text())
.then(text => {
    mojis = text.split("\r\n")
})
