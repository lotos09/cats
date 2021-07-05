import {createMuiTheme} from "@material-ui/core";


export const theme = createMuiTheme({
    overrides: {
        '@global': {
            '.MuiButton-contained a': {
                color: 'red',
            },
        },
        MuiButton: {

        },


        MuiTableCell: {
            head: {}
        },
        MuiGridListTile: {
            root: {
                width: '500px'
            }
        },
    },
});