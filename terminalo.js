var terminaloCopy = "^C"

let terminals = document.getElementsByClassName("terminalo")
let lines = document.getElementsByClassName("terminalo__line")

let clipboard = new Clipboard(".terminalo__button")

let styles = document.createElement("style")
styles.innerHTML = `
.terminalo__line {
  display: inline-block;
  background-color: black;
  color: white;
}
.terminalo__cmd {
  background-color: black;
  font-family: monospace;
}
.terminalo__button {
  padding: 0;
  background-color: black;
}
.terminalo .terminalo__line {
  display: block;
}
`

document.getElementById("insert-here").appendChild(styles)

for (var i = 0; i < lines.length; i++) {
  let line = lines[i]
  let command = line.textContent
  line.innerHTML = ""

  let button = document.createElement("button")
  button.className = "terminalo__button"
  button.setAttribute("id", `terminalo__button_${i}`)
  button.setAttribute("data-clipboard-target", `#terminalo__cmd_${i}`)
  button.innerHTML = terminaloCopy

  let cmd = document.createElement("span")
  cmd.className = "terminalo__cmd"
  cmd.setAttribute("id", `terminalo__cmd_${i}`)
  cmd.innerHTML = command

  line.appendChild(button)
  line.appendChild(cmd)
}