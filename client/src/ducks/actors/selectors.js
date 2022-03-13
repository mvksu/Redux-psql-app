export const selectAllActors = (state) => {
    return state.entities.actors.allIds.map(id => state.entities.actors.byId[id]);
}