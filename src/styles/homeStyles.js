import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((Theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& > img': {
            height: '100vh'
        }
    },

    btn: {
        position: "absolute"
    }
}))