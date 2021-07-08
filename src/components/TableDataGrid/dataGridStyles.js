import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    rootDiv: {
        width: '100%',
        '& .MuiDataGrid-footerContainer': {
            justifyContent: 'center'
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    rootGrid: {
        width: 1550,
    },
}));