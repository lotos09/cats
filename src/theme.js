import {createMuiTheme} from "@material-ui/core";


export const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            label: {
                color: 'white'
            },
        },

        MuiTableCell: {
            head: {
            }
        },
        MuiGridListTile: {
            root: {
                width: '500px'
            }
        },
    },
});