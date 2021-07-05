import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

    tablePage: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        '& .MuiButton-contained a': {
            color: 'white',
            textDecoration: 'none'
        },
    },
    tableRow: {
        cursor: "pointer"
    },
    spinner: {
        textAlign: "center"
    },
    nameCell: {
        width: '400px'
    }
}));