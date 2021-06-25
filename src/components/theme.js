const {createMuiTheme} = require("@material-ui/core");



export const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            label: {
                // Some CSS
                color: 'white'
            },
        },

        MuiTableCell: {
            head: {
                color: 'blue'
            }
        },
        MuiGridListTile: {
            root: {
                width: '500px'
            }
        }
    },
});