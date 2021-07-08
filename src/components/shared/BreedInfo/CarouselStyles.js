import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {},
    dialogPaper: {
        maxWidth: '70vw',
        width: '70vw',
        maxHeight: '80vh',
        '@media (max-width: 780px)': {
            width: '100vw',
            maxWidth: '100vw',
        },
    },
    img: {
        width: '100%',
        height: 'auto',
        maxHeight: '70vh',
        objectFit: "contain",
    },
    dialogActions: {
        justifyContent: "center"
    },
    stepper: {
        width: '40vw'
    }
}))