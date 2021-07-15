var imageUrl = "https://image.flaticon.com/icons/png/512/2934/2934108.png" //"https://pbs.twimg.com/media/E6UHCiZUUAU3XW7?format=png&name=900x900"

var tasks = ["Drink water", "Learn JS", "Learn python"]
document.addEventListener('DOMContentLoaded',
  function () {
    // var imageElement = document.getElementById("image")
    // imageElement.src = imageUrl
    // console.log("add image")

    // var taskLabelElement = document.getElementById("task01")
    // taskLabelElement.innerHTML = tasks[0]
    // console.log("add task label")

    //  var contrainerElement = document.createElement("div")
    //  contrainerElement.style = "border: 1px solid grey; width: 350px; padding: 25px; margin-top: 5px"

    //  var labelElement = document.createElement("label")
    //  labelElement.innerHTML = tasks[1]
    //  contrainerElement.appendChild(labelElement)

    //  var bodyElement = document.getElementsByTagName("body")[0] //in case there are more than one body
    // //  console.log(bodyElement)
    //  bodyElement.appendChild(contrainerElement)

    function generateTask(taskname) {
      var contrainerElement = document.createElement("div")
      contrainerElement.style = "border: 1px solid grey; width: 350px; padding: 25px; margin-top: 5px"

      var nemImageElement = new Image()
      nemImageElement.src = imageUrl
      nemImageElement.style = "height: 50px"
      contrainerElement.appendChild(nemImageElement)

      var labelElement = document.createElement("label")
      labelElement.innerHTML = taskname
      contrainerElement.appendChild(labelElement)

      var bodyElement = document.getElementsByTagName("body")[0] //in case there are more than one body
      //  console.log(bodyElement)
      bodyElement.appendChild(contrainerElement)
    }

    // similar to list comprehension in python
    tasks.forEach( function(task){
      generateTask(task)
    })

    // generateTask(tasks[1])
    // generateTask(tasks[0])
  })



