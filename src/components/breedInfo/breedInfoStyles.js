import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    images: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    imgContainer: {
        minWidth: 200,
        maxHeight: 300,
    },
    img: {
        maxHeight: 300,
    },
    paper: {
        display: 'flex',
        textAlign: "center",
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: 'auto',
            height: '100%',
            backgroundColor: '#C3CBD6',
            marginBottom: '50px'
        },
    },
}));