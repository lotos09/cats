import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    rootDiv: {
        width: '100%',
        '& .MuiButton-contained a': {
                color: 'white',
            textDecoration: 'none'
        },

    },

}));