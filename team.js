const grid = document.getElementById("teamGrid");

for (let i = grid.children.length; i >= 0; i--) {

    grid.appendChild(
        grid.children[Math.random() * i | 0]
    );

}
