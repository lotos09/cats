import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme)=> ({
    infoPage: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    },
    breedInfoGallery: {
        display: "flex",
        flexWrap: "wrap",
        marginBottom: '50px',
    },
    imageContainer: {
        height: '40vh',
        flexGrow: 1,
        padding: 5,

      '& > img': {
          maxHeight: '100%',
          minWidth: '100%',
          objectFit: 'cover',
          verticalAlign: 'bottom',
          borderRadius: 4,
      },
    },

    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 900,
        '& > *': {
            textAlign: 'center',
            margin: theme.spacing(1),
            height: '100%',
            backgroundColor: '#C3CBD6',
            marginBottom: '50px',
        },
    },

}))