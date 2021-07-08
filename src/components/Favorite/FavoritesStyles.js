import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    gallery: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20
    },

    gridList: {
        display: "flex",
        justifyContent: "center",
        width: '100%',
        height: '100%',
        transform: 'translateZ(0)',
    },
}))