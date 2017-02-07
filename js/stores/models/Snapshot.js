
export function snapshotModel(state) {
        let {UserStore, ColorStore, NumberStore, UiStore, FormStore} = state;
        return {
            currentColor: ColorStore.currentColor,
            currentUser: UserStore.currentUser,
            phrase: state.phrase,
            number: NumberStore.currentNumber,
            header: FormStore.header,
            description: FormStore.description
        }
}

export function resetSnapshot(snapshot, state) {
    let index = state.ColorStore.colors.indexOf(snapshot.currentColor);
    state.ColorStore.colorIndex = index;
    state.NumberStore.currentNumber = snapshot.number;
    state.FormStore.header = snapshot.header
    state.FormStore.description = snapshot.description
    return state

}