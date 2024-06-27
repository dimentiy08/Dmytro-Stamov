
window.onload = function() {
 
	
	function randomImg() {
		const randomName = Math.floor( Math.random() * 9 + 1 )
		console.log(randomName)
		const bodyTag = document.getElementsByTagName("body")[0]
		const crateImgTag = document.createElement("img")
		crateImgTag.setAttribute("src", `./img/${randomName}.jpg`)
		bodyTag.append(crateImgTag)
	}
	randomImg()
}