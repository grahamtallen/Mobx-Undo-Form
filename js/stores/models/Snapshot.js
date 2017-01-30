
export function snapshot(substores) {
        var {Users, Colors, Number} = substores;
        return {
            currentColor: Colors.currentColor,
            currentUser: Users.currentUser,
            phrase: substores.phrase,
            number: Number.currentNumber
        }
}

export function resetSnapshot(snapshot, state) {
    var {Users, Colors, Number} = state;
    var index = Colors.colors.indexOf(snapshot.currentColor);
    Colors.colorIndex = index;
    console.log('colors', index);
    Number.currentNumber = snapshot.number;

}