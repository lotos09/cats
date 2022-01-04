import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    gridListTile: {
        minWidth: 200,
        maxHeight: 300,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        '@media (max-width: 500px)': {
            width: '95%',
        },
    },
    gridListTileBar: {
        cursor: 'pointer',
    },

    icons: {
        display: "flex",
        justifyContent: 'space-between',
        minWidth: 100,
        marginRight: 15,
        marginLeft: -100
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}))


