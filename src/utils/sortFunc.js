export const sortFunc = (sortState, filteredBreeds) =>
    [...filteredBreeds].sort((a, b) => {
        if (sortState.orderBy === 'name' && sortState.order === false) {
            return a.name.localeCompare(b.name);
        }
        if (sortState.orderBy === 'name' && sortState.order === true) {
            return b.name.localeCompare(a.name);
        }
        if (sortState.orderBy === 'origin' && sortState.order === false) {
            return a.origin.localeCompare(b.origin);
        }
        if (sortState.orderBy === 'origin' && sortState.order === true) {
            return b.origin.localeCompare(a.origin);
        }
        if (sortState.orderBy === 'int' && sortState.order === false) {
            return a.intelligence - b.intelligence;
        }
        if (sortState.orderBy === 'int' && sortState.order === true) {
            return b.intelligence - a.intelligence;
        }
        if (sortState.orderBy === 'affect' && sortState.order === false) {
            return a.affection_level - b.affection_level;
        }
        if (sortState.orderBy === 'affect' && sortState.order === true) {
            return b.affection_level - a.affection_level;
        }
        if (sortState.orderBy === 'child' && sortState.order === false) {
            return a.child_friendly - b.child_friendly;
        }
        if (sortState.orderBy === 'child' && sortState.order === true) {
            return b.child_friendly - a.child_friendly;
        } return filteredBreeds;
    })
