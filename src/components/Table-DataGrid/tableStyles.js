import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

    tablePage: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    infoPage: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 900,
        '& > *': {
            margin: theme.spacing(1),
            height: '100%',
            backgroundColor: '#C3CBD6',
            marginBottom: '50px',
        },
    },
    gridList: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap"
    },

    gridImg: {
        width: '20%',
        minWidth: 300,
    },
    tableRow: {
        cursor: "pointer"
    },
    spinner: {
        textAlign: "center"
    },
}));