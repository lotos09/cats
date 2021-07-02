import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

    tablePage: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    tableRow: {
        cursor: "pointer"
    },
    spinner: {
        textAlign: "center"
    },
}));