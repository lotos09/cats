import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    gallery: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    gridList: {
        display: "flex",
        justifyContent: "center",
        width: '80%',
        height: '100%',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },

    gridListTile: {
        minWidth: 200,
        maxHeight: 300,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    },
    gridListTileBar: {
        cursor: 'pointer'
    }

}))